import styled from "styled-components";
import { rgba } from "polished";
import { colors, sizes } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { WithAlert, SimpleButton } from "components/button";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post_Type,
  Field_Type,
  Field,
  UpdateFieldMutationVariables,
  useUpdateFieldMutation,
  useDeleteFieldMutation,
  useGetPostTypesQuery,
  useGetFieldTypesQuery,
} from "lib/graphql/generated";
import { StoreContext } from "providers";

type Props = {
  field: Field;
  onSuccess?: () => void;
};

export const FieldLineEditor = ({ field, onSuccess }: Props) => {
  const navigate = useNavigate();
  const form = useForm<UpdateFieldMutationVariables>({
    defaultValues: {
      id: field.id,
      slug: field.slug,
      name: field.name,
      field_type_id: field.field_type_id,
      field_post_type_id: field.field_post_type_id,
      order: field.order,
      multiple: field.multiple,
      required: field.required,
    },
  });
  const store = useContext(StoreContext);

  const [isOpen, setIsOpen] = useState(false);

  const updateField = useUpdateFieldMutation(store.auth.client.graphQLClient);
  const deleteField = useDeleteFieldMutation(store.auth.client.graphQLClient);

  const getPostTypes = useGetPostTypesQuery(store.auth.client.graphQLClient);
  const getFieldTypes = useGetFieldTypesQuery(store.auth.client.graphQLClient);
  const openFieldPostTypeIdSelectIds = (
    (getFieldTypes.data?.field_type as Field_Type[]) || []
  )
    .filter((t: Field_Type) => t.is_post)
    .map((t: Field_Type) => t.id);
  const watchFieldType = form.watch("field_type_id");

  const update: SubmitHandler<UpdateFieldMutationVariables> = (input) => {
    updateField.mutate(input, {
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
    });
  };

  const remove = () => {
    store.popup.setContent(
      <WithAlert
        message="本当に削除しますか？"
        onSubmit={() => {
          store.popup.setContent(null);
          store.busy.setIsBusy(true);
          deleteField.mutate(
            { id: field.id },
            {
              onSuccess: () => {
                store.busy.setIsBusy(false);
                if (onSuccess) {
                  onSuccess();
                }
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
    if (updateField.isLoading) {
      store.busy.setIsBusy(true);
      return;
    }

    if (updateField.data) {
      const f = updateField.data.update_field_by_pk as Field;

      form.reset({
        id: f.id,
        slug: f.slug,
        name: f.name,
        field_type_id: f.field_type_id,
        field_post_type_id: f.field_post_type_id,
        order: f.order,
        required: f.required,
        multiple: f.multiple,
      });
    }

    store.busy.setIsBusy(false);
  }, [updateField.isLoading]);

  return (
    <Component>
      <Button type="button" onClick={() => setIsOpen((v) => !v)}>
        <div className="header">
          <p className="order">{field.order}</p>
          <p className="name">{field.name}</p>
        </div>

        <ul>
          <li className="slug">{field.slug}</li>
          <li className="field-type">{field.field_type.name}</li>
          {field.multiple && <li className="multiple">複数</li>}
          {field.required && <li className="required">必須</li>}
        </ul>
      </Button>

      <Editor isOpen={isOpen}>
        <Form onSubmit={form.handleSubmit(update)}>
          <div className="line">
            <div className="label">
              <label htmlFor="id">ID</label>
            </div>

            <div className="input">
              <input type="text" id="id" name="id" value={field.id} disabled />
            </div>
          </div>

          <div className="line">
            <div className="label">
              <label htmlFor="name">フィールド名</label>
            </div>

            <div className="input">
              <input
                type="text"
                id="name"
                {...form.register("name", { required: true, maxLength: 30 })}
              />
            </div>

            {form.formState.errors["name"] && (
              <div className="error">
                <p>名前を正しく入力してください</p>
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
                {...form.register("slug", { required: true, maxLength: 30 })}
              />
            </div>

            {form.formState.errors["slug"] && (
              <div className="error">
                <p>スラッグを正しく入力してください</p>
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
                  {...form.register("field_type_id", { required: true })}
                >
                  {(getFieldTypes.data.field_type as Field_Type[]).map(
                    (t: Field_Type) => {
                      return (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      );
                    }
                  )}
                  ;
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
              <input
                type="checkbox"
                id="multiple"
                {...form.register("multiple")}
              />
            </div>
          </div>

          <div className="line">
            <div className="label">
              <label htmlFor="required">必須</label>
            </div>

            <div className="input">
              <input
                type="checkbox"
                id="required"
                {...form.register("required")}
              />
            </div>
          </div>

          <div className="line">
            <div className="label">
              <label htmlFor="order">表示順序</label>
            </div>

            <div className="input">
              <input
                type="number"
                id="order"
                min={0}
                max={100}
                {...form.register("order", {
                  min: 0,
                  max: 100,
                })}
              />
            </div>

            {form.formState.errors["order"] && (
              <div className="error">
                <p>表示順序を正しく入力してください</p>
              </div>
            )}
          </div>

          <div className="line">
            <Columns justify="flex-end" gap="normal">
              <SimpleButton
                color={colors.darkGray}
                type="button"
                onClick={remove}
              >
                削除
              </SimpleButton>
              <SimpleButton color={colors.theme} type="submit">
                更新
              </SimpleButton>
            </Columns>
          </div>
        </Form>
      </Editor>
    </Component>
  );
};

const Component = styled.div`
  display: block;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${sizes.gapM};

  &:hover {
    background-color: ${rgba(colors.theme, 0.05)};
  }

  .header {
    display: flex;
    align-items: center;

    .order {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.75rem;
      height: 1.75rem;
      color: ${colors.black};
      font-size: 0.9rem;
      border: 1px solid ${colors.black};
      border-radius: 50%;
    }

    .name {
      margin-left: 0.5rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li:not(:first-child) {
    margin-left: 0.5rem;
  }

  li {
    padding: 0.25rem 0.5rem;
    color: ${colors.darkGray};
    border: 1px solid ${colors.darkGray};
    border-radius: 3px;
    font-size: 0.9rem;

    &.field-type {
      color: ${colors.green};
      border: 1px solid ${colors.green};
    }

    &.multiple {
      color: ${colors.blue};
      border: 1px solid ${colors.blue};
    }

    &.required {
      color: ${colors.red};
      border: 1px solid ${colors.red};
    }
  }
`;

type EditorProps = {
  isOpen: boolean;
};

const Editor = styled.div<EditorProps>`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  padding-bottom: ${sizes.gapM};
`;
