import styled from "styled-components";
import { rgba } from "polished";
import { sizes, colors } from "variables";
import Link from "next/link";
import { Stacked, Columns } from "unflexible-ui-core";
import { SimpleButton } from "components/button";

import { ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "providers";
import { Post_Type, useGetPostTypesQuery } from "lib/graphql";

type MenuLink = {
  name: string;
  path: string;
};

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const { busy, popup, auth } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signIn(email, password);
  };

  const getPostTypes = useGetPostTypesQuery(
    auth.client.graphQLClient,
    {},
    {
      enabled: auth.client.firebaseId !== null,
    }
  );

  const menu: MenuLink[] = [
    {
      name: "ホーム",
      path: "/"
    },
    ...((getPostTypes.data?.post_type as Post_Type[]) || []).map(
      (p: Post_Type) => {
        return {
          name: p.name,
          path: `/post/${p.slug}`,
        };
      }
    ),
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
  ];

  return (
    <Component>
      {popup.content && (
        <Popup>
          <button
            type="button"
            className="close"
            onClick={() => popup.setContent(null)}
          />

          <div>
            <Stacked paddingPos="none">{popup.content}</Stacked>

            <Stacked paddingPos="top" paddingSize="thin">
              <Columns justify="center">
                <SimpleButton
                  type="button"
                  onClick={() => popup.setContent(null)}
                  color={colors.black}
                  reverse
                >
                  閉じる
                </SimpleButton>
              </Columns>
            </Stacked>
          </div>
        </Popup>
      )}

      <aside>
        <Stacked paddingPos="top">
          <Link href="/" passHref>
            <Title>
              <img src="/images/sitelogo_v.png" alt="" />
              <span>ヤナガワ村役場HP 管理画面</span>
            </Title>
          </Link>
        </Stacked>

        <Stacked paddingPos="top">
          <Menu>
            <ul>
              {menu.map((l: MenuLink, index: number) => {
                return (
                  <li key={index}>
                    <Link href={l.path} passHref>
                      <MenuNavLink isActive={pathname.includes(l.path)}>
                        {l.name}
                      </MenuNavLink>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Menu>
        </Stacked>

        <Stacked>
          <Actions>
            {auth.admin && (
              <li>
                <Columns repeat={1}>
                  <SimpleButton
                    type="button"
                    onClick={auth.signOut}
                    color={colors.darkGray}
                    reverse
                  >
                    ログアウト
                  </SimpleButton>
                </Columns>
              </li>
            )}
          </Actions>
        </Stacked>
      </aside>

      <main>
        <Loader visible={busy.isBusy || (!auth.admin && auth.isLoading)} />

        {auth.admin && children}

        {!auth.admin && !auth.isLoading && (
          <Stacked height="100%">
            <Stacked paddingPos="none">
              <Columns justify="center" align="center">
                <TextInput
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Columns>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <Columns justify="center" align="center">
                <TextInput
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Columns>
            </Stacked>

            <Stacked paddingPos="top">
              <Columns justify="center" align="center">
                <SimpleButton color={colors.theme} onClick={signIn}>
                  ログイン
                </SimpleButton>
              </Columns>
            </Stacked>
          </Stacked>
        )}
      </main>
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  height: 100vh;

  aside {
    position: relative;
    z-index: 2;
    flex-shrink: 1;
    flex-grow: 1;
    width: 250px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  main {
    position: relative;
    z-index: 1;
    flex-shrink: 2;
    flex-grow: 2;
    width: 100%;
    background-color: ${colors.lightGray};
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

const Popup = styled.div`
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);

  > button {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  > div {
    position: relative;
    z-index: 2;
    max-width: 90%;
    max-height: 90%;
    padding: ${sizes.gapM};
    border-radius: 3px;
    background-color: ${colors.white};
    overflow: scroll;
  }
`;

const Title = styled.a`
  display: block;
  padding: 0 ${sizes.gapM};
  color: ${colors.text};
  text-decoration: none;

  img {
    display: block;
    width: auto;
    height: 6.4rem;
    margin: 0 auto;
  }

  span {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.7rem;
    text-align: center;
  }
`;

const Menu = styled.menu`
  ul {
    list-style: none;
  }
`;

type MenuNavLinkProps = {
  isActive?: boolean;
};

const MenuNavLink = styled.a<MenuNavLinkProps>`
  position: relative;
  display: block;
  padding: ${sizes.gapM} ${sizes.gapM};
  color: ${colors.text};
  font-size: 0.9rem;
  text-decoration: none;
  transition-duration: 0.3s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition-duration: 0.3s;
  }

  ${(p) =>
    p.isActive &&
    `
    color: ${colors.theme};

    &::before {
      background-color: ${colors.theme};
    }
  `}

  &.active,
  &:hover {
    color: ${colors.theme};

    &::before {
      background-color: ${colors.theme};
    }
  }
`;

const TextInput = styled.input`
  width: 400px;
  padding: 0.75rem;
  background-color: ${colors.white};
  border-radius: 5px;
`;

const Actions = styled.ul`
  padding: 0 ${sizes.gapM};
  list-style: none;

  li:not(:first-child) {
    margin-top: ${sizes.gapS};
  }
`;

type LoaderProps = {
  visible: boolean;
};

const Loader = styled.div<LoaderProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${rgba(colors.white, 0.75)};
  opacity: ${(p) => (p.visible ? 1 : 0)};
  pointer-events: ${(p) => (p.visible ? "auto" : "none")};
  transition-duration: 0.3s;

  &::before {
    content: "";
    font-size: 12px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: load 1.1s infinite ease;
    transform: translateZ(0);
  }

  @keyframes load {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em ${colors.theme},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.2)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.2)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.2)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.5)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.7)};
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.7)},
        1.8em -1.8em 0 0em ${colors.theme},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.2)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.2)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.2)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.5)};
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.5)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.7)},
        2.5em 0em 0 0em ${colors.theme},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.2)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.2)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)};
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.2)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.5)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.7)},
        1.75em 1.75em 0 0em ${colors.theme},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.2)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)};
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.2)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.5)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.7)},
        0em 2.5em 0 0em ${colors.theme},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.2)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)};
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.2)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.2)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.5)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.7)},
        -1.8em 1.8em 0 0em ${colors.theme},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)};
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.2)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.2)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.2)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.5)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.7)},
        -2.6em 0em 0 0em ${colors.theme},
        -1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)};
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em ${rgba(colors.theme, 0.2)},
        1.8em -1.8em 0 0em ${rgba(colors.theme, 0.2)},
        2.5em 0em 0 0em ${rgba(colors.theme, 0.2)},
        1.75em 1.75em 0 0em ${rgba(colors.theme, 0.2)},
        0em 2.5em 0 0em ${rgba(colors.theme, 0.2)},
        -1.8em 1.8em 0 0em ${rgba(colors.theme, 0.5)},
        -2.6em 0em 0 0em ${rgba(colors.theme, 0.7)},
        -1.8em -1.8em 0 0em ${colors.theme};
    }
  }
`;
