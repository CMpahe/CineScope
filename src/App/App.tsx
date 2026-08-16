import { Header } from '@/features/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { MoviePage } from '@/pages/Movies/MoviePage'
import { TvPage } from '@/pages/Tv/TvPage'
import { HomePage } from '@/pages/Home/HomePage'
import { SearchPage } from '@/pages/Search/SearchPage'
import { FavoritePage } from '@/pages/Favorite/FavoritePage'


export const App = () => {

  return (
    <div className='container'>
      <Header />
      <Routes>
        
        <Route path='/movies' element={<MoviePage />} />

        <Route path='/' element={<HomePage />} />

        <Route path='/tv' element={<TvPage />} />

        <Route path='/search' element={<SearchPage />} />

        <Route path='/myList' element={<FavoritePage/>}/>

      </Routes>
    </div>
  )
}