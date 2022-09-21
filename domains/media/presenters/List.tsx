import styled from "styled-components";
import { Stacked, Columns } from "unflexible-ui-core";
import { SimplePagination } from "components/pagination";

import { useEffect, useContext, useState } from "react";
import { Media, useGetMediasQuery } from "lib/graphql";
import { extractFile } from "domains/media";
import { StoreContext } from "providers";

type Props = {
  onSelect: (image: Media) => void;
  onDismiss?: () => void;
};

export const List = ({ onSelect }: Props) => {
  const store = useContext(StoreContext);
  const [page, setPage] = useState(1);

  const limit = 10;
  const getImages = useGetMediasQuery(store.auth.client.graphQLClient, {
    limit,
    offset: limit * (page - 1),
    type_ilike: "image/%",
  });

  useEffect(() => {
    // store.busy.setIsBusy(getImages.isFetching);
  }, [getImages.isFetching]);

  return (
    <Component>
      {getImages.data && (
        <>
          <Stacked paddingPos="none">
            <Columns repeat={5} gap="narrow">
              {(getImages.data.media as Media[]).map((image: Media) => {
                return (
                  <SelectButton onClick={() => onSelect(image)} key={image.id}>
                    <img src={extractFile(image, "800")?.url || image.url} alt={image.name} />
                  </SelectButton>
                );
              })}
            </Columns>
          </Stacked>

          {getImages.data.media_aggregate?.aggregate && (
            <Stacked paddingPos="top">
              <SimplePagination
                page={page}
                totalPages={Math.ceil(
                  getImages.data.media_aggregate.aggregate.count / limit
                )}
                setPage={setPage}
              />
            </Stacked>
          )}
        </>
      )}
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  position: relative;

  &::before {
    position: relative;
    content: "";
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;
