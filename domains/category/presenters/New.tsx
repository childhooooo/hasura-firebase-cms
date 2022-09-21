import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton } from "components/button";
import { colors } from "variables";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post_Type,
  CreateCategoryMutationVariables,
  useCreateCategoryMutation,
  useGetPostTypesQuery,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  postType?: Post_Type | null;
};

export const New = ({ postType }: Props) => {
  const navigate = useNavigate();
  const form = useForm<CreateCategoryMutationVariables>({
    defaultValues: {
      post_type_id: postType?.id || undefined,
    },
  });

  const store = useContext(StoreContext);

  const getPostTypes = useGetPostTypesQuery(store.auth.client.graphQLClient);

  const createCategory = useCreateCategoryMutation(
    store.auth.client.graphQLClient
  );

  const submit: SubmitHandler<CreateCategoryMutationVariables> = async (
    input
  ) => {
    createCategory.mutate(input, {
      onSuccess: (data) => {
        store.busy.setIsBusy(false);
        if (data.insert_category_one) {
          navigate(`/category/${data.insert_category_one.id}`);
        }
      },
      onError: (_e) => {
        alert("保存できませんでした");
      },
    });
  };

  useEffect(() => {
    store.busy.setIsBusy(createCategory.isLoading);
  }, [createCategory.isLoading]);

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <div className="line">
        <div className="label">
          <label htmlFor="name">カテゴリー名</label>
        </div>

        <div className="input">
          <input
            type="text"
            id="name"
            {...form.register("name", {
              required: true,
              maxLength: 30,
              minLength: 1,
            })}
          />
        </div>

        {form.formState.errors.name && (
          <div className="error">
            <p>正しく入力してください</p>
          </div>
        )}
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="slug">スラッグ</label>
        </div>

        <div className="input">
          <input
            type="text"
            id="slug"
            {...form.register("slug", {
              required: true,
              maxLength: 30,
              minLength: 1,
            })}
          />
        </div>

        {form.formState.errors.slug && (
          <div className="error">
            <p>正しく入力してください</p>
          </div>
        )}
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="post_type_id">投稿タイプ</label>
        </div>

        <div className="input">
          {getPostTypes.data?.post_type && (
            <select
              id="post_type_id"
              {...form.register("post_type_id", { required: true })}
            >
              {((getPostTypes.data.post_type as Post_Type[]) || []).map(
                (p: Post_Type) => {
                  return <option key={p.id} value={p.id}>{p.name}</option>;
                }
              )}
            </select>
          )}
        </div>

        {form.formState.errors.post_type_id && (
          <div className="error">
            <p>正しく入力してください</p>
          </div>
        )}
      </div>

      <div className="line">
        <Columns justify="flex-end" gap="normal">
          <SimpleButton color={colors.theme} type="submit">
            保存
          </SimpleButton>
        </Columns>
      </div>
    </Form>
  );
};
