import styled from 'styled-components';
import { colors } from 'variables';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  icon: string;
  color: string;
  reverse?: boolean;
};

export const IconButton = ({ type, onClick, color, reverse, icon }: Props) => {
  if (type === 'submit') {
    return (
      <Component type={type} color={color} reverse={reverse || false}>
        {icon}
      </Component>
    );
  } else {
    return (
      <Component type={type} onClick={onClick || (() => {})} color={color} reverse={reverse || false}>
        {icon}
      </Component>
    );
  }
};

type ComponentProps = {
  color: string;
  reverse: boolean;
};

const Component = styled.button<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${p => p.reverse ? colors.white : p.color};
  background-color: ${p => p.reverse ? p.color : 'transparent'};
  border: 2px solid ${p => p.color};
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  transition-duration: .3s;

  &:hover {
    color: ${p => p.reverse ? p.color : colors.white};
    background-color: ${p => p.reverse ? 'transparent' : p.color};
  }
`;
