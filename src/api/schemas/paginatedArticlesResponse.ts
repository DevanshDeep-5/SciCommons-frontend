/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ArticleOut } from './articleOut';

export interface PaginatedArticlesResponse {
  items: ArticleOut[];
  num_pages: number;
  page: number;
  page_size: number;
  total: number;
}
