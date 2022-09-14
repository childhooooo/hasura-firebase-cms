import styled from "styled-components";
import { rgba } from "polished";
import { sizes, colors } from "variables";
import { default as L } from "next/link";

import { Category } from "lib/graphql";

type Props = {
  category: Category;
};

export const Link = ({ category }: Props) => {
  return (
    <L href={`/category/${category.id}`} passHref>
      <Component>{category.name}</Component>
    </L>
  );
};

const Component = styled.a`
  display: block;
  padding: ${sizes.gapM};
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    background-color: ${rgba(colors.theme, 0.05)};
  }
`;
