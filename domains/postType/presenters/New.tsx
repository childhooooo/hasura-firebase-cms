import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton } from "components/button";
import { colors } from "variables";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CreatePostTypeMutationVariables,
  useCreatePostTypeMutation,
} from "lib/graphql/generated";
import { StoreContext } from "providers";

export const New = () => {
  const navigate = useNavigate();
  const form = useForm<CreatePostTypeMutationVariables>();

  const store = useContext(StoreContext);

  const createPostTypeMutation = useCreatePostTypeMutation(
    store.auth.client.graphQLClient
  );

  const submit: SubmitHandler<CreatePostTypeMutationVariables> = async (
    input
  ) => {
    createPostTypeMutation.mutate(input, {
      onSuccess: (data) => {
        store.busy.setIsBusy(false);
        if (data.insert_post_type_one) {
          navigate(`/post-type/${data.insert_post_type_one.id}`);
        }
      },
      onError: (e) => {
        alert('保存できませんでした');
      }
    });
  };

  useEffect(() => {
    store.busy.setIsBusy(createPostTypeMutation.isLoading);
  }, [createPostTypeMutation.isLoading]);

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <div className="line">
        <div className="label">
          <label htmlFor="name">投稿タイプ名</label>
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
          <label htmlFor="icon_tag">アイコン（svgタグ）</label>
        </div>

        <div className="input">
          <input type="text" id="icon_tag" {...form.register("icon_tag")} />
        </div>

        {form.formState.errors.icon_tag && (
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
