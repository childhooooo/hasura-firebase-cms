import { colors } from "variables";
import { Stacked, Columns, Block, PlainText } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleButton, IconTagButton } from "components/button";
import { Editor } from "domains/post";

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Post,
  Revision,
  useGetPostQuery,
} from "lib/graphql/generated";
import { StoreContext } from "providers";

export const PostItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  const [revision, setRevision] = useState(-1);

  const getPost = useGetPostQuery(store.auth.client.graphQLClient, {
    id: parseInt(params.id || "0", 10),
  });

  useEffect(() => {
    store.busy.setIsBusy(!getPost.data && getPost.isFetching);
  }, [getPost.data, getPost.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns justify="space-between" align="center" gap="narrow">
          <Block>
            <Columns align="center" gap="narrow">
              <Block>
                <PlainText>
                  <h1>
                    {getPost.data?.post_by_pk?.post_type.name || "投稿"}編集
                  </h1>
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
          </Block>

          {getPost.data?.post_by_pk && (
            <Block>
              <Columns gap="narrow">
                {(getPost.data.post_by_pk.revisions as Revision[]).map(
                  (_r: Revision, index: number) => {
                    return (
                      <SimpleButton
                        key={index}
                        type="button"
                        onClick={() => setRevision(index)}
                        color={
                          index === revision ? colors.black : colors.darkGray
                        }
                        reverse
                      >
                        {index === 0 ? "最新" : `${index}つ前`}を復元
                      </SimpleButton>
                    );
                  }
                )}
              </Columns>
            </Block>
          )}
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Panel>
          {getPost.data?.post_by_pk && (
            <Editor
              post={getPost.data.post_by_pk as Post}
              revisionNumber={revision < 0 ? 0 : revision}
              key={revision}
              onUpdate={() => {
                getPost
                  .refetch()
                  .then(() => {
                    setRevision(-1);
                  })
                  .catch(() => {
                    setRevision(-1);
                  });
              }}
            />
          )}
        </Panel>
      </Stacked>
    </Stacked>
  );
};
