import styled from "styled-components";
import { Stacked, Columns, PlainText } from "unflexible-ui-core";
import { IconTagLink } from "components/button";

import { useContext, useEffect } from "react";
import { StoreContext } from "providers";
import { Post_Type, useGetPostTypesQuery } from "lib/graphql";

type Props = {};

export const Home = ({}: Props) => {
  const store = useContext(StoreContext);

  const getPostTypes = useGetPostTypesQuery(
    store.auth.client.graphQLClient
  );

  useEffect(() => {
    store.busy.setIsBusy(!getPostTypes.data && getPostTypes.isLoading);
  }, [getPostTypes.data, getPostTypes.isLoading]);

  return (
    <Component>
      <Stacked paddingPos="top" wrap>
        <PlainText>
          <h1>ホーム</h1>
        </PlainText>
      </Stacked>

      <Stacked wrap paddingSize="narrow">
        <Columns repeat={5} repeatL={4} repeatM={3} gap="narrow" wrap>
          {((getPostTypes.data?.post_type as Post_Type[]) || []).map(
            (p: Post_Type) => {
              return (
                <IconTagLink
                  key={p.id}
                  name={p.name}
                  iconTag={p.icon_tag || undefined}
                  to={`/post/${p.slug}`}
                />
              );
            }
          )}
          <IconTagLink
            name="カテゴリー"
            iconTag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7v13h-20v-10h5.262c2.169 0 3.417-.944 5.812-3h8.926zm2-2h-11.668c-2.659 2.292-3.512 3-5.07 3h-7.262v14h24v-17zm-16.738 1c.64 0 1.11-.271 2.389-1.34l-2.651-2.66h-7v4h7.262z"/></svg>'
            to="/category"
          />
          <IconTagLink
            name="タグ"
            iconTag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.049 4l9.122 9.112-6.189 6.188-8.982-9.106v-6.194h6.049zm.827-2h-8.876v9.015l10.973 11.124 9.027-9.028-11.124-11.111zm-2.315 6.561c-.586.586-1.535.586-2.121 0s-.586-1.535 0-2.121c.586-.586 1.535-.586 2.121 0 .585.585.585 1.535 0 2.121zm1.042 13.003l-1.369 1.436-10.234-10.257v-7.743h2v6.891l9.603 9.673z"/></svg>'
            to="/tag"
          />
          <IconTagLink
            name="画像"
            iconTag='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z"/></svg>'
            to="/media"
          />
          <IconTagLink
            name="投稿タイプ"
            iconTag='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg>'
            to="/post-type"
          />
        </Columns>
      </Stacked>
    </Component>
  );
};

const Component = styled.div``;
