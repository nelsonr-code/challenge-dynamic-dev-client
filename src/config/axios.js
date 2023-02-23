import axios from 'axios'

export const webApi = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
