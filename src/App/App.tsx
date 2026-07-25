import { Header } from '@/features/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { MoviePage } from '@/pages/Movies/MoviePage'
import { TvPage } from '@/pages/Tv/TvPage'
import { HomePage } from '@/pages/Home/HomePage'
import { SearchPage } from '@/pages/Search/SearchPage'


export const App = () => {

  return (
    <div className='container'>
      <Header />
      <Routes>
        
        <Route path='/movies' element={<MoviePage />} />

        <Route path='/' element={<HomePage />} />

        <Route path='/tv' element={<TvPage />} />

        <Route path='/search' element={<SearchPage />} />

        <Route
          path='/myList'
          element={
            <div>
              <h1 className='big-title1'>Hola mundo</h1>
              <h1 className='title'>Hola mundo</h1>
              <h2 className='subtitle'>Hola mundo</h2>
              <h3 className='subtitle2'>Hola mundo</h3>
              <p className='body'>Hola mundo</p>
            </div>
          }
        />

      </Routes>
    </div>
  )
}