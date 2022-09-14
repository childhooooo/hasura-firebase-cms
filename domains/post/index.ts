import { Post, Value } from "lib/graphql";

export * from "./presenters";

export function getValueOfField(
  post: Post,
  slug: string,
  revision: number
): Value {
  return (post.revisions.at(revision)?.values || []).filter(
    (v: Value) => v.field.slug === slug
  )[0];
}

export function getValuesOfField(
  post: Post,
  slug: string,
  revision: number
): Value[] {
  return (post.revisions.at(revision)?.values || []).filter(
    (v: Value) => v.field.slug === slug
  );
}
