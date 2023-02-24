import { get, post, put, remove } from '@helpers/requests'

export default class AlbumService {
  static async create(data) {
    try {
      // const response = await post(`/posts`, data)
      const response = await post(`/albums`, data)
      // console.log(response)

      return response
    } catch (error) {
      // console.error(error)
      return error
    }
  }

  static async getOne(id) {
    try {
      const response = await get(`/albums/${id}`)
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
      const response = await get(`/albums`)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  static async update(id, data) {
    try {
      // const response = await put(`/posts/${id}`, data)
      const response = await put(`/albums/${id}`, data)
      // console.log(response)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  static async delete(id) {
    try {
      const response = await remove(`/albums/${id}`)
      // console.log(response)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }
}
