import styled from "styled-components";
import { colors } from "variables";
import { Columns } from "unflexible-ui-core";
import { Form } from "components/container";
import { WithAlert, SimpleButton } from "components/button";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Tag,
  UpdateTagMutationVariables,
  useUpdateTagMutation,
  useDeleteTagMutation,
} from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  tag: Tag;
  onUpdate?: () => void;
};

export const Editor = ({ tag, onUpdate }: Props) => {
  const navigate = useNavigate();
  const form = useForm<UpdateTagMutationVariables>({
    defaultValues: {
      id: tag.id,
      slug: tag.slug,
      name: tag.name,
    },
  });
  const store = useContext(StoreContext);

  const updateTag = useUpdateTagMutation(
    store.auth.client.graphQLClient
  );
  const deleteTag = useDeleteTagMutation(
    store.auth.client.graphQLClient
  );

  const update: SubmitHandler<UpdateTagMutationVariables> = (input) => {
    updateTag.mutate(input, {
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
          deleteTag.mutate(
            { id: tag.id },
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
    if (updateTag.isLoading) {
      store.busy.setIsBusy(true);
      return;
    }

    if (updateTag.data) {
      const p = updateTag.data.update_tag_by_pk as Tag;

      form.reset({
        id: p.id,
        slug: p.slug,
        name: p.name,
      });
    }

    store.busy.setIsBusy(false);
  }, [updateTag.isLoading]);

  return (
    <Component>
      <Form onSubmit={form.handleSubmit(update)}>
        <div className="line">
          <div className="label">
            <label htmlFor="id">ID</label>
          </div>

          <div className="input">
            <input type="text" id="id" value={tag.id} disabled />
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
