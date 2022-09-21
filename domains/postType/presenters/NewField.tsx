import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { SimpleButton } from "components/button";
import { colors } from "variables";

import { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post_Type,
  Field_Type,
  CreateFieldMutationVariables,
  useCreateFieldMutation,
  useGetPostTypesQuery,
  useGetFieldTypesQuery,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  postTypeId: number;
  onSuccess?: () => void;
};

export const NewField = ({ postTypeId, onSuccess }: Props) => {
  const form = useForm<CreateFieldMutationVariables>();

  const store = useContext(StoreContext);

  const createFieldMutation = useCreateFieldMutation(
    store.auth.client.graphQLClient
  );

  const getPostTypes = useGetPostTypesQuery(store.auth.client.graphQLClient);
  const getFieldTypes = useGetFieldTypesQuery(store.auth.client.graphQLClient);
  const openFieldPostTypeIdSelectIds = (
    (getFieldTypes.data?.field_type as Field_Type[]) || []
  )
    .filter((t: Field_Type) => t.is_post)
    .map((t: Field_Type) => t.id);
  const watchFieldType = form.watch("field_type_id");

  const submit: SubmitHandler<CreateFieldMutationVariables> = async (input) => {
    createFieldMutation.mutate(input, {
      onSuccess: () => {
        form.reset();

        if (onSuccess) {
          onSuccess();
        }
      },
    });
  };

  useEffect(() => {
    store.busy.setIsBusy(
      createFieldMutation.isLoading ||
        (!getPostTypes.data && getPostTypes.isLoading)
    );
  }, [
    createFieldMutation.isLoading,
    getPostTypes.isLoading,
    getPostTypes.data,
  ]);

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <div className="line">
        <div className="label">
          <label htmlFor="name">フィールド名</label>
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
          <label htmlFor="field_type_id">入力形式</label>
        </div>

        <div className="input">
          {getFieldTypes.data?.field_type && (
            <select
              id="field_type_id"
              {...form.register("field_type_id", {
                required: true,
                valueAsNumber: true,
              })}
            >
              {((getFieldTypes.data.field_type as Field_Type[]) || []).map(
                (f: Field_Type) => {
                  return (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  );
                }
              )}
            </select>
          )}
        </div>
      </div>

      {openFieldPostTypeIdSelectIds.includes(watchFieldType) && (
        <div className="line">
          <div className="label">
            <label htmlFor="field_post_type_id">使用する投稿タイプ</label>
          </div>

          <div className="input">
            {getPostTypes.data?.post_type && (
              <select
                id="field_post_type_id"
                {...form.register("field_post_type_id", {
                  required: true,
                  valueAsNumber: true,
                })}
              >
                {((getPostTypes.data.post_type as Post_Type[]) || []).map(
                  (t: Post_Type) => {
                    return (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    );
                  }
                )}
              </select>
            )}
          </div>
        </div>
      )}

      <div className="line">
        <div className="label">
          <label htmlFor="multiple">複数の値を許可</label>
        </div>

        <div className="input">
          <input type="checkbox" id="multiple" {...form.register("multiple")} />
        </div>
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="required">必須</label>
        </div>

        <div className="input">
          <input type="checkbox" id="required" {...form.register("required")} />
        </div>
      </div>

      <div className="line">
        <div className="label">
          <label htmlFor="order">優先度</label>
        </div>

        <div className="input">
          <input
            type="number"
            step={1}
            min={0}
            max={100}
            defaultValue={10}
            id="order"
            {...form.register("order", {
              valueAsNumber: true,
              min: 0,
              max: 100,
            })}
          />
        </div>

        {form.formState.errors.order && (
          <div className="error">
            <p>正しく入力してください</p>
          </div>
        )}
      </div>

      <input
        type="hidden"
        id="post_type_id"
        {...form.register("post_type_id", { value: postTypeId })}
      />

      <div className="line">
        <Columns justify="flex-end" gap="normal">
          <SimpleButton color={colors.theme} type="submit">
            追加
          </SimpleButton>
        </Columns>
      </div>
    </Form>
  );
};
