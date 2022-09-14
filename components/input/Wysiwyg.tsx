import styled from "styled-components";
import { colors } from "variables";
import { Block } from "unflexible-ui-core";
import { List } from "domains/media";

import { useEffect, useContext } from "react";
import Quill from "quill";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Media } from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  editorId: string;
  onChange: (content: string) => void;
  defaultContent: string;
  disabled?: boolean;
};

const Wysiwyg = ({
  editorId,
  onChange,
  defaultContent,
  disabled,
}: Props) => {
  const store = useContext(StoreContext);

  const insertImage = (quill: Quill, image: Media) => {
    const range = quill.getSelection();
    if (!range) {
      return;
    }

    quill.insertEmbed(range.index, "image", image.url);
  };

  const getConverted = (ops: any) => {
    const converter = new QuillDeltaToHtmlConverter(ops, {
      multiLineParagraph: false,
    });

    converter.afterRender((groupType, htmlString) => {
      if (groupType === "video") {
        const result = htmlString.replace("iframe", "video");
        return result;
      } else {
        return htmlString;
      }
    });

    return converter.convert();
  };

  const initialize = (content: string) => {
    const container = document.getElementById(`container-${editorId}`);
    if (!container) {
      return;
    }

    container.innerHTML = "";
    const editor = document.createElement("div");
    editor.setAttribute("id", `editor-${editorId}`);
    editor.innerHTML = content || "";
    container.appendChild(editor);

    const quill = new Quill(`#editor-${editorId}`, {
      debug: false,
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            [{ header: [2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
          ],
          handlers: {
            image: () => {
              store.popup.setContent(
                <Block width="1200px" maxWidth="100%">
                  <List
                    onSelect={(image: Media) => {
                      insertImage(quill, image);
                      store.popup.setContent(null);
                    }}
                  />
                </Block>
              );
            },
          },
        },
      },
    });

    let timeout: any | null = null;
    quill.on("text-change", () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        onChange(getConverted(quill.getContents().ops));
      }, 500);
    });

    onChange(content);
  };

  useEffect(() => {
    initialize(defaultContent);

    return () => {
      const c = document.getElementById(`container-${editorId}`);
      const e = document.getElementById(`editor-${editorId}`);

      if (c && e) {
        c.removeChild(e);
      }
    };
  }, []);

  return (
    <Component>
      <Container
        id={`container-${editorId}`}
        className="wysiwyg"
        disabled={disabled || false}
      />
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 100%;
`;

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  opacity: ${(p) => (p.disabled ? "0.7" : "1")};
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};

  .ql-container {
    position: relative;
    z-index: 1;
  }

  .ql-toolbar {
    position: relative;
    z-index: 2;
  }

  .ql-editor {
    position: relative;
    z-index: 2;
    font-size: 16px;
    line-height: 1.75;
  }

  h2 {
    margin: 1.5rem 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 1px solid ${colors.theme};
  }

  h3 {
    margin: 1.5rem 0 1rem 0;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    border-left: 7px solid ${colors.theme};
  }

  h4 {
    margin: 1.5rem 0 1rem 0;
    font-weight: 700;
  }

  p {
    margin: 1rem 0;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 0;
  }

  img {
    display: block;
    margin: 1rem 0;
    max-width: 100%;
  }

  video {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  iframe {
    max-width: 100%;
    width: 600px;
    height: 400px;
  }
`;

export default Wysiwyg;
