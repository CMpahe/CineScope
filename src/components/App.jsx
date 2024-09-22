// ---- ---- ---- HOOKS ---- ---- ----
import React, { useEffect, useState } from 'react'

// ---- ---- ---- SERVICES ---- ---- ----
// import { getMovie } from './services/getMovie'

// ---- ---- ---- LOGIC ---- ---- ----
import { filterMovies } from '../logic/logic'

// ---- ---- ---- COMPONENTS ---- ---- ----
import { Header } from './Header'
import { MovieSection } from './MovieSection'
import { GenreSection } from './GenreSection'
import movies from '../movies.json'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

export const App = () => {
  // const [movies, setMovies] = useState()
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
  const [search, setSearch] = useState(false)
  const navegate = useNavigate()
  const location = useLocation()

  useEffect(() => { // agregar el location para saber en que pagin ase encuentra el usuario y asi determinar si hay que redirigirlo al pagina principal o ya se encuentra en la misma
    let timeoutId
    if (timeoutId) { clearTimeout(timeoutId) }
    if (location.pathname !== '/') {
      navegate('/')
    }
    timeoutId = setTimeout(() => {
      setMoviesToDisplay(
        filterMovies({ search, movies })
      )
    }, 400)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [search])

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<MovieSection movies={moviesToDisplay} />} />
        <Route path='/genres' element={<GenreSection movies={movies} />} />
      </Routes>
    </div>
  )
}
