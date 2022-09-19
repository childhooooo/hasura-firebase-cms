import styled from "styled-components";
import { colors } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { WithAlert, SimpleButton } from "components/button";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Post_Type,
  UpdatePostTypeMutationVariables,
  useUpdatePostTypeMutation,
  useDeletePostTypeMutation,
} from "lib/graphql/generated";
import { StoreContext } from "providers";

type Props = {
  postType: Post_Type;
  onUpdate?: () => void;
};

export const Editor = ({ postType, onUpdate }: Props) => {
  const navigate = useNavigate();
  const form = useForm<UpdatePostTypeMutationVariables>({
    defaultValues: {
      id: postType.id,
      slug: postType.slug,
      name: postType.name,
      icon_tag: postType.icon_tag,
      order: postType.order,
      public: postType.public,
    },
  });
  const store = useContext(StoreContext);

  const updatePostType = useUpdatePostTypeMutation(
    store.auth.client.graphQLClient
  );
  const deletePostType = useDeletePostTypeMutation(
    store.auth.client.graphQLClient
  );

  const update: SubmitHandler<UpdatePostTypeMutationVariables> = (input) => {
    store.busy.setIsBusy(true);

    updatePostType.mutate(input, {
      onSuccess: () => {
        if (onUpdate) {
          onUpdate();
        }

        store.busy.setIsBusy(false);
      },
      onError: (e) => {
        console.error(e);
        alert("上手く更新できませんでした");
        store.busy.setIsBusy(false);
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
          deletePostType.mutate(
            { id: postType.id },
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
    if (updatePostType.isLoading) {
      store.busy.setIsBusy(true);
      return;
    }

    if (updatePostType.data) {
      const p = updatePostType.data.update_post_type_by_pk as Post_Type;

      form.reset({
        id: p.id,
        slug: p.slug,
        name: p.name,
        icon_tag: p.icon_tag,
        order: p.order,
      });
    }

    store.busy.setIsBusy(false);
  }, [updatePostType.isLoading]);

  return (
    <Component>
      <Form onSubmit={form.handleSubmit(update)}>
        <div className="line">
          <div className="label">
            <label htmlFor="id">ID</label>
          </div>

          <div className="input">
            <input type="text" id="id" name="id" value={postType.id} disabled />
          </div>
        </div>

        <div className="line">
          <div className="label">
            <label htmlFor="name">投稿タイプ名</label>
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
            <label htmlFor="icon_tag">アイコン（svgタグ）</label>
          </div>

          <div className="input">
            <input type="text" id="icon_tag" {...form.register("icon_tag")} />
          </div>

          {form.formState.errors["icon_tag"] && (
            <div className="error">
              <p>アイコンを正しく入力してください</p>
            </div>
          )}
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
          <div className="label">
            <label htmlFor="public">一般公開する</label>
          </div>

          <div className="input">
            <input
              type="checkbox"
              id="public"
              defaultChecked={form.getValues("public") ? true : false}
              onChange={(e) => {
                form.setValue("public", e.target.checked);
              }}
            />
            <input type="hidden" {...form.register("public")} />
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
