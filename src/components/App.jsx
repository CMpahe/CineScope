// ---- ---- ---- HOOKS ---- ---- ----
import React, { useEffect, useState } from 'react'

// ---- ---- ---- SERVICES ---- ---- ----
// import { getMovie } from './services/getMovie'
import { getData } from '../services/getData'

// ---- ---- ---- LOGIC ---- ---- ----
// import { filterMovies } from '../logic/logic'

// ---- ---- ---- COMPONENTS ---- ---- ----
import { Header } from './Header'
import { MovieSection } from './MovieSection'
import { GenreSection } from './GenreSection'
import movies from '../movies.json'
// import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'
import { Billboard } from './Billboard'

export const App = () => {
  // const [movies, setMovies] = useState()
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
  const [search, setSearch] = useState(false)
  // const [genres, setGenres] = useState(null)

  // Navegate automatically everytime the user search a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  const movieEndpoint = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

  // const genresEndpoint = 'genre/movie/list?language=en'

  useEffect(() => {
    // Getting movies from the API
    getData({ movieEndpoint })
      .then((response) => {
        setMoviesToDisplay(response.results)
      })
  }, [])

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Billboard />
      <Routes>
        <Route path='/' element={<MovieSection movies={moviesToDisplay} search={search} />} />
        <Route path='/genres' element={<GenreSection movies={movies} />} />
      </Routes>
    </div>
  )
}
