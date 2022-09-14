import styled from 'styled-components';
import { colors, sizes } from 'variables';

type Props = {
  icon: any;
  onClick: () => void;
};

export const IconRoundedButton = ({ icon, onClick }: Props) => {
  return (
    <Component onClick={onClick}>
      {icon}
    </Component>
  );
};

const Component = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  min-width: 45px;
  height: 45px;
  background-color: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.gray};
`;
