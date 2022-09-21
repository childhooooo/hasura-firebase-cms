import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { IconButton } from "components/button";
import { Link } from "domains/postType";

import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Post_Type, useGetPostTypesQuery } from "lib/graphql";
import { StoreContext } from "providers";

export const PostTypeList = () => {
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const getPostTypes = useGetPostTypesQuery(store.auth.client.graphQLClient);

  useEffect(() => {
    store.busy.setIsBusy(!getPostTypes.data && getPostTypes.isFetching);
  }, [getPostTypes.data, getPostTypes.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>投稿タイプ一覧</h1>
            </PlainText>
          </Block>

          <IconButton
            type="button"
            onClick={() => {
              navigate("/post-type/new");
            }}
            color={colors.theme}
            icon="＋"
          />
        </Columns>
      </Stacked>

      {getPostTypes.data?.post_type && (
        <Stacked paddingPos="top" paddingSize="narrow">
          <Panel>
            <Stacked paddingPos="none">
              <SimpleList
                items={((getPostTypes.data.post_type as Post_Type[]) || []).map(
                  (p: Post_Type) => {
                    return <Link postType={p} />;
                  }
                )}
              />
            </Stacked>
          </Panel>
        </Stacked>
      )}
    </Stacked>
  );
};
