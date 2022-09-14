import { colors } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton } from "components/button";
// import { Wysiwyg } from "components/input";
// const Wysiwyg = typeof window === "object" ? require("components/input/Wysiwyg") : () => false;
import dynamic from "next/dynamic";
const Wysiwyg = dynamic(() => import("../../../components/input/Wysiwyg"), {
  ssr: false
});
import { PostInput, ImageInput, FieldsInput } from "./";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post,
  Post_Type,
  Field,
  Category,
  Tag,
  Media,
  CreatePostMutationVariables,
  useCreatePostMutation,
  useGetCategoriesQuery,
  useGetTagsQuery,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  postType: Post_Type;
};

type CreateValueVariables = {
  field_id: number;
  text: {
    data: {
      body: string;
    };
  };
  numeric: {
    data: {
      body: number;
    };
  };
  integer: {
    data: {
      body: number;
    };
  };
  timestamp: {
    data: {
      body: string;
    };
  };
  boolean: {
    data: {
      body: boolean;
    };
  };
  post: {
    data: {
      post_id: number;
    };
  };
  media: {
    data: {
      media_id: number;
    };
  };
};

type CreatePostVariables = {
  title: string;
  post_type_id: number;
  category_id: number;
  tags: number[];
  values: CreateValueVariables[] | CreateValueVariables[][];
};

export const New = ({ postType }: Props) => {
  const navigate = useNavigate();
  const form = useForm<CreatePostVariables>();

  const store = useContext(StoreContext);

  const createPostMutation = useCreatePostMutation(
    store.auth.client.graphQLClient
  );

  const getCategories = useGetCategoriesQuery(store.auth.client.graphQLClient, {
    post_type_id: postType.id,
  });
  const getTags = useGetTagsQuery(store.auth.client.graphQLClient);

  const fields = (postType.fields as Field[]) || [];

  const submit: SubmitHandler<CreatePostVariables> = async (input) => {
    const tags = (input.tags || []).map((id: number) => {
      return {
        tag_id: id,
      };
    });
    const variables: any = input;
    variables.tags = tags;

    const values = input.values
      .flat()
      .filter((v: CreateValueVariables) => {
        if (!v) {
          return false;
        }

        if (v.boolean) {
          return v.boolean.data.body ? true : false;
        }

        if (v.post) {
          const value = v.post.data.post_id;
          // @ts-ignore
          return value !== "" && value !== null && value !== undefined;
        }

        return true;
      })
      .map((v: CreateValueVariables) => {
        if (v.timestamp) {
          const variables = v;
          variables.timestamp.data.body = new Date(
            v.timestamp.data.body
          ).toISOString();
          return variables;
        }

        return v;
      });
    variables.values = values;

    createPostMutation.mutate(variables as CreatePostMutationVariables, {
      onSuccess: (data) => {
        store.busy.setIsBusy(false);
        if (data.insert_post_one) {
          navigate(`/post/${postType.slug}/${data.insert_post_one.id}`);
        }
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  useEffect(() => {
    store.busy.setIsBusy(
      createPostMutation.isLoading ||
        (!getCategories.data && getCategories.isLoading) ||
        (!getTags.data && getTags.isLoading)
    );
  }, [
    createPostMutation.isLoading,
    getCategories.data,
    getCategories.isLoading,
    getTags.data,
    getTags.isLoading,
  ]);

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <div className="line">
        <div className="label">
          <label htmlFor="title">タイトル</label>
        </div>

        <div className="input">
          <input
            type="text"
            id="title"
            {...form.register("title", { required: true, maxLength: 100 })}
          />
        </div>

        {form.formState.errors.title && (
          <div className="error">
            <p>正しく入力してください</p>
          </div>
        )}
      </div>

      <input
        type="hidden"
        id="post_type_id"
        value={postType.id}
        {...form.register("post_type_id")}
      />

      {fields.map((f: Field, i: number) => {
        return (
          <div className="line">
            <div className="label">
              <label htmlFor={f.id}>{f.name}</label>
            </div>

            {f.multiple && (
              <FieldsInput index={i} form={form} name="values" field={f} />
            )}

            {!f.multiple && (
              <>
                <div className="input">
                  {f.field_type.slug === "text" && (
                    <input
                      type="text"
                      id={f.id}
                      {...form.register(`values.${i}.text.data.body` as const, {
                        required: f.required,
                        maxLength: 1000,
                      })}
                    />
                  )}

                  {f.field_type.slug === "textarea" && (
                    <textarea
                      id={f.id}
                      rows={3}
                      {...form.register(`values.${i}.text.data.body` as const, {
                        required: f.required,
                        maxLength: 10000,
                      })}
                    />
                  )}

                  {f.field_type.slug === "richtext" && (
                    <>
                      <Wysiwyg
                        editorId={f.id}
                        onChange={(content: string) => {
                          form.setValue(
                            `values.${i}.text.data.body` as const,
                            content
                          );
                        }}
                        defaultContent=""
                      />
                      <input
                        type="hidden"
                        id={f.id}
                        {...form.register(
                          `values.${i}.text.data.body` as const,
                          {
                            required: f.required,
                            minLength: 1,
                            maxLength: 10000,
                          }
                        )}
                      />
                    </>
                  )}

                  {f.field_type.slug === "slug" && (
                    <input
                      type="text"
                      id={f.id}
                      {...form.register(`values.${i}.text.data.body` as const, {
                        required: f.required,
                        pattern: /^[a-z\-_].[a-z\-_0-9]*$/,
                      })}
                    />
                  )}

                  {f.field_type.slug === "numeric" && (
                    <input
                      type="number"
                      id={f.id}
                      {...form.register(
                        `values.${i}.numeric.data.body` as const,
                        {
                          required: f.required,
                        }
                      )}
                    />
                  )}

                  {f.field_type.slug === "integer" && (
                    <input
                      type="number"
                      step={1}
                      id={f.id}
                      {...form.register(
                        `values.${i}.integer.data.body` as const,
                        {
                          required: f.required,
                        }
                      )}
                    />
                  )}

                  {f.field_type.slug === "boolean" && (
                    <>
                      <input
                        type="checkbox"
                        id={f.id}
                        onChange={(e) => {
                          form.setValue(
                            `values.${i}.boolean.data.body` as const,
                            e.target.checked
                          );
                        }}
                      />

                      <input
                        type="hidden"
                        {...form.register(
                          `values.${i}.boolean.data.body` as const
                        )}
                      />
                    </>
                  )}

                  {f.field_type.slug === "date" && (
                    <input
                      type="date"
                      id={f.id}
                      {...form.register(
                        `values.${i}.timestamp.data.body` as const,
                        {
                          required: f.required,
                        }
                      )}
                    />
                  )}

                  {f.field_type.slug === "datetime" && (
                    <input
                      type="datetime-local"
                      id={f.id}
                      {...form.register(
                        `values.${i}.timestamp.data.body` as const,
                        {
                          required: f.required,
                        }
                      )}
                    />
                  )}

                  {f.field_type.slug === "post" && f.field_post_type?.slug && (
                    <>
                      <PostInput
                        slug={f.field_post_type.slug}
                        onChange={(post: Post | null) => {
                          form.setValue(
                            `values.${i}.post.data.post_id` as const,
                            post ? post.id : null
                          );
                        }}
                      />
                      <input
                        type="hidden"
                        {...form.register(
                          `values.${i}.post.data.post_id` as const,
                          {
                            required: f.required,
                          }
                        )}
                      />
                    </>
                  )}

                  {f.field_type.slug === "image" && (
                    <>
                      <ImageInput
                        onChange={(image: Media | null) =>
                          form.setValue(
                            `values.${i}.media.data.media_id` as const,
                            image ? image.id : null
                          )
                        }
                      />
                      <input
                        type="hidden"
                        {...form.register(
                          `values.${i}.media.data.media_id` as const,
                          {
                            required: f.required,
                          }
                        )}
                      />
                    </>
                  )}
                </div>

                {form.formState.errors.values &&
                  form.formState.errors.values[i] && (
                    <div className="error">
                      <p>正しく入力してください</p>
                    </div>
                  )}

                <input
                  type="hidden"
                  {...form.register(`values.${i}.field_id` as const)}
                  value={f.id}
                />
              </>
            )}
          </div>
        );
      })}

      <div className="line">
        <div className="label">
          <label htmlFor="category_id">カテゴリー</label>
        </div>

        <div className="input">
          <select
            id="category_id"
            defaultValue={-1}
            {...form.register("category_id", {
              required: true,
              validate: (v) => v >= 0,
            })}
          >
            <option value={-1} disabled>
              選択してください
            </option>
            {((getCategories.data?.category as Category[]) || []).map(
              (c: Category) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              }
            )}
          </select>
        </div>

        {form.formState.errors.category_id && (
          <div className="error">
            <p>選択してください</p>
          </div>
        )}
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="tags">タグ</label>
        </div>

        <ul className="input">
          {((getTags.data?.tag as Tag[]) || []).map((t: Tag) => {
            return (
              <li className="checkbox" key={t.id}>
                <input
                  type="checkbox"
                  id={`tag-${t.id}`}
                  value={t.id}
                  {...form.register("tags")}
                />
                <label htmlFor={`tag-${t.id}`}>{t.name}</label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="line">
        <Columns justify="flex-end" gap="normal">
          <SimpleButton color={colors.theme} type="submit">
            保存
          </SimpleButton>
        </Columns>
      </div>
      {/*</form>*/}
    </Form>
  );
};
