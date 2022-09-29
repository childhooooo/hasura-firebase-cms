import { ReactNode } from "react";
import styled from "styled-components";
import { sizes, colors } from "variables";

type Props = {
  onSubmit: (event: any | undefined) => void;
  children: ReactNode;
};

export const Form = ({ onSubmit, children }: Props) => {
  return <Component onSubmit={onSubmit}>{children}</Component>;
};

const Component = styled.form`
  padding: ${sizes.gapM};

  .line {
    &:not(:first-child) {
      margin-top: ${sizes.gapL};
    }
  }

  .label {
    label,
    p {
      color: ${colors.darkGray};
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  ul.input {
    flex-wrap: wrap;
    gap: ${sizes.gapM};
    list-style: none;
  }

  .input {
    display: flex;
    align-items: center;
    margin-top: ${sizes.gapS};
    list-style: none;

    input,
    textarea,
    select {
      width: 100%;
      padding: ${sizes.gapS};
      font-size: 16px;
      border: 1px solid ${colors.gray};
      border-radius: 3px;

      &:disabled {
        opacity: 0.8;
      }
    }

    input[type="checkbox"] {
      width: 1rem;
      padding: 0;
    }

    .checkbox {
      display: flex;

      label {
        margin-left: 0.25rem;
      }
    }

    .unit {
      flex-shrink: 0;
      flex-grow: 0;
      margin-left: 0.5rem;
    }

    .wysiwyg {
      border: 1px solid ${colors.gray};
      border-radius: 3px;
    }

    .ql-toolbar,
    .ql-container {
      border: none;
    }

    .ql-container {
      width: 100%;
      border: none;
      border-top: 1px solid ${colors.gray} !important;
    }
  }

  .error {
    margin-top: 0.5rem;

    p {
      color: ${colors.red};
    }
  }
`;
