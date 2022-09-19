import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { IconTagButton } from "components/button";
import { Editor, NewField, FieldLineEditor } from "domains/postType";

import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Post_Type, Field, useGetPostTypeQuery } from "lib/graphql/generated";
import { StoreContext } from "providers";

export const PostTypeItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const getPostType = useGetPostTypeQuery(store.auth.client.graphQLClient, {
    id: parseInt(params.id || "0"),
  });

  useEffect(() => {
    store.busy.setIsBusy(!getPostType.data && getPostType.isFetching);
  }, [getPostType.data, getPostType.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>投稿タイプ編集</h1>
            </PlainText>
          </Block>

          <IconTagButton
            type="button"
            onClick={() => {
              navigate("/post-type");
            }}
            iconTag={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"/></svg>`}
            color={colors.theme}
            width="1.3rem"
            height="1.3rem"
          />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        {getPostType.data?.post_type_by_pk && (
          <Panel>
            <Editor
              postType={getPostType.data.post_type_by_pk as Post_Type}
              onUpdate={getPostType.refetch}
            />
          </Panel>
        )}
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <PlainText>
          <h2>フィールド</h2>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Panel>
          <SimpleList
            items={(
              (getPostType.data?.post_type_by_pk?.fields as Field[]) || []
            ).map((f: Field) => {
              return (
                <FieldLineEditor
                  key={f.id}
                  field={f}
                  onSuccess={() => {
                    getPostType.refetch({
                      cancelRefetch: true,
                    });
                  }}
                />
              );
            })}
          />
        </Panel>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <PlainText>
          <h2>フィールドを追加</h2>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        {getPostType.data?.post_type_by_pk && (
          <Panel>
            <NewField
              postTypeId={getPostType.data.post_type_by_pk.id}
              onSuccess={() => {
                getPostType.refetch({
                  cancelRefetch: true,
                });
              }}
            />
          </Panel>
        )}
      </Stacked>
    </Stacked>
  );
};
