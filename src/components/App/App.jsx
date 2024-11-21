// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import React, { useEffect, useMemo, useState } from 'react'

// ---- ---- ---- ---- SERVICES ---- ---- ---- ----
// import { getMovie } from './services/getMovie'
import { useFetchMediaData } from '../../customHooks/useFetchMediaData'
import { useFetchGenresData } from '../../customHooks/useFecthGenresData'

// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
// import { filterMovies } from '../logic/logic'
import { addGenres, restructureGenresData } from './App.logic'

// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Header } from '../Header'
import { MovieSection } from '../MovieSection'
import { GenreSection } from '../GenreSection'
// import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'
import { Billboard } from '../Billboard'

// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { mediaEndpoints, genresEndpoints } from '../../data/endpoints'
import localMovies from '../../movies.json'

export const App = () => {
  // ---- ---- STATES ---- ----
  // const [movies, setMovies] = useState()
  const [moviesToDisplay, setMoviesToDisplay] = useState(localMovies) // Movies delivered to 'MovieSection' - It is initialized with a local package of movies and then update with the movie data got from the API
  const [search, setSearch] = useState(false) // Nothing in the meantime!

  const [moviesResponse, setMoviesResponse] = useState([]) // mediaDataResponse = { moviesData, tvData }
  const [tvResponse, setTvResponse] = useState([])
  useEffect(() => {
    useFetchMediaData({ mediaEndpoints }).then(res => {
      if (res) {
        setMoviesResponse(res.moviesPackage) // This was fixed, here probably was the error of the rendering loop
        setTvResponse(res.tvPackage)
      }
    })
  }, [])

  const [mediaGenresResponse, SetMediaGenresResponse] = useState([]) // mediaGenresResponse = { movieGenresResponse, tvGenresResponse }
  useEffect(() => {
    useFetchGenresData({ genresEndpoints }).then(res => {
      if (res) { SetMediaGenresResponse(res) }
      // console.error('Something failed with Genres Response!')
    })
  }, [])

  const moviesGenresMap = useMemo(() => {
    const data = moviesResponse.moviesGenres
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      // console.error('moviesGenresMap recibe null o un objeto vacio de mediaGenresResponse')
      return restructureGenresData(data)
    }
    return []
  }, [mediaGenresResponse])

  const tvGenresMap = useMemo(() => {
    const data = mediaGenresResponse.tvGenres
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      // console.error('tvGenresMap recibe null o un objeto vacio')
      return restructureGenresData(data.genres)
    }
    return []
  }, [mediaGenresResponse])
  // Navegate automatically everytime the user search a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // Create a copy of the object but with a new property with the genres of the movies -> (results: [Action, Horror, Comedy])
  const moviesWithGenres = useMemo(() => {
    console.log(Array.isArray(moviesResponse) && moviesResponse.length > 0)
    if (Array.isArray(moviesResponse) && moviesResponse.length > 0) {
      console.log(moviesResponse)
      // console.error('movieWithGenres recibe un array')
      return moviesResponse.map((pack) => ({
        ...pack,
        results: addGenres(pack.results, moviesGenresMap)
      }))
    }
    return []
  }, [moviesGenresMap, moviesResponse])

  // Create a copy of the object but with a new property with the genres of the TV programs -> (results: [Action, Horror, Comedy])
  const tvWithGenres = useMemo(() => {
    if (Array.isArray(moviesResponse) && moviesResponse.length > 0) {
      // console.error('tvWithGenres recibe un array')
      return tvResponse.map((pack) => ({
        ...pack,
        results: addGenres(pack.results, tvGenresMap)
      }))
    }
    return []
  }, [tvGenresMap, tvResponse]) // verificar si realmente modifica la propiedad 'results'  !!!

  // Updated movies to be displayed
  useEffect(() => {
    console.log(moviesWithGenres)
    console.log(moviesWithGenres[0])
    setMoviesToDisplay({ moviesWithGenres, tvWithGenres })
  }, [moviesWithGenres, tvWithGenres])

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Billboard />
      <Routes>

        <Route path='/' element={<MovieSection moviesObject={moviesToDisplay} search={search} />} />

        <Route path='/genres' element={<GenreSection movies={localMovies} />} />

      </Routes>
    </div>
  )
}

// FIRST OF ALL VERIFY THE API FETCHING IS WORKING PROPERLY AND THE CODE IS RUNNIG SMOOTHLY
// THEN, WORK ON CREATING THE NEW PAGES AND SECTIONS NEEDED TO EFFECTIVELY DIVIDE THE PAGE IN STRUCTURE SECTIONS (steps explained below).

// Create a principal page to display different types of media content.
// Display here top trends of each type: Top movies, top series and TV programs.
// Use a global state to manage data used for several components, avoiding to double fetching the API.
