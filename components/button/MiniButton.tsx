import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  color: string;
  reverse?: boolean;
  children: ReactNode;
};

export const MiniButton = ({ type, onClick, color, reverse, children }: Props) => {
  if (type === 'submit') {
    return (
      <Component type={type} color={color} reverse={reverse || false}>
        {children}
      </Component>
    );
  } else {
    return (
      <Component type={type} onClick={onClick || (() => {})} color={color} reverse={reverse || false}>
        {children}
      </Component>
    );
  }
};

type ComponentProps = {
  color: string;
  reverse: boolean;
};

const Component = styled.button<ComponentProps>`
  padding: .25rem .75rem;
  color: ${p => p.reverse ? colors.text : colors.white};
  background-color: ${p => p.reverse ? colors.white : p.color};
  border: 2px solid ${p => p.color};
  text-align: center;
  line-height: 1;
  border-radius: 3px;
  transition-duration: .3s;

  &:hover {
    color: ${p => p.reverse ? colors.white : p.color};
    background-color: ${p => p.reverse ? p.color : colors.white};
  }
`;
