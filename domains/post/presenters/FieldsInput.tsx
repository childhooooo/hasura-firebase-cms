import styled from "styled-components";
import { colors } from "variables";
// import { Wysiwyg } from "components/input";
// const Wysiwyg = typeof window === "object" ? require("components/input/Wysiwyg") : () => false;
import dynamic from "next/dynamic";
const Wysiwyg = dynamic(() => import("../../../components/input/Wysiwyg"), {
  ssr: false
});
import { PostInput, ImageInput } from "./";

import { useEffect, useState } from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Post, Field, Value, Media } from "lib/graphql";

type Props = {
  index: number;
  defaultValues?: Value[];
  form: UseFormReturn<any>;
  name: string;
  field: Field;
  disabled?: boolean;
};

export const FieldsInput = ({
  index,
  defaultValues,
  form,
  name,
  field,
  disabled,
}: Props) => {
  const [initialized, setInitialized] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `${name}.${index}` as const,
    rules: {
      minLength: field.required ? 1 : 0,
      validate: {
        required: () => {
          return field.required
            ? form.getValues(`${name}.${index}`).length > 0
            : true;
        },
      },
    },
  });

  useEffect(() => {
    setInitialized(false);
  }, [defaultValues]);

  useEffect(() => {
    if (!initialized && defaultValues && defaultValues.length > 0) {
      remove();
      for (const v of defaultValues) {
        switch (field.field_type.slug) {
          case "text":
            append({
              text: {
                data: {
                  body: v.text?.body || "",
                },
              },
            });
            break;
          case "textarea":
            append({
              text: {
                data: {
                  body: v.text?.body || "",
                },
              },
            });
            break;
          case "richtext":
            append({
              text: {
                data: {
                  body: v.text?.body || "",
                },
              },
            });
            break;
          case "slug":
            append({
              text: {
                data: {
                  body: v.text?.body || "",
                },
              },
            });
            break;
          case "integer":
            append({
              integer: {
                data: {
                  body: v.integer?.body || "",
                },
              },
            });
            break;
          case "numeric":
            append({
              numeric: {
                data: {
                  body: v.numeric?.body || "",
                },
              },
            });
            break;
          case "boolean":
            append({
              boolean: {
                data: {
                  body: v.boolean?.body || "",
                },
              },
            });
            break;
          case "date":
            append({
              timestamp: {
                data: {
                  body: v.timestamp?.body || "",
                },
              },
            });
            break;
          case "datetime":
            append({
              timestamp: {
                data: {
                  body: v.timestamp?.body || "",
                },
              },
            });
            break;
          case "post":
            append({
              post: {
                data: {
                  post_id: v.post?.body.id || "",
                },
              },
            });
            break;
          case "image":
            append({
              media: {
                data: {
                  media_id: v.media?.body.id || "",
                },
              },
            });
            break;
          default:
            append({});
        }
      }
    }
    setInitialized(true);
  }, [defaultValues]);

  return (
    <Component>
      <ul>
        {fields.map((f: any, i: number) => {
          return (
            <li key={f.id} className="input">
              {field.field_type.slug === "text" && (
                <input
                  type="text"
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.text.data.body` as const,
                    {
                      required: true,
                      maxLength: 1000,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "textarea" && (
                <textarea
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  rows={3}
                  {...form.register(
                    `${name}.${index}.${i}.text.data.body` as const,
                    {
                      required: true,
                      maxLength: 10000,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "richtext" && (
                <>
                  <Wysiwyg
                    editorId={`${field.id}-${f.id}`}
                    onChange={(content: string) => {
                      form.setValue(
                        `${name}.${index}.${i}.text.data.body` as const,
                        content
                      );
                    }}
                    defaultContent={
                      form.getValues(`${name}.${index}.${i}.text.data.body`) ||
                      ""
                    }
                    disabled={disabled || false}
                  />
                  <input
                    type="hidden"
                    id={`${field.id}-${f.id}`}
                    key={f.id}
                    {...form.register(
                      `${name}.${index}.${i}.text.data.body` as const,
                      {
                        required: true,
                        minLength: 1,
                        maxLength: 10000,
                      }
                    )}
                  />
                </>
              )}

              {field.field_type.slug === "slug" && (
                <input
                  type="text"
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.text.data.body` as const,
                    {
                      required: true,
                      pattern: /^[a-z\-_].[a-z\-_0-9]*$/,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "numeric" && (
                <input
                  type="number"
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.numeric.data.body` as const,
                    {
                      required: true,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "integer" && (
                <input
                  type="number"
                  step={1}
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.integer.data.body` as const,
                    {
                      required: true,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "boolean" && (
                <>
                  <input
                    type="checkbox"
                    id={`${field.id}-${f.id}`}
                    key={f.id}
                    defaultChecked={
                      form.getValues(`${name}.${index}.${i}.boolean.data.body`)
                        ? true
                        : false
                    }
                    disabled={disabled || false}
                    onChange={(e) => {
                      form.setValue(
                        `${name}.${index}.${i}.boolean.data.body` as const,
                        e.target.checked
                      );
                    }}
                  />

                  <input
                    type="hidden"
                    {...form.register(
                      `${name}.${index}.${i}.boolean.data.body` as const
                    )}
                  />
                </>
              )}

              {field.field_type.slug === "date" && (
                <input
                  type="date"
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.timestamp.data.body` as const,
                    {
                      required: true,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "datetime" && (
                <input
                  type="datetime"
                  id={`${field.id}-${f.id}`}
                  key={f.id}
                  {...form.register(
                    `${name}.${index}.${i}.timestamp.data.body` as const,
                    {
                      required: true,
                    }
                  )}
                  disabled={disabled || false}
                />
              )}

              {field.field_type.slug === "post" && field.field_post_type?.slug && (
                <>
                  <PostInput
                    slug={field.field_post_type.slug}
                    defaultId={
                      form.getValues(
                        `${name}.${index}.${i}.post.data.post_id`
                      ) || null
                    }
                    onChange={(post: Post | null) => {
                      form.setValue(
                        `${name}.${index}.${i}.post.data.post_id` as const,
                        post ? post.id : null
                      );
                    }}
                    disabled={disabled || false}
                  />
                  <input
                    type="hidden"
                    id={`${field.id}-${f.id}`}
                    key={f.id}
                    {...form.register(
                      `${name}.${index}.${i}.post.data.post_id` as const,
                      {
                        required: true,
                      }
                    )}
                  />
                </>
              )}

              {field.field_type.slug === "image" && (
                <>
                  <ImageInput
                    defaultId={
                      form.getValues(
                        `${name}.${index}.${i}.media.data.media_id`
                      ) || null
                    }
                    onChange={(image: Media | null) =>
                      form.setValue(
                        `${name}.${index}.${i}.media.data.media_id` as const,
                        image ? image.id : null
                      )
                    }
                    disabled={disabled || false}
                  />
                  <input
                    type="hidden"
                    id={`${field.id}-${f.id}`}
                    key={f.id}
                    {...form.register(
                      `${name}.${index}.${i}.media.data.media_id` as const,
                      {
                        required: true,
                      }
                    )}
                  />
                </>
              )}

              {
                //@ts-ignore
                form.formState.errors[name] &&
                  //@ts-ignore
                  form.formState.errors[name][index] &&
                  //@ts-ignore
                  form.formState.errors[name][index][i] && (
                    <p className="error">正しく入力してください</p>
                  )
              }

              <input
                type="hidden"
                {...form.register(`${name}.${index}.${i}.field_id` as const)}
                value={field.id}
              />

              {!disabled && (
                <Remove type="button" onClick={() => remove(i)}>
                  −
                </Remove>
              )}
            </li>
          );
        })}

        {!disabled && (
          <li>
            <Add type="button" onClick={() => append({})}></Add>
          </li>
        )}
      </ul>

      {
        //@ts-ignore
        form.formState.errors[name] &&
          //@ts-ignore
          form.formState.errors[name][index] &&
          //@ts-ignore
          form.formState.errors[name][index].root && (
            <p className="error">1つ以上入力してください</p>
          )
      }
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;

  .input {
    margin-top: 0;
  }

  > ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
    list-style: none;

    > li {
      position: relative;
      display: block !important;
      min-width: calc(200px + 1rem);
      padding: 0.5rem;
    }
  }

  .error {
    color: ${colors.red};
  }
`;

const Add = styled.button`
  width: 15px;
  height: 15px;
  border-top: 15px solid ${colors.gray};
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid ${colors.gray};
  border-radius: 3px;
  transition-duration: 0.3s;

  &:hover {
    border-top: 15px solid ${colors.darkGray};
    border-left: 15px solid ${colors.darkGray};
  }
`;

const Remove = styled.button`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  transform: translateX(calc(50% - 0.5rem)) translateY(-50% + 0.5rem);
  width: 1.25rem;
  height: 1.25rem;
  padding-bottom: 0.15em;
  line-height: 1;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${colors.darkGray};
  background-color: ${colors.white};
  border: 1px solid ${colors.darkGray};
  border-radius: 50%;
`;
