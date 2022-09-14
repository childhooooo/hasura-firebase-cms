import styled from "styled-components";
import { colors } from "variables";
import { Stacked, PlainText, Columns, Block } from "unflexible-ui-core";
import { Panel } from "components/container";
import { IconButton } from "components/button";
import { List, Preview } from "domains/media";

import { ChangeEvent, useState, useContext, useRef } from "react";
import { Media } from "lib/graphql";
import { StoreContext } from "providers";

export const MediaList = () => {
  const store = useContext(StoreContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedAt, setUploadedAt] = useState(Date.now());

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (
      !event.target.files ||
      (event.target.files && event.target.files.length < 1)
    ) {
      return;
    }

    const file = event.target.files[0];
    event.target.value = "";

    store.busy.setIsBusy(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/media", {
        method: "post",
        body: formData,
      });

      const data = await res.json();
      if (!data.isSuccess) {
        throw new Error(data.message);
      }

      setUploadedAt(Date.now());
    } catch (e) {
      console.error(e);
      alert("アップロードに失敗しました。");
    }
    store.busy.setIsBusy(false);
  };

  const preview = (image: Media) => {
    store.popup.setContent(
      <Block maxWidth="900px">
        <Preview
          image={image}
          onDelete={() => {
            setUploadedAt(Date.now());
          }}
        />
      </Block>
    );
  };

  return (
    <Stacked wrap>
      <Stacked paddingPos="none">
        <Columns align="center" gap="narrow">
          <Block>
            <PlainText>
              <h1>画像一覧</h1>
            </PlainText>
          </Block>

          <IconButton
            type="button"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
            color={colors.theme}
            icon="＋"
          />

          <FileInput type="file" ref={inputRef} onChange={upload} />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Panel>
          <List onSelect={preview} key={uploadedAt} />
        </Panel>
      </Stacked>
    </Stacked>
  );
};

const FileInput = styled.input`
  display: none;
`;
