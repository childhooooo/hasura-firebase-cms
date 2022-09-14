import styled from "styled-components";
import { colors } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { WithAlert, SimpleButton } from "components/button";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Category,
  UpdateCategoryMutationVariables,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  category: Category;
  onUpdate?: () => void;
};

export const Editor = ({ category, onUpdate }: Props) => {
  const navigate = useNavigate();
  const form = useForm<UpdateCategoryMutationVariables>({
    defaultValues: {
      id: category.id,
      slug: category.slug,
      name: category.name,
    },
  });
  const store = useContext(StoreContext);

  const updateCategory = useUpdateCategoryMutation(
    store.auth.client.graphQLClient
  );
  const deleteCategory = useDeleteCategoryMutation(
    store.auth.client.graphQLClient
  );

  const update: SubmitHandler<UpdateCategoryMutationVariables> = (input) => {
    updateCategory.mutate(input, {
      onSuccess: () => {
        if (onUpdate) {
          onUpdate();
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
          deleteCategory.mutate(
            { id: category.id },
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
    if (updateCategory.isLoading) {
      store.busy.setIsBusy(true);
      return;
    }

    if (updateCategory.data) {
      const p = updateCategory.data.update_category_by_pk as Category;

      form.reset({
        id: p.id,
        slug: p.slug,
        name: p.name,
      });
    }

    store.busy.setIsBusy(false);
  }, [updateCategory.isLoading]);

  return (
    <Component>
      <Form onSubmit={form.handleSubmit(update)}>
        <div className="line">
          <div className="label">
            <label htmlFor="id">ID</label>
          </div>

          <div className="input">
            <input type="text" id="id" value={category.id} disabled />
          </div>
        </div>

        <div className="line">
          <div className="label">
            <label htmlFor="name">カテゴリー名</label>
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
            <label htmlFor="post-type">投稿タイプ</label>
          </div>

          <div className="input">
            <input
              type="text"
              id="post-type"
              value={category.post_type.name}
              disabled
            />
          </div>
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
    </Component>
  );
};

const Component = styled.div``;
