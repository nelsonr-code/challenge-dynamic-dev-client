import { createContext, useContext, useState } from 'react'
import AlbumService from '@services/albumService'
const AlbumContext = createContext()

function AlbumProvider({ children }) {
  const [albums, setAlbums] = useState([])
  const [error, setError] = useState(null)

  const createAlbum = async (album) => {
    try {
      const response = await AlbumService.create(album)
      if (response?.response) {
        console.error(response.response.data.message)
        setError(response.response.data.message)
        // return response.response
      }
      // console.info(response.response)
    } catch (error) {
      console.error(error)
    }
  }

  const loadAlbums = async () => {
    const response = await AlbumService.getAll()
    setAlbums(response)
    setError(null)
  }

  const loadAlbum = async (id) => {
    try {
      const response = await AlbumService.getOne(id)
      console.log(response)
      // setAlbums(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  const updateAlbum = async (id, album) => {
    try {
      const response = await AlbumService.update(id, album)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteAlbum = async (id) => {
    try {
      const response = await AlbumService.delete(id)
      console.log('albums:', albums)
      const test = albums.data.filter((album) => album.id !== id)
      console.log(test)
      setAlbums(albums.data.filter((album) => album.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AlbumContext.Provider
      value={{
        albums,
        error,
        createAlbum,
        loadAlbums,
        loadAlbum,
        updateAlbum,
        deleteAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

const useAlbum = () => {
  const context = useContext(AlbumContext)
  if (!context) {
    throw new Error('useAlbum must be used within a AlbumProvider')
  }
  return context
}

export { AlbumContext, AlbumProvider, useAlbum }
