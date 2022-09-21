import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { IconTagButton } from "components/button";
import { Link } from "domains/tag";

import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tag, useGetTagsQuery } from "lib/graphql";
import { StoreContext } from "providers";

export const TagList = () => {
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const getTags = useGetTagsQuery(store.auth.client.graphQLClient);

  useEffect(() => {
    store.busy.setIsBusy(!getTags.data && getTags.isFetching);
  }, [getTags.data, getTags.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>タグ一覧</h1>
            </PlainText>
          </Block>

          <IconTagButton
            type="button"
            onClick={() => {
              navigate("/tag/new");
            }}
            color={colors.theme}
            iconTag={`<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>`}
            width="1.1rem"
            height="1.1rem"
          />
        </Columns>
      </Stacked>

      {getTags.data?.tag && (
        <Stacked paddingPos="top" paddingSize="narrow">
          <Panel>
            <Stacked paddingPos="none">
              <SimpleList
                items={((getTags.data.tag as Tag[]) || []).map((c: Tag) => {
                  return <Link tag={c} />;
                })}
              />
            </Stacked>
          </Panel>
        </Stacked>
      )}
    </Stacked>
  );
};
