import styled from 'styled-components';
import { rgba } from 'polished';
import { sizes, colors } from 'variables';
import { Link as L } from 'react-router-dom';

import { Post_Type } from 'lib/graphql';

type Props = {
  postType: Post_Type;
};

export const Link = ({ postType }: Props) => {
  return (
    <Component to={`/post-type/${postType.id}`}>
      <div className="header">
        <p>{postType.name}</p>
      </div>

      <div className="details">
        <p>{postType.slug}</p>
      </div>
    </Component>
  );
};

const Component = styled(L)`
  display: block;
  padding: ${sizes.gapM};
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    background-color: ${rgba(colors.theme, .05)};
  }

  .header {
    display: flex;
    font-weight: 700;
    p:not(:first-child) {
      margin-left: .5rem;
    }
  }

  .details {
    margin-top: .25rem;
    font-size: .9rem;
  }
`;
