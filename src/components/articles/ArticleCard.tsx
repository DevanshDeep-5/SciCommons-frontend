import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { MessageSquare, Star, User } from 'lucide-react';

import { ArticleOut } from '@/api/schemas';

interface ArticleCardProps {
  article: ArticleOut;
  forCommunity?: boolean;
}

const ArticleCard: FC<ArticleCardProps> = ({ article, forCommunity }) => {
  return (
    <div className="flex rounded-lg border bg-white p-4 shadow-lg res-text-sm dark:bg-gray-800">
      <div className="min-w-0 flex-grow pr-4">
        <Link
          href={
            forCommunity
              ? `/community/${article.community_article?.community.name}/articles/${article.slug}`
              : `/article/${article.slug}`
          }
        >
          <h2 className="truncate font-semibold text-gray-900 res-text-lg hover:underline dark:text-gray-100">
            {article.title}
          </h2>
        </Link>
        <p className="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-gray-500 dark:text-gray-400">
          {article.abstract}
        </p>
        <p className="mt-2 truncate text-gray-700 dark:text-gray-300">
          Authors: {article.authors.map((author) => author.label).join(', ')}
        </p>
        <p className="mt-1 truncate text-gray-500 dark:text-gray-400">
          Published Community/Journal: {article.community_article?.community.name}
        </p>
        <div className="mt-2 flex flex-wrap">
          {article.keywords.map((keyword, index) => (
            <span
              key={index}
              className="mb-2 mr-2 rounded bg-gray-200 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="ml-1 text-gray-700 dark:text-gray-300">
              {article.total_reviews} ratings
            </span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="ml-1 text-gray-700 dark:text-gray-300">
              {article.total_comments} comments
            </span>
          </div>
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="ml-1 text-gray-700 dark:text-gray-300">{0} discussions</span>
          </div>
        </div>
      </div>
      <div className="ml-4 flex-none">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
          <Image
            src={article.article_image_url || 'https://picsum.photos/200/200'}
            alt="Article Image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

export const ArticleCardSkeleton: React.FC = () => {
  return (
    <div className="flex rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800">
      <div className="min-w-0 flex-grow pr-4">
        {' '}
        {/* Added min-w-0 to match the main component */}
        <div className="mb-2 h-6 w-3/4 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-2 h-4 w-full animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-2 h-4 w-full animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-4 h-4 w-1/2 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-2 h-4 w-2/3 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        <div className="mt-2 flex flex-wrap">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="mb-2 mr-2 h-6 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-600"
            ></div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {' '}
          {/* Changed to match the main component */}
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
      <div className="ml-4 flex-none">
        {' '}
        {/* Added ml-4 to match the main component */}
        <div className="h-20 w-20 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-600 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"></div>
      </div>
    </div>
  );
};
