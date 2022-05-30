import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  getUser?: Maybe<User>
  /** Test query */
  test: Scalars['String']
}

export type QueryGetUserArgs = {
  id: Scalars['String']
}

export type QueryTestArgs = {
  name: Scalars['String']
}

export type User = {
  __typename?: 'User'
  email?: Maybe<Scalars['String']>
  id: Scalars['String']
  username: Scalars['String']
}

export type TestQueryVariables = Exact<{
  name: Scalars['String']
}>

export type TestQuery = { __typename?: 'Query'; test: string }

export const TestDocument = gql`
  query Test($name: String!) {
    test(name: $name)
  }
`

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useTestQuery(
  baseOptions: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options)
}
export function useTestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(
    TestDocument,
    options
  )
}
export type TestQueryHookResult = ReturnType<typeof useTestQuery>
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>
