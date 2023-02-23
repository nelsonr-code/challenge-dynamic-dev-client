import { webApi } from '@config/axios.js'

export const get = async (url) => {
  const response = await webApi.get(url)
  return response.data
}

export const post = async (url, data) => {
  const response = await webApi.post(url, data)
  return response.data
}

export const put = async (url, data) => {
  const response = await webApi.put(url, data)
  return response.data
}

export const remove = async (url) => {
  const response = await webApi.delete(url)
  return response.data
}
