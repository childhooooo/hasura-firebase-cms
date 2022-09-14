import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';

type Props = {
  items: ReactNode[];
};

export const SimpleList = ({ items }: Props) => {
  return (
    <Component>
      {items.map((item: ReactNode, index: number) => {
        return <li key={index}>{item}</li>;
      })}
    </Component>
  );
};

const Component = styled.ul`
  list-style: none;

  > li:not(:first-child) {
    border-top: 1px solid ${colors.lightGray};
  }
`;

export default SimpleList;
