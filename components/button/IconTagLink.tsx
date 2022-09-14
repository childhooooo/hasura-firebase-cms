import styled from "styled-components";
import { colors } from "variables";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  iconTag?: string;
  to: string;
};

export const IconTagLink = ({ name, iconTag, to }: Props) => {
  return (
    <Component>
      <Link to={to}>
        {iconTag && (
          <span
            className="icon"
            dangerouslySetInnerHTML={{ __html: iconTag }}
          />
        )}
        {!iconTag && (
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" />
            </svg>
          </span>
        )}
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
      fill: ${colors.darkGray};

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .name {
      margin-top: 0.25rem;
      font-size: 0.9rem;
      color: ${colors.darkGray};
      text-align: center;
      line-height: 1.5;
    }

    &:hover {
      .icon {
        color: ${colors.theme};
        fill: ${colors.theme};
      }

      .name {
        color: ${colors.theme};
      }
    }
  }

  &::before {
    position: relative;
    z-index: 1;
    content: "";
    display: block;
    padding-top: 75%;
  }
`;
