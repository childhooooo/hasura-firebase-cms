import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { SimplePagination } from "components/pagination";
import { IconTagButton } from "components/button";
import { Link } from "domains/post";

import { useEffect, useContext, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Post, useGetPostsQuery } from "lib/graphql";
import { StoreContext } from "providers";

export const PostList = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const page = parseInt(
    new URLSearchParams(location.search).get("page") || "1"
  );
  const store = useContext(StoreContext);

  const limit = 30;
  const getPosts = useGetPostsQuery(store.auth.client.graphQLClient, {
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
              <h1>{getPosts.data?.post_type[0]?.name || "投稿"}一覧</h1>
            </PlainText>
          </Block>

          <IconTagButton
            type="button"
            onClick={() => {
              navigate(`/post/${params.postType || ""}/trash`);
            }}
            iconTag={`<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/></svg>`}
            color={colors.theme}
            width="1.4rem"
            height="1.4rem"
          />

          <IconTagButton
            type="button"
            onClick={() => {
              navigate(`/post/${params.postType || ""}/new`);
            }}
            color={colors.theme}
            iconTag={`<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>`}
            width="1.1rem"
            height="1.1rem"
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
