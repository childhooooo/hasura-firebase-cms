import styled from "styled-components";
import { rgba } from "polished";
import { sizes, colors } from "variables";
import { Link as L } from "react-router-dom";

import { Category } from "lib/graphql";

type Props = {
  category: Category;
};

export const Link = ({ category }: Props) => {
  return <Component to={`/category/${category.id}`}>{category.name}</Component>;
};

const Component = styled(L)`
  display: block;
  padding: ${sizes.gapM};
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    background-color: ${rgba(colors.theme, 0.05)};
  }
`;
