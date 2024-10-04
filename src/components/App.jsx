// ---- ---- ---- HOOKS ---- ---- ----
import React, { useEffect, useMemo, useState } from 'react'

// ---- ---- ---- SERVICES ---- ---- ----
// import { getMovie } from './services/getMovie'
import { useFetchMoviesAndGenres } from '../customHooks/useFetchMoviesAndGenres'

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
  // ---- ---- STATES ---- ----
  // const [movies, setMovies] = useState()
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
  const [search, setSearch] = useState(false)

  // ---- ---- ENDPOINTS ---- ----
  const moviesEndpoint = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc'
  const genresEndpoint = '/genre/movie/list?language=en'

  // Navegate automatically everytime the user search a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // Getting movies from the API
  const { moviesData, genresData } = useFetchMoviesAndGenres({ moviesEndpoint, genresEndpoint })

  // Simplify genres object into a object of key-value pair(genre-code: 'genre')
  const genresMap = useMemo(() => {
    return genresData.reduce((acc, genre) => {
      acc[genre.id] = genre.name
      return acc
    }, {})
  }, [genresData])

  // Create a new movies object but with the genres translated into text
  const moviesWithGenres = useMemo(() => {
    return moviesData.map(movie => ({
      ...movie,
      genres: movie.genre_ids.map(id => genresMap[id]) || []
    }))
  }, [moviesData, genresMap])

  // Update moviesToDisplay every time moviesWithGenres changes
  useEffect(() => {
    setMoviesToDisplay(moviesWithGenres)
  }, [moviesWithGenres])

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
