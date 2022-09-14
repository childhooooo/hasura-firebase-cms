import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { SimplePagination } from "components/pagination";
import { IconTagButton } from "components/button";
import { Link } from "domains/post";

import { useEffect, useContext, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Post, useGetTrashedPostsQuery } from "lib/graphql";
import { StoreContext } from "providers";

export const TrashedPostList = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const page = parseInt(
    new URLSearchParams(location.search).get("page") || "1"
  );
  const store = useContext(StoreContext);

  const limit = 30;
  const getPosts = useGetTrashedPostsQuery(store.auth.client.graphQLClient, {
    post_type_slug: params.postType || "",
    limit,
    offset: limit * (page - 1),
  });

  const ref = useRef(null);
  const setPageAndScrollTop = (page: number) => {
    if (ref?.current) {
      // @ts-ignore
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }

    navigate(`/post-type?page=${page}`);
  };

  useEffect(() => {
    store.busy.setIsBusy(!getPosts.data && getPosts.isFetching);
  }, [getPosts.data, getPosts.isFetching]);

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>{getPosts.data?.post_type[0]?.name || "投稿"}一覧（ゴミ箱）</h1>
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

      <span ref={ref} />

      {getPosts.data?.post && (
        <Stacked paddingPos="top" paddingSize="narrow">
          <Panel>
            <Stacked paddingPos="none">
              <SimpleList
                items={((getPosts.data.post as Post[]) || []).map((p: Post) => {
                  return <Link post={p} />;
                })}
              />
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <SimplePagination
                page={page}
                totalPages={Math.ceil(
                  (getPosts.data?.post_aggregate.aggregate?.count || 0) / limit
                )}
                setPage={setPageAndScrollTop}
              />
            </Stacked>
          </Panel>
        </Stacked>
      )}
    </Stacked>
  );
};
