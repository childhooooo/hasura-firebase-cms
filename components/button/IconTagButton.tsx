import styled from "styled-components";
import { colors } from "variables";

type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  iconTag: string;
  color: string;
  reverse?: boolean;
  width?: string;
  height?: string;
};

export const IconTagButton = ({
  type,
  onClick,
  iconTag,
  color,
  reverse,
  width,
  height,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Component
      onClick={handleClick}
      type={type}
      color={color}
      reverse={reverse || false}
      width={width || "1.5rem"}
      height={height || "1.5rem"}
    >
      {iconTag && (
        <span className="icon" dangerouslySetInnerHTML={{ __html: iconTag }} />
      )}
      {!iconTag && (
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" />
          </svg>
        </span>
      )}
    </Component>
  );
};

type ComponentProps = {
  color: string;
  reverse: boolean;
  width: string;
  height: string;
};

const Component = styled.button<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(p) => (p.reverse ? p.color : "transparent")};
  border: 2px solid ${(p) => p.color};
  border-radius: 50%;
  text-align: center;
  line-height: 0.75;
  transition-duration: 0.3s;

  .icon {
    color: ${(p) => (p.reverse ? colors.white : p.color)};
    fill: ${(p) => (p.reverse ? colors.white : p.color)};
    transition-duration: 0.3s;

    svg {
      width: ${(p) => p.width};
      height: ${(p) => p.height};
    }
  }

  &:hover {
    background-color: ${(p) => (p.reverse ? "transparent" : p.color)};

    .icon {
      color: ${(p) => (p.reverse ? p.color : colors.white)};
      fill: ${(p) => (p.reverse ? p.color : colors.white)};
    }
  }
`;
