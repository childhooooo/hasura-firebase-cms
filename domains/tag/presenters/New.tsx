import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton } from "components/button";
import { colors } from "variables";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CreateTagMutationVariables,
  useCreateTagMutation,
} from "lib/graphql/generated";
import { StoreContext } from "providers";

export const New = () => {
  const navigate = useNavigate();
  const form = useForm<CreateTagMutationVariables>();

  const store = useContext(StoreContext);

  const createTag = useCreateTagMutation(store.auth.client.graphQLClient);

  const submit: SubmitHandler<CreateTagMutationVariables> = async (input) => {
    createTag.mutate(input, {
      onSuccess: (data) => {
        store.busy.setIsBusy(false);
        if (data.insert_tag_one) {
          navigate(`/tag/${data.insert_tag_one.id}`);
        }
      },
      onError: (_e) => {
        alert("保存できませんでした");
      },
    });
  };

  useEffect(() => {
    store.busy.setIsBusy(createTag.isLoading);
  }, [createTag.isLoading]);

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <div className="line">
        <div className="label">
          <label htmlFor="name">タグ名</label>
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
        <Columns justify="flex-end" gap="normal">
          <SimpleButton color={colors.theme} type="submit">
            保存
          </SimpleButton>
        </Columns>
      </div>
    </Form>
  );
};
