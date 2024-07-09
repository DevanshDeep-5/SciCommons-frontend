/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { customInstance } from '.././custom-instance';
import type { BodyType, ErrorType } from '.././custom-instance';
import type {
  ArticlesApiReviewListReviewsParams,
  CreateReviewSchema,
  Message,
  PaginatedReviewSchema,
  ReviewCommentCreateSchema,
  ReviewCommentOut,
  ReviewCommentUpdateSchema,
  ReviewResponseSchema,
  ReviewUpdateSchema,
} from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Create Review
 */
export const articlesApiReviewCreateReview = (
  articleId: number,
  createReviewSchema: BodyType<CreateReviewSchema>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ReviewResponseSchema>(
    {
      url: `/api/articles/${articleId}/reviews/`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createReviewSchema,
    },
    options
  );
};

export const getArticlesApiReviewCreateReviewMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewCreateReview>>,
    TError,
    { articleId: number; data: BodyType<CreateReviewSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewCreateReview>>,
  TError,
  { articleId: number; data: BodyType<CreateReviewSchema> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewCreateReview>>,
    { articleId: number; data: BodyType<CreateReviewSchema> }
  > = (props) => {
    const { articleId, data } = props ?? {};

    return articlesApiReviewCreateReview(articleId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewCreateReviewMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewCreateReview>>
>;
export type ArticlesApiReviewCreateReviewMutationBody = BodyType<CreateReviewSchema>;
export type ArticlesApiReviewCreateReviewMutationError = ErrorType<Message>;

/**
 * @summary Create Review
 */
export const useArticlesApiReviewCreateReview = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewCreateReview>>,
    TError,
    { articleId: number; data: BodyType<CreateReviewSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewCreateReview>>,
  TError,
  { articleId: number; data: BodyType<CreateReviewSchema> },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewCreateReviewMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary List Reviews
 */
export const articlesApiReviewListReviews = (
  articleId: number,
  params?: ArticlesApiReviewListReviewsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PaginatedReviewSchema>(
    { url: `/api/articles/${articleId}/reviews/`, method: 'GET', params, signal },
    options
  );
};

export const getArticlesApiReviewListReviewsQueryKey = (
  articleId: number,
  params?: ArticlesApiReviewListReviewsParams
) => {
  return [`/api/articles/${articleId}/reviews/`, ...(params ? [params] : [])] as const;
};

export const getArticlesApiReviewListReviewsQueryOptions = <
  TData = Awaited<ReturnType<typeof articlesApiReviewListReviews>>,
  TError = ErrorType<Message>,
>(
  articleId: number,
  params?: ArticlesApiReviewListReviewsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof articlesApiReviewListReviews>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getArticlesApiReviewListReviewsQueryKey(articleId, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof articlesApiReviewListReviews>>> = ({
    signal,
  }) => articlesApiReviewListReviews(articleId, params, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!articleId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof articlesApiReviewListReviews>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ArticlesApiReviewListReviewsQueryResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewListReviews>>
>;
export type ArticlesApiReviewListReviewsQueryError = ErrorType<Message>;

/**
 * @summary List Reviews
 */
export const useArticlesApiReviewListReviews = <
  TData = Awaited<ReturnType<typeof articlesApiReviewListReviews>>,
  TError = ErrorType<Message>,
>(
  articleId: number,
  params?: ArticlesApiReviewListReviewsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof articlesApiReviewListReviews>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getArticlesApiReviewListReviewsQueryOptions(articleId, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Update Review
 */
export const articlesApiReviewUpdateReview = (
  reviewId: number,
  reviewUpdateSchema: BodyType<ReviewUpdateSchema>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ReviewResponseSchema>(
    {
      url: `/api/articles/reviews/${reviewId}/`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: reviewUpdateSchema,
    },
    options
  );
};

export const getArticlesApiReviewUpdateReviewMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>,
    TError,
    { reviewId: number; data: BodyType<ReviewUpdateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>,
  TError,
  { reviewId: number; data: BodyType<ReviewUpdateSchema> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>,
    { reviewId: number; data: BodyType<ReviewUpdateSchema> }
  > = (props) => {
    const { reviewId, data } = props ?? {};

    return articlesApiReviewUpdateReview(reviewId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewUpdateReviewMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>
>;
export type ArticlesApiReviewUpdateReviewMutationBody = BodyType<ReviewUpdateSchema>;
export type ArticlesApiReviewUpdateReviewMutationError = ErrorType<Message>;

/**
 * @summary Update Review
 */
export const useArticlesApiReviewUpdateReview = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>,
    TError,
    { reviewId: number; data: BodyType<ReviewUpdateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewUpdateReview>>,
  TError,
  { reviewId: number; data: BodyType<ReviewUpdateSchema> },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewUpdateReviewMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Delete Review
 */
export const articlesApiReviewDeleteReview = (
  reviewId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    { url: `/api/articles/reviews/${reviewId}/`, method: 'DELETE' },
    options
  );
};

export const getArticlesApiReviewDeleteReviewMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>,
    TError,
    { reviewId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>,
  TError,
  { reviewId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>,
    { reviewId: number }
  > = (props) => {
    const { reviewId } = props ?? {};

    return articlesApiReviewDeleteReview(reviewId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewDeleteReviewMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>
>;

export type ArticlesApiReviewDeleteReviewMutationError = ErrorType<Message>;

/**
 * @summary Delete Review
 */
export const useArticlesApiReviewDeleteReview = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>,
    TError,
    { reviewId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewDeleteReview>>,
  TError,
  { reviewId: number },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewDeleteReviewMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Create Comment
 */
export const articlesApiReviewCreateComment = (
  reviewId: number,
  reviewCommentCreateSchema: BodyType<ReviewCommentCreateSchema>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ReviewCommentOut>(
    {
      url: `/api/articles/reviews/${reviewId}/comments/`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: reviewCommentCreateSchema,
    },
    options
  );
};

export const getArticlesApiReviewCreateCommentMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewCreateComment>>,
    TError,
    { reviewId: number; data: BodyType<ReviewCommentCreateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewCreateComment>>,
  TError,
  { reviewId: number; data: BodyType<ReviewCommentCreateSchema> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewCreateComment>>,
    { reviewId: number; data: BodyType<ReviewCommentCreateSchema> }
  > = (props) => {
    const { reviewId, data } = props ?? {};

    return articlesApiReviewCreateComment(reviewId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewCreateCommentMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewCreateComment>>
>;
export type ArticlesApiReviewCreateCommentMutationBody = BodyType<ReviewCommentCreateSchema>;
export type ArticlesApiReviewCreateCommentMutationError = ErrorType<unknown>;

/**
 * @summary Create Comment
 */
export const useArticlesApiReviewCreateComment = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewCreateComment>>,
    TError,
    { reviewId: number; data: BodyType<ReviewCommentCreateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewCreateComment>>,
  TError,
  { reviewId: number; data: BodyType<ReviewCommentCreateSchema> },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewCreateCommentMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary List Review Comments
 */
export const articlesApiReviewListReviewComments = (
  reviewId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ReviewCommentOut[]>(
    { url: `/api/articles/reviews/${reviewId}/comments/`, method: 'GET', signal },
    options
  );
};

export const getArticlesApiReviewListReviewCommentsQueryKey = (reviewId: number) => {
  return [`/api/articles/reviews/${reviewId}/comments/`] as const;
};

export const getArticlesApiReviewListReviewCommentsQueryOptions = <
  TData = Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>,
  TError = ErrorType<unknown>,
>(
  reviewId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getArticlesApiReviewListReviewCommentsQueryKey(reviewId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>> = ({
    signal,
  }) => articlesApiReviewListReviewComments(reviewId, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!reviewId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ArticlesApiReviewListReviewCommentsQueryResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>
>;
export type ArticlesApiReviewListReviewCommentsQueryError = ErrorType<unknown>;

/**
 * @summary List Review Comments
 */
export const useArticlesApiReviewListReviewComments = <
  TData = Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>,
  TError = ErrorType<unknown>,
>(
  reviewId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof articlesApiReviewListReviewComments>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getArticlesApiReviewListReviewCommentsQueryOptions(reviewId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Update Comment
 */
export const articlesApiReviewUpdateComment = (
  commentId: number,
  reviewCommentUpdateSchema: BodyType<ReviewCommentUpdateSchema>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    {
      url: `/api/articles/reviews/comments/${commentId}/`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: reviewCommentUpdateSchema,
    },
    options
  );
};

export const getArticlesApiReviewUpdateCommentMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>,
    TError,
    { commentId: number; data: BodyType<ReviewCommentUpdateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>,
  TError,
  { commentId: number; data: BodyType<ReviewCommentUpdateSchema> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>,
    { commentId: number; data: BodyType<ReviewCommentUpdateSchema> }
  > = (props) => {
    const { commentId, data } = props ?? {};

    return articlesApiReviewUpdateComment(commentId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewUpdateCommentMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>
>;
export type ArticlesApiReviewUpdateCommentMutationBody = BodyType<ReviewCommentUpdateSchema>;
export type ArticlesApiReviewUpdateCommentMutationError = ErrorType<Message>;

/**
 * @summary Update Comment
 */
export const useArticlesApiReviewUpdateComment = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>,
    TError,
    { commentId: number; data: BodyType<ReviewCommentUpdateSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewUpdateComment>>,
  TError,
  { commentId: number; data: BodyType<ReviewCommentUpdateSchema> },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewUpdateCommentMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Delete Comment
 */
export const articlesApiReviewDeleteComment = (
  commentId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<void>(
    { url: `/api/articles/reviews/comments/${commentId}/`, method: 'DELETE' },
    options
  );
};

export const getArticlesApiReviewDeleteCommentMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>,
    TError,
    { commentId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>,
  TError,
  { commentId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>,
    { commentId: number }
  > = (props) => {
    const { commentId } = props ?? {};

    return articlesApiReviewDeleteComment(commentId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ArticlesApiReviewDeleteCommentMutationResult = NonNullable<
  Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>
>;

export type ArticlesApiReviewDeleteCommentMutationError = ErrorType<Message>;

/**
 * @summary Delete Comment
 */
export const useArticlesApiReviewDeleteComment = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>,
    TError,
    { commentId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof articlesApiReviewDeleteComment>>,
  TError,
  { commentId: number },
  TContext
> => {
  const mutationOptions = getArticlesApiReviewDeleteCommentMutationOptions(options);

  return useMutation(mutationOptions);
};
