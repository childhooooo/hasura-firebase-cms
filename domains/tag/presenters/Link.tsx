import styled from "styled-components";
import { rgba } from "polished";
import { sizes, colors } from "variables";
import { Link as L } from "react-router-dom";

import { Tag } from "lib/graphql";

type Props = {
  tag: Tag;
};

export const Link = ({ tag }: Props) => {
  return <Component to={`/tag/${tag.id}`}>{tag.name}</Component>;
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
