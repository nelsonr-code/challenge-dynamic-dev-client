import axios from 'axios'

export const webApi = axios.create({
  baseURL: 'https://musicfy-challenge.azurewebsites.net',
  // baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
