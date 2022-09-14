import styled from 'styled-components';
import { colors } from 'variables';

type Props = {
  icon: any;
  onChange: (event: any) => Promise<void>;
};

export const IconFileInput = ({ icon, onChange }: Props) => {
  return (
    <Component>
      <input type="file" onChange={onChange} />
      {icon}
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  min-width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};

  input {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;
