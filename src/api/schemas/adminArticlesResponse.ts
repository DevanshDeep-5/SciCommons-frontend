/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ArticleOut } from './articleOut';

export interface AdminArticlesResponse {
  community_id: number;
  published: ArticleOut[];
  submitted: ArticleOut[];
  unpublished: ArticleOut[];
}
