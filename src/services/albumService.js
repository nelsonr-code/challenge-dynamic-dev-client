import { get, post, put, remove } from '@helpers/requests'

export default class AlbumService {
  static async create(data) {
    try {
      // const response = await post(`/posts`, data)
      const response = await post(`/api/albums`, data)
      // console.log(response)

      return response
    } catch (error) {
      // console.error(error)
      return error
    }
  }

  static async getOne(id) {
    try {
      const response = await get(`/api/albums/${id}`)
      // console.log(response)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  static async getAll() {
    try {
      // const response = await get(`/posts`)
      const response = await get(`/api/albums`)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  static async update(id, data) {
    try {
      // const response = await put(`/posts/${id}`, data)
      const response = await put(`/api/albums/${id}`, data)
      // console.log(response)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  static async delete(id) {
    try {
      const response = await remove(`/api/albums/${id}`)
      // console.log(response)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }
}
