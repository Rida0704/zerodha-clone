// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

// API Endpoints
export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  VERIFY: `${API_BASE_URL}/auth/verify`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  HOLDINGS: `${API_BASE_URL}/allHoldings`,
  POSITIONS: `${API_BASE_URL}/allPositions`,
  NEW_ORDER: `${API_BASE_URL}/neworder`,
}; 