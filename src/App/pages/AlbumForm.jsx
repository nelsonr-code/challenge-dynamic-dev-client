import { Link, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useAlbum } from '@context/AlbumContext'
import { useEffect, useState } from 'react'

function AlbumForm() {
  const { createAlbum, loadAlbum, updateAlbum } = useAlbum()
  const [album, setAlbum] = useState({
    name: '',
    artist: '',
    yearRelease: '',
    urlImage: '',
  })
  const { id } = useParams()

  useEffect(() => {
    const load = async () => {
      if (id) {
        const album = await loadAlbum(id)
        setAlbum({
          name: album.data.name,
          artist: album.data.artist,
          yearRelease: album.data.yearRelease,
          urlImage: album.data.urlImage,
        })
      }
    }

    load()
  }, [])

  return (
    <section className='mt-4'>
      <div className='container'>
        <h3 className='text-2xl text-center font-bold text-gray-800'>
          {id ? 'Edit Album' : 'Add Album'}
        </h3>
        <div className='grid'>
          <Formik
            initialValues={album}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              console.log(values)
              if (id) {
                console.log('edit')
                await updateAlbum(id, values)
              } else {
                await createAlbum(values)
              }
              actions.resetForm()
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label
                    htmlFor='name'
                    className='block text-gray-700 text-sm font-bold mb-2'
                  >
                    Album name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Album name'
                    required={true}
                    value={values.name}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='artist'
                    className='block text-gray-700 text-sm font-bold mb-2'
                  >
                    Artist name
                  </label>
                  <input
                    type='text'
                    name='artist'
                    id='artist'
                    placeholder='Artist name'
                    required={true}
                    value={values.artist}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='yearRelease'
                    className='block text-gray-700 text-sm font-bold mb-2'
                  >
                    Year release
                  </label>
                  <input
                    type='date'
                    min={'2010-01-01'}
                    max={'2021-12-31'}
                    name='yearRelease'
                    id='yearRelease'
                    placeholder='Year release'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={values.yearRelease}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='urlImage'
                    className='block text-gray-700 text-sm font-bold mb-2'
                  >
                    URL image
                  </label>
                  <input
                    type='text'
                    name='urlImage'
                    id='urlImage'
                    placeholder='URL image'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={values.urlImage}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex justify-between mt-4'>
                  <Link
                    to='/albums'
                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  >
                    <button>Cancel</button>
                  </Link>
                  <button
                    type='submit'
                    className='bg-[#24bcca] hover:bg-[#1b262a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export { AlbumForm }
