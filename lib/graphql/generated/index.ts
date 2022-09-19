import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  numeric: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "boolean_value" */
export type Boolean_Value = {
  __typename?: 'boolean_value';
  body: Scalars['Boolean'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "boolean_value" */
export type Boolean_Value_Aggregate = {
  __typename?: 'boolean_value_aggregate';
  aggregate?: Maybe<Boolean_Value_Aggregate_Fields>;
  nodes: Array<Boolean_Value>;
};

/** aggregate fields of "boolean_value" */
export type Boolean_Value_Aggregate_Fields = {
  __typename?: 'boolean_value_aggregate_fields';
  avg?: Maybe<Boolean_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boolean_Value_Max_Fields>;
  min?: Maybe<Boolean_Value_Min_Fields>;
  stddev?: Maybe<Boolean_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Boolean_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boolean_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Boolean_Value_Sum_Fields>;
  var_pop?: Maybe<Boolean_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Boolean_Value_Var_Samp_Fields>;
  variance?: Maybe<Boolean_Value_Variance_Fields>;
};


/** aggregate fields of "boolean_value" */
export type Boolean_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boolean_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Boolean_Value_Avg_Fields = {
  __typename?: 'boolean_value_avg_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "boolean_value". All fields are combined with a logical 'AND'. */
export type Boolean_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Boolean_Value_Bool_Exp>>;
  _not?: InputMaybe<Boolean_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Boolean_Value_Bool_Exp>>;
  body?: InputMaybe<Boolean_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "boolean_value" */
export enum Boolean_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  BooleanValuePkey = 'boolean_value_pkey'
}

/** input type for incrementing numeric columns in table "boolean_value" */
export type Boolean_Value_Inc_Input = {
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "boolean_value" */
export type Boolean_Value_Insert_Input = {
  body?: InputMaybe<Scalars['Boolean']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Boolean_Value_Max_Fields = {
  __typename?: 'boolean_value_max_fields';
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Boolean_Value_Min_Fields = {
  __typename?: 'boolean_value_min_fields';
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "boolean_value" */
export type Boolean_Value_Mutation_Response = {
  __typename?: 'boolean_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boolean_Value>;
};

/** input type for inserting object relation for remote table "boolean_value" */
export type Boolean_Value_Obj_Rel_Insert_Input = {
  data: Boolean_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Boolean_Value_On_Conflict>;
};

/** on_conflict condition type for table "boolean_value" */
export type Boolean_Value_On_Conflict = {
  constraint: Boolean_Value_Constraint;
  update_columns?: Array<Boolean_Value_Update_Column>;
  where?: InputMaybe<Boolean_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "boolean_value". */
export type Boolean_Value_Order_By = {
  body?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boolean_value */
export type Boolean_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "boolean_value" */
export enum Boolean_Value_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "boolean_value" */
export type Boolean_Value_Set_Input = {
  body?: InputMaybe<Scalars['Boolean']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Boolean_Value_Stddev_Fields = {
  __typename?: 'boolean_value_stddev_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Boolean_Value_Stddev_Pop_Fields = {
  __typename?: 'boolean_value_stddev_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Boolean_Value_Stddev_Samp_Fields = {
  __typename?: 'boolean_value_stddev_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Boolean_Value_Sum_Fields = {
  __typename?: 'boolean_value_sum_fields';
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "boolean_value" */
export enum Boolean_Value_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

export type Boolean_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Boolean_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Boolean_Value_Set_Input>;
  where: Boolean_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Boolean_Value_Var_Pop_Fields = {
  __typename?: 'boolean_value_var_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Boolean_Value_Var_Samp_Fields = {
  __typename?: 'boolean_value_var_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Boolean_Value_Variance_Fields = {
  __typename?: 'boolean_value_variance_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  post_type: Post_Type;
  post_type_id: Scalars['Int'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  slug: Scalars['String'];
};


/** columns and relationships of "category" */
export type CategoryPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  post_type?: InputMaybe<Post_Type_Bool_Exp>;
  post_type_id?: InputMaybe<Int_Comparison_Exp>;
  posts?: InputMaybe<Post_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "slug", "post_type_id" */
  CategorySlugPostTypeIdKey = 'category_slug_post_type_id_key',
  /** unique or primary key constraint on columns "id" */
  NewsCategoryPkey = 'news_category_pkey'
}

/** input type for incrementing numeric columns in table "category" */
export type Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  post_type?: InputMaybe<Post_Type_Obj_Rel_Insert_Input>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  post_type_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  post_type_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  post_type?: InputMaybe<Post_Type_Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_type_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Slug = 'slug'
}

export type Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "content" */
export type Content = {
  __typename?: 'content';
  /** An object relationship */
  category: Category;
  category_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['bigint'];
  /** An array relationship */
  tags: Array<Content_Tag>;
  /** An aggregate relationship */
  tags_aggregate: Content_Tag_Aggregate;
  title: Scalars['String'];
};


/** columns and relationships of "content" */
export type ContentTagsArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};


/** columns and relationships of "content" */
export type ContentTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};

/** aggregated selection of "content" */
export type Content_Aggregate = {
  __typename?: 'content_aggregate';
  aggregate?: Maybe<Content_Aggregate_Fields>;
  nodes: Array<Content>;
};

/** aggregate fields of "content" */
export type Content_Aggregate_Fields = {
  __typename?: 'content_aggregate_fields';
  avg?: Maybe<Content_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Content_Max_Fields>;
  min?: Maybe<Content_Min_Fields>;
  stddev?: Maybe<Content_Stddev_Fields>;
  stddev_pop?: Maybe<Content_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Content_Stddev_Samp_Fields>;
  sum?: Maybe<Content_Sum_Fields>;
  var_pop?: Maybe<Content_Var_Pop_Fields>;
  var_samp?: Maybe<Content_Var_Samp_Fields>;
  variance?: Maybe<Content_Variance_Fields>;
};


/** aggregate fields of "content" */
export type Content_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Content_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "content" */
export type Content_Aggregate_Order_By = {
  avg?: InputMaybe<Content_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Content_Max_Order_By>;
  min?: InputMaybe<Content_Min_Order_By>;
  stddev?: InputMaybe<Content_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Content_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Content_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Content_Sum_Order_By>;
  var_pop?: InputMaybe<Content_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Content_Var_Samp_Order_By>;
  variance?: InputMaybe<Content_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "content" */
export type Content_Arr_Rel_Insert_Input = {
  data: Array<Content_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Content_On_Conflict>;
};

/** aggregate avg on columns */
export type Content_Avg_Fields = {
  __typename?: 'content_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "content" */
export type Content_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "content". All fields are combined with a logical 'AND'. */
export type Content_Bool_Exp = {
  _and?: InputMaybe<Array<Content_Bool_Exp>>;
  _not?: InputMaybe<Content_Bool_Exp>;
  _or?: InputMaybe<Array<Content_Bool_Exp>>;
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  tags?: InputMaybe<Content_Tag_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "content" */
export enum Content_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContentPkey = 'content_pkey'
}

/** input type for incrementing numeric columns in table "content" */
export type Content_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "content" */
export type Content_Insert_Input = {
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']>;
  tags?: InputMaybe<Content_Tag_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Content_Max_Fields = {
  __typename?: 'content_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "content" */
export type Content_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Content_Min_Fields = {
  __typename?: 'content_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "content" */
export type Content_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "content" */
export type Content_Mutation_Response = {
  __typename?: 'content_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Content>;
};

/** on_conflict condition type for table "content" */
export type Content_On_Conflict = {
  constraint: Content_Constraint;
  update_columns?: Array<Content_Update_Column>;
  where?: InputMaybe<Content_Bool_Exp>;
};

/** Ordering options when selecting data from "content". */
export type Content_Order_By = {
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  tags_aggregate?: InputMaybe<Content_Tag_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: content */
export type Content_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "content" */
export enum Content_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "content" */
export type Content_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_id?: InputMaybe<Scalars['bigint']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Content_Stddev_Fields = {
  __typename?: 'content_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "content" */
export type Content_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Content_Stddev_Pop_Fields = {
  __typename?: 'content_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "content" */
export type Content_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Content_Stddev_Samp_Fields = {
  __typename?: 'content_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "content" */
export type Content_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Content_Sum_Fields = {
  __typename?: 'content_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "content" */
export type Content_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "content_tag" */
export type Content_Tag = {
  __typename?: 'content_tag';
  content_id: Scalars['bigint'];
  /** An object relationship */
  tag: Tag;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "content_tag" */
export type Content_Tag_Aggregate = {
  __typename?: 'content_tag_aggregate';
  aggregate?: Maybe<Content_Tag_Aggregate_Fields>;
  nodes: Array<Content_Tag>;
};

/** aggregate fields of "content_tag" */
export type Content_Tag_Aggregate_Fields = {
  __typename?: 'content_tag_aggregate_fields';
  avg?: Maybe<Content_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Content_Tag_Max_Fields>;
  min?: Maybe<Content_Tag_Min_Fields>;
  stddev?: Maybe<Content_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Content_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Content_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Content_Tag_Sum_Fields>;
  var_pop?: Maybe<Content_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Content_Tag_Var_Samp_Fields>;
  variance?: Maybe<Content_Tag_Variance_Fields>;
};


/** aggregate fields of "content_tag" */
export type Content_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Content_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "content_tag" */
export type Content_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<Content_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Content_Tag_Max_Order_By>;
  min?: InputMaybe<Content_Tag_Min_Order_By>;
  stddev?: InputMaybe<Content_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Content_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Content_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Content_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<Content_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Content_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<Content_Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "content_tag" */
export type Content_Tag_Arr_Rel_Insert_Input = {
  data: Array<Content_Tag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Content_Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Content_Tag_Avg_Fields = {
  __typename?: 'content_tag_avg_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "content_tag" */
export type Content_Tag_Avg_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "content_tag". All fields are combined with a logical 'AND'. */
export type Content_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Content_Tag_Bool_Exp>>;
  _not?: InputMaybe<Content_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Content_Tag_Bool_Exp>>;
  content_id?: InputMaybe<Bigint_Comparison_Exp>;
  tag?: InputMaybe<Tag_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "content_tag" */
export enum Content_Tag_Constraint {
  /** unique or primary key constraint on columns "tag_id", "content_id" */
  PostTagPkey = 'post_tag_pkey'
}

/** input type for incrementing numeric columns in table "content_tag" */
export type Content_Tag_Inc_Input = {
  content_id?: InputMaybe<Scalars['bigint']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "content_tag" */
export type Content_Tag_Insert_Input = {
  content_id?: InputMaybe<Scalars['bigint']>;
  tag?: InputMaybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Content_Tag_Max_Fields = {
  __typename?: 'content_tag_max_fields';
  content_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "content_tag" */
export type Content_Tag_Max_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Content_Tag_Min_Fields = {
  __typename?: 'content_tag_min_fields';
  content_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "content_tag" */
export type Content_Tag_Min_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "content_tag" */
export type Content_Tag_Mutation_Response = {
  __typename?: 'content_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Content_Tag>;
};

/** on_conflict condition type for table "content_tag" */
export type Content_Tag_On_Conflict = {
  constraint: Content_Tag_Constraint;
  update_columns?: Array<Content_Tag_Update_Column>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "content_tag". */
export type Content_Tag_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: content_tag */
export type Content_Tag_Pk_Columns_Input = {
  content_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};

/** select columns of table "content_tag" */
export enum Content_Tag_Select_Column {
  /** column name */
  ContentId = 'content_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "content_tag" */
export type Content_Tag_Set_Input = {
  content_id?: InputMaybe<Scalars['bigint']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Content_Tag_Stddev_Fields = {
  __typename?: 'content_tag_stddev_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "content_tag" */
export type Content_Tag_Stddev_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Content_Tag_Stddev_Pop_Fields = {
  __typename?: 'content_tag_stddev_pop_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "content_tag" */
export type Content_Tag_Stddev_Pop_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Content_Tag_Stddev_Samp_Fields = {
  __typename?: 'content_tag_stddev_samp_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "content_tag" */
export type Content_Tag_Stddev_Samp_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Content_Tag_Sum_Fields = {
  __typename?: 'content_tag_sum_fields';
  content_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "content_tag" */
export type Content_Tag_Sum_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "content_tag" */
export enum Content_Tag_Update_Column {
  /** column name */
  ContentId = 'content_id',
  /** column name */
  TagId = 'tag_id'
}

export type Content_Tag_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Content_Tag_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Content_Tag_Set_Input>;
  where: Content_Tag_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Content_Tag_Var_Pop_Fields = {
  __typename?: 'content_tag_var_pop_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "content_tag" */
export type Content_Tag_Var_Pop_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Content_Tag_Var_Samp_Fields = {
  __typename?: 'content_tag_var_samp_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "content_tag" */
export type Content_Tag_Var_Samp_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Content_Tag_Variance_Fields = {
  __typename?: 'content_tag_variance_fields';
  content_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "content_tag" */
export type Content_Tag_Variance_Order_By = {
  content_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "content" */
export enum Content_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Title = 'title'
}

export type Content_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Content_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Content_Set_Input>;
  where: Content_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Content_Var_Pop_Fields = {
  __typename?: 'content_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "content" */
export type Content_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Content_Var_Samp_Fields = {
  __typename?: 'content_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "content" */
export type Content_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Content_Variance_Fields = {
  __typename?: 'content_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "content" */
export type Content_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "field" */
export type Field = {
  __typename?: 'field';
  /** An object relationship */
  field_post_type?: Maybe<Post_Type>;
  field_post_type_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  field_type: Field_Type;
  field_type_id: Scalars['Int'];
  id: Scalars['bigint'];
  multiple: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  post_type_id: Scalars['Int'];
  required: Scalars['Boolean'];
  slug: Scalars['String'];
};

/** aggregated selection of "field" */
export type Field_Aggregate = {
  __typename?: 'field_aggregate';
  aggregate?: Maybe<Field_Aggregate_Fields>;
  nodes: Array<Field>;
};

/** aggregate fields of "field" */
export type Field_Aggregate_Fields = {
  __typename?: 'field_aggregate_fields';
  avg?: Maybe<Field_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Field_Max_Fields>;
  min?: Maybe<Field_Min_Fields>;
  stddev?: Maybe<Field_Stddev_Fields>;
  stddev_pop?: Maybe<Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Field_Stddev_Samp_Fields>;
  sum?: Maybe<Field_Sum_Fields>;
  var_pop?: Maybe<Field_Var_Pop_Fields>;
  var_samp?: Maybe<Field_Var_Samp_Fields>;
  variance?: Maybe<Field_Variance_Fields>;
};


/** aggregate fields of "field" */
export type Field_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Field_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "field" */
export type Field_Aggregate_Order_By = {
  avg?: InputMaybe<Field_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Field_Max_Order_By>;
  min?: InputMaybe<Field_Min_Order_By>;
  stddev?: InputMaybe<Field_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Field_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Field_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Field_Sum_Order_By>;
  var_pop?: InputMaybe<Field_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Field_Var_Samp_Order_By>;
  variance?: InputMaybe<Field_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "field" */
export type Field_Arr_Rel_Insert_Input = {
  data: Array<Field_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Field_On_Conflict>;
};

/** aggregate avg on columns */
export type Field_Avg_Fields = {
  __typename?: 'field_avg_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "field" */
export type Field_Avg_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "field". All fields are combined with a logical 'AND'. */
export type Field_Bool_Exp = {
  _and?: InputMaybe<Array<Field_Bool_Exp>>;
  _not?: InputMaybe<Field_Bool_Exp>;
  _or?: InputMaybe<Array<Field_Bool_Exp>>;
  field_post_type?: InputMaybe<Post_Type_Bool_Exp>;
  field_post_type_id?: InputMaybe<Int_Comparison_Exp>;
  field_type?: InputMaybe<Field_Type_Bool_Exp>;
  field_type_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  multiple?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  post_type_id?: InputMaybe<Int_Comparison_Exp>;
  required?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "field" */
export enum Field_Constraint {
  /** unique or primary key constraint on columns "id" */
  FieldPkey1 = 'field_pkey1'
}

/** input type for incrementing numeric columns in table "field" */
export type Field_Inc_Input = {
  field_post_type_id?: InputMaybe<Scalars['Int']>;
  field_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  order?: InputMaybe<Scalars['Int']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "field" */
export type Field_Insert_Input = {
  field_post_type?: InputMaybe<Post_Type_Obj_Rel_Insert_Input>;
  field_post_type_id?: InputMaybe<Scalars['Int']>;
  field_type?: InputMaybe<Field_Type_Obj_Rel_Insert_Input>;
  field_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  multiple?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Field_Max_Fields = {
  __typename?: 'field_max_fields';
  field_post_type_id?: Maybe<Scalars['Int']>;
  field_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  post_type_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "field" */
export type Field_Max_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Field_Min_Fields = {
  __typename?: 'field_min_fields';
  field_post_type_id?: Maybe<Scalars['Int']>;
  field_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  post_type_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "field" */
export type Field_Min_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "field" */
export type Field_Mutation_Response = {
  __typename?: 'field_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Field>;
};

/** input type for inserting object relation for remote table "field" */
export type Field_Obj_Rel_Insert_Input = {
  data: Field_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Field_On_Conflict>;
};

/** on_conflict condition type for table "field" */
export type Field_On_Conflict = {
  constraint: Field_Constraint;
  update_columns?: Array<Field_Update_Column>;
  where?: InputMaybe<Field_Bool_Exp>;
};

/** Ordering options when selecting data from "field". */
export type Field_Order_By = {
  field_post_type?: InputMaybe<Post_Type_Order_By>;
  field_post_type_id?: InputMaybe<Order_By>;
  field_type?: InputMaybe<Field_Type_Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  multiple?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  required?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: field */
export type Field_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "field" */
export enum Field_Select_Column {
  /** column name */
  FieldPostTypeId = 'field_post_type_id',
  /** column name */
  FieldTypeId = 'field_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  Multiple = 'multiple',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Required = 'required',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "field" */
export type Field_Set_Input = {
  field_post_type_id?: InputMaybe<Scalars['Int']>;
  field_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  multiple?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Field_Stddev_Fields = {
  __typename?: 'field_stddev_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "field" */
export type Field_Stddev_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Field_Stddev_Pop_Fields = {
  __typename?: 'field_stddev_pop_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "field" */
export type Field_Stddev_Pop_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Field_Stddev_Samp_Fields = {
  __typename?: 'field_stddev_samp_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "field" */
export type Field_Stddev_Samp_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Field_Sum_Fields = {
  __typename?: 'field_sum_fields';
  field_post_type_id?: Maybe<Scalars['Int']>;
  field_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  order?: Maybe<Scalars['Int']>;
  post_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "field" */
export type Field_Sum_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "field_type" */
export type Field_Type = {
  __typename?: 'field_type';
  id: Scalars['Int'];
  is_post: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  slug: Scalars['String'];
};

/** aggregated selection of "field_type" */
export type Field_Type_Aggregate = {
  __typename?: 'field_type_aggregate';
  aggregate?: Maybe<Field_Type_Aggregate_Fields>;
  nodes: Array<Field_Type>;
};

/** aggregate fields of "field_type" */
export type Field_Type_Aggregate_Fields = {
  __typename?: 'field_type_aggregate_fields';
  avg?: Maybe<Field_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Field_Type_Max_Fields>;
  min?: Maybe<Field_Type_Min_Fields>;
  stddev?: Maybe<Field_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Field_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Field_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Field_Type_Sum_Fields>;
  var_pop?: Maybe<Field_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Field_Type_Var_Samp_Fields>;
  variance?: Maybe<Field_Type_Variance_Fields>;
};


/** aggregate fields of "field_type" */
export type Field_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Field_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Field_Type_Avg_Fields = {
  __typename?: 'field_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "field_type". All fields are combined with a logical 'AND'. */
export type Field_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Field_Type_Bool_Exp>>;
  _not?: InputMaybe<Field_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Field_Type_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_post?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "field_type" */
export enum Field_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  FieldTypePkey = 'field_type_pkey'
}

/** input type for incrementing numeric columns in table "field_type" */
export type Field_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "field_type" */
export type Field_Type_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_post?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Field_Type_Max_Fields = {
  __typename?: 'field_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Field_Type_Min_Fields = {
  __typename?: 'field_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "field_type" */
export type Field_Type_Mutation_Response = {
  __typename?: 'field_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Field_Type>;
};

/** input type for inserting object relation for remote table "field_type" */
export type Field_Type_Obj_Rel_Insert_Input = {
  data: Field_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Field_Type_On_Conflict>;
};

/** on_conflict condition type for table "field_type" */
export type Field_Type_On_Conflict = {
  constraint: Field_Type_Constraint;
  update_columns?: Array<Field_Type_Update_Column>;
  where?: InputMaybe<Field_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "field_type". */
export type Field_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  is_post?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: field_type */
export type Field_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "field_type" */
export enum Field_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsPost = 'is_post',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "field_type" */
export type Field_Type_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_post?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Field_Type_Stddev_Fields = {
  __typename?: 'field_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Field_Type_Stddev_Pop_Fields = {
  __typename?: 'field_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Field_Type_Stddev_Samp_Fields = {
  __typename?: 'field_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Field_Type_Sum_Fields = {
  __typename?: 'field_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "field_type" */
export enum Field_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsPost = 'is_post',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Slug = 'slug'
}

export type Field_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Field_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Field_Type_Set_Input>;
  where: Field_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Field_Type_Var_Pop_Fields = {
  __typename?: 'field_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Field_Type_Var_Samp_Fields = {
  __typename?: 'field_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Field_Type_Variance_Fields = {
  __typename?: 'field_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** update columns of table "field" */
export enum Field_Update_Column {
  /** column name */
  FieldPostTypeId = 'field_post_type_id',
  /** column name */
  FieldTypeId = 'field_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  Multiple = 'multiple',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Required = 'required',
  /** column name */
  Slug = 'slug'
}

export type Field_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Field_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Field_Set_Input>;
  where: Field_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Field_Var_Pop_Fields = {
  __typename?: 'field_var_pop_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "field" */
export type Field_Var_Pop_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Field_Var_Samp_Fields = {
  __typename?: 'field_var_samp_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "field" */
export type Field_Var_Samp_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Field_Variance_Fields = {
  __typename?: 'field_variance_fields';
  field_post_type_id?: Maybe<Scalars['Float']>;
  field_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "field" */
export type Field_Variance_Order_By = {
  field_post_type_id?: InputMaybe<Order_By>;
  field_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "file" */
export type File = {
  __typename?: 'file';
  firebase_path: Scalars['String'];
  id: Scalars['bigint'];
  label: Scalars['String'];
  media_id: Scalars['bigint'];
  url: Scalars['String'];
};

/** aggregated selection of "file" */
export type File_Aggregate = {
  __typename?: 'file_aggregate';
  aggregate?: Maybe<File_Aggregate_Fields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type File_Aggregate_Fields = {
  __typename?: 'file_aggregate_fields';
  avg?: Maybe<File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<File_Max_Fields>;
  min?: Maybe<File_Min_Fields>;
  stddev?: Maybe<File_Stddev_Fields>;
  stddev_pop?: Maybe<File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Stddev_Samp_Fields>;
  sum?: Maybe<File_Sum_Fields>;
  var_pop?: Maybe<File_Var_Pop_Fields>;
  var_samp?: Maybe<File_Var_Samp_Fields>;
  variance?: Maybe<File_Variance_Fields>;
};


/** aggregate fields of "file" */
export type File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "file" */
export type File_Aggregate_Order_By = {
  avg?: InputMaybe<File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<File_Max_Order_By>;
  min?: InputMaybe<File_Min_Order_By>;
  stddev?: InputMaybe<File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<File_Sum_Order_By>;
  var_pop?: InputMaybe<File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<File_Var_Samp_Order_By>;
  variance?: InputMaybe<File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file" */
export type File_Arr_Rel_Insert_Input = {
  data: Array<File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<File_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Avg_Fields = {
  __typename?: 'file_avg_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file" */
export type File_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: InputMaybe<Array<File_Bool_Exp>>;
  _not?: InputMaybe<File_Bool_Exp>;
  _or?: InputMaybe<Array<File_Bool_Exp>>;
  firebase_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  media_id?: InputMaybe<Bigint_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilePkey = 'file_pkey'
}

/** input type for incrementing numeric columns in table "file" */
export type File_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  media_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  firebase_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  label?: InputMaybe<Scalars['String']>;
  media_id?: InputMaybe<Scalars['bigint']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type File_Max_Fields = {
  __typename?: 'file_max_fields';
  firebase_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  media_id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "file" */
export type File_Max_Order_By = {
  firebase_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type File_Min_Fields = {
  __typename?: 'file_min_fields';
  firebase_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  media_id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "file" */
export type File_Min_Order_By = {
  firebase_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "file" */
export type File_Mutation_Response = {
  __typename?: 'file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** on_conflict condition type for table "file" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns?: Array<File_Update_Column>;
  where?: InputMaybe<File_Bool_Exp>;
};

/** Ordering options when selecting data from "file". */
export type File_Order_By = {
  firebase_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file */
export type File_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  FirebasePath = 'firebase_path',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  MediaId = 'media_id',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "file" */
export type File_Set_Input = {
  firebase_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  label?: InputMaybe<Scalars['String']>;
  media_id?: InputMaybe<Scalars['bigint']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type File_Stddev_Fields = {
  __typename?: 'file_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "file" */
export type File_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Stddev_Pop_Fields = {
  __typename?: 'file_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file" */
export type File_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Stddev_Samp_Fields = {
  __typename?: 'file_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file" */
export type File_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Sum_Fields = {
  __typename?: 'file_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  media_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "file" */
export type File_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  FirebasePath = 'firebase_path',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  MediaId = 'media_id',
  /** column name */
  Url = 'url'
}

export type File_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<File_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};

/** aggregate var_pop on columns */
export type File_Var_Pop_Fields = {
  __typename?: 'file_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "file" */
export type File_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Var_Samp_Fields = {
  __typename?: 'file_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file" */
export type File_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Variance_Fields = {
  __typename?: 'file_variance_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file" */
export type File_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "integer_value" */
export type Integer_Value = {
  __typename?: 'integer_value';
  body: Scalars['Int'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "integer_value" */
export type Integer_Value_Aggregate = {
  __typename?: 'integer_value_aggregate';
  aggregate?: Maybe<Integer_Value_Aggregate_Fields>;
  nodes: Array<Integer_Value>;
};

/** aggregate fields of "integer_value" */
export type Integer_Value_Aggregate_Fields = {
  __typename?: 'integer_value_aggregate_fields';
  avg?: Maybe<Integer_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Integer_Value_Max_Fields>;
  min?: Maybe<Integer_Value_Min_Fields>;
  stddev?: Maybe<Integer_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Integer_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Integer_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Integer_Value_Sum_Fields>;
  var_pop?: Maybe<Integer_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Integer_Value_Var_Samp_Fields>;
  variance?: Maybe<Integer_Value_Variance_Fields>;
};


/** aggregate fields of "integer_value" */
export type Integer_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Integer_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Integer_Value_Avg_Fields = {
  __typename?: 'integer_value_avg_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "integer_value". All fields are combined with a logical 'AND'. */
export type Integer_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Integer_Value_Bool_Exp>>;
  _not?: InputMaybe<Integer_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Integer_Value_Bool_Exp>>;
  body?: InputMaybe<Int_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "integer_value" */
export enum Integer_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  IntegerValuePkey1 = 'integer_value_pkey1'
}

/** input type for incrementing numeric columns in table "integer_value" */
export type Integer_Value_Inc_Input = {
  body?: InputMaybe<Scalars['Int']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "integer_value" */
export type Integer_Value_Insert_Input = {
  body?: InputMaybe<Scalars['Int']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Integer_Value_Max_Fields = {
  __typename?: 'integer_value_max_fields';
  body?: Maybe<Scalars['Int']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Integer_Value_Min_Fields = {
  __typename?: 'integer_value_min_fields';
  body?: Maybe<Scalars['Int']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "integer_value" */
export type Integer_Value_Mutation_Response = {
  __typename?: 'integer_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Integer_Value>;
};

/** input type for inserting object relation for remote table "integer_value" */
export type Integer_Value_Obj_Rel_Insert_Input = {
  data: Integer_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Integer_Value_On_Conflict>;
};

/** on_conflict condition type for table "integer_value" */
export type Integer_Value_On_Conflict = {
  constraint: Integer_Value_Constraint;
  update_columns?: Array<Integer_Value_Update_Column>;
  where?: InputMaybe<Integer_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "integer_value". */
export type Integer_Value_Order_By = {
  body?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: integer_value */
export type Integer_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "integer_value" */
export enum Integer_Value_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "integer_value" */
export type Integer_Value_Set_Input = {
  body?: InputMaybe<Scalars['Int']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Integer_Value_Stddev_Fields = {
  __typename?: 'integer_value_stddev_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Integer_Value_Stddev_Pop_Fields = {
  __typename?: 'integer_value_stddev_pop_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Integer_Value_Stddev_Samp_Fields = {
  __typename?: 'integer_value_stddev_samp_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Integer_Value_Sum_Fields = {
  __typename?: 'integer_value_sum_fields';
  body?: Maybe<Scalars['Int']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "integer_value" */
export enum Integer_Value_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

export type Integer_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Integer_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Integer_Value_Set_Input>;
  where: Integer_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Integer_Value_Var_Pop_Fields = {
  __typename?: 'integer_value_var_pop_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Integer_Value_Var_Samp_Fields = {
  __typename?: 'integer_value_var_samp_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Integer_Value_Variance_Fields = {
  __typename?: 'integer_value_variance_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "media" */
export type Media = {
  __typename?: 'media';
  created_at: Scalars['timestamptz'];
  ext?: Maybe<Scalars['String']>;
  /** An array relationship */
  files: Array<File>;
  /** An aggregate relationship */
  files_aggregate: File_Aggregate;
  id: Scalars['bigint'];
  media_type: Scalars['String'];
  name: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};


/** columns and relationships of "media" */
export type MediaFilesArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};

/** aggregated selection of "media" */
export type Media_Aggregate = {
  __typename?: 'media_aggregate';
  aggregate?: Maybe<Media_Aggregate_Fields>;
  nodes: Array<Media>;
};

/** aggregate fields of "media" */
export type Media_Aggregate_Fields = {
  __typename?: 'media_aggregate_fields';
  avg?: Maybe<Media_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Media_Max_Fields>;
  min?: Maybe<Media_Min_Fields>;
  stddev?: Maybe<Media_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Sum_Fields>;
  var_pop?: Maybe<Media_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Var_Samp_Fields>;
  variance?: Maybe<Media_Variance_Fields>;
};


/** aggregate fields of "media" */
export type Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Media_Avg_Fields = {
  __typename?: 'media_avg_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'. */
export type Media_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Bool_Exp>>;
  _not?: InputMaybe<Media_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  ext?: InputMaybe<String_Comparison_Exp>;
  files?: InputMaybe<File_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media" */
export enum Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  MediaPkey = 'media_pkey'
}

/** input type for incrementing numeric columns in table "media" */
export type Media_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "media" */
export type Media_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ext?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  media_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Media_Max_Fields = {
  __typename?: 'media_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  media_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Media_Min_Fields = {
  __typename?: 'media_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  media_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "media" */
export type Media_Mutation_Response = {
  __typename?: 'media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Media>;
};

/** input type for inserting object relation for remote table "media" */
export type Media_Obj_Rel_Insert_Input = {
  data: Media_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_On_Conflict>;
};

/** on_conflict condition type for table "media" */
export type Media_On_Conflict = {
  constraint: Media_Constraint;
  update_columns?: Array<Media_Update_Column>;
  where?: InputMaybe<Media_Bool_Exp>;
};

/** Ordering options when selecting data from "media". */
export type Media_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ext?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media */
export type Media_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "media" */
export enum Media_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Ext = 'ext',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "media" */
export type Media_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  media_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Media_Stddev_Fields = {
  __typename?: 'media_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Media_Stddev_Pop_Fields = {
  __typename?: 'media_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Media_Stddev_Samp_Fields = {
  __typename?: 'media_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Media_Sum_Fields = {
  __typename?: 'media_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  size?: Maybe<Scalars['Int']>;
};

/** update columns of table "media" */
export enum Media_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Ext = 'ext',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Url = 'url'
}

export type Media_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Media_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};

/** columns and relationships of "media_value" */
export type Media_Value = {
  __typename?: 'media_value';
  /** An object relationship */
  body: Media;
  media_id: Scalars['bigint'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "media_value" */
export type Media_Value_Aggregate = {
  __typename?: 'media_value_aggregate';
  aggregate?: Maybe<Media_Value_Aggregate_Fields>;
  nodes: Array<Media_Value>;
};

/** aggregate fields of "media_value" */
export type Media_Value_Aggregate_Fields = {
  __typename?: 'media_value_aggregate_fields';
  avg?: Maybe<Media_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Media_Value_Max_Fields>;
  min?: Maybe<Media_Value_Min_Fields>;
  stddev?: Maybe<Media_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Value_Sum_Fields>;
  var_pop?: Maybe<Media_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Value_Var_Samp_Fields>;
  variance?: Maybe<Media_Value_Variance_Fields>;
};


/** aggregate fields of "media_value" */
export type Media_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Media_Value_Avg_Fields = {
  __typename?: 'media_value_avg_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "media_value". All fields are combined with a logical 'AND'. */
export type Media_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Value_Bool_Exp>>;
  _not?: InputMaybe<Media_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Value_Bool_Exp>>;
  body?: InputMaybe<Media_Bool_Exp>;
  media_id?: InputMaybe<Bigint_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_value" */
export enum Media_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  MediaValuePkey = 'media_value_pkey'
}

/** input type for incrementing numeric columns in table "media_value" */
export type Media_Value_Inc_Input = {
  media_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "media_value" */
export type Media_Value_Insert_Input = {
  body?: InputMaybe<Media_Obj_Rel_Insert_Input>;
  media_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Media_Value_Max_Fields = {
  __typename?: 'media_value_max_fields';
  media_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Media_Value_Min_Fields = {
  __typename?: 'media_value_min_fields';
  media_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "media_value" */
export type Media_Value_Mutation_Response = {
  __typename?: 'media_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Value>;
};

/** input type for inserting object relation for remote table "media_value" */
export type Media_Value_Obj_Rel_Insert_Input = {
  data: Media_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_Value_On_Conflict>;
};

/** on_conflict condition type for table "media_value" */
export type Media_Value_On_Conflict = {
  constraint: Media_Value_Constraint;
  update_columns?: Array<Media_Value_Update_Column>;
  where?: InputMaybe<Media_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "media_value". */
export type Media_Value_Order_By = {
  body?: InputMaybe<Media_Order_By>;
  media_id?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_value */
export type Media_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "media_value" */
export enum Media_Value_Select_Column {
  /** column name */
  MediaId = 'media_id',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "media_value" */
export type Media_Value_Set_Input = {
  media_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Media_Value_Stddev_Fields = {
  __typename?: 'media_value_stddev_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Media_Value_Stddev_Pop_Fields = {
  __typename?: 'media_value_stddev_pop_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Media_Value_Stddev_Samp_Fields = {
  __typename?: 'media_value_stddev_samp_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Media_Value_Sum_Fields = {
  __typename?: 'media_value_sum_fields';
  media_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "media_value" */
export enum Media_Value_Update_Column {
  /** column name */
  MediaId = 'media_id',
  /** column name */
  ValueId = 'value_id'
}

export type Media_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Media_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Value_Set_Input>;
  where: Media_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Media_Value_Var_Pop_Fields = {
  __typename?: 'media_value_var_pop_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Media_Value_Var_Samp_Fields = {
  __typename?: 'media_value_var_samp_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Media_Value_Variance_Fields = {
  __typename?: 'media_value_variance_fields';
  media_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Media_Var_Pop_Fields = {
  __typename?: 'media_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Media_Var_Samp_Fields = {
  __typename?: 'media_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Media_Variance_Fields = {
  __typename?: 'media_variance_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "boolean_value" */
  delete_boolean_value?: Maybe<Boolean_Value_Mutation_Response>;
  /** delete single row from the table: "boolean_value" */
  delete_boolean_value_by_pk?: Maybe<Boolean_Value>;
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "content" */
  delete_content?: Maybe<Content_Mutation_Response>;
  /** delete single row from the table: "content" */
  delete_content_by_pk?: Maybe<Content>;
  /** delete data from the table: "content_tag" */
  delete_content_tag?: Maybe<Content_Tag_Mutation_Response>;
  /** delete single row from the table: "content_tag" */
  delete_content_tag_by_pk?: Maybe<Content_Tag>;
  /** delete data from the table: "field" */
  delete_field?: Maybe<Field_Mutation_Response>;
  /** delete single row from the table: "field" */
  delete_field_by_pk?: Maybe<Field>;
  /** delete data from the table: "field_type" */
  delete_field_type?: Maybe<Field_Type_Mutation_Response>;
  /** delete single row from the table: "field_type" */
  delete_field_type_by_pk?: Maybe<Field_Type>;
  /** delete data from the table: "file" */
  delete_file?: Maybe<File_Mutation_Response>;
  /** delete single row from the table: "file" */
  delete_file_by_pk?: Maybe<File>;
  /** delete data from the table: "integer_value" */
  delete_integer_value?: Maybe<Integer_Value_Mutation_Response>;
  /** delete single row from the table: "integer_value" */
  delete_integer_value_by_pk?: Maybe<Integer_Value>;
  /** delete data from the table: "media" */
  delete_media?: Maybe<Media_Mutation_Response>;
  /** delete single row from the table: "media" */
  delete_media_by_pk?: Maybe<Media>;
  /** delete data from the table: "media_value" */
  delete_media_value?: Maybe<Media_Value_Mutation_Response>;
  /** delete single row from the table: "media_value" */
  delete_media_value_by_pk?: Maybe<Media_Value>;
  /** delete data from the table: "numeric_value" */
  delete_numeric_value?: Maybe<Numeric_Value_Mutation_Response>;
  /** delete single row from the table: "numeric_value" */
  delete_numeric_value_by_pk?: Maybe<Numeric_Value>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "post_tag" */
  delete_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** delete single row from the table: "post_tag" */
  delete_post_tag_by_pk?: Maybe<Post_Tag>;
  /** delete data from the table: "post_type" */
  delete_post_type?: Maybe<Post_Type_Mutation_Response>;
  /** delete single row from the table: "post_type" */
  delete_post_type_by_pk?: Maybe<Post_Type>;
  /** delete data from the table: "post_value" */
  delete_post_value?: Maybe<Post_Value_Mutation_Response>;
  /** delete single row from the table: "post_value" */
  delete_post_value_by_pk?: Maybe<Post_Value>;
  /** delete data from the table: "revision" */
  delete_revision?: Maybe<Revision_Mutation_Response>;
  /** delete single row from the table: "revision" */
  delete_revision_by_pk?: Maybe<Revision>;
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<Tag_Mutation_Response>;
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "text_value" */
  delete_text_value?: Maybe<Text_Value_Mutation_Response>;
  /** delete single row from the table: "text_value" */
  delete_text_value_by_pk?: Maybe<Text_Value>;
  /** delete data from the table: "timestamp_value" */
  delete_timestamp_value?: Maybe<Timestamp_Value_Mutation_Response>;
  /** delete single row from the table: "timestamp_value" */
  delete_timestamp_value_by_pk?: Maybe<Timestamp_Value>;
  /** delete data from the table: "value" */
  delete_value?: Maybe<Value_Mutation_Response>;
  /** delete single row from the table: "value" */
  delete_value_by_pk?: Maybe<Value>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "boolean_value" */
  insert_boolean_value?: Maybe<Boolean_Value_Mutation_Response>;
  /** insert a single row into the table: "boolean_value" */
  insert_boolean_value_one?: Maybe<Boolean_Value>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "content" */
  insert_content?: Maybe<Content_Mutation_Response>;
  /** insert a single row into the table: "content" */
  insert_content_one?: Maybe<Content>;
  /** insert data into the table: "content_tag" */
  insert_content_tag?: Maybe<Content_Tag_Mutation_Response>;
  /** insert a single row into the table: "content_tag" */
  insert_content_tag_one?: Maybe<Content_Tag>;
  /** insert data into the table: "field" */
  insert_field?: Maybe<Field_Mutation_Response>;
  /** insert a single row into the table: "field" */
  insert_field_one?: Maybe<Field>;
  /** insert data into the table: "field_type" */
  insert_field_type?: Maybe<Field_Type_Mutation_Response>;
  /** insert a single row into the table: "field_type" */
  insert_field_type_one?: Maybe<Field_Type>;
  /** insert data into the table: "file" */
  insert_file?: Maybe<File_Mutation_Response>;
  /** insert a single row into the table: "file" */
  insert_file_one?: Maybe<File>;
  /** insert data into the table: "integer_value" */
  insert_integer_value?: Maybe<Integer_Value_Mutation_Response>;
  /** insert a single row into the table: "integer_value" */
  insert_integer_value_one?: Maybe<Integer_Value>;
  /** insert data into the table: "media" */
  insert_media?: Maybe<Media_Mutation_Response>;
  /** insert a single row into the table: "media" */
  insert_media_one?: Maybe<Media>;
  /** insert data into the table: "media_value" */
  insert_media_value?: Maybe<Media_Value_Mutation_Response>;
  /** insert a single row into the table: "media_value" */
  insert_media_value_one?: Maybe<Media_Value>;
  /** insert data into the table: "numeric_value" */
  insert_numeric_value?: Maybe<Numeric_Value_Mutation_Response>;
  /** insert a single row into the table: "numeric_value" */
  insert_numeric_value_one?: Maybe<Numeric_Value>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "post_tag" */
  insert_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** insert a single row into the table: "post_tag" */
  insert_post_tag_one?: Maybe<Post_Tag>;
  /** insert data into the table: "post_type" */
  insert_post_type?: Maybe<Post_Type_Mutation_Response>;
  /** insert a single row into the table: "post_type" */
  insert_post_type_one?: Maybe<Post_Type>;
  /** insert data into the table: "post_value" */
  insert_post_value?: Maybe<Post_Value_Mutation_Response>;
  /** insert a single row into the table: "post_value" */
  insert_post_value_one?: Maybe<Post_Value>;
  /** insert data into the table: "revision" */
  insert_revision?: Maybe<Revision_Mutation_Response>;
  /** insert a single row into the table: "revision" */
  insert_revision_one?: Maybe<Revision>;
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<Tag_Mutation_Response>;
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>;
  /** insert data into the table: "text_value" */
  insert_text_value?: Maybe<Text_Value_Mutation_Response>;
  /** insert a single row into the table: "text_value" */
  insert_text_value_one?: Maybe<Text_Value>;
  /** insert data into the table: "timestamp_value" */
  insert_timestamp_value?: Maybe<Timestamp_Value_Mutation_Response>;
  /** insert a single row into the table: "timestamp_value" */
  insert_timestamp_value_one?: Maybe<Timestamp_Value>;
  /** insert data into the table: "value" */
  insert_value?: Maybe<Value_Mutation_Response>;
  /** insert a single row into the table: "value" */
  insert_value_one?: Maybe<Value>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "boolean_value" */
  update_boolean_value?: Maybe<Boolean_Value_Mutation_Response>;
  /** update single row of the table: "boolean_value" */
  update_boolean_value_by_pk?: Maybe<Boolean_Value>;
  /** update multiples rows of table: "boolean_value" */
  update_boolean_value_many?: Maybe<Array<Maybe<Boolean_Value_Mutation_Response>>>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "content" */
  update_content?: Maybe<Content_Mutation_Response>;
  /** update single row of the table: "content" */
  update_content_by_pk?: Maybe<Content>;
  /** update multiples rows of table: "content" */
  update_content_many?: Maybe<Array<Maybe<Content_Mutation_Response>>>;
  /** update data of the table: "content_tag" */
  update_content_tag?: Maybe<Content_Tag_Mutation_Response>;
  /** update single row of the table: "content_tag" */
  update_content_tag_by_pk?: Maybe<Content_Tag>;
  /** update multiples rows of table: "content_tag" */
  update_content_tag_many?: Maybe<Array<Maybe<Content_Tag_Mutation_Response>>>;
  /** update data of the table: "field" */
  update_field?: Maybe<Field_Mutation_Response>;
  /** update single row of the table: "field" */
  update_field_by_pk?: Maybe<Field>;
  /** update multiples rows of table: "field" */
  update_field_many?: Maybe<Array<Maybe<Field_Mutation_Response>>>;
  /** update data of the table: "field_type" */
  update_field_type?: Maybe<Field_Type_Mutation_Response>;
  /** update single row of the table: "field_type" */
  update_field_type_by_pk?: Maybe<Field_Type>;
  /** update multiples rows of table: "field_type" */
  update_field_type_many?: Maybe<Array<Maybe<Field_Type_Mutation_Response>>>;
  /** update data of the table: "file" */
  update_file?: Maybe<File_Mutation_Response>;
  /** update single row of the table: "file" */
  update_file_by_pk?: Maybe<File>;
  /** update multiples rows of table: "file" */
  update_file_many?: Maybe<Array<Maybe<File_Mutation_Response>>>;
  /** update data of the table: "integer_value" */
  update_integer_value?: Maybe<Integer_Value_Mutation_Response>;
  /** update single row of the table: "integer_value" */
  update_integer_value_by_pk?: Maybe<Integer_Value>;
  /** update multiples rows of table: "integer_value" */
  update_integer_value_many?: Maybe<Array<Maybe<Integer_Value_Mutation_Response>>>;
  /** update data of the table: "media" */
  update_media?: Maybe<Media_Mutation_Response>;
  /** update single row of the table: "media" */
  update_media_by_pk?: Maybe<Media>;
  /** update multiples rows of table: "media" */
  update_media_many?: Maybe<Array<Maybe<Media_Mutation_Response>>>;
  /** update data of the table: "media_value" */
  update_media_value?: Maybe<Media_Value_Mutation_Response>;
  /** update single row of the table: "media_value" */
  update_media_value_by_pk?: Maybe<Media_Value>;
  /** update multiples rows of table: "media_value" */
  update_media_value_many?: Maybe<Array<Maybe<Media_Value_Mutation_Response>>>;
  /** update data of the table: "numeric_value" */
  update_numeric_value?: Maybe<Numeric_Value_Mutation_Response>;
  /** update single row of the table: "numeric_value" */
  update_numeric_value_by_pk?: Maybe<Numeric_Value>;
  /** update multiples rows of table: "numeric_value" */
  update_numeric_value_many?: Maybe<Array<Maybe<Numeric_Value_Mutation_Response>>>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update multiples rows of table: "post" */
  update_post_many?: Maybe<Array<Maybe<Post_Mutation_Response>>>;
  /** update data of the table: "post_tag" */
  update_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** update single row of the table: "post_tag" */
  update_post_tag_by_pk?: Maybe<Post_Tag>;
  /** update multiples rows of table: "post_tag" */
  update_post_tag_many?: Maybe<Array<Maybe<Post_Tag_Mutation_Response>>>;
  /** update data of the table: "post_type" */
  update_post_type?: Maybe<Post_Type_Mutation_Response>;
  /** update single row of the table: "post_type" */
  update_post_type_by_pk?: Maybe<Post_Type>;
  /** update multiples rows of table: "post_type" */
  update_post_type_many?: Maybe<Array<Maybe<Post_Type_Mutation_Response>>>;
  /** update data of the table: "post_value" */
  update_post_value?: Maybe<Post_Value_Mutation_Response>;
  /** update single row of the table: "post_value" */
  update_post_value_by_pk?: Maybe<Post_Value>;
  /** update multiples rows of table: "post_value" */
  update_post_value_many?: Maybe<Array<Maybe<Post_Value_Mutation_Response>>>;
  /** update data of the table: "revision" */
  update_revision?: Maybe<Revision_Mutation_Response>;
  /** update single row of the table: "revision" */
  update_revision_by_pk?: Maybe<Revision>;
  /** update multiples rows of table: "revision" */
  update_revision_many?: Maybe<Array<Maybe<Revision_Mutation_Response>>>;
  /** update data of the table: "tag" */
  update_tag?: Maybe<Tag_Mutation_Response>;
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>;
  /** update multiples rows of table: "tag" */
  update_tag_many?: Maybe<Array<Maybe<Tag_Mutation_Response>>>;
  /** update data of the table: "text_value" */
  update_text_value?: Maybe<Text_Value_Mutation_Response>;
  /** update single row of the table: "text_value" */
  update_text_value_by_pk?: Maybe<Text_Value>;
  /** update multiples rows of table: "text_value" */
  update_text_value_many?: Maybe<Array<Maybe<Text_Value_Mutation_Response>>>;
  /** update data of the table: "timestamp_value" */
  update_timestamp_value?: Maybe<Timestamp_Value_Mutation_Response>;
  /** update single row of the table: "timestamp_value" */
  update_timestamp_value_by_pk?: Maybe<Timestamp_Value>;
  /** update multiples rows of table: "timestamp_value" */
  update_timestamp_value_many?: Maybe<Array<Maybe<Timestamp_Value_Mutation_Response>>>;
  /** update data of the table: "value" */
  update_value?: Maybe<Value_Mutation_Response>;
  /** update single row of the table: "value" */
  update_value_by_pk?: Maybe<Value>;
  /** update multiples rows of table: "value" */
  update_value_many?: Maybe<Array<Maybe<Value_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Boolean_ValueArgs = {
  where: Boolean_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boolean_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ContentArgs = {
  where: Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Content_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Content_TagArgs = {
  where: Content_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Content_Tag_By_PkArgs = {
  content_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FieldArgs = {
  where: Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Field_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Field_TypeArgs = {
  where: Field_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Field_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Integer_ValueArgs = {
  where: Integer_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Integer_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_MediaArgs = {
  where: Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Media_ValueArgs = {
  where: Media_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Numeric_ValueArgs = {
  where: Numeric_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Numeric_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TagArgs = {
  where: Post_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tag_By_PkArgs = {
  post_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TypeArgs = {
  where: Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_ValueArgs = {
  where: Post_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_RevisionArgs = {
  where: Revision_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Revision_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Text_ValueArgs = {
  where: Text_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Text_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Timestamp_ValueArgs = {
  where: Timestamp_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Timestamp_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ValueArgs = {
  where: Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Value_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boolean_ValueArgs = {
  objects: Array<Boolean_Value_Insert_Input>;
  on_conflict?: InputMaybe<Boolean_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boolean_Value_OneArgs = {
  object: Boolean_Value_Insert_Input;
  on_conflict?: InputMaybe<Boolean_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContentArgs = {
  objects: Array<Content_Insert_Input>;
  on_conflict?: InputMaybe<Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Content_OneArgs = {
  object: Content_Insert_Input;
  on_conflict?: InputMaybe<Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Content_TagArgs = {
  objects: Array<Content_Tag_Insert_Input>;
  on_conflict?: InputMaybe<Content_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Content_Tag_OneArgs = {
  object: Content_Tag_Insert_Input;
  on_conflict?: InputMaybe<Content_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FieldArgs = {
  objects: Array<Field_Insert_Input>;
  on_conflict?: InputMaybe<Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Field_OneArgs = {
  object: Field_Insert_Input;
  on_conflict?: InputMaybe<Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Field_TypeArgs = {
  objects: Array<Field_Type_Insert_Input>;
  on_conflict?: InputMaybe<Field_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Field_Type_OneArgs = {
  object: Field_Type_Insert_Input;
  on_conflict?: InputMaybe<Field_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FileArgs = {
  objects: Array<File_Insert_Input>;
  on_conflict?: InputMaybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_OneArgs = {
  object: File_Insert_Input;
  on_conflict?: InputMaybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Integer_ValueArgs = {
  objects: Array<Integer_Value_Insert_Input>;
  on_conflict?: InputMaybe<Integer_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Integer_Value_OneArgs = {
  object: Integer_Value_Insert_Input;
  on_conflict?: InputMaybe<Integer_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MediaArgs = {
  objects: Array<Media_Insert_Input>;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_OneArgs = {
  object: Media_Insert_Input;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_ValueArgs = {
  objects: Array<Media_Value_Insert_Input>;
  on_conflict?: InputMaybe<Media_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Value_OneArgs = {
  object: Media_Value_Insert_Input;
  on_conflict?: InputMaybe<Media_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Numeric_ValueArgs = {
  objects: Array<Numeric_Value_Insert_Input>;
  on_conflict?: InputMaybe<Numeric_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Numeric_Value_OneArgs = {
  object: Numeric_Value_Insert_Input;
  on_conflict?: InputMaybe<Numeric_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TagArgs = {
  objects: Array<Post_Tag_Insert_Input>;
  on_conflict?: InputMaybe<Post_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Tag_OneArgs = {
  object: Post_Tag_Insert_Input;
  on_conflict?: InputMaybe<Post_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TypeArgs = {
  objects: Array<Post_Type_Insert_Input>;
  on_conflict?: InputMaybe<Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Type_OneArgs = {
  object: Post_Type_Insert_Input;
  on_conflict?: InputMaybe<Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_ValueArgs = {
  objects: Array<Post_Value_Insert_Input>;
  on_conflict?: InputMaybe<Post_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Value_OneArgs = {
  object: Post_Value_Insert_Input;
  on_conflict?: InputMaybe<Post_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RevisionArgs = {
  objects: Array<Revision_Insert_Input>;
  on_conflict?: InputMaybe<Revision_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Revision_OneArgs = {
  object: Revision_Insert_Input;
  on_conflict?: InputMaybe<Revision_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Text_ValueArgs = {
  objects: Array<Text_Value_Insert_Input>;
  on_conflict?: InputMaybe<Text_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Text_Value_OneArgs = {
  object: Text_Value_Insert_Input;
  on_conflict?: InputMaybe<Text_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Timestamp_ValueArgs = {
  objects: Array<Timestamp_Value_Insert_Input>;
  on_conflict?: InputMaybe<Timestamp_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Timestamp_Value_OneArgs = {
  object: Timestamp_Value_Insert_Input;
  on_conflict?: InputMaybe<Timestamp_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ValueArgs = {
  objects: Array<Value_Insert_Input>;
  on_conflict?: InputMaybe<Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Value_OneArgs = {
  object: Value_Insert_Input;
  on_conflict?: InputMaybe<Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Boolean_ValueArgs = {
  _inc?: InputMaybe<Boolean_Value_Inc_Input>;
  _set?: InputMaybe<Boolean_Value_Set_Input>;
  where: Boolean_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boolean_Value_By_PkArgs = {
  _inc?: InputMaybe<Boolean_Value_Inc_Input>;
  _set?: InputMaybe<Boolean_Value_Set_Input>;
  pk_columns: Boolean_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boolean_Value_ManyArgs = {
  updates: Array<Boolean_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContentArgs = {
  _inc?: InputMaybe<Content_Inc_Input>;
  _set?: InputMaybe<Content_Set_Input>;
  where: Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Content_By_PkArgs = {
  _inc?: InputMaybe<Content_Inc_Input>;
  _set?: InputMaybe<Content_Set_Input>;
  pk_columns: Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Content_ManyArgs = {
  updates: Array<Content_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Content_TagArgs = {
  _inc?: InputMaybe<Content_Tag_Inc_Input>;
  _set?: InputMaybe<Content_Tag_Set_Input>;
  where: Content_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Content_Tag_By_PkArgs = {
  _inc?: InputMaybe<Content_Tag_Inc_Input>;
  _set?: InputMaybe<Content_Tag_Set_Input>;
  pk_columns: Content_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Content_Tag_ManyArgs = {
  updates: Array<Content_Tag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FieldArgs = {
  _inc?: InputMaybe<Field_Inc_Input>;
  _set?: InputMaybe<Field_Set_Input>;
  where: Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Field_By_PkArgs = {
  _inc?: InputMaybe<Field_Inc_Input>;
  _set?: InputMaybe<Field_Set_Input>;
  pk_columns: Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Field_ManyArgs = {
  updates: Array<Field_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Field_TypeArgs = {
  _inc?: InputMaybe<Field_Type_Inc_Input>;
  _set?: InputMaybe<Field_Type_Set_Input>;
  where: Field_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Field_Type_By_PkArgs = {
  _inc?: InputMaybe<Field_Type_Inc_Input>;
  _set?: InputMaybe<Field_Type_Set_Input>;
  pk_columns: Field_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Field_Type_ManyArgs = {
  updates: Array<Field_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FileArgs = {
  _inc?: InputMaybe<File_Inc_Input>;
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_By_PkArgs = {
  _inc?: InputMaybe<File_Inc_Input>;
  _set?: InputMaybe<File_Set_Input>;
  pk_columns: File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_ManyArgs = {
  updates: Array<File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Integer_ValueArgs = {
  _inc?: InputMaybe<Integer_Value_Inc_Input>;
  _set?: InputMaybe<Integer_Value_Set_Input>;
  where: Integer_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Integer_Value_By_PkArgs = {
  _inc?: InputMaybe<Integer_Value_Inc_Input>;
  _set?: InputMaybe<Integer_Value_Set_Input>;
  pk_columns: Integer_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Integer_Value_ManyArgs = {
  updates: Array<Integer_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MediaArgs = {
  _inc?: InputMaybe<Media_Inc_Input>;
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_By_PkArgs = {
  _inc?: InputMaybe<Media_Inc_Input>;
  _set?: InputMaybe<Media_Set_Input>;
  pk_columns: Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_ManyArgs = {
  updates: Array<Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_ValueArgs = {
  _inc?: InputMaybe<Media_Value_Inc_Input>;
  _set?: InputMaybe<Media_Value_Set_Input>;
  where: Media_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Value_By_PkArgs = {
  _inc?: InputMaybe<Media_Value_Inc_Input>;
  _set?: InputMaybe<Media_Value_Set_Input>;
  pk_columns: Media_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Value_ManyArgs = {
  updates: Array<Media_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Numeric_ValueArgs = {
  _inc?: InputMaybe<Numeric_Value_Inc_Input>;
  _set?: InputMaybe<Numeric_Value_Set_Input>;
  where: Numeric_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Numeric_Value_By_PkArgs = {
  _inc?: InputMaybe<Numeric_Value_Inc_Input>;
  _set?: InputMaybe<Numeric_Value_Set_Input>;
  pk_columns: Numeric_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Numeric_Value_ManyArgs = {
  updates: Array<Numeric_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ManyArgs = {
  updates: Array<Post_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TagArgs = {
  _inc?: InputMaybe<Post_Tag_Inc_Input>;
  _set?: InputMaybe<Post_Tag_Set_Input>;
  where: Post_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tag_By_PkArgs = {
  _inc?: InputMaybe<Post_Tag_Inc_Input>;
  _set?: InputMaybe<Post_Tag_Set_Input>;
  pk_columns: Post_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tag_ManyArgs = {
  updates: Array<Post_Tag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TypeArgs = {
  _inc?: InputMaybe<Post_Type_Inc_Input>;
  _set?: InputMaybe<Post_Type_Set_Input>;
  where: Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Type_By_PkArgs = {
  _inc?: InputMaybe<Post_Type_Inc_Input>;
  _set?: InputMaybe<Post_Type_Set_Input>;
  pk_columns: Post_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Type_ManyArgs = {
  updates: Array<Post_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ValueArgs = {
  _inc?: InputMaybe<Post_Value_Inc_Input>;
  _set?: InputMaybe<Post_Value_Set_Input>;
  where: Post_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Value_By_PkArgs = {
  _inc?: InputMaybe<Post_Value_Inc_Input>;
  _set?: InputMaybe<Post_Value_Set_Input>;
  pk_columns: Post_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Value_ManyArgs = {
  updates: Array<Post_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RevisionArgs = {
  _inc?: InputMaybe<Revision_Inc_Input>;
  _set?: InputMaybe<Revision_Set_Input>;
  where: Revision_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Revision_By_PkArgs = {
  _inc?: InputMaybe<Revision_Inc_Input>;
  _set?: InputMaybe<Revision_Set_Input>;
  pk_columns: Revision_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Revision_ManyArgs = {
  updates: Array<Revision_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  pk_columns: Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_ManyArgs = {
  updates: Array<Tag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Text_ValueArgs = {
  _inc?: InputMaybe<Text_Value_Inc_Input>;
  _set?: InputMaybe<Text_Value_Set_Input>;
  where: Text_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Text_Value_By_PkArgs = {
  _inc?: InputMaybe<Text_Value_Inc_Input>;
  _set?: InputMaybe<Text_Value_Set_Input>;
  pk_columns: Text_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Text_Value_ManyArgs = {
  updates: Array<Text_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Timestamp_ValueArgs = {
  _inc?: InputMaybe<Timestamp_Value_Inc_Input>;
  _set?: InputMaybe<Timestamp_Value_Set_Input>;
  where: Timestamp_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Timestamp_Value_By_PkArgs = {
  _inc?: InputMaybe<Timestamp_Value_Inc_Input>;
  _set?: InputMaybe<Timestamp_Value_Set_Input>;
  pk_columns: Timestamp_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Timestamp_Value_ManyArgs = {
  updates: Array<Timestamp_Value_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ValueArgs = {
  _inc?: InputMaybe<Value_Inc_Input>;
  _set?: InputMaybe<Value_Set_Input>;
  where: Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Value_By_PkArgs = {
  _inc?: InputMaybe<Value_Inc_Input>;
  _set?: InputMaybe<Value_Set_Input>;
  pk_columns: Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Value_ManyArgs = {
  updates: Array<Value_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "numeric_value" */
export type Numeric_Value = {
  __typename?: 'numeric_value';
  body: Scalars['numeric'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "numeric_value" */
export type Numeric_Value_Aggregate = {
  __typename?: 'numeric_value_aggregate';
  aggregate?: Maybe<Numeric_Value_Aggregate_Fields>;
  nodes: Array<Numeric_Value>;
};

/** aggregate fields of "numeric_value" */
export type Numeric_Value_Aggregate_Fields = {
  __typename?: 'numeric_value_aggregate_fields';
  avg?: Maybe<Numeric_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Numeric_Value_Max_Fields>;
  min?: Maybe<Numeric_Value_Min_Fields>;
  stddev?: Maybe<Numeric_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Numeric_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Numeric_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Numeric_Value_Sum_Fields>;
  var_pop?: Maybe<Numeric_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Numeric_Value_Var_Samp_Fields>;
  variance?: Maybe<Numeric_Value_Variance_Fields>;
};


/** aggregate fields of "numeric_value" */
export type Numeric_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Numeric_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Numeric_Value_Avg_Fields = {
  __typename?: 'numeric_value_avg_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "numeric_value". All fields are combined with a logical 'AND'. */
export type Numeric_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Numeric_Value_Bool_Exp>>;
  _not?: InputMaybe<Numeric_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Numeric_Value_Bool_Exp>>;
  body?: InputMaybe<Numeric_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "numeric_value" */
export enum Numeric_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  IntegerValuePkey = 'integer_value_pkey'
}

/** input type for incrementing numeric columns in table "numeric_value" */
export type Numeric_Value_Inc_Input = {
  body?: InputMaybe<Scalars['numeric']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "numeric_value" */
export type Numeric_Value_Insert_Input = {
  body?: InputMaybe<Scalars['numeric']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Numeric_Value_Max_Fields = {
  __typename?: 'numeric_value_max_fields';
  body?: Maybe<Scalars['numeric']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Numeric_Value_Min_Fields = {
  __typename?: 'numeric_value_min_fields';
  body?: Maybe<Scalars['numeric']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "numeric_value" */
export type Numeric_Value_Mutation_Response = {
  __typename?: 'numeric_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Numeric_Value>;
};

/** input type for inserting object relation for remote table "numeric_value" */
export type Numeric_Value_Obj_Rel_Insert_Input = {
  data: Numeric_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Numeric_Value_On_Conflict>;
};

/** on_conflict condition type for table "numeric_value" */
export type Numeric_Value_On_Conflict = {
  constraint: Numeric_Value_Constraint;
  update_columns?: Array<Numeric_Value_Update_Column>;
  where?: InputMaybe<Numeric_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "numeric_value". */
export type Numeric_Value_Order_By = {
  body?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: numeric_value */
export type Numeric_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "numeric_value" */
export enum Numeric_Value_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "numeric_value" */
export type Numeric_Value_Set_Input = {
  body?: InputMaybe<Scalars['numeric']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Numeric_Value_Stddev_Fields = {
  __typename?: 'numeric_value_stddev_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Numeric_Value_Stddev_Pop_Fields = {
  __typename?: 'numeric_value_stddev_pop_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Numeric_Value_Stddev_Samp_Fields = {
  __typename?: 'numeric_value_stddev_samp_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Numeric_Value_Sum_Fields = {
  __typename?: 'numeric_value_sum_fields';
  body?: Maybe<Scalars['numeric']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "numeric_value" */
export enum Numeric_Value_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

export type Numeric_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Numeric_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Numeric_Value_Set_Input>;
  where: Numeric_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Numeric_Value_Var_Pop_Fields = {
  __typename?: 'numeric_value_var_pop_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Numeric_Value_Var_Samp_Fields = {
  __typename?: 'numeric_value_var_samp_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Numeric_Value_Variance_Fields = {
  __typename?: 'numeric_value_variance_fields';
  body?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** post */
export type Post = {
  __typename?: 'post';
  /** An object relationship */
  category: Category;
  category_id: Scalars['Int'];
  /** An array relationship */
  contents: Array<Content>;
  /** An aggregate relationship */
  contents_aggregate: Content_Aggregate;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  /** An object relationship */
  post_type: Post_Type;
  post_type_id: Scalars['Int'];
  /** An array relationship */
  revisions: Array<Revision>;
  /** An aggregate relationship */
  revisions_aggregate: Revision_Aggregate;
  /** An array relationship */
  tags: Array<Post_Tag>;
  /** An aggregate relationship */
  tags_aggregate: Post_Tag_Aggregate;
  title: Scalars['String'];
};


/** post */
export type PostContentsArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


/** post */
export type PostContents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


/** post */
export type PostRevisionsArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


/** post */
export type PostRevisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


/** post */
export type PostTagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


/** post */
export type PostTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};


/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
  stddev?: InputMaybe<Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'post_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post" */
export type Post_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  contents?: InputMaybe<Content_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post_type?: InputMaybe<Post_Type_Bool_Exp>;
  post_type_id?: InputMaybe<Int_Comparison_Exp>;
  revisions?: InputMaybe<Revision_Bool_Exp>;
  tags?: InputMaybe<Post_Tag_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'post_pkey'
}

/** input type for incrementing numeric columns in table "post" */
export type Post_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']>;
  contents?: InputMaybe<Content_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_type?: InputMaybe<Post_Type_Obj_Rel_Insert_Input>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<Revision_Arr_Rel_Insert_Input>;
  tags?: InputMaybe<Post_Tag_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'post_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'post_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** on_conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  contents_aggregate?: InputMaybe<Content_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type?: InputMaybe<Post_Type_Order_By>;
  post_type_id?: InputMaybe<Order_By>;
  revisions_aggregate?: InputMaybe<Revision_Aggregate_Order_By>;
  tags_aggregate?: InputMaybe<Post_Tag_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post */
export type Post_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_type_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'post_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post" */
export type Post_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'post_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post" */
export type Post_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'post_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post" */
export type Post_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'post_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  post_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post" */
export type Post_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "post_tag" */
export type Post_Tag = {
  __typename?: 'post_tag';
  /** An object relationship */
  post: Post;
  post_id: Scalars['bigint'];
  /** An object relationship */
  tag: Tag;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "post_tag" */
export type Post_Tag_Aggregate = {
  __typename?: 'post_tag_aggregate';
  aggregate?: Maybe<Post_Tag_Aggregate_Fields>;
  nodes: Array<Post_Tag>;
};

/** aggregate fields of "post_tag" */
export type Post_Tag_Aggregate_Fields = {
  __typename?: 'post_tag_aggregate_fields';
  avg?: Maybe<Post_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Tag_Max_Fields>;
  min?: Maybe<Post_Tag_Min_Fields>;
  stddev?: Maybe<Post_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Tag_Sum_Fields>;
  var_pop?: Maybe<Post_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Tag_Var_Samp_Fields>;
  variance?: Maybe<Post_Tag_Variance_Fields>;
};


/** aggregate fields of "post_tag" */
export type Post_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_tag" */
export type Post_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Tag_Max_Order_By>;
  min?: InputMaybe<Post_Tag_Min_Order_By>;
  stddev?: InputMaybe<Post_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_tag" */
export type Post_Tag_Arr_Rel_Insert_Input = {
  data: Array<Post_Tag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Tag_Avg_Fields = {
  __typename?: 'post_tag_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_tag" */
export type Post_Tag_Avg_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_tag". All fields are combined with a logical 'AND'. */
export type Post_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Tag_Bool_Exp>>;
  _not?: InputMaybe<Post_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Tag_Bool_Exp>>;
  post?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  tag?: InputMaybe<Tag_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_tag" */
export enum Post_Tag_Constraint {
  /** unique or primary key constraint on columns "tag_id", "post_id" */
  PostTagPkey1 = 'post_tag_pkey1'
}

/** input type for incrementing numeric columns in table "post_tag" */
export type Post_Tag_Inc_Input = {
  post_id?: InputMaybe<Scalars['bigint']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_tag" */
export type Post_Tag_Insert_Input = {
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']>;
  tag?: InputMaybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Post_Tag_Max_Fields = {
  __typename?: 'post_tag_max_fields';
  post_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_tag" */
export type Post_Tag_Max_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Tag_Min_Fields = {
  __typename?: 'post_tag_min_fields';
  post_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_tag" */
export type Post_Tag_Min_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_tag" */
export type Post_Tag_Mutation_Response = {
  __typename?: 'post_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Tag>;
};

/** on_conflict condition type for table "post_tag" */
export type Post_Tag_On_Conflict = {
  constraint: Post_Tag_Constraint;
  update_columns?: Array<Post_Tag_Update_Column>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "post_tag". */
export type Post_Tag_Order_By = {
  post?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_tag */
export type Post_Tag_Pk_Columns_Input = {
  post_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};

/** select columns of table "post_tag" */
export enum Post_Tag_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "post_tag" */
export type Post_Tag_Set_Input = {
  post_id?: InputMaybe<Scalars['bigint']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Post_Tag_Stddev_Fields = {
  __typename?: 'post_tag_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_tag" */
export type Post_Tag_Stddev_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Tag_Stddev_Pop_Fields = {
  __typename?: 'post_tag_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_tag" */
export type Post_Tag_Stddev_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Tag_Stddev_Samp_Fields = {
  __typename?: 'post_tag_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_tag" */
export type Post_Tag_Stddev_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Tag_Sum_Fields = {
  __typename?: 'post_tag_sum_fields';
  post_id?: Maybe<Scalars['bigint']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_tag" */
export type Post_Tag_Sum_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "post_tag" */
export enum Post_Tag_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

export type Post_Tag_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Tag_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Tag_Set_Input>;
  where: Post_Tag_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Tag_Var_Pop_Fields = {
  __typename?: 'post_tag_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_tag" */
export type Post_Tag_Var_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Tag_Var_Samp_Fields = {
  __typename?: 'post_tag_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_tag" */
export type Post_Tag_Var_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Tag_Variance_Fields = {
  __typename?: 'post_tag_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_tag" */
export type Post_Tag_Variance_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "post_type" */
export type Post_Type = {
  __typename?: 'post_type';
  /** An array relationship */
  fields: Array<Field>;
  /** An aggregate relationship */
  fields_aggregate: Field_Aggregate;
  icon_tag?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  public: Scalars['Boolean'];
  slug: Scalars['String'];
};


/** columns and relationships of "post_type" */
export type Post_TypeFieldsArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};


/** columns and relationships of "post_type" */
export type Post_TypeFields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};

/** aggregated selection of "post_type" */
export type Post_Type_Aggregate = {
  __typename?: 'post_type_aggregate';
  aggregate?: Maybe<Post_Type_Aggregate_Fields>;
  nodes: Array<Post_Type>;
};

/** aggregate fields of "post_type" */
export type Post_Type_Aggregate_Fields = {
  __typename?: 'post_type_aggregate_fields';
  avg?: Maybe<Post_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Type_Max_Fields>;
  min?: Maybe<Post_Type_Min_Fields>;
  stddev?: Maybe<Post_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Type_Sum_Fields>;
  var_pop?: Maybe<Post_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Type_Var_Samp_Fields>;
  variance?: Maybe<Post_Type_Variance_Fields>;
};


/** aggregate fields of "post_type" */
export type Post_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Post_Type_Avg_Fields = {
  __typename?: 'post_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "post_type". All fields are combined with a logical 'AND'. */
export type Post_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Type_Bool_Exp>>;
  _not?: InputMaybe<Post_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Type_Bool_Exp>>;
  fields?: InputMaybe<Field_Bool_Exp>;
  icon_tag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_type" */
export enum Post_Type_Constraint {
  /** unique or primary key constraint on columns "slug" */
  PostTypeNameKey = 'post_type_name_key',
  /** unique or primary key constraint on columns "id" */
  PostTypePkey = 'post_type_pkey'
}

/** input type for incrementing numeric columns in table "post_type" */
export type Post_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_type" */
export type Post_Type_Insert_Input = {
  fields?: InputMaybe<Field_Arr_Rel_Insert_Input>;
  icon_tag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  public?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Type_Max_Fields = {
  __typename?: 'post_type_max_fields';
  icon_tag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Post_Type_Min_Fields = {
  __typename?: 'post_type_min_fields';
  icon_tag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_type" */
export type Post_Type_Mutation_Response = {
  __typename?: 'post_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Type>;
};

/** input type for inserting object relation for remote table "post_type" */
export type Post_Type_Obj_Rel_Insert_Input = {
  data: Post_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Type_On_Conflict>;
};

/** on_conflict condition type for table "post_type" */
export type Post_Type_On_Conflict = {
  constraint: Post_Type_Constraint;
  update_columns?: Array<Post_Type_Update_Column>;
  where?: InputMaybe<Post_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "post_type". */
export type Post_Type_Order_By = {
  fields_aggregate?: InputMaybe<Field_Aggregate_Order_By>;
  icon_tag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  public?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_type */
export type Post_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_type" */
export enum Post_Type_Select_Column {
  /** column name */
  IconTag = 'icon_tag',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Public = 'public',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "post_type" */
export type Post_Type_Set_Input = {
  icon_tag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  public?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Type_Stddev_Fields = {
  __typename?: 'post_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Post_Type_Stddev_Pop_Fields = {
  __typename?: 'post_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Post_Type_Stddev_Samp_Fields = {
  __typename?: 'post_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Post_Type_Sum_Fields = {
  __typename?: 'post_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "post_type" */
export enum Post_Type_Update_Column {
  /** column name */
  IconTag = 'icon_tag',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Public = 'public',
  /** column name */
  Slug = 'slug'
}

export type Post_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Type_Set_Input>;
  where: Post_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Type_Var_Pop_Fields = {
  __typename?: 'post_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Post_Type_Var_Samp_Fields = {
  __typename?: 'post_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Post_Type_Variance_Fields = {
  __typename?: 'post_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostTypeId = 'post_type_id',
  /** column name */
  Title = 'title'
}

export type Post_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** columns and relationships of "post_value" */
export type Post_Value = {
  __typename?: 'post_value';
  /** An object relationship */
  body: Post;
  post_id: Scalars['bigint'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "post_value" */
export type Post_Value_Aggregate = {
  __typename?: 'post_value_aggregate';
  aggregate?: Maybe<Post_Value_Aggregate_Fields>;
  nodes: Array<Post_Value>;
};

/** aggregate fields of "post_value" */
export type Post_Value_Aggregate_Fields = {
  __typename?: 'post_value_aggregate_fields';
  avg?: Maybe<Post_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Value_Max_Fields>;
  min?: Maybe<Post_Value_Min_Fields>;
  stddev?: Maybe<Post_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Value_Sum_Fields>;
  var_pop?: Maybe<Post_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Value_Var_Samp_Fields>;
  variance?: Maybe<Post_Value_Variance_Fields>;
};


/** aggregate fields of "post_value" */
export type Post_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Post_Value_Avg_Fields = {
  __typename?: 'post_value_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "post_value". All fields are combined with a logical 'AND'. */
export type Post_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Value_Bool_Exp>>;
  _not?: InputMaybe<Post_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Value_Bool_Exp>>;
  body?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_value" */
export enum Post_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  PostValuePkey1 = 'post_value_pkey1'
}

/** input type for incrementing numeric columns in table "post_value" */
export type Post_Value_Inc_Input = {
  post_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "post_value" */
export type Post_Value_Insert_Input = {
  body?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Post_Value_Max_Fields = {
  __typename?: 'post_value_max_fields';
  post_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Post_Value_Min_Fields = {
  __typename?: 'post_value_min_fields';
  post_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "post_value" */
export type Post_Value_Mutation_Response = {
  __typename?: 'post_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Value>;
};

/** input type for inserting object relation for remote table "post_value" */
export type Post_Value_Obj_Rel_Insert_Input = {
  data: Post_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Value_On_Conflict>;
};

/** on_conflict condition type for table "post_value" */
export type Post_Value_On_Conflict = {
  constraint: Post_Value_Constraint;
  update_columns?: Array<Post_Value_Update_Column>;
  where?: InputMaybe<Post_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "post_value". */
export type Post_Value_Order_By = {
  body?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_value */
export type Post_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "post_value" */
export enum Post_Value_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "post_value" */
export type Post_Value_Set_Input = {
  post_id?: InputMaybe<Scalars['bigint']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Post_Value_Stddev_Fields = {
  __typename?: 'post_value_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Post_Value_Stddev_Pop_Fields = {
  __typename?: 'post_value_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Post_Value_Stddev_Samp_Fields = {
  __typename?: 'post_value_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Post_Value_Sum_Fields = {
  __typename?: 'post_value_sum_fields';
  post_id?: Maybe<Scalars['bigint']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "post_value" */
export enum Post_Value_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  ValueId = 'value_id'
}

export type Post_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Value_Set_Input>;
  where: Post_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Value_Var_Pop_Fields = {
  __typename?: 'post_value_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Post_Value_Var_Samp_Fields = {
  __typename?: 'post_value_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Post_Value_Variance_Fields = {
  __typename?: 'post_value_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'post_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post" */
export type Post_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'post_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post" */
export type Post_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'post_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post" */
export type Post_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_type_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "boolean_value" */
  boolean_value: Array<Boolean_Value>;
  /** fetch aggregated fields from the table: "boolean_value" */
  boolean_value_aggregate: Boolean_Value_Aggregate;
  /** fetch data from the table: "boolean_value" using primary key columns */
  boolean_value_by_pk?: Maybe<Boolean_Value>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "content" */
  content: Array<Content>;
  /** fetch aggregated fields from the table: "content" */
  content_aggregate: Content_Aggregate;
  /** fetch data from the table: "content" using primary key columns */
  content_by_pk?: Maybe<Content>;
  /** fetch data from the table: "content_tag" */
  content_tag: Array<Content_Tag>;
  /** fetch aggregated fields from the table: "content_tag" */
  content_tag_aggregate: Content_Tag_Aggregate;
  /** fetch data from the table: "content_tag" using primary key columns */
  content_tag_by_pk?: Maybe<Content_Tag>;
  /** fetch data from the table: "field" */
  field: Array<Field>;
  /** fetch aggregated fields from the table: "field" */
  field_aggregate: Field_Aggregate;
  /** fetch data from the table: "field" using primary key columns */
  field_by_pk?: Maybe<Field>;
  /** fetch data from the table: "field_type" */
  field_type: Array<Field_Type>;
  /** fetch aggregated fields from the table: "field_type" */
  field_type_aggregate: Field_Type_Aggregate;
  /** fetch data from the table: "field_type" using primary key columns */
  field_type_by_pk?: Maybe<Field_Type>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "integer_value" */
  integer_value: Array<Integer_Value>;
  /** fetch aggregated fields from the table: "integer_value" */
  integer_value_aggregate: Integer_Value_Aggregate;
  /** fetch data from the table: "integer_value" using primary key columns */
  integer_value_by_pk?: Maybe<Integer_Value>;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch aggregated fields from the table: "media" */
  media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "media_value" */
  media_value: Array<Media_Value>;
  /** fetch aggregated fields from the table: "media_value" */
  media_value_aggregate: Media_Value_Aggregate;
  /** fetch data from the table: "media_value" using primary key columns */
  media_value_by_pk?: Maybe<Media_Value>;
  /** fetch data from the table: "numeric_value" */
  numeric_value: Array<Numeric_Value>;
  /** fetch aggregated fields from the table: "numeric_value" */
  numeric_value_aggregate: Numeric_Value_Aggregate;
  /** fetch data from the table: "numeric_value" using primary key columns */
  numeric_value_by_pk?: Maybe<Numeric_Value>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_tag" */
  post_tag: Array<Post_Tag>;
  /** fetch aggregated fields from the table: "post_tag" */
  post_tag_aggregate: Post_Tag_Aggregate;
  /** fetch data from the table: "post_tag" using primary key columns */
  post_tag_by_pk?: Maybe<Post_Tag>;
  /** fetch data from the table: "post_type" */
  post_type: Array<Post_Type>;
  /** fetch aggregated fields from the table: "post_type" */
  post_type_aggregate: Post_Type_Aggregate;
  /** fetch data from the table: "post_type" using primary key columns */
  post_type_by_pk?: Maybe<Post_Type>;
  /** fetch data from the table: "post_value" */
  post_value: Array<Post_Value>;
  /** fetch aggregated fields from the table: "post_value" */
  post_value_aggregate: Post_Value_Aggregate;
  /** fetch data from the table: "post_value" using primary key columns */
  post_value_by_pk?: Maybe<Post_Value>;
  /** fetch data from the table: "revision" */
  revision: Array<Revision>;
  /** fetch aggregated fields from the table: "revision" */
  revision_aggregate: Revision_Aggregate;
  /** fetch data from the table: "revision" using primary key columns */
  revision_by_pk?: Maybe<Revision>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "text_value" */
  text_value: Array<Text_Value>;
  /** fetch aggregated fields from the table: "text_value" */
  text_value_aggregate: Text_Value_Aggregate;
  /** fetch data from the table: "text_value" using primary key columns */
  text_value_by_pk?: Maybe<Text_Value>;
  /** fetch data from the table: "timestamp_value" */
  timestamp_value: Array<Timestamp_Value>;
  /** fetch aggregated fields from the table: "timestamp_value" */
  timestamp_value_aggregate: Timestamp_Value_Aggregate;
  /** fetch data from the table: "timestamp_value" using primary key columns */
  timestamp_value_by_pk?: Maybe<Timestamp_Value>;
  /** fetch data from the table: "value" */
  value: Array<Value>;
  /** fetch aggregated fields from the table: "value" */
  value_aggregate: Value_Aggregate;
  /** fetch data from the table: "value" using primary key columns */
  value_by_pk?: Maybe<Value>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBoolean_ValueArgs = {
  distinct_on?: InputMaybe<Array<Boolean_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boolean_Value_Order_By>>;
  where?: InputMaybe<Boolean_Value_Bool_Exp>;
};


export type Query_RootBoolean_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boolean_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boolean_Value_Order_By>>;
  where?: InputMaybe<Boolean_Value_Bool_Exp>;
};


export type Query_RootBoolean_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootContentArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


export type Query_RootContent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


export type Query_RootContent_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootContent_TagArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};


export type Query_RootContent_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};


export type Query_RootContent_Tag_By_PkArgs = {
  content_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


export type Query_RootFieldArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};


export type Query_RootField_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};


export type Query_RootField_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootField_TypeArgs = {
  distinct_on?: InputMaybe<Array<Field_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Type_Order_By>>;
  where?: InputMaybe<Field_Type_Bool_Exp>;
};


export type Query_RootField_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Field_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Type_Order_By>>;
  where?: InputMaybe<Field_Type_Bool_Exp>;
};


export type Query_RootField_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFileArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Query_RootFile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Query_RootFile_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInteger_ValueArgs = {
  distinct_on?: InputMaybe<Array<Integer_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integer_Value_Order_By>>;
  where?: InputMaybe<Integer_Value_Bool_Exp>;
};


export type Query_RootInteger_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integer_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integer_Value_Order_By>>;
  where?: InputMaybe<Integer_Value_Bool_Exp>;
};


export type Query_RootInteger_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Query_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Query_RootMedia_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootMedia_ValueArgs = {
  distinct_on?: InputMaybe<Array<Media_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Value_Order_By>>;
  where?: InputMaybe<Media_Value_Bool_Exp>;
};


export type Query_RootMedia_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Value_Order_By>>;
  where?: InputMaybe<Media_Value_Bool_Exp>;
};


export type Query_RootMedia_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootNumeric_ValueArgs = {
  distinct_on?: InputMaybe<Array<Numeric_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Numeric_Value_Order_By>>;
  where?: InputMaybe<Numeric_Value_Bool_Exp>;
};


export type Query_RootNumeric_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Numeric_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Numeric_Value_Order_By>>;
  where?: InputMaybe<Numeric_Value_Bool_Exp>;
};


export type Query_RootNumeric_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPost_TagArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


export type Query_RootPost_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


export type Query_RootPost_Tag_By_PkArgs = {
  post_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


export type Query_RootPost_TypeArgs = {
  distinct_on?: InputMaybe<Array<Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Type_Order_By>>;
  where?: InputMaybe<Post_Type_Bool_Exp>;
};


export type Query_RootPost_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Type_Order_By>>;
  where?: InputMaybe<Post_Type_Bool_Exp>;
};


export type Query_RootPost_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPost_ValueArgs = {
  distinct_on?: InputMaybe<Array<Post_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Value_Order_By>>;
  where?: InputMaybe<Post_Value_Bool_Exp>;
};


export type Query_RootPost_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Value_Order_By>>;
  where?: InputMaybe<Post_Value_Bool_Exp>;
};


export type Query_RootPost_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootRevisionArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


export type Query_RootRevision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


export type Query_RootRevision_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootText_ValueArgs = {
  distinct_on?: InputMaybe<Array<Text_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Text_Value_Order_By>>;
  where?: InputMaybe<Text_Value_Bool_Exp>;
};


export type Query_RootText_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Text_Value_Order_By>>;
  where?: InputMaybe<Text_Value_Bool_Exp>;
};


export type Query_RootText_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootTimestamp_ValueArgs = {
  distinct_on?: InputMaybe<Array<Timestamp_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Timestamp_Value_Order_By>>;
  where?: InputMaybe<Timestamp_Value_Bool_Exp>;
};


export type Query_RootTimestamp_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Timestamp_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Timestamp_Value_Order_By>>;
  where?: InputMaybe<Timestamp_Value_Bool_Exp>;
};


export type Query_RootTimestamp_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Query_RootValueArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};


export type Query_RootValue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};


export type Query_RootValue_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "revision" */
export type Revision = {
  __typename?: 'revision';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  post_id: Scalars['bigint'];
  /** An array relationship */
  values: Array<Value>;
  /** An aggregate relationship */
  values_aggregate: Value_Aggregate;
};


/** columns and relationships of "revision" */
export type RevisionValuesArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};


/** columns and relationships of "revision" */
export type RevisionValues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};

/** aggregated selection of "revision" */
export type Revision_Aggregate = {
  __typename?: 'revision_aggregate';
  aggregate?: Maybe<Revision_Aggregate_Fields>;
  nodes: Array<Revision>;
};

/** aggregate fields of "revision" */
export type Revision_Aggregate_Fields = {
  __typename?: 'revision_aggregate_fields';
  avg?: Maybe<Revision_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Revision_Max_Fields>;
  min?: Maybe<Revision_Min_Fields>;
  stddev?: Maybe<Revision_Stddev_Fields>;
  stddev_pop?: Maybe<Revision_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Revision_Stddev_Samp_Fields>;
  sum?: Maybe<Revision_Sum_Fields>;
  var_pop?: Maybe<Revision_Var_Pop_Fields>;
  var_samp?: Maybe<Revision_Var_Samp_Fields>;
  variance?: Maybe<Revision_Variance_Fields>;
};


/** aggregate fields of "revision" */
export type Revision_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Revision_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "revision" */
export type Revision_Aggregate_Order_By = {
  avg?: InputMaybe<Revision_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Revision_Max_Order_By>;
  min?: InputMaybe<Revision_Min_Order_By>;
  stddev?: InputMaybe<Revision_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Revision_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Revision_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Revision_Sum_Order_By>;
  var_pop?: InputMaybe<Revision_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Revision_Var_Samp_Order_By>;
  variance?: InputMaybe<Revision_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "revision" */
export type Revision_Arr_Rel_Insert_Input = {
  data: Array<Revision_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Revision_On_Conflict>;
};

/** aggregate avg on columns */
export type Revision_Avg_Fields = {
  __typename?: 'revision_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "revision" */
export type Revision_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "revision". All fields are combined with a logical 'AND'. */
export type Revision_Bool_Exp = {
  _and?: InputMaybe<Array<Revision_Bool_Exp>>;
  _not?: InputMaybe<Revision_Bool_Exp>;
  _or?: InputMaybe<Array<Revision_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  values?: InputMaybe<Value_Bool_Exp>;
};

/** unique or primary key constraints on table "revision" */
export enum Revision_Constraint {
  /** unique or primary key constraint on columns "id" */
  RevisionPkey = 'revision_pkey'
}

/** input type for incrementing numeric columns in table "revision" */
export type Revision_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  post_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "revision" */
export type Revision_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_id?: InputMaybe<Scalars['bigint']>;
  values?: InputMaybe<Value_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Revision_Max_Fields = {
  __typename?: 'revision_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "revision" */
export type Revision_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Revision_Min_Fields = {
  __typename?: 'revision_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "revision" */
export type Revision_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "revision" */
export type Revision_Mutation_Response = {
  __typename?: 'revision_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Revision>;
};

/** input type for inserting object relation for remote table "revision" */
export type Revision_Obj_Rel_Insert_Input = {
  data: Revision_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Revision_On_Conflict>;
};

/** on_conflict condition type for table "revision" */
export type Revision_On_Conflict = {
  constraint: Revision_Constraint;
  update_columns?: Array<Revision_Update_Column>;
  where?: InputMaybe<Revision_Bool_Exp>;
};

/** Ordering options when selecting data from "revision". */
export type Revision_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  values_aggregate?: InputMaybe<Value_Aggregate_Order_By>;
};

/** primary key columns input for table: revision */
export type Revision_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "revision" */
export enum Revision_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id'
}

/** input type for updating data in table "revision" */
export type Revision_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  post_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Revision_Stddev_Fields = {
  __typename?: 'revision_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "revision" */
export type Revision_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Revision_Stddev_Pop_Fields = {
  __typename?: 'revision_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "revision" */
export type Revision_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Revision_Stddev_Samp_Fields = {
  __typename?: 'revision_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "revision" */
export type Revision_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Revision_Sum_Fields = {
  __typename?: 'revision_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "revision" */
export type Revision_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** update columns of table "revision" */
export enum Revision_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id'
}

export type Revision_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Revision_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Revision_Set_Input>;
  where: Revision_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Revision_Var_Pop_Fields = {
  __typename?: 'revision_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "revision" */
export type Revision_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Revision_Var_Samp_Fields = {
  __typename?: 'revision_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "revision" */
export type Revision_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Revision_Variance_Fields = {
  __typename?: 'revision_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "revision" */
export type Revision_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "boolean_value" */
  boolean_value: Array<Boolean_Value>;
  /** fetch aggregated fields from the table: "boolean_value" */
  boolean_value_aggregate: Boolean_Value_Aggregate;
  /** fetch data from the table: "boolean_value" using primary key columns */
  boolean_value_by_pk?: Maybe<Boolean_Value>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "content" */
  content: Array<Content>;
  /** fetch aggregated fields from the table: "content" */
  content_aggregate: Content_Aggregate;
  /** fetch data from the table: "content" using primary key columns */
  content_by_pk?: Maybe<Content>;
  /** fetch data from the table: "content_tag" */
  content_tag: Array<Content_Tag>;
  /** fetch aggregated fields from the table: "content_tag" */
  content_tag_aggregate: Content_Tag_Aggregate;
  /** fetch data from the table: "content_tag" using primary key columns */
  content_tag_by_pk?: Maybe<Content_Tag>;
  /** fetch data from the table: "field" */
  field: Array<Field>;
  /** fetch aggregated fields from the table: "field" */
  field_aggregate: Field_Aggregate;
  /** fetch data from the table: "field" using primary key columns */
  field_by_pk?: Maybe<Field>;
  /** fetch data from the table: "field_type" */
  field_type: Array<Field_Type>;
  /** fetch aggregated fields from the table: "field_type" */
  field_type_aggregate: Field_Type_Aggregate;
  /** fetch data from the table: "field_type" using primary key columns */
  field_type_by_pk?: Maybe<Field_Type>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "integer_value" */
  integer_value: Array<Integer_Value>;
  /** fetch aggregated fields from the table: "integer_value" */
  integer_value_aggregate: Integer_Value_Aggregate;
  /** fetch data from the table: "integer_value" using primary key columns */
  integer_value_by_pk?: Maybe<Integer_Value>;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch aggregated fields from the table: "media" */
  media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "media_value" */
  media_value: Array<Media_Value>;
  /** fetch aggregated fields from the table: "media_value" */
  media_value_aggregate: Media_Value_Aggregate;
  /** fetch data from the table: "media_value" using primary key columns */
  media_value_by_pk?: Maybe<Media_Value>;
  /** fetch data from the table: "numeric_value" */
  numeric_value: Array<Numeric_Value>;
  /** fetch aggregated fields from the table: "numeric_value" */
  numeric_value_aggregate: Numeric_Value_Aggregate;
  /** fetch data from the table: "numeric_value" using primary key columns */
  numeric_value_by_pk?: Maybe<Numeric_Value>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_tag" */
  post_tag: Array<Post_Tag>;
  /** fetch aggregated fields from the table: "post_tag" */
  post_tag_aggregate: Post_Tag_Aggregate;
  /** fetch data from the table: "post_tag" using primary key columns */
  post_tag_by_pk?: Maybe<Post_Tag>;
  /** fetch data from the table: "post_type" */
  post_type: Array<Post_Type>;
  /** fetch aggregated fields from the table: "post_type" */
  post_type_aggregate: Post_Type_Aggregate;
  /** fetch data from the table: "post_type" using primary key columns */
  post_type_by_pk?: Maybe<Post_Type>;
  /** fetch data from the table: "post_value" */
  post_value: Array<Post_Value>;
  /** fetch aggregated fields from the table: "post_value" */
  post_value_aggregate: Post_Value_Aggregate;
  /** fetch data from the table: "post_value" using primary key columns */
  post_value_by_pk?: Maybe<Post_Value>;
  /** fetch data from the table: "revision" */
  revision: Array<Revision>;
  /** fetch aggregated fields from the table: "revision" */
  revision_aggregate: Revision_Aggregate;
  /** fetch data from the table: "revision" using primary key columns */
  revision_by_pk?: Maybe<Revision>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "text_value" */
  text_value: Array<Text_Value>;
  /** fetch aggregated fields from the table: "text_value" */
  text_value_aggregate: Text_Value_Aggregate;
  /** fetch data from the table: "text_value" using primary key columns */
  text_value_by_pk?: Maybe<Text_Value>;
  /** fetch data from the table: "timestamp_value" */
  timestamp_value: Array<Timestamp_Value>;
  /** fetch aggregated fields from the table: "timestamp_value" */
  timestamp_value_aggregate: Timestamp_Value_Aggregate;
  /** fetch data from the table: "timestamp_value" using primary key columns */
  timestamp_value_by_pk?: Maybe<Timestamp_Value>;
  /** fetch data from the table: "value" */
  value: Array<Value>;
  /** fetch aggregated fields from the table: "value" */
  value_aggregate: Value_Aggregate;
  /** fetch data from the table: "value" using primary key columns */
  value_by_pk?: Maybe<Value>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBoolean_ValueArgs = {
  distinct_on?: InputMaybe<Array<Boolean_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boolean_Value_Order_By>>;
  where?: InputMaybe<Boolean_Value_Bool_Exp>;
};


export type Subscription_RootBoolean_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boolean_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boolean_Value_Order_By>>;
  where?: InputMaybe<Boolean_Value_Bool_Exp>;
};


export type Subscription_RootBoolean_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootContentArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


export type Subscription_RootContent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Order_By>>;
  where?: InputMaybe<Content_Bool_Exp>;
};


export type Subscription_RootContent_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootContent_TagArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};


export type Subscription_RootContent_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Content_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Content_Tag_Order_By>>;
  where?: InputMaybe<Content_Tag_Bool_Exp>;
};


export type Subscription_RootContent_Tag_By_PkArgs = {
  content_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


export type Subscription_RootFieldArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};


export type Subscription_RootField_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Order_By>>;
  where?: InputMaybe<Field_Bool_Exp>;
};


export type Subscription_RootField_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootField_TypeArgs = {
  distinct_on?: InputMaybe<Array<Field_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Type_Order_By>>;
  where?: InputMaybe<Field_Type_Bool_Exp>;
};


export type Subscription_RootField_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Field_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Field_Type_Order_By>>;
  where?: InputMaybe<Field_Type_Bool_Exp>;
};


export type Subscription_RootField_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFileArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootFile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootFile_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInteger_ValueArgs = {
  distinct_on?: InputMaybe<Array<Integer_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integer_Value_Order_By>>;
  where?: InputMaybe<Integer_Value_Bool_Exp>;
};


export type Subscription_RootInteger_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integer_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integer_Value_Order_By>>;
  where?: InputMaybe<Integer_Value_Bool_Exp>;
};


export type Subscription_RootInteger_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootMedia_ValueArgs = {
  distinct_on?: InputMaybe<Array<Media_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Value_Order_By>>;
  where?: InputMaybe<Media_Value_Bool_Exp>;
};


export type Subscription_RootMedia_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Value_Order_By>>;
  where?: InputMaybe<Media_Value_Bool_Exp>;
};


export type Subscription_RootMedia_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootNumeric_ValueArgs = {
  distinct_on?: InputMaybe<Array<Numeric_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Numeric_Value_Order_By>>;
  where?: InputMaybe<Numeric_Value_Bool_Exp>;
};


export type Subscription_RootNumeric_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Numeric_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Numeric_Value_Order_By>>;
  where?: InputMaybe<Numeric_Value_Bool_Exp>;
};


export type Subscription_RootNumeric_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPost_TagArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


export type Subscription_RootPost_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


export type Subscription_RootPost_Tag_By_PkArgs = {
  post_id: Scalars['bigint'];
  tag_id: Scalars['Int'];
};


export type Subscription_RootPost_TypeArgs = {
  distinct_on?: InputMaybe<Array<Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Type_Order_By>>;
  where?: InputMaybe<Post_Type_Bool_Exp>;
};


export type Subscription_RootPost_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Type_Order_By>>;
  where?: InputMaybe<Post_Type_Bool_Exp>;
};


export type Subscription_RootPost_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_ValueArgs = {
  distinct_on?: InputMaybe<Array<Post_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Value_Order_By>>;
  where?: InputMaybe<Post_Value_Bool_Exp>;
};


export type Subscription_RootPost_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Value_Order_By>>;
  where?: InputMaybe<Post_Value_Bool_Exp>;
};


export type Subscription_RootPost_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootRevisionArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


export type Subscription_RootRevision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revision_Order_By>>;
  where?: InputMaybe<Revision_Bool_Exp>;
};


export type Subscription_RootRevision_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootText_ValueArgs = {
  distinct_on?: InputMaybe<Array<Text_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Text_Value_Order_By>>;
  where?: InputMaybe<Text_Value_Bool_Exp>;
};


export type Subscription_RootText_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Text_Value_Order_By>>;
  where?: InputMaybe<Text_Value_Bool_Exp>;
};


export type Subscription_RootText_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootTimestamp_ValueArgs = {
  distinct_on?: InputMaybe<Array<Timestamp_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Timestamp_Value_Order_By>>;
  where?: InputMaybe<Timestamp_Value_Bool_Exp>;
};


export type Subscription_RootTimestamp_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Timestamp_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Timestamp_Value_Order_By>>;
  where?: InputMaybe<Timestamp_Value_Bool_Exp>;
};


export type Subscription_RootTimestamp_Value_By_PkArgs = {
  value_id: Scalars['bigint'];
};


export type Subscription_RootValueArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};


export type Subscription_RootValue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Value_Order_By>>;
  where?: InputMaybe<Value_Bool_Exp>;
};


export type Subscription_RootValue_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Post_Tag>;
  /** An aggregate relationship */
  posts_aggregate: Post_Tag_Aggregate;
  slug: Scalars['String'];
};


/** columns and relationships of "tag" */
export type TagPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Tag_Order_By>>;
  where?: InputMaybe<Post_Tag_Bool_Exp>;
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: 'tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Tag_Bool_Exp>>;
  _not?: InputMaybe<Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Post_Tag_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint on columns "id" */
  TagPkey = 'tag_pkey',
  /** unique or primary key constraint on columns "slug" */
  TagSlugKey = 'tag_slug_key'
}

/** input type for incrementing numeric columns in table "tag" */
export type Tag_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Post_Tag_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  __typename?: 'tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};

/** on_conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns?: Array<Tag_Update_Column>;
  where?: InputMaybe<Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "tag". */
export type Tag_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Post_Tag_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tag */
export type Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

export type Tag_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tag_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "text_value" */
export type Text_Value = {
  __typename?: 'text_value';
  body: Scalars['String'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "text_value" */
export type Text_Value_Aggregate = {
  __typename?: 'text_value_aggregate';
  aggregate?: Maybe<Text_Value_Aggregate_Fields>;
  nodes: Array<Text_Value>;
};

/** aggregate fields of "text_value" */
export type Text_Value_Aggregate_Fields = {
  __typename?: 'text_value_aggregate_fields';
  avg?: Maybe<Text_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Text_Value_Max_Fields>;
  min?: Maybe<Text_Value_Min_Fields>;
  stddev?: Maybe<Text_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Text_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Text_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Text_Value_Sum_Fields>;
  var_pop?: Maybe<Text_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Text_Value_Var_Samp_Fields>;
  variance?: Maybe<Text_Value_Variance_Fields>;
};


/** aggregate fields of "text_value" */
export type Text_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Text_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Text_Value_Avg_Fields = {
  __typename?: 'text_value_avg_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "text_value". All fields are combined with a logical 'AND'. */
export type Text_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Text_Value_Bool_Exp>>;
  _not?: InputMaybe<Text_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Text_Value_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "text_value" */
export enum Text_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  TextValuePkey = 'text_value_pkey'
}

/** input type for incrementing numeric columns in table "text_value" */
export type Text_Value_Inc_Input = {
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "text_value" */
export type Text_Value_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Text_Value_Max_Fields = {
  __typename?: 'text_value_max_fields';
  body?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Text_Value_Min_Fields = {
  __typename?: 'text_value_min_fields';
  body?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "text_value" */
export type Text_Value_Mutation_Response = {
  __typename?: 'text_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Text_Value>;
};

/** input type for inserting object relation for remote table "text_value" */
export type Text_Value_Obj_Rel_Insert_Input = {
  data: Text_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Text_Value_On_Conflict>;
};

/** on_conflict condition type for table "text_value" */
export type Text_Value_On_Conflict = {
  constraint: Text_Value_Constraint;
  update_columns?: Array<Text_Value_Update_Column>;
  where?: InputMaybe<Text_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "text_value". */
export type Text_Value_Order_By = {
  body?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: text_value */
export type Text_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "text_value" */
export enum Text_Value_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "text_value" */
export type Text_Value_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Text_Value_Stddev_Fields = {
  __typename?: 'text_value_stddev_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Text_Value_Stddev_Pop_Fields = {
  __typename?: 'text_value_stddev_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Text_Value_Stddev_Samp_Fields = {
  __typename?: 'text_value_stddev_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Text_Value_Sum_Fields = {
  __typename?: 'text_value_sum_fields';
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "text_value" */
export enum Text_Value_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

export type Text_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Text_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Text_Value_Set_Input>;
  where: Text_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Text_Value_Var_Pop_Fields = {
  __typename?: 'text_value_var_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Text_Value_Var_Samp_Fields = {
  __typename?: 'text_value_var_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Text_Value_Variance_Fields = {
  __typename?: 'text_value_variance_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "timestamp_value" */
export type Timestamp_Value = {
  __typename?: 'timestamp_value';
  body: Scalars['timestamptz'];
  value_id: Scalars['bigint'];
};

/** aggregated selection of "timestamp_value" */
export type Timestamp_Value_Aggregate = {
  __typename?: 'timestamp_value_aggregate';
  aggregate?: Maybe<Timestamp_Value_Aggregate_Fields>;
  nodes: Array<Timestamp_Value>;
};

/** aggregate fields of "timestamp_value" */
export type Timestamp_Value_Aggregate_Fields = {
  __typename?: 'timestamp_value_aggregate_fields';
  avg?: Maybe<Timestamp_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timestamp_Value_Max_Fields>;
  min?: Maybe<Timestamp_Value_Min_Fields>;
  stddev?: Maybe<Timestamp_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Timestamp_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timestamp_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Timestamp_Value_Sum_Fields>;
  var_pop?: Maybe<Timestamp_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Timestamp_Value_Var_Samp_Fields>;
  variance?: Maybe<Timestamp_Value_Variance_Fields>;
};


/** aggregate fields of "timestamp_value" */
export type Timestamp_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Timestamp_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Timestamp_Value_Avg_Fields = {
  __typename?: 'timestamp_value_avg_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "timestamp_value". All fields are combined with a logical 'AND'. */
export type Timestamp_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Timestamp_Value_Bool_Exp>>;
  _not?: InputMaybe<Timestamp_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Timestamp_Value_Bool_Exp>>;
  body?: InputMaybe<Timestamptz_Comparison_Exp>;
  value_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "timestamp_value" */
export enum Timestamp_Value_Constraint {
  /** unique or primary key constraint on columns "value_id" */
  TimestampValuePkey = 'timestamp_value_pkey'
}

/** input type for incrementing numeric columns in table "timestamp_value" */
export type Timestamp_Value_Inc_Input = {
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "timestamp_value" */
export type Timestamp_Value_Insert_Input = {
  body?: InputMaybe<Scalars['timestamptz']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Timestamp_Value_Max_Fields = {
  __typename?: 'timestamp_value_max_fields';
  body?: Maybe<Scalars['timestamptz']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Timestamp_Value_Min_Fields = {
  __typename?: 'timestamp_value_min_fields';
  body?: Maybe<Scalars['timestamptz']>;
  value_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "timestamp_value" */
export type Timestamp_Value_Mutation_Response = {
  __typename?: 'timestamp_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Timestamp_Value>;
};

/** input type for inserting object relation for remote table "timestamp_value" */
export type Timestamp_Value_Obj_Rel_Insert_Input = {
  data: Timestamp_Value_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Timestamp_Value_On_Conflict>;
};

/** on_conflict condition type for table "timestamp_value" */
export type Timestamp_Value_On_Conflict = {
  constraint: Timestamp_Value_Constraint;
  update_columns?: Array<Timestamp_Value_Update_Column>;
  where?: InputMaybe<Timestamp_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "timestamp_value". */
export type Timestamp_Value_Order_By = {
  body?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: timestamp_value */
export type Timestamp_Value_Pk_Columns_Input = {
  value_id: Scalars['bigint'];
};

/** select columns of table "timestamp_value" */
export enum Timestamp_Value_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "timestamp_value" */
export type Timestamp_Value_Set_Input = {
  body?: InputMaybe<Scalars['timestamptz']>;
  value_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Timestamp_Value_Stddev_Fields = {
  __typename?: 'timestamp_value_stddev_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Timestamp_Value_Stddev_Pop_Fields = {
  __typename?: 'timestamp_value_stddev_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Timestamp_Value_Stddev_Samp_Fields = {
  __typename?: 'timestamp_value_stddev_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Timestamp_Value_Sum_Fields = {
  __typename?: 'timestamp_value_sum_fields';
  value_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "timestamp_value" */
export enum Timestamp_Value_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ValueId = 'value_id'
}

export type Timestamp_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Timestamp_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Timestamp_Value_Set_Input>;
  where: Timestamp_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Timestamp_Value_Var_Pop_Fields = {
  __typename?: 'timestamp_value_var_pop_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Timestamp_Value_Var_Samp_Fields = {
  __typename?: 'timestamp_value_var_samp_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Timestamp_Value_Variance_Fields = {
  __typename?: 'timestamp_value_variance_fields';
  value_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "value" */
export type Value = {
  __typename?: 'value';
  /** An object relationship */
  boolean?: Maybe<Boolean_Value>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  field: Field;
  field_id: Scalars['bigint'];
  id: Scalars['bigint'];
  /** An object relationship */
  integer?: Maybe<Integer_Value>;
  /** An object relationship */
  media?: Maybe<Media_Value>;
  /** An object relationship */
  numeric?: Maybe<Numeric_Value>;
  /** An object relationship */
  post?: Maybe<Post_Value>;
  /** An object relationship */
  revision: Revision;
  revision_id: Scalars['bigint'];
  /** An object relationship */
  text?: Maybe<Text_Value>;
  /** An object relationship */
  timestamp?: Maybe<Timestamp_Value>;
};

/** aggregated selection of "value" */
export type Value_Aggregate = {
  __typename?: 'value_aggregate';
  aggregate?: Maybe<Value_Aggregate_Fields>;
  nodes: Array<Value>;
};

/** aggregate fields of "value" */
export type Value_Aggregate_Fields = {
  __typename?: 'value_aggregate_fields';
  avg?: Maybe<Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Value_Max_Fields>;
  min?: Maybe<Value_Min_Fields>;
  stddev?: Maybe<Value_Stddev_Fields>;
  stddev_pop?: Maybe<Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Value_Stddev_Samp_Fields>;
  sum?: Maybe<Value_Sum_Fields>;
  var_pop?: Maybe<Value_Var_Pop_Fields>;
  var_samp?: Maybe<Value_Var_Samp_Fields>;
  variance?: Maybe<Value_Variance_Fields>;
};


/** aggregate fields of "value" */
export type Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "value" */
export type Value_Aggregate_Order_By = {
  avg?: InputMaybe<Value_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Value_Max_Order_By>;
  min?: InputMaybe<Value_Min_Order_By>;
  stddev?: InputMaybe<Value_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Value_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Value_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Value_Sum_Order_By>;
  var_pop?: InputMaybe<Value_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Value_Var_Samp_Order_By>;
  variance?: InputMaybe<Value_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "value" */
export type Value_Arr_Rel_Insert_Input = {
  data: Array<Value_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Value_On_Conflict>;
};

/** aggregate avg on columns */
export type Value_Avg_Fields = {
  __typename?: 'value_avg_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "value" */
export type Value_Avg_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "value". All fields are combined with a logical 'AND'. */
export type Value_Bool_Exp = {
  _and?: InputMaybe<Array<Value_Bool_Exp>>;
  _not?: InputMaybe<Value_Bool_Exp>;
  _or?: InputMaybe<Array<Value_Bool_Exp>>;
  boolean?: InputMaybe<Boolean_Value_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  field?: InputMaybe<Field_Bool_Exp>;
  field_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  integer?: InputMaybe<Integer_Value_Bool_Exp>;
  media?: InputMaybe<Media_Value_Bool_Exp>;
  numeric?: InputMaybe<Numeric_Value_Bool_Exp>;
  post?: InputMaybe<Post_Value_Bool_Exp>;
  revision?: InputMaybe<Revision_Bool_Exp>;
  revision_id?: InputMaybe<Bigint_Comparison_Exp>;
  text?: InputMaybe<Text_Value_Bool_Exp>;
  timestamp?: InputMaybe<Timestamp_Value_Bool_Exp>;
};

/** unique or primary key constraints on table "value" */
export enum Value_Constraint {
  /** unique or primary key constraint on columns "id" */
  ValuePkey = 'value_pkey'
}

/** input type for incrementing numeric columns in table "value" */
export type Value_Inc_Input = {
  field_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  revision_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "value" */
export type Value_Insert_Input = {
  boolean?: InputMaybe<Boolean_Value_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Field_Obj_Rel_Insert_Input>;
  field_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  integer?: InputMaybe<Integer_Value_Obj_Rel_Insert_Input>;
  media?: InputMaybe<Media_Value_Obj_Rel_Insert_Input>;
  numeric?: InputMaybe<Numeric_Value_Obj_Rel_Insert_Input>;
  post?: InputMaybe<Post_Value_Obj_Rel_Insert_Input>;
  revision?: InputMaybe<Revision_Obj_Rel_Insert_Input>;
  revision_id?: InputMaybe<Scalars['bigint']>;
  text?: InputMaybe<Text_Value_Obj_Rel_Insert_Input>;
  timestamp?: InputMaybe<Timestamp_Value_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Value_Max_Fields = {
  __typename?: 'value_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  field_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  revision_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "value" */
export type Value_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Value_Min_Fields = {
  __typename?: 'value_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  field_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  revision_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "value" */
export type Value_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "value" */
export type Value_Mutation_Response = {
  __typename?: 'value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Value>;
};

/** on_conflict condition type for table "value" */
export type Value_On_Conflict = {
  constraint: Value_Constraint;
  update_columns?: Array<Value_Update_Column>;
  where?: InputMaybe<Value_Bool_Exp>;
};

/** Ordering options when selecting data from "value". */
export type Value_Order_By = {
  boolean?: InputMaybe<Boolean_Value_Order_By>;
  created_at?: InputMaybe<Order_By>;
  field?: InputMaybe<Field_Order_By>;
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integer?: InputMaybe<Integer_Value_Order_By>;
  media?: InputMaybe<Media_Value_Order_By>;
  numeric?: InputMaybe<Numeric_Value_Order_By>;
  post?: InputMaybe<Post_Value_Order_By>;
  revision?: InputMaybe<Revision_Order_By>;
  revision_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Text_Value_Order_By>;
  timestamp?: InputMaybe<Timestamp_Value_Order_By>;
};

/** primary key columns input for table: value */
export type Value_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "value" */
export enum Value_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id',
  /** column name */
  RevisionId = 'revision_id'
}

/** input type for updating data in table "value" */
export type Value_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  field_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  revision_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Value_Stddev_Fields = {
  __typename?: 'value_stddev_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "value" */
export type Value_Stddev_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Value_Stddev_Pop_Fields = {
  __typename?: 'value_stddev_pop_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "value" */
export type Value_Stddev_Pop_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Value_Stddev_Samp_Fields = {
  __typename?: 'value_stddev_samp_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "value" */
export type Value_Stddev_Samp_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Value_Sum_Fields = {
  __typename?: 'value_sum_fields';
  field_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  revision_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "value" */
export type Value_Sum_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** update columns of table "value" */
export enum Value_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id',
  /** column name */
  RevisionId = 'revision_id'
}

export type Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Value_Set_Input>;
  where: Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Value_Var_Pop_Fields = {
  __typename?: 'value_var_pop_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "value" */
export type Value_Var_Pop_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Value_Var_Samp_Fields = {
  __typename?: 'value_var_samp_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "value" */
export type Value_Var_Samp_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Value_Variance_Fields = {
  __typename?: 'value_variance_fields';
  field_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  revision_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "value" */
export type Value_Variance_Order_By = {
  field_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
};

export type CreateCategoryMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
  post_type_id: Scalars['Int'];
}>;


export type CreateCategoryMutation = { __typename?: 'mutation_root', insert_category_one?: { __typename?: 'category', id: number } | null };

export type CreateFieldMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
  post_type_id: Scalars['Int'];
  field_type_id: Scalars['Int'];
  required?: InputMaybe<Scalars['Boolean']>;
  multiple?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  field_post_type_id?: InputMaybe<Scalars['Int']>;
}>;


export type CreateFieldMutation = { __typename?: 'mutation_root', insert_field_one?: { __typename?: 'field', id: any, slug: string, name: string, required: boolean, multiple: boolean, order: number, field_post_type_id?: number | null, field_type: { __typename?: 'field_type', id: number, slug: string, name: string } } | null };

export type CreateMediaMutationVariables = Exact<{
  name: Scalars['String'];
  url: Scalars['String'];
  media_type: Scalars['String'];
  files?: InputMaybe<Array<File_Insert_Input> | File_Insert_Input>;
}>;


export type CreateMediaMutation = { __typename?: 'mutation_root', insert_media_one?: { __typename?: 'media', id: any } | null };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  post_type_id: Scalars['Int'];
  category_id?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Post_Tag_Insert_Input> | Post_Tag_Insert_Input>;
  values?: InputMaybe<Array<Value_Insert_Input> | Value_Insert_Input>;
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', insert_post_one?: { __typename?: 'post', id: any } | null };

export type CreatePostTypeMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
  icon_tag?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  public?: InputMaybe<Scalars['Boolean']>;
}>;


export type CreatePostTypeMutation = { __typename?: 'mutation_root', insert_post_type_one?: { __typename?: 'post_type', id: number, slug: string, name: string, icon_tag?: string | null, order: number, public: boolean } | null };

export type CreateTagMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateTagMutation = { __typename?: 'mutation_root', insert_tag_one?: { __typename?: 'tag', id: number } | null };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCategoryMutation = { __typename?: 'mutation_root', delete_category_by_pk?: { __typename?: 'category', id: number } | null };

export type DeleteContentsMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['bigint']> | Scalars['bigint']>;
}>;


export type DeleteContentsMutation = { __typename?: 'mutation_root', delete_content?: { __typename?: 'content_mutation_response', returning: Array<{ __typename?: 'content', id: any }> } | null };

export type DeleteFieldMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type DeleteFieldMutation = { __typename?: 'mutation_root', delete_field_by_pk?: { __typename?: 'field', id: any } | null };

export type DeleteMediaMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type DeleteMediaMutation = { __typename?: 'mutation_root', delete_media_by_pk?: { __typename?: 'media', id: any } | null };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', delete_post_by_pk?: { __typename?: 'post', id: any } | null };

export type DeletePostTypeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostTypeMutation = { __typename?: 'mutation_root', delete_post_type_by_pk?: { __typename?: 'post_type', id: number } | null };

export type DeleteRevisionsMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['bigint']> | Scalars['bigint']>;
}>;


export type DeleteRevisionsMutation = { __typename?: 'mutation_root', delete_revision?: { __typename?: 'revision_mutation_response', returning: Array<{ __typename?: 'revision', id: any }> } | null };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTagMutation = { __typename?: 'mutation_root', delete_tag_by_pk?: { __typename?: 'tag', id: number } | null };

export type GetAdminQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAdminQuery = { __typename?: 'query_root', admin_by_pk?: { __typename?: 'admin', id: string } | null };

export type GetCategoriesQueryVariables = Exact<{
  post_type_id?: InputMaybe<Scalars['Int']>;
}>;


export type GetCategoriesQuery = { __typename?: 'query_root', category: Array<{ __typename?: 'category', id: number, slug: string, name: string }> };

export type GetCategoriesBySlugQueryVariables = Exact<{
  post_type_slug?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetCategoriesBySlugQuery = { __typename?: 'query_root', category: Array<{ __typename?: 'category', id: number, slug: string, name: string }> };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryQuery = { __typename?: 'query_root', category_by_pk?: { __typename?: 'category', id: number, slug: string, name: string, post_type: { __typename?: 'post_type', id: number, slug: string, name: string } } | null };

export type GetFieldTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFieldTypesQuery = { __typename?: 'query_root', field_type: Array<{ __typename?: 'field_type', id: number, slug: string, name: string, is_post: boolean }> };

export type GetMediaQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type GetMediaQuery = { __typename?: 'query_root', media_by_pk?: { __typename?: 'media', id: any, name: string, url: string, media_type: string, created_at: any, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> } | null };

export type GetMediasQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  type_ilike?: InputMaybe<Scalars['String']>;
}>;


export type GetMediasQuery = { __typename?: 'query_root', media: Array<{ __typename?: 'media', id: any, name: string, url: string, media_type: string, created_at: any, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> }>, media_aggregate: { __typename?: 'media_aggregate', aggregate?: { __typename?: 'media_aggregate_fields', count: number } | null } };

export type GetPostQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type GetPostQuery = { __typename?: 'query_root', post_by_pk?: { __typename?: 'post', id: any, title: string, category_id: number, created_at: any, deleted_at?: any | null, category: { __typename?: 'category', id: number, slug: string, name: string }, tags: Array<{ __typename?: 'post_tag', tag: { __typename?: 'tag', id: number, slug: string, name: string } }>, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, media?: { __typename?: 'media_value', body: { __typename?: 'media', id: any, name: string, url: string, media_type: string, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> } } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string, created_at: any, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, media?: { __typename?: 'media_value', body: { __typename?: 'media', id: any, name: string, url: string, media_type: string, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> } } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }> } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }>, post_type: { __typename?: 'post_type', id: number, slug: string, name: string, fields: Array<{ __typename?: 'field', id: any, slug: string, name: string, field_type_id: number, required: boolean, multiple: boolean, order: number, field_post_type_id?: number | null, field_type: { __typename?: 'field_type', id: number, slug: string, name: string, order: number, is_post: boolean }, field_post_type?: { __typename?: 'post_type', id: number, slug: string, name: string } | null }> } } | null };

export type GetPostTypeQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPostTypeQuery = { __typename?: 'query_root', post_type_by_pk?: { __typename?: 'post_type', id: number, slug: string, name: string, icon_tag?: string | null, order: number, public: boolean, fields: Array<{ __typename?: 'field', id: any, slug: string, name: string, field_type_id: number, required: boolean, multiple: boolean, order: number, field_post_type_id?: number | null, field_type: { __typename?: 'field_type', id: number, slug: string, name: string, order: number, is_post: boolean }, field_post_type?: { __typename?: 'post_type', id: number, slug: string, name: string } | null }> } | null };

export type GetPostTypeBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPostTypeBySlugQuery = { __typename?: 'query_root', post_type: Array<{ __typename?: 'post_type', id: number, slug: string, name: string, icon_tag?: string | null, order: number, fields: Array<{ __typename?: 'field', id: any, slug: string, name: string, required: boolean, multiple: boolean, order: number, field_post_type_id?: number | null, field_type: { __typename?: 'field_type', id: number, slug: string, name: string, order: number }, field_post_type?: { __typename?: 'post_type', id: number, slug: string, name: string } | null }> }> };

export type GetPostTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostTypesQuery = { __typename?: 'query_root', post_type: Array<{ __typename?: 'post_type', id: number, slug: string, name: string, icon_tag?: string | null }>, post_type_aggregate: { __typename?: 'post_type_aggregate', aggregate?: { __typename?: 'post_type_aggregate_fields', count: number } | null } };

export type GetPostsQueryVariables = Exact<{
  post_type_slug: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPostsQuery = { __typename?: 'query_root', post_type: Array<{ __typename?: 'post_type', id: number, slug: string, name: string }>, post: Array<{ __typename?: 'post', id: any, title: string, category_id: number, created_at: any, category: { __typename?: 'category', id: number, slug: string, name: string }, tags: Array<{ __typename?: 'post_tag', tag: { __typename?: 'tag', id: number, slug: string, name: string } }>, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, media?: { __typename?: 'media_value', body: { __typename?: 'media', id: any, name: string, url: string, media_type: string, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> } } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string, created_at: any, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, media?: { __typename?: 'media_value', body: { __typename?: 'media', id: any, name: string, url: string, media_type: string, files: Array<{ __typename?: 'file', id: any, label: string, url: string, firebase_path: string }> } } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }> } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }>, post_type: { __typename?: 'post_type', id: number, slug: string, name: string } }>, post_aggregate: { __typename?: 'post_aggregate', aggregate?: { __typename?: 'post_aggregate_fields', count: number } | null } };

export type GetTagQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTagQuery = { __typename?: 'query_root', tag_by_pk?: { __typename?: 'tag', id: number, slug: string, name: string } | null };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'query_root', tag: Array<{ __typename?: 'tag', id: number, slug: string, name: string }> };

export type GetTrashedPostsQueryVariables = Exact<{
  post_type_slug: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetTrashedPostsQuery = { __typename?: 'query_root', post_type: Array<{ __typename?: 'post_type', id: number, slug: string, name: string }>, post: Array<{ __typename?: 'post', id: any, title: string, category_id: number, created_at: any, category: { __typename?: 'category', id: number, slug: string, name: string }, tags: Array<{ __typename?: 'post_tag', tag: { __typename?: 'tag', id: number, slug: string, name: string } }>, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string, created_at: any, revisions: Array<{ __typename?: 'revision', id: any, created_at: any, values: Array<{ __typename?: 'value', id: any, field_id: any, field: { __typename?: 'field', id: any, slug: string, name: string }, text?: { __typename?: 'text_value', body: string } | null, numeric?: { __typename?: 'numeric_value', body: any } | null, integer?: { __typename?: 'integer_value', body: number } | null, post?: { __typename?: 'post_value', body: { __typename?: 'post', id: any, title: string } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }> } } | null, timestamp?: { __typename?: 'timestamp_value', body: any } | null, boolean?: { __typename?: 'boolean_value', body: boolean } | null }> }>, post_type: { __typename?: 'post_type', id: number, slug: string, name: string } }>, post_aggregate: { __typename?: 'post_aggregate', aggregate?: { __typename?: 'post_aggregate_fields', count: number } | null } };

export type TrashPostMutationVariables = Exact<{
  id: Scalars['bigint'];
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
}>;


export type TrashPostMutation = { __typename?: 'mutation_root', update_post_by_pk?: { __typename?: 'post', id: any } | null };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateCategoryMutation = { __typename?: 'mutation_root', update_category_by_pk?: { __typename?: 'category', id: number } | null };

export type UpdateFieldMutationVariables = Exact<{
  id: Scalars['bigint'];
  slug: Scalars['String'];
  name: Scalars['String'];
  field_type_id: Scalars['Int'];
  field_post_type_id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  multiple?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateFieldMutation = { __typename?: 'mutation_root', update_field_by_pk?: { __typename?: 'field', id: any, slug: string, name: string, field_post_type_id?: number | null, multiple: boolean, required: boolean, order: number, field_type: { __typename?: 'field_type', id: number, slug: string, name: string } } | null };

export type UpdatePostMutationVariables = Exact<{
  post_id: Scalars['bigint'];
  title: Scalars['String'];
  category_id: Scalars['Int'];
  tags?: InputMaybe<Array<Post_Tag_Insert_Input> | Post_Tag_Insert_Input>;
  values?: InputMaybe<Array<Value_Insert_Input> | Value_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  outdated_revision_ids?: InputMaybe<Array<Scalars['bigint']> | Scalars['bigint']>;
}>;


export type UpdatePostMutation = { __typename?: 'mutation_root', update_post_by_pk?: { __typename?: 'post', id: any } | null, insert_revision_one?: { __typename?: 'revision', id: any } | null, delete_revision?: { __typename?: 'revision_mutation_response', returning: Array<{ __typename?: 'revision', id: any }> } | null, delete_post_tag?: { __typename?: 'post_tag_mutation_response', returning: Array<{ __typename?: 'post_tag', post_id: any, tag_id: number }> } | null, insert_post_tag?: { __typename?: 'post_tag_mutation_response', returning: Array<{ __typename?: 'post_tag', post_id: any, tag_id: number }> } | null };

export type UpdatePostTypeMutationVariables = Exact<{
  id: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
  icon_tag?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  public?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdatePostTypeMutation = { __typename?: 'mutation_root', update_post_type_by_pk?: { __typename?: 'post_type', id: number, slug: string, name: string, icon_tag?: string | null, order: number, public: boolean, fields: Array<{ __typename?: 'field', id: any, slug: string, name: string, required: boolean, multiple: boolean, order: number, field_type: { __typename?: 'field_type', id: number, slug: string, name: string, order: number } }> } | null };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateTagMutation = { __typename?: 'mutation_root', update_tag_by_pk?: { __typename?: 'tag', id: number } | null };


export const CreateCategoryDocument = `
    mutation CreateCategory($slug: String!, $name: String!, $post_type_id: Int!) {
  insert_category_one(
    object: {slug: $slug, name: $name, post_type_id: $post_type_id}
  ) {
    id
  }
}
    `;
export const useCreateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>(
      ['CreateCategory'],
      (variables?: CreateCategoryMutationVariables) => fetcher<CreateCategoryMutation, CreateCategoryMutationVariables>(client, CreateCategoryDocument, variables, headers)(),
      options
    );
export const CreateFieldDocument = `
    mutation CreateField($slug: String!, $name: String!, $post_type_id: Int!, $field_type_id: Int!, $required: Boolean = false, $multiple: Boolean = false, $order: Int = 10, $field_post_type_id: Int) {
  insert_field_one(
    object: {slug: $slug, name: $name, post_type_id: $post_type_id, field_type_id: $field_type_id, required: $required, multiple: $multiple, order: $order, field_post_type_id: $field_post_type_id}
  ) {
    id
    slug
    name
    field_type {
      id
      slug
      name
    }
    required
    multiple
    order
    field_post_type_id
  }
}
    `;
export const useCreateFieldMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateFieldMutation, TError, CreateFieldMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateFieldMutation, TError, CreateFieldMutationVariables, TContext>(
      ['CreateField'],
      (variables?: CreateFieldMutationVariables) => fetcher<CreateFieldMutation, CreateFieldMutationVariables>(client, CreateFieldDocument, variables, headers)(),
      options
    );
export const CreateMediaDocument = `
    mutation CreateMedia($name: String!, $url: String!, $media_type: String!, $files: [file_insert_input!] = []) {
  insert_media_one(
    object: {name: $name, url: $url, media_type: $media_type, files: {data: $files}}
  ) {
    id
  }
}
    `;
export const useCreateMediaMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateMediaMutation, TError, CreateMediaMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateMediaMutation, TError, CreateMediaMutationVariables, TContext>(
      ['CreateMedia'],
      (variables?: CreateMediaMutationVariables) => fetcher<CreateMediaMutation, CreateMediaMutationVariables>(client, CreateMediaDocument, variables, headers)(),
      options
    );
export const CreatePostDocument = `
    mutation CreatePost($title: String!, $post_type_id: Int!, $category_id: Int, $tags: [post_tag_insert_input!] = [], $values: [value_insert_input!] = []) {
  insert_post_one(
    object: {title: $title, post_type_id: $post_type_id, category_id: $category_id, tags: {data: $tags}, revisions: {data: {values: {data: $values}}}}
  ) {
    id
  }
}
    `;
export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      ['CreatePost'],
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers)(),
      options
    );
export const CreatePostTypeDocument = `
    mutation CreatePostType($slug: String!, $name: String!, $icon_tag: String, $order: Int = 10, $public: Boolean = false) {
  insert_post_type_one(
    object: {slug: $slug, name: $name, icon_tag: $icon_tag, order: $order, public: $public}
  ) {
    id
    slug
    name
    icon_tag
    order
    public
  }
}
    `;
export const useCreatePostTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostTypeMutation, TError, CreatePostTypeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePostTypeMutation, TError, CreatePostTypeMutationVariables, TContext>(
      ['CreatePostType'],
      (variables?: CreatePostTypeMutationVariables) => fetcher<CreatePostTypeMutation, CreatePostTypeMutationVariables>(client, CreatePostTypeDocument, variables, headers)(),
      options
    );
export const CreateTagDocument = `
    mutation CreateTag($slug: String!, $name: String!) {
  insert_tag_one(object: {slug: $slug, name: $name}) {
    id
  }
}
    `;
export const useCreateTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateTagMutation, TError, CreateTagMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateTagMutation, TError, CreateTagMutationVariables, TContext>(
      ['CreateTag'],
      (variables?: CreateTagMutationVariables) => fetcher<CreateTagMutation, CreateTagMutationVariables>(client, CreateTagDocument, variables, headers)(),
      options
    );
export const DeleteCategoryDocument = `
    mutation DeleteCategory($id: Int!) {
  delete_category_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>(
      ['DeleteCategory'],
      (variables?: DeleteCategoryMutationVariables) => fetcher<DeleteCategoryMutation, DeleteCategoryMutationVariables>(client, DeleteCategoryDocument, variables, headers)(),
      options
    );
export const DeleteContentsDocument = `
    mutation DeleteContents($ids: [bigint!] = []) {
  delete_content(where: {id: {_in: $ids}}) {
    returning {
      id
    }
  }
}
    `;
export const useDeleteContentsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteContentsMutation, TError, DeleteContentsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteContentsMutation, TError, DeleteContentsMutationVariables, TContext>(
      ['DeleteContents'],
      (variables?: DeleteContentsMutationVariables) => fetcher<DeleteContentsMutation, DeleteContentsMutationVariables>(client, DeleteContentsDocument, variables, headers)(),
      options
    );
export const DeleteFieldDocument = `
    mutation DeleteField($id: bigint!) {
  delete_field_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteFieldMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteFieldMutation, TError, DeleteFieldMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteFieldMutation, TError, DeleteFieldMutationVariables, TContext>(
      ['DeleteField'],
      (variables?: DeleteFieldMutationVariables) => fetcher<DeleteFieldMutation, DeleteFieldMutationVariables>(client, DeleteFieldDocument, variables, headers)(),
      options
    );
export const DeleteMediaDocument = `
    mutation DeleteMedia($id: bigint!) {
  delete_media_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteMediaMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteMediaMutation, TError, DeleteMediaMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteMediaMutation, TError, DeleteMediaMutationVariables, TContext>(
      ['DeleteMedia'],
      (variables?: DeleteMediaMutationVariables) => fetcher<DeleteMediaMutation, DeleteMediaMutationVariables>(client, DeleteMediaDocument, variables, headers)(),
      options
    );
export const DeletePostDocument = `
    mutation DeletePost($id: bigint!) {
  delete_post_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeletePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePostMutation, TError, DeletePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePostMutation, TError, DeletePostMutationVariables, TContext>(
      ['DeletePost'],
      (variables?: DeletePostMutationVariables) => fetcher<DeletePostMutation, DeletePostMutationVariables>(client, DeletePostDocument, variables, headers)(),
      options
    );
export const DeletePostTypeDocument = `
    mutation DeletePostType($id: Int!) {
  delete_post_type_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeletePostTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePostTypeMutation, TError, DeletePostTypeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePostTypeMutation, TError, DeletePostTypeMutationVariables, TContext>(
      ['DeletePostType'],
      (variables?: DeletePostTypeMutationVariables) => fetcher<DeletePostTypeMutation, DeletePostTypeMutationVariables>(client, DeletePostTypeDocument, variables, headers)(),
      options
    );
export const DeleteRevisionsDocument = `
    mutation DeleteRevisions($ids: [bigint!] = []) {
  delete_revision(where: {id: {_in: $ids}}) {
    returning {
      id
    }
  }
}
    `;
export const useDeleteRevisionsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteRevisionsMutation, TError, DeleteRevisionsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteRevisionsMutation, TError, DeleteRevisionsMutationVariables, TContext>(
      ['DeleteRevisions'],
      (variables?: DeleteRevisionsMutationVariables) => fetcher<DeleteRevisionsMutation, DeleteRevisionsMutationVariables>(client, DeleteRevisionsDocument, variables, headers)(),
      options
    );
export const DeleteTagDocument = `
    mutation DeleteTag($id: Int!) {
  delete_tag_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTagMutation, TError, DeleteTagMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTagMutation, TError, DeleteTagMutationVariables, TContext>(
      ['DeleteTag'],
      (variables?: DeleteTagMutationVariables) => fetcher<DeleteTagMutation, DeleteTagMutationVariables>(client, DeleteTagDocument, variables, headers)(),
      options
    );
export const GetAdminDocument = `
    query GetAdmin($id: String!) {
  admin_by_pk(id: $id) {
    id
  }
}
    `;
export const useGetAdminQuery = <
      TData = GetAdminQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAdminQueryVariables,
      options?: UseQueryOptions<GetAdminQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAdminQuery, TError, TData>(
      ['GetAdmin', variables],
      fetcher<GetAdminQuery, GetAdminQueryVariables>(client, GetAdminDocument, variables, headers),
      options
    );
export const useInfiniteGetAdminQuery = <
      TData = GetAdminQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetAdminQueryVariables,
      client: GraphQLClient,
      variables: GetAdminQueryVariables,
      options?: UseInfiniteQueryOptions<GetAdminQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetAdminQuery, TError, TData>(
      ['GetAdmin.infinite', variables],
      (metaData) => fetcher<GetAdminQuery, GetAdminQueryVariables>(client, GetAdminDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCategoriesDocument = `
    query GetCategories($post_type_id: Int) {
  category(order_by: {id: asc}, where: {post_type_id: {_eq: $post_type_id}}) {
    id
    slug
    name
  }
}
    `;
export const useGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: UseQueryOptions<GetCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCategoriesQuery, TError, TData>(
      variables === undefined ? ['GetCategories'] : ['GetCategories', variables],
      fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers),
      options
    );
export const useInfiniteGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetCategoriesQueryVariables,
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: UseInfiniteQueryOptions<GetCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCategoriesQuery, TError, TData>(
      variables === undefined ? ['GetCategories.infinite'] : ['GetCategories.infinite', variables],
      (metaData) => fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCategoriesBySlugDocument = `
    query GetCategoriesBySlug($post_type_slug: [String!] = []) {
  category(
    order_by: {id: asc}
    where: {post_type: {slug: {_in: $post_type_slug}}}
  ) {
    id
    slug
    name
  }
}
    `;
export const useGetCategoriesBySlugQuery = <
      TData = GetCategoriesBySlugQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesBySlugQueryVariables,
      options?: UseQueryOptions<GetCategoriesBySlugQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCategoriesBySlugQuery, TError, TData>(
      variables === undefined ? ['GetCategoriesBySlug'] : ['GetCategoriesBySlug', variables],
      fetcher<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>(client, GetCategoriesBySlugDocument, variables, headers),
      options
    );
export const useInfiniteGetCategoriesBySlugQuery = <
      TData = GetCategoriesBySlugQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetCategoriesBySlugQueryVariables,
      client: GraphQLClient,
      variables?: GetCategoriesBySlugQueryVariables,
      options?: UseInfiniteQueryOptions<GetCategoriesBySlugQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCategoriesBySlugQuery, TError, TData>(
      variables === undefined ? ['GetCategoriesBySlug.infinite'] : ['GetCategoriesBySlug.infinite', variables],
      (metaData) => fetcher<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>(client, GetCategoriesBySlugDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCategoryDocument = `
    query GetCategory($id: Int!) {
  category_by_pk(id: $id) {
    id
    slug
    name
    post_type {
      id
      slug
      name
    }
  }
}
    `;
export const useGetCategoryQuery = <
      TData = GetCategoryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCategoryQueryVariables,
      options?: UseQueryOptions<GetCategoryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCategoryQuery, TError, TData>(
      ['GetCategory', variables],
      fetcher<GetCategoryQuery, GetCategoryQueryVariables>(client, GetCategoryDocument, variables, headers),
      options
    );
export const useInfiniteGetCategoryQuery = <
      TData = GetCategoryQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetCategoryQueryVariables,
      client: GraphQLClient,
      variables: GetCategoryQueryVariables,
      options?: UseInfiniteQueryOptions<GetCategoryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCategoryQuery, TError, TData>(
      ['GetCategory.infinite', variables],
      (metaData) => fetcher<GetCategoryQuery, GetCategoryQueryVariables>(client, GetCategoryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetFieldTypesDocument = `
    query GetFieldTypes {
  field_type {
    id
    slug
    name
    is_post
  }
}
    `;
export const useGetFieldTypesQuery = <
      TData = GetFieldTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetFieldTypesQueryVariables,
      options?: UseQueryOptions<GetFieldTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetFieldTypesQuery, TError, TData>(
      variables === undefined ? ['GetFieldTypes'] : ['GetFieldTypes', variables],
      fetcher<GetFieldTypesQuery, GetFieldTypesQueryVariables>(client, GetFieldTypesDocument, variables, headers),
      options
    );
export const useInfiniteGetFieldTypesQuery = <
      TData = GetFieldTypesQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetFieldTypesQueryVariables,
      client: GraphQLClient,
      variables?: GetFieldTypesQueryVariables,
      options?: UseInfiniteQueryOptions<GetFieldTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetFieldTypesQuery, TError, TData>(
      variables === undefined ? ['GetFieldTypes.infinite'] : ['GetFieldTypes.infinite', variables],
      (metaData) => fetcher<GetFieldTypesQuery, GetFieldTypesQueryVariables>(client, GetFieldTypesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMediaDocument = `
    query GetMedia($id: bigint!) {
  media_by_pk(id: $id) {
    id
    name
    url
    media_type
    created_at
    files {
      id
      label
      url
      firebase_path
    }
  }
}
    `;
export const useGetMediaQuery = <
      TData = GetMediaQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetMediaQueryVariables,
      options?: UseQueryOptions<GetMediaQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMediaQuery, TError, TData>(
      ['GetMedia', variables],
      fetcher<GetMediaQuery, GetMediaQueryVariables>(client, GetMediaDocument, variables, headers),
      options
    );
export const useInfiniteGetMediaQuery = <
      TData = GetMediaQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetMediaQueryVariables,
      client: GraphQLClient,
      variables: GetMediaQueryVariables,
      options?: UseInfiniteQueryOptions<GetMediaQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMediaQuery, TError, TData>(
      ['GetMedia.infinite', variables],
      (metaData) => fetcher<GetMediaQuery, GetMediaQueryVariables>(client, GetMediaDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMediasDocument = `
    query GetMedias($limit: Int = 10, $offset: Int = 0, $type_ilike: String = "%") {
  media(
    order_by: {created_at: desc}
    limit: $limit
    offset: $offset
    where: {media_type: {_ilike: $type_ilike}}
  ) {
    id
    name
    url
    media_type
    created_at
    files {
      id
      label
      url
      firebase_path
    }
  }
  media_aggregate(where: {media_type: {_ilike: $type_ilike}}) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetMediasQuery = <
      TData = GetMediasQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMediasQueryVariables,
      options?: UseQueryOptions<GetMediasQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMediasQuery, TError, TData>(
      variables === undefined ? ['GetMedias'] : ['GetMedias', variables],
      fetcher<GetMediasQuery, GetMediasQueryVariables>(client, GetMediasDocument, variables, headers),
      options
    );
export const useInfiniteGetMediasQuery = <
      TData = GetMediasQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetMediasQueryVariables,
      client: GraphQLClient,
      variables?: GetMediasQueryVariables,
      options?: UseInfiniteQueryOptions<GetMediasQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMediasQuery, TError, TData>(
      variables === undefined ? ['GetMedias.infinite'] : ['GetMedias.infinite', variables],
      (metaData) => fetcher<GetMediasQuery, GetMediasQueryVariables>(client, GetMediasDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPostDocument = `
    query GetPost($id: bigint!) {
  post_by_pk(id: $id) {
    id
    title
    category_id
    category {
      id
      slug
      name
    }
    tags(order_by: {tag_id: asc}) {
      tag {
        id
        slug
        name
      }
    }
    revisions(order_by: {created_at: desc}) {
      id
      created_at
      values {
        id
        field_id
        field {
          id
          slug
          name
        }
        text {
          body
        }
        numeric {
          body
        }
        integer {
          body
        }
        media {
          body {
            id
            name
            url
            media_type
            files {
              id
              label
              url
              firebase_path
            }
          }
        }
        post {
          body {
            id
            title
            created_at
            revisions(order_by: {created_at: desc}) {
              id
              created_at
              values {
                id
                field_id
                field {
                  id
                  slug
                  name
                }
                text {
                  body
                }
                numeric {
                  body
                }
                integer {
                  body
                }
                media {
                  body {
                    id
                    name
                    url
                    media_type
                    files {
                      id
                      label
                      url
                      firebase_path
                    }
                  }
                }
                post {
                  body {
                    id
                    title
                  }
                }
                timestamp {
                  body
                }
                boolean {
                  body
                }
              }
            }
          }
        }
        timestamp {
          body
        }
        boolean {
          body
        }
      }
    }
    post_type {
      id
      slug
      name
      fields(order_by: {order: asc}) {
        id
        slug
        name
        field_type_id
        field_type {
          id
          slug
          name
          order
          is_post
        }
        required
        multiple
        order
        field_post_type_id
        field_post_type {
          id
          slug
          name
        }
      }
    }
    created_at
    deleted_at
  }
}
    `;
export const useGetPostQuery = <
      TData = GetPostQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostQueryVariables,
      options?: UseQueryOptions<GetPostQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostQuery, TError, TData>(
      ['GetPost', variables],
      fetcher<GetPostQuery, GetPostQueryVariables>(client, GetPostDocument, variables, headers),
      options
    );
export const useInfiniteGetPostQuery = <
      TData = GetPostQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetPostQueryVariables,
      client: GraphQLClient,
      variables: GetPostQueryVariables,
      options?: UseInfiniteQueryOptions<GetPostQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPostQuery, TError, TData>(
      ['GetPost.infinite', variables],
      (metaData) => fetcher<GetPostQuery, GetPostQueryVariables>(client, GetPostDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPostTypeDocument = `
    query GetPostType($id: Int!) {
  post_type_by_pk(id: $id) {
    id
    slug
    name
    icon_tag
    order
    public
    fields(order_by: {order: asc}) {
      id
      slug
      name
      field_type_id
      field_type {
        id
        slug
        name
        order
        is_post
      }
      required
      multiple
      order
      field_post_type_id
      field_post_type {
        id
        slug
        name
      }
    }
  }
}
    `;
export const useGetPostTypeQuery = <
      TData = GetPostTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostTypeQueryVariables,
      options?: UseQueryOptions<GetPostTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostTypeQuery, TError, TData>(
      ['GetPostType', variables],
      fetcher<GetPostTypeQuery, GetPostTypeQueryVariables>(client, GetPostTypeDocument, variables, headers),
      options
    );
export const useInfiniteGetPostTypeQuery = <
      TData = GetPostTypeQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetPostTypeQueryVariables,
      client: GraphQLClient,
      variables: GetPostTypeQueryVariables,
      options?: UseInfiniteQueryOptions<GetPostTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPostTypeQuery, TError, TData>(
      ['GetPostType.infinite', variables],
      (metaData) => fetcher<GetPostTypeQuery, GetPostTypeQueryVariables>(client, GetPostTypeDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPostTypeBySlugDocument = `
    query GetPostTypeBySlug($slug: String!) {
  post_type(where: {slug: {_eq: $slug}}) {
    id
    slug
    name
    icon_tag
    order
    fields(order_by: {order: asc}) {
      id
      slug
      name
      field_type {
        id
        slug
        name
        order
      }
      required
      multiple
      order
      field_post_type_id
      field_post_type {
        id
        slug
        name
      }
    }
  }
}
    `;
export const useGetPostTypeBySlugQuery = <
      TData = GetPostTypeBySlugQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostTypeBySlugQueryVariables,
      options?: UseQueryOptions<GetPostTypeBySlugQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostTypeBySlugQuery, TError, TData>(
      ['GetPostTypeBySlug', variables],
      fetcher<GetPostTypeBySlugQuery, GetPostTypeBySlugQueryVariables>(client, GetPostTypeBySlugDocument, variables, headers),
      options
    );
export const useInfiniteGetPostTypeBySlugQuery = <
      TData = GetPostTypeBySlugQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetPostTypeBySlugQueryVariables,
      client: GraphQLClient,
      variables: GetPostTypeBySlugQueryVariables,
      options?: UseInfiniteQueryOptions<GetPostTypeBySlugQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPostTypeBySlugQuery, TError, TData>(
      ['GetPostTypeBySlug.infinite', variables],
      (metaData) => fetcher<GetPostTypeBySlugQuery, GetPostTypeBySlugQueryVariables>(client, GetPostTypeBySlugDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPostTypesDocument = `
    query GetPostTypes {
  post_type(order_by: {order: asc}) {
    id
    slug
    name
    icon_tag
  }
  post_type_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const useGetPostTypesQuery = <
      TData = GetPostTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetPostTypesQueryVariables,
      options?: UseQueryOptions<GetPostTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostTypesQuery, TError, TData>(
      variables === undefined ? ['GetPostTypes'] : ['GetPostTypes', variables],
      fetcher<GetPostTypesQuery, GetPostTypesQueryVariables>(client, GetPostTypesDocument, variables, headers),
      options
    );
export const useInfiniteGetPostTypesQuery = <
      TData = GetPostTypesQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetPostTypesQueryVariables,
      client: GraphQLClient,
      variables?: GetPostTypesQueryVariables,
      options?: UseInfiniteQueryOptions<GetPostTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPostTypesQuery, TError, TData>(
      variables === undefined ? ['GetPostTypes.infinite'] : ['GetPostTypes.infinite', variables],
      (metaData) => fetcher<GetPostTypesQuery, GetPostTypesQueryVariables>(client, GetPostTypesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPostsDocument = `
    query GetPosts($post_type_slug: String!, $limit: Int = 10, $offset: Int = 0) {
  post_type(where: {slug: {_eq: $post_type_slug}}) {
    id
    slug
    name
  }
  post(
    limit: $limit
    offset: $offset
    order_by: {created_at: desc}
    where: {_and: {deleted_at: {_is_null: true}, post_type: {slug: {_eq: $post_type_slug}}}}
  ) {
    id
    title
    category_id
    category {
      id
      slug
      name
    }
    tags(order_by: {tag_id: asc}) {
      tag {
        id
        slug
        name
      }
    }
    revisions(order_by: {created_at: desc}) {
      id
      created_at
      values {
        id
        field_id
        field {
          id
          slug
          name
        }
        text {
          body
        }
        numeric {
          body
        }
        integer {
          body
        }
        media {
          body {
            id
            name
            url
            media_type
            files {
              id
              label
              url
              firebase_path
            }
          }
        }
        post {
          body {
            id
            title
            created_at
            revisions(order_by: {created_at: desc}) {
              id
              created_at
              values {
                id
                field_id
                field {
                  id
                  slug
                  name
                }
                text {
                  body
                }
                numeric {
                  body
                }
                integer {
                  body
                }
                media {
                  body {
                    id
                    name
                    url
                    media_type
                    files {
                      id
                      label
                      url
                      firebase_path
                    }
                  }
                }
                post {
                  body {
                    id
                    title
                  }
                }
                timestamp {
                  body
                }
                boolean {
                  body
                }
              }
            }
          }
        }
        timestamp {
          body
        }
        boolean {
          body
        }
      }
    }
    post_type {
      id
      slug
      name
    }
    created_at
  }
  post_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const useGetPostsQuery = <
      TData = GetPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostsQueryVariables,
      options?: UseQueryOptions<GetPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostsQuery, TError, TData>(
      ['GetPosts', variables],
      fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers),
      options
    );
export const useInfiniteGetPostsQuery = <
      TData = GetPostsQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetPostsQueryVariables,
      client: GraphQLClient,
      variables: GetPostsQueryVariables,
      options?: UseInfiniteQueryOptions<GetPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPostsQuery, TError, TData>(
      ['GetPosts.infinite', variables],
      (metaData) => fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetTagDocument = `
    query GetTag($id: Int!) {
  tag_by_pk(id: $id) {
    id
    slug
    name
  }
}
    `;
export const useGetTagQuery = <
      TData = GetTagQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTagQueryVariables,
      options?: UseQueryOptions<GetTagQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTagQuery, TError, TData>(
      ['GetTag', variables],
      fetcher<GetTagQuery, GetTagQueryVariables>(client, GetTagDocument, variables, headers),
      options
    );
export const useInfiniteGetTagQuery = <
      TData = GetTagQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetTagQueryVariables,
      client: GraphQLClient,
      variables: GetTagQueryVariables,
      options?: UseInfiniteQueryOptions<GetTagQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetTagQuery, TError, TData>(
      ['GetTag.infinite', variables],
      (metaData) => fetcher<GetTagQuery, GetTagQueryVariables>(client, GetTagDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetTagsDocument = `
    query GetTags {
  tag(order_by: {id: asc}) {
    id
    slug
    name
  }
}
    `;
export const useGetTagsQuery = <
      TData = GetTagsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetTagsQueryVariables,
      options?: UseQueryOptions<GetTagsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTagsQuery, TError, TData>(
      variables === undefined ? ['GetTags'] : ['GetTags', variables],
      fetcher<GetTagsQuery, GetTagsQueryVariables>(client, GetTagsDocument, variables, headers),
      options
    );
export const useInfiniteGetTagsQuery = <
      TData = GetTagsQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetTagsQueryVariables,
      client: GraphQLClient,
      variables?: GetTagsQueryVariables,
      options?: UseInfiniteQueryOptions<GetTagsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetTagsQuery, TError, TData>(
      variables === undefined ? ['GetTags.infinite'] : ['GetTags.infinite', variables],
      (metaData) => fetcher<GetTagsQuery, GetTagsQueryVariables>(client, GetTagsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetTrashedPostsDocument = `
    query GetTrashedPosts($post_type_slug: String!, $limit: Int = 10, $offset: Int = 0) {
  post_type(where: {slug: {_eq: $post_type_slug}}) {
    id
    slug
    name
  }
  post(
    limit: $limit
    offset: $offset
    order_by: {created_at: desc}
    where: {_and: {deleted_at: {_is_null: false}, post_type: {slug: {_eq: $post_type_slug}}}}
  ) {
    id
    title
    category_id
    category {
      id
      slug
      name
    }
    tags(order_by: {tag_id: asc}) {
      tag {
        id
        slug
        name
      }
    }
    revisions(order_by: {created_at: desc}) {
      id
      created_at
      values {
        id
        field_id
        field {
          id
          slug
          name
        }
        text {
          body
        }
        numeric {
          body
        }
        integer {
          body
        }
        post {
          body {
            id
            title
            created_at
            revisions(order_by: {created_at: desc}) {
              id
              created_at
              values {
                id
                field_id
                field {
                  id
                  slug
                  name
                }
                text {
                  body
                }
                numeric {
                  body
                }
                integer {
                  body
                }
                post {
                  body {
                    id
                    title
                  }
                }
                timestamp {
                  body
                }
                boolean {
                  body
                }
              }
            }
          }
        }
        timestamp {
          body
        }
        boolean {
          body
        }
      }
    }
    post_type {
      id
      slug
      name
    }
    created_at
  }
  post_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const useGetTrashedPostsQuery = <
      TData = GetTrashedPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTrashedPostsQueryVariables,
      options?: UseQueryOptions<GetTrashedPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTrashedPostsQuery, TError, TData>(
      ['GetTrashedPosts', variables],
      fetcher<GetTrashedPostsQuery, GetTrashedPostsQueryVariables>(client, GetTrashedPostsDocument, variables, headers),
      options
    );
export const useInfiniteGetTrashedPostsQuery = <
      TData = GetTrashedPostsQuery,
      TError = unknown
    >(
      _pageParamKey: keyof GetTrashedPostsQueryVariables,
      client: GraphQLClient,
      variables: GetTrashedPostsQueryVariables,
      options?: UseInfiniteQueryOptions<GetTrashedPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetTrashedPostsQuery, TError, TData>(
      ['GetTrashedPosts.infinite', variables],
      (metaData) => fetcher<GetTrashedPostsQuery, GetTrashedPostsQueryVariables>(client, GetTrashedPostsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const TrashPostDocument = `
    mutation TrashPost($id: bigint!, $deleted_at: timestamptz) {
  update_post_by_pk(pk_columns: {id: $id}, _set: {deleted_at: $deleted_at}) {
    id
  }
}
    `;
export const useTrashPostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<TrashPostMutation, TError, TrashPostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<TrashPostMutation, TError, TrashPostMutationVariables, TContext>(
      ['TrashPost'],
      (variables?: TrashPostMutationVariables) => fetcher<TrashPostMutation, TrashPostMutationVariables>(client, TrashPostDocument, variables, headers)(),
      options
    );
export const UpdateCategoryDocument = `
    mutation UpdateCategory($id: Int!, $slug: String!, $name: String!) {
  update_category_by_pk(pk_columns: {id: $id}, _set: {slug: $slug, name: $name}) {
    id
  }
}
    `;
export const useUpdateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>(
      ['UpdateCategory'],
      (variables?: UpdateCategoryMutationVariables) => fetcher<UpdateCategoryMutation, UpdateCategoryMutationVariables>(client, UpdateCategoryDocument, variables, headers)(),
      options
    );
export const UpdateFieldDocument = `
    mutation UpdateField($id: bigint!, $slug: String!, $name: String!, $field_type_id: Int!, $field_post_type_id: Int, $order: Int = 10, $multiple: Boolean = false, $required: Boolean = false) {
  update_field_by_pk(
    pk_columns: {id: $id}
    _set: {slug: $slug, name: $name, field_type_id: $field_type_id, field_post_type_id: $field_post_type_id, order: $order, multiple: $multiple, required: $required}
  ) {
    id
    slug
    name
    field_type {
      id
      slug
      name
    }
    field_post_type_id
    multiple
    required
    order
  }
}
    `;
export const useUpdateFieldMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateFieldMutation, TError, UpdateFieldMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateFieldMutation, TError, UpdateFieldMutationVariables, TContext>(
      ['UpdateField'],
      (variables?: UpdateFieldMutationVariables) => fetcher<UpdateFieldMutation, UpdateFieldMutationVariables>(client, UpdateFieldDocument, variables, headers)(),
      options
    );
export const UpdatePostDocument = `
    mutation UpdatePost($post_id: bigint!, $title: String!, $category_id: Int!, $tags: [post_tag_insert_input!] = [], $values: [value_insert_input!] = [], $created_at: timestamptz, $outdated_revision_ids: [bigint!] = []) {
  update_post_by_pk(
    pk_columns: {id: $post_id}
    _set: {title: $title, category_id: $category_id, created_at: $created_at}
  ) {
    id
  }
  insert_revision_one(object: {post_id: $post_id, values: {data: $values}}) {
    id
  }
  delete_revision(where: {id: {_in: $outdated_revision_ids}}) {
    returning {
      id
    }
  }
  delete_post_tag(where: {post_id: {_eq: $post_id}}) {
    returning {
      post_id
      tag_id
    }
  }
  insert_post_tag(objects: $tags) {
    returning {
      post_id
      tag_id
    }
  }
}
    `;
export const useUpdatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdatePostMutation, TError, UpdatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdatePostMutation, TError, UpdatePostMutationVariables, TContext>(
      ['UpdatePost'],
      (variables?: UpdatePostMutationVariables) => fetcher<UpdatePostMutation, UpdatePostMutationVariables>(client, UpdatePostDocument, variables, headers)(),
      options
    );
export const UpdatePostTypeDocument = `
    mutation UpdatePostType($id: Int!, $slug: String!, $name: String!, $icon_tag: String, $order: Int = 10, $public: Boolean = false) {
  update_post_type_by_pk(
    pk_columns: {id: $id}
    _set: {slug: $slug, name: $name, icon_tag: $icon_tag, order: $order, public: $public}
  ) {
    id
    slug
    name
    icon_tag
    order
    public
    fields(order_by: {order: asc}) {
      id
      slug
      name
      field_type {
        id
        slug
        name
        order
      }
      required
      multiple
      order
    }
  }
}
    `;
export const useUpdatePostTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdatePostTypeMutation, TError, UpdatePostTypeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdatePostTypeMutation, TError, UpdatePostTypeMutationVariables, TContext>(
      ['UpdatePostType'],
      (variables?: UpdatePostTypeMutationVariables) => fetcher<UpdatePostTypeMutation, UpdatePostTypeMutationVariables>(client, UpdatePostTypeDocument, variables, headers)(),
      options
    );
export const UpdateTagDocument = `
    mutation UpdateTag($id: Int!, $slug: String!, $name: String!) {
  update_tag_by_pk(pk_columns: {id: $id}, _set: {slug: $slug, name: $name}) {
    id
  }
}
    `;
export const useUpdateTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTagMutation, TError, UpdateTagMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTagMutation, TError, UpdateTagMutationVariables, TContext>(
      ['UpdateTag'],
      (variables?: UpdateTagMutationVariables) => fetcher<UpdateTagMutation, UpdateTagMutationVariables>(client, UpdateTagDocument, variables, headers)(),
      options
    );