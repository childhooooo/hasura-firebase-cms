import styled from "styled-components";
import { rgba } from "polished";
import { sizes, colors } from "variables";
import { format } from "date-fns";
import { Link as L } from "react-router-dom";

import { Post, Content_Tag, Post_Tag } from "lib/graphql";

type Props = {
  post: Post;
};

export const Link = ({ post }: Props) => {
  return (
    <Component to={`/post/${post.post_type.slug}/${post.id}`}>
      <div className="header">
        <p className="title">{post.title}</p>
        <p className="date">
          最終更新:{" "}
          {format(
            new Date(post.revisions[0].created_at),
            "yyyy.MM.dd HH:mm:ss"
          )}
        </p>
      </div>

      <div className="details">
        {post.category && <p className="category">{post.category.name}</p>}

        {post.tags.length > 0 && (
          <ul className="tags">
            {((post.tags as Post_Tag[]) || []).map((t: Post_Tag) => {
              return <li>#{t.tag.name}</li>;
            })}
          </ul>
        )}
      </div>
    </Component>
  );
};

const Component = styled(L)`
  display: block;
  padding: ${sizes.gapM};
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    background-color: ${rgba(colors.theme, 0.05)};
  }

  .header {
    display: flex;
    align-items: center;
    font-weight: 700;

    p:not(:first-child) {
      margin-left: 1rem;
    }

    .date {
      color: ${colors.darkGray};
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .details {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  .category {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${colors.black};
    border-radius: 3px;
  }

  .tags {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    list-style: none;

    li {
      &:not(:first-child) {
        margin-left: 0.5rem;
      }
    }
  }
`;
