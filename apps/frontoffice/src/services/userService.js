import { apiRequest } from './api'

export function getCurrentUser() {
  return apiRequest('/me')
}