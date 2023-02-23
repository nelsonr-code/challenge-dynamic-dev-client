import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlbumService from '@services/albumService'
import { Spinner } from '@components/Spinner'
import { useAlbum } from '@context/AlbumContext'

export const Table = () => {
  const { albums, loadAlbums, deleteAlbum } = useAlbum()
  console.log('albums:', albums)
  // const [albumsData, setAlbumsData] = useState({
  //   data: [],
  //   loading: false,
  //   error: null,
  // })

  useEffect(() => {
    loadAlbums()
    // setAlbums({ ...albums, loading: true })
    // const getData = async () => {
    //   try {
    //     const response = await AlbumService.getAll()
    //     setAlbums({ ...albums, data: response, loading: false })
    //   } catch (error) {
    //     setAlbums({ ...albums, error: error })
    //   }
    // }

    // getData()

    return () => {}
  }, [])

  const handleDelete = async (id) => {
    // const response = await deleteAlbum(id)
    try {
      const response = await AlbumService.delete(id)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='p-5 h-screen bg-gray-100'>
      <h3 className='text-xl text-center font-medium mb-2'>Albums</h3>
      <Link to='/albums/add'>
        <button className='bg-[#24bcca] hover:bg-[#1b262a] text-white font-bold py-2 px-4 mb-4 rounded'>
          Add Album
        </button>
      </Link>
      <table className='w-full'>
        <thead className='bg-[#1b262a] text-[#e8e6e3]'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide md:text-left'>
              Name
            </th>
            <th className='p-3 text-sm font-semibold tracking-wide md:text-left'>
              Artist
            </th>
            <th className='p-3 text-sm font-semibold tracking-wide md:text-left'>
              Release
            </th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>
              Cover
            </th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>
              Action
            </th>
          </tr>
        </thead>
        {albums.loading ? (
          <Spinner />
        ) : (
          <tbody className='divide-y divide-gray-100'>
            {albums?.data?.map((album) => {
              // {ALBUMS_DATA.map((album) => {
              return (
                <tr
                  key={album.id}
                  className={album.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className='p-3 text-sm md:text-left text-gray-700 whitespace-nowrap'>
                    {album.name}
                    {/* {album.body} */}
                  </td>
                  <td className='p-3 text-sm md:text-left text-gray-700 whitespace-nowrap'>
                    {album.artist}
                    {/* {album.title} */}
                  </td>
                  <td className='p-3 text-sm md:text-left text-gray-700 whitespace-nowrap'>
                    {new Date(album.yearRelease).getFullYear()}
                    {/* {album.id} */}
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <img
                      src={album.urlImage}
                      width={75}
                      height={75}
                      alt='album cover'
                    />
                  </td>
                  <td>
                    <Link to={`/albums/edit/${album.id}`}>
                      <button className='bg-[#002a33] hover:bg-[#00aab9] text-white font-bold py-2 px-4 rounded'>
                        Edit
                      </button>
                    </Link>
                    <button
                      className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                      onClick={() => {
                        deleteAlbum(album.id)
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        )}
      </table>
    </div>
  )
}
