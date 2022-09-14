import styled from "styled-components";
import { colors } from "variables";
import { Stacked, Columns } from "unflexible-ui-core";
import { SimpleButton } from "components/button";

type Props = {
  message: string;
  onSubmit: () => void;
  onDismiss: () => void;
};

export const WithAlert = ({
  message,
  onSubmit,
  onDismiss,
}: Props) => {
  return (
    <Component>
      <Stacked paddingPos="none">
        <p>{message}</p>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Columns gap="normal" justify="center">
          <SimpleButton
            type="button"
            color={colors.darkGray}
            onClick={onDismiss}
          >
            いいえ
          </SimpleButton>
          <SimpleButton type="button" color={colors.theme} onClick={onSubmit}>
            はい
          </SimpleButton>
        </Columns>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  padding: 1.5rem;
  background-color: ${colors.white};
  border-radius: 3px;
  max-width: 600px;

  p {
    text-align: center;
  }
`;
