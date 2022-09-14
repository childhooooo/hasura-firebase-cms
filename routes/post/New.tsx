import { colors } from 'variables';
import { Stacked, Columns, Block, PlainText } from "unflexible-ui-core";
import { Panel } from "components/container";
import { IconTagButton } from "components/button";
import { New } from "domains/post";

import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Post_Type, useGetPostTypeBySlugQuery } from "lib/graphql";
import { StoreContext } from "providers";

export const PostNew = () => {
  const params = useParams();
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const getPostType = useGetPostTypeBySlugQuery(
    store.auth.client.graphQLClient,
    {
      slug: params.postType || "",
    }
  );

  useEffect(() => {
    store.busy.setIsBusy(!getPostType.data && getPostType.isFetching);
  }, [getPostType.data, getPostType.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>{getPostType.data?.post_type[0].name || "投稿"}新規追加</h1>
            </PlainText>
          </Block>

          <IconTagButton
            type="button"
            onClick={() => {
              navigate(`/post/${params.postType || ""}`);
            }}
            iconTag={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"/></svg>`}
            color={colors.theme}
            width="1.3rem"
            height="1.3rem"
          />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Panel>
          {getPostType.data?.post_type[0] && (
            <New postType={getPostType.data.post_type[0] as Post_Type} />
          )}
        </Panel>
      </Stacked>
    </Stacked>
  );
};
