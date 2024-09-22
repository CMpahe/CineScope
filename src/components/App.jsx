// ---- ---- ---- HOOKS ---- ---- ----
import React, { useState } from 'react'

// ---- ---- ---- SERVICES ---- ---- ----
// import { getMovie } from './services/getMovie'

// ---- ---- ---- LOGIC ---- ---- ----
import { filterMovies } from '../logic/logic'

// ---- ---- ---- COMPONENTS ---- ---- ----
import { Header } from './Header'
import { MovieSection } from './MovieSection'
import { GenreSection } from './GenreSection'
import movies from '../movies.json'
import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  // const [movies, setMovies] = useState()
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
  const [search, setSearch] = useState(false)

  // Navegate automatically everytime the user search a movie
  useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies })

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<MovieSection movies={moviesToDisplay} search={search} />} />
        <Route path='/genres' element={<GenreSection movies={movies} />} />
      </Routes>
    </div>
  )
}
