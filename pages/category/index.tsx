import styled from "styled-components";
import { colors, sizes } from "variables";
import type { NextPage } from "next";
import { Layout } from "components/scaffold";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { SimpleList } from "components/list";
import { IconTagButton } from "components/button";
import { Link } from "domains/category";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  Category,
  Post_Type,
  useGetCategoriesBySlugQuery,
  useGetPostTypesQuery,
} from "lib/graphql";
import { StoreContext } from "providers";

const CategoryArchivePage: NextPage = () => {
  const router = useRouter();
  const store = useContext(StoreContext);

  const [postTypeSlug, setPostTypeSlug] = useState<string | null>(null);

  const getCategories = useGetCategoriesBySlugQuery(
    store.auth.client.graphQLClient,
    {
      post_type_slug: [postTypeSlug || ""],
    },
    {
      enabled: postTypeSlug !== null && store.auth.client.firebaseId !== null,
    }
  );

  const getPostTypes = useGetPostTypesQuery(
    store.auth.client.graphQLClient,
    {},
    {
      enabled: store.auth.client.firebaseId !== null,
    }
  );

  useEffect(() => {
    if (getPostTypes.data?.post_type[0].slug) {
      setPostTypeSlug(getPostTypes.data.post_type[0].slug);
    }
  }, [getPostTypes.data]);

  useEffect(() => {
    store.busy.setIsBusy(
      postTypeSlug !== null && !getCategories.data && getCategories.isFetching
    );
  }, [getCategories.data, getCategories.isFetching]);

  return (
    <Layout>
      <Stacked wrap>
        <Stacked paddingPos="none">
          <Columns align="center" gap="narrow">
            <Block>
              <PlainText>
                <h1>カテゴリ一覧</h1>
              </PlainText>
            </Block>

            <IconTagButton
              type="button"
              onClick={() => {
                router.push(
                  postTypeSlug
                    ? `/category/new?postType=${postTypeSlug}`
                    : "/category/new"
                );
              }}
              color={colors.theme}
              iconTag={`<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>`}
              width="1.1rem"
              height="1.1rem"
            />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Panel>
            <Columns gap="narrow" align="center" wrapXL="nowrap">
              <Block>
                <PlainText>
                  <p>投稿タイプ：</p>
                </PlainText>
              </Block>

              <Block width="100%" shrink grow>
                {postTypeSlug && getPostTypes.data?.post_type && (
                  <Selector
                    value={postTypeSlug}
                    onChange={(e) =>
                      setPostTypeSlug(
                        e.target.value || getPostTypes.data.post_type[0].slug
                      )
                    }
                  >
                    {((getPostTypes.data.post_type as Post_Type[]) || []).map(
                      (p: Post_Type) => {
                        return <option value={p.slug}>{p.name}</option>;
                      }
                    )}
                  </Selector>
                )}
              </Block>
            </Columns>
          </Panel>
        </Stacked>

        {getCategories.data?.category && (
          <Stacked paddingPos="top" paddingSize="narrow">
            <Panel>
              <Stacked paddingPos="none">
                <SimpleList
                  items={(
                    (getCategories.data.category as Category[]) || []
                  ).map((c: Category) => {
                    return <Link category={c} />;
                  })}
                />
              </Stacked>
            </Panel>
          </Stacked>
        )}
      </Stacked>
    </Layout>
  );
};

export default CategoryArchivePage;

const Selector = styled.select`
  width: 100%;
  padding: ${sizes.gapS};
  font-size: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  line-height: 1.5;

  &:disabled {
    opacity: 0.8;
  }
`;
