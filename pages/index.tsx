import type { NextPage } from "next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "components/scaffold";
import {
  Home,
  PostTypeList,
  PostTypeItem,
  PostTypeNew,
  PostList,
  PostItem,
  PostNew,
  TrashedPostList,
  CategoryList,
  CategoryItem,
  CategoryNew,
  TagList,
  TagItem,
  TagNew,
  MediaList,
} from "routes";

import { useContext, useState, useEffect } from "react";
import { StoreContext } from "providers";
import { Post_Type, useGetPostTypesQuery } from "lib/graphql";

const HomePage: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const store = useContext(StoreContext);

  const getPostTypes = useGetPostTypesQuery(
    store.auth.client.graphQLClient,
    {},
    {
      enabled: store.auth.client.firebaseId !== null,
    }
  );

  useEffect(() => {
    if(typeof window === "object") {
      setIsMounted(true);
    }
  }, []);

  return (
    <>
      {isMounted && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  menu={[
                    {
                      name: "ホーム",
                      path: "/",
                    },
                    ...(
                      (getPostTypes.data?.post_type as Post_Type[]) || []
                    ).map((p: Post_Type) => {
                      return {
                        name: p.name,
                        path: `/post/${p.slug}`,
                      };
                    }),
                    {
                      name: "カテゴリー",
                      path: "/category",
                    },
                    {
                      name: "タグ",
                      path: "/tag",
                    },
                    {
                      name: "画像",
                      path: "/media",
                    },
                    {
                      name: "投稿タイプ",
                      path: "/post-type",
                    },
                  ]}
                />
              }
            >
              <Route index element={<Home />} />

              <Route path="post/:postType" element={<PostList />} />
              <Route path="post/:postType/:id" element={<PostItem />} />
              <Route path="post/:postType/new" element={<PostNew />} />
              <Route
                path="post/:postType/trash"
                element={<TrashedPostList />}
              />

              <Route path="post-type" element={<PostTypeList />} />
              <Route path="post-type/:id" element={<PostTypeItem />} />
              <Route path="post-type/new" element={<PostTypeNew />} />

              <Route path="category" element={<CategoryList />} />
              <Route path="category/:id" element={<CategoryItem />} />
              <Route path="category/new" element={<CategoryNew />} />

              <Route path="tag" element={<TagList />} />
              <Route path="tag/:id" element={<TagItem />} />
              <Route path="tag/new" element={<TagNew />} />

              <Route path="media" element={<MediaList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}

      {!isMounted && <p>Error</p>}
    </>
  );
};

export default HomePage;
