import { ChangeEventHandler, ChangeEvent, useContext, useState } from "react";
import { Post, useGetPostsQuery } from "lib/graphql";
import { StoreContext } from "providers";

type Props = {
  slug: string;
  defaultId?: number | null;
  onChange: (post: Post | null) => void;
  disabled?: boolean;
};

export const PostInput = ({ slug, defaultId, onChange, disabled }: Props) => {
  const store = useContext(StoreContext);

  const getPosts = useGetPostsQuery(store.auth.client.graphQLClient, {
    post_type_slug: slug,
  });

  const [selected, setSelected] = useState<Post | null>(
    ((getPosts.data?.post as Post[]) || []).filter((p: Post) => {
      return p.id === defaultId;
    })[0] || null
  );

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === undefined || event.target.value === "") {
      onChange(null);
      setSelected(null);
      return;
    }

    const selected = ((getPosts.data?.post as Post[]) || []).filter(
      (p: Post) => p.id === parseInt(event.target.value, 10)
    );

    if (selected.length > 0) {
      onChange(selected[0]);
      setSelected(selected[0]);
    } else {
      onChange(null);
      setSelected(null);
    }
  };

  return (
    <select onChange={onChangeHandler} defaultValue={defaultId || ""} disabled={disabled || false}>
      <option value="" selected={selected === null}>
        選択なし
      </option>

      {getPosts.data?.post &&
        ((getPosts.data?.post as []) || []).map((p: Post) => {
          return (
            <option value={p.id} key={p.id} selected={p.id === defaultId}>
              {p.title}[{p.id}]
            </option>
          );
        })}
    </select>
  );
};
