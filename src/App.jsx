import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from '@components/Header'
import { Table } from '@components/Table'
import { AlbumShow } from '@app/pages/AlbumShow'
import { AlbumForm } from '@app/pages/AlbumForm'
import { AlbumProvider } from '@context/AlbumContext'

function App() {
  return (
    <AlbumProvider>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Table />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
        <Route
          path='/albums/add/'
          element={<AlbumForm />}
        />
        <Route
          path='/albums/show/:id'
          element={<AlbumShow />}
        />
        <Route
          path='/albums/edit/:id'
          element={<AlbumForm />}
        />
      </Routes>
    </AlbumProvider>
  )
}

export default App
