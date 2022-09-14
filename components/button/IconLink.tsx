import styled from 'styled-components';
import { colors } from 'variables';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  icon: ReactNode;
  to: string;
};

export const IconLink = ({ name, icon, to }: Props) => {
  return (
    <Component>
      <Link to={to}>
        <span className="icon">{icon}</span>
        <span className="name">{name}</span>
      </Link>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  display: block;

  a {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: ${colors.white};
    border-radius: 3px;
    text-decoration: none;

    .icon {
      color: ${colors.darkGray};

      path {
        stroke: ${colors.darkGray};
      }
    }

    .name {
      margin-top: .25rem;
      font-size: .9rem;
      color: ${colors.darkGray};
      text-align: center;
      line-height: 1.5;
    }

    &:hover {
      .icon {
        color: ${colors.theme};

        path {
          stroke: ${colors.theme};
        }
      }

      .name {
        color: ${colors.theme};
      }
    }
  }

  &::before {
    position: relative;
    z-index: 1;
    content: '';
    display: block;
    padding-top: 75%;
  }
`;
