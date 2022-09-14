import styled from 'styled-components';
import { colors } from 'variables';

type Props = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

const AROUND_BUTTONS = 3;

export const SimplePagination = ({ page, totalPages, setPage }: Props) => {
  let initialButton = page - AROUND_BUTTONS;
  let lastButton = page + AROUND_BUTTONS;

  while(initialButton < 1 && lastButton <= totalPages) {
    initialButton += 1;
    lastButton += 1;
  }

  initialButton = initialButton < 1 ? 1 : initialButton;
  lastButton = lastButton > totalPages ? totalPages : lastButton;

  const buttons = [];
  for (let index = initialButton; index <= lastButton; index++) {
    buttons.push(
      <li key={index}>
        <button className={page === index ? 'active' : ''} onClick={() => setPage(index)}>{index}</button>
      </li>
    );
  }

  return (
    <Component>
      {page > 1 &&
        <button onClick={() => setPage(page - 1)}>＜＜</button>
      }

      <ul>
        {buttons}
      </ul>

      {page < totalPages &&
        <button onClick={() => setPage(page + 1)}>＞＞</button>
      }
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    color: ${colors.theme};
  }

  ul {
    display: flex;
    margin: 0 1rem;
    list-style: none;

    button {
      padding: 0 .5rem;
      font-size: 1.25rem;

      &:hover {
        text-decoration: underline;
      }

      &.active {
        color: ${colors.theme};
        font-weight: 700;
      }
    }
  }
`;
