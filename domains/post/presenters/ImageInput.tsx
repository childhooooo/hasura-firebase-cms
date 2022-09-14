import styled from "styled-components";
import { colors } from "variables";
import { Block } from "unflexible-ui-core";
import { List } from "domains/media";

import { useEffect, useState, useContext } from "react";
import { Media, useGetMediaQuery } from "lib/graphql";
import { extractFile } from "domains/media";
import { StoreContext } from "providers";

type Props = {
  defaultId?: number | null;
  onChange: (image: Media | null) => void;
  disabled?: boolean;
};

export const ImageInput = ({ defaultId, onChange, disabled }: Props) => {
  const store = useContext(StoreContext);
  const [initialized, setInitialized] = useState(false);
  const [image, setImage] = useState<Media | null>(null);

  const getImage = useGetMediaQuery(
    store.auth.client.graphQLClient,
    {
      id: defaultId,
    },
    {
      enabled: defaultId !== null && defaultId !== undefined,
    }
  );

  useEffect(() => {
    setInitialized(false);
  }, [defaultId]);

  useEffect(() => {
    store.busy.setIsBusy(!getImage.data && getImage.isFetching);

    if (getImage.data?.media_by_pk && !initialized) {
      setImage(getImage.data.media_by_pk as Media);
      setInitialized(true);
    }
  }, [getImage.data, getImage.isFetching]);

  const openPopup = () => {
    store.popup.setContent(
      <Block width="1200px" maxWidth="100%">
        <List
          onSelect={(image: Media) => {
            setImage(image);
            onChange(image);
            store.popup.setContent(null);
          }}
        />
      </Block>
    );
  };

  const reset = () => {
    setImage(null);
    onChange(null);
  };

  return (
    <Component>
      {image && (
        <Preview>
          <img
            src={extractFile(image, "800")?.url || image.url}
            alt={image.name}
          />

          {!disabled && (
            <Actions>
              <button type="button" onClick={reset}>
                ×
              </button>
            </Actions>
          )}
        </Preview>
      )}

      {!image && !disabled && (
        <SelectButton type="button" onClick={openPopup}>
          ＋
        </SelectButton>
      )}
    </Component>
  );
};

const Component = styled.div``;

const Actions = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  transition-duration: 0.3s;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.black};
    border: 1px solid ${colors.black};
    border-radius: 50%;
  }
`;

const Preview = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid ${colors.gray};
  border-radius: 3px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &:hover {
    ${Actions} {
      opacity: 1;
    }
  }
`;

const SelectButton = styled.button`
  width: 200px;
  height: 200px;
  font-size: 2rem;
  color: ${colors.darkGray};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
`;
