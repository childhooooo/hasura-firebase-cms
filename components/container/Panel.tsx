import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, sizes } from 'variables';

type Props = {
  children: ReactNode;
};

export const Panel = ({ children }: Props) => {
  return (
    <Component>
      {children}
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  padding: ${sizes.gapM};
  background-color: ${colors.white};
  border-radius: 3px;
`;

export default Panel;
