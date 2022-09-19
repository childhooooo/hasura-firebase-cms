import { format } from "date-fns";
import { colors } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton, WithAlert } from "components/button";
// import { Wysiwyg } from "components/input";
// const Wysiwyg = typeof window === "object" ? require("components/input/Wysiwyg") : () => false;
import dynamic from "next/dynamic";
const Wysiwyg = dynamic(() => import("../../../components/input/Wysiwyg"), {
  ssr: false,
});
import { PostInput, ImageInput, FieldsInput } from "./";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post,
  Revision,
  Field,
  Value,
  Category,
  Tag,
  Media,
  UpdatePostMutationVariables,
  useUpdatePostMutation,
  useGetCategoriesQuery,
  useGetTagsQuery,
  useTrashPostMutation,
  useDeletePostMutation,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  post: Post;
  revisionNumber: number;
  onUpdate?: () => void;
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

type UpdatePostVariables = {
  post_id: number;
  title: string;
  category_id: number;
  tags: number[];
  values: CreateValueVariables[] | CreateValueVariables[][];
  created_at: string;
  outdated_revision_ids: number[];
};

function getFieldValues(revision: Revision, fieldId: number): Value[] {
  return revision.values.filter((v) => v.field_id === fieldId);
}

export const Editor = ({ post, revisionNumber, onUpdate }: Props) => {
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const tagIds = post.tags.map((t) => t.tag.id) || [];
  const form = useForm<UpdatePostVariables>({
    defaultValues: {
      post_id: post.id,
      category_id: post.category_id,
      title: post.title,
      tags: tagIds,
      created_at: format(new Date(post.created_at), "yyyy-MM-dd'T'HH:mm"),
      outdated_revision_ids: [],
    },
  });

  const updatePost = useUpdatePostMutation(store.auth.client.graphQLClient);
  const trashPost = useTrashPostMutation(store.auth.client.graphQLClient);
  const removePost = useDeletePostMutation(store.auth.client.graphQLClient);

  const getCategories = useGetCategoriesQuery(store.auth.client.graphQLClient, {
    post_type_id: post.post_type.id,
  });
  const getTags = useGetTagsQuery(store.auth.client.graphQLClient);

  const fields = (post.post_type.fields as Field[]) || [];

  const submit: SubmitHandler<UpdatePostVariables> = async (input) => {
    store.busy.setIsBusy(true);
    const tags = (input.tags || []).map((id: number) => {
      return {
        post_id: post.id,
        tag_id: id,
      };
    });
    const variables: any = input;
    variables.tags = tags;

    variables.created_at = new Date(input.created_at).toISOString();

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

    variables.outdated_revision_ids = post.revisions
      .slice(2)
      .map((r: Revision) => r.id);

    updatePost.mutate(variables as UpdatePostMutationVariables, {
      onSuccess: (_data) => {
        if (onUpdate) {
          onUpdate();
        }

        store.busy.setIsBusy(false);
      },
      onError: (e) => {
        console.log(e);
        alert("上手く更新できませんでした");
        store.busy.setIsBusy(false);
      },
    });
  };

  const trash = () => {
    store.popup.setContent(
      <WithAlert
        message="本当に削除しますか？"
        onSubmit={() => {
          store.popup.setContent(null);
          store.busy.setIsBusy(true);
          trashPost.mutate(
            { id: post.id, deleted_at: new Date() },
            {
              onSuccess: () => {
                store.busy.setIsBusy(false);
                navigate(-1);
              },
              onError: () => {
                store.busy.setIsBusy(false);
              },
            }
          );
        }}
        onDismiss={() => store.popup.setContent(null)}
      />
    );
  };

  const restore = () => {
    trashPost.mutate(
      { id: post.id, deleted_at: null },
      {
        onSuccess: () => {
          if (onUpdate) {
            onUpdate();
          }

          store.busy.setIsBusy(false);
        },
        onError: () => {
          store.busy.setIsBusy(false);
        },
      }
    );
  };

  const remove = () => {
    store.popup.setContent(
      <WithAlert
        message="本当に削除しますか？"
        onSubmit={() => {
          store.popup.setContent(null);
          store.busy.setIsBusy(true);
          removePost.mutate(
            { id: post.id },
            {
              onSuccess: () => {
                store.busy.setIsBusy(false);
                navigate(-1);
              },
              onError: () => {
                store.busy.setIsBusy(false);
              },
            }
          );
        }}
        onDismiss={() => store.popup.setContent(null)}
      />
    );
  };

  useEffect(() => {
    store.busy.setIsBusy(
      updatePost.isLoading ||
        (!getCategories.data && getCategories.isLoading) ||
        (!getTags.data && getTags.isLoading)
    );
  }, [
    updatePost.isLoading,
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
            disabled={post.deleted_at !== null}
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
        id="post_id"
        value={post.id}
        {...form.register("post_id")}
      />

      {fields
        .map((f: Field, i: number) => {
          const revision = post.revisions.at(revisionNumber);

          if (!revision) {
            return null;
          }

          const values = getFieldValues(revision, f.id);

          return (
            <div className="line" key={f.id}>
              <div className="label">
                <label htmlFor={f.id}>{f.name}</label>
              </div>

              {f.multiple && (
                <FieldsInput
                  index={i}
                  defaultValues={values}
                  form={form}
                  name="values"
                  field={f}
                  disabled={post.deleted_at !== null}
                />
              )}

              {!f.multiple && (
                <>
                  <div className="input">
                    {f.field_type.slug === "text" && (
                      <>
                        <input
                          type="text"
                          id={f.id}
                          defaultValue={values.at(0)?.text?.body || ""}
                          {...form.register(
                            `values.${i}.text.data.body` as const,
                            {
                              required: f.required,
                              maxLength: 1000,
                            }
                          )}
                          disabled={post.deleted_at !== null}
                        />
                      </>
                    )}

                    {f.field_type.slug === "textarea" && (
                      <textarea
                        id={f.id}
                        rows={3}
                        defaultValue={values.at(0)?.text?.body || ""}
                        {...form.register(
                          `values.${i}.text.data.body` as const,
                          {
                            required: f.required,
                            maxLength: 10000,
                          }
                        )}
                        disabled={post.deleted_at !== null}
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
                          defaultContent={values.at(0)?.text?.body || ""}
                          disabled={post.deleted_at !== null}
                        />
                        <input
                          type="hidden"
                          id={f.id}
                          defaultValue={values.at(0)?.text?.body || ""}
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
                        defaultValue={values.at(0)?.text?.body || ""}
                        {...form.register(
                          `values.${i}.text.data.body` as const,
                          {
                            required: f.required,
                            pattern: /^[a-z\-_].[a-z\-_0-9]*$/,
                          }
                        )}
                        disabled={post.deleted_at !== null}
                      />
                    )}

                    {f.field_type.slug === "integer" && (
                      <input
                        type="number"
                        step={1}
                        id={f.id}
                        defaultValue={values.at(0)?.integer?.body || -1}
                        {...form.register(
                          `values.${i}.integer.data.body` as const,
                          {
                            required: f.required,
                          }
                        )}
                        disabled={post.deleted_at !== null}
                      />
                    )}

                    {f.field_type.slug === "numeric" && (
                      <input
                        type="number"
                        id={f.id}
                        defaultValue={values.at(0)?.numeric?.body || -1}
                        {...form.register(
                          `values.${i}.numeric.data.body` as const,
                          {
                            required: f.required,
                          }
                        )}
                        disabled={post.deleted_at !== null}
                      />
                    )}

                    {f.field_type.slug === "boolean" && (
                      <>
                        <input
                          type="checkbox"
                          id={f.id}
                          defaultChecked={
                            values.at(0)?.boolean?.body ? true : false
                          }
                          onChange={(e) => {
                            form.setValue(
                              `values.${i}.boolean.data.body` as const,
                              e.target.checked
                            );
                          }}
                          disabled={post.deleted_at !== null}
                        />

                        <input
                          type="hidden"
                          defaultValue={
                            values.at(0)?.boolean?.body ? "true" : "false"
                          }
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
                        defaultValue={
                          values.at(0)?.timestamp?.body || new Date()
                        }
                        {...form.register(
                          `values.${i}.timestamp.data.body` as const,
                          {
                            required: f.required,
                          }
                        )}
                        disabled={post.deleted_at !== null}
                      />
                    )}

                    {f.field_type.slug === "datetime" && (
                      <input
                        type="datetime-local"
                        defaultValue={
                          values.at(0)?.timestamp?.body || new Date()
                        }
                        id={f.id}
                        {...form.register(
                          `values.${i}.timestamp.data.body` as const,
                          {
                            required: f.required,
                          }
                        )}
                        disabled={post.deleted_at !== null}
                      />
                    )}

                    {f.field_type.slug === "post" && f.field_post_type?.slug && (
                      <>
                        <PostInput
                          slug={f.field_post_type.slug}
                          defaultId={values.at(0)?.post?.body.id || null}
                          onChange={(post: Post | null) => {
                            form.setValue(
                              `values.${i}.post.data.post_id` as const,
                              post ? post.id : null
                            );
                          }}
                          disabled={post.deleted_at !== null}
                        />
                        <input
                          type="hidden"
                          defaultValue={values.at(0)?.post?.body.id || null}
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
                          defaultId={values.at(0)?.media?.body.id || null}
                          onChange={(image: Media | null) =>
                            form.setValue(
                              `values.${i}.media.data.media_id` as const,
                              image ? image.id : null
                            )
                          }
                          disabled={post.deleted_at !== null}
                        />
                        <input
                          type="hidden"
                          defaultValue={values.at(0)?.media?.body.id || null}
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
        })
        .filter((v) => v !== null)}

      <div className="line">
        <div className="label">
          <label htmlFor="category_id">カテゴリー</label>
        </div>

        <div className="input">
          <select
            id="category_id"
            defaultValue={post.category_id}
            {...form.register("category_id", {
              required: true,
              validate: (v) => v >= 0,
            })}
            disabled={post.deleted_at !== null}
          >
            <option value={-1} disabled>
              選択してください
            </option>
            {((getCategories.data?.category as Category[]) || []).map(
              (c: Category) => {
                return (
                  <option
                    key={c.id}
                    value={c.id}
                    selected={c.id === post.category_id}
                  >
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
                  defaultChecked={tagIds.includes(t.id)}
                  {...form.register("tags")}
                  disabled={post.deleted_at !== null}
                />
                <label htmlFor={`tag-${t.id}`}>{t.name}</label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="created_at">投稿日時</label>
        </div>

        <div className="input">
          <input
            type="datetime-local"
            id="created_at"
            {...form.register("created_at", { required: true })}
          />
        </div>
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="updated_at">更新日時</label>
        </div>

        <div className="input">
          <input
            type="text"
            id="updated_at"
            value={format(
              new Date(
                post.revisions.at(revisionNumber)?.created_at || post.created_at
              ),
              "yyyy-MM-dd HH:mm:ss"
            )}
            disabled
          />
        </div>
      </div>

      {post.deleted_at === null && (
        <div className="line">
          <Columns justify="flex-end" gap="normal">
            <SimpleButton color={colors.darkGray} type="button" onClick={trash}>
              削除
            </SimpleButton>

            <SimpleButton color={colors.theme} type="submit">
              保存
            </SimpleButton>
          </Columns>
        </div>
      )}

      {post.deleted_at !== null && (
        <div className="line">
          <Columns justify="flex-end" gap="normal">
            <SimpleButton
              color={colors.darkGray}
              type="button"
              onClick={remove}
            >
              完全に削除
            </SimpleButton>

            <SimpleButton color={colors.theme} type="button" onClick={restore}>
              復元
            </SimpleButton>
          </Columns>
        </div>
      )}
      {/*</form>*/}
    </Form>
  );
};
