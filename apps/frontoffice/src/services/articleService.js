import { apiRequest } from './api'

export function getArticles() {
  return apiRequest('/articles')
}

export function getArticleById(id) {
  return apiRequest(`/articles/${id}`)
}