// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import React, { useEffect, useMemo, useState } from 'react'

// ---- ---- ---- ---- SERVICES ---- ---- ---- ----
// import { getMovie } from './services/getMovie'
import { useFetchMediaData } from '../../customHooks/useFetchMediaData'
import { useFetchGenresData } from '../../customHooks/useFecthGenresData'

// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
// import { filterMovies } from '../logic/logic'
import { addGenres, restructureGenresData, sortData } from './App.logic'

// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Header } from '../Header/Header'
import { MovieSection } from '../MovieSection'
import { GenreSection } from '../GenreSection/GenreSection'
// import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'
import { Billboard } from '../Billboard/Billboard'

// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { mediaEndpoints, genresEndpoints } from '../../data/endpoints'

export const App = () => {
  // ---- ---- STATES ---- ----
  // const [movies, setMovies] = useState()
  const [media, setMedia] = useState(null) // Movies delivered to 'MovieSection' - It is initialized with a local package of movies and then update with the movie data got from the API

  const [search, setSearch] = useState(false) // Nothing in the meantime!

  const [moviesResponse, setMoviesResponse] = useState(null) // mediaDataResponse = { moviesData, tvData }
  const [tvResponse, setTvResponse] = useState(null)

  const [sortedMedia, setSortedMedia] = useState({})

  useEffect(() => {
    const cachedData = window.localStorage.getItem('mediaData')
    if (cachedData) {
      setMoviesResponse(JSON.parse(cachedData).moviesPackage)
      setTvResponse(JSON.parse(cachedData).tvPackage)
    } else {
      useFetchMediaData({ mediaEndpoints }).then(res => {
        if (res) {
          setMoviesResponse(res.moviesPackage)
          setTvResponse(res.tvPackage)
          window.localStorage.setItem('mediaData', JSON.stringify(res))
        }
      })
    }
  }, [])

  const [genresResponse, SetGenresResponse] = useState(null) // mediaGenresResponse = { movieGenresResponse, tvGenresResponse }
  useEffect(() => {
    const cachedData = window.localStorage.getItem('genresResponse')
    if (cachedData) {
      SetGenresResponse(JSON.parse(cachedData))
    } else {
      useFetchGenresData({ genresEndpoints }).then(res => {
        if (res) {
          SetGenresResponse(res)
          window.localStorage.setItem('genresResponse', JSON.stringify(res))
        }
        // console.error('Something failed with Genres Response!')
      })
    }
  }, [])

  const moviesGenresMap = useMemo(() => {
    if (typeof genresResponse === 'object' && genresResponse !== null && !Array.isArray(genresResponse)) {
      // console.error('moviesGenresMap recibe null o un objeto vacio de mediaGenresResponse')
      return restructureGenresData(genresResponse.moviesGenres.genres)
    }
    return null
  }, [genresResponse])

  const tvGenresMap = useMemo(() => {
    if (typeof genresResponse === 'object' && genresResponse !== null && !Array.isArray(genresResponse)) {
      // console.error('tvGenresMap recibe null o un objeto vacio')
      return restructureGenresData(genresResponse.tvGenres.genres)
    }
    return null
  }, [genresResponse])

  // Navegate automatically everytime the user search a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // Create a copy of the object but with a new property with the genres of the movies -> (results: [Action, Horror, Comedy])
  const moviesWithGenres = useMemo(() => {
    if (Array.isArray(moviesResponse) && moviesResponse.length > 0 && moviesGenresMap !== null) {
      // console.log(moviesResponse)
      return moviesResponse.map((pack) => ({
        ...pack,
        results: addGenres(pack.results, moviesGenresMap)
      }))
    }
    return []
  }, [moviesGenresMap, moviesResponse])

  // Create a copy of the object but with a new property with the genres of the TV programs -> (results: [Action, Horror, Comedy])
  const tvWithGenres = useMemo(() => {
    if (Array.isArray(moviesResponse) && moviesResponse.length > 0 && tvGenresMap !== null) {
      // console.error('tvWithGenres recibe un array')
      return tvResponse.map((pack) => ({
        ...pack,
        results: addGenres(pack.results, tvGenresMap)
      }))
    }
    return null
  }, [tvGenresMap, tvResponse]) // verificar si realmente modifica la propiedad 'results'  !!!

  // Updated movies to be displayed
  useEffect(() => {
    if (moviesWithGenres !== null && tvWithGenres !== null) {
      setMedia({ movies: moviesWithGenres, tv: tvWithGenres })
    }
  }, [moviesWithGenres, tvWithGenres])

  useEffect(() => {
    const genres = { movies: moviesGenresMap, tv: tvGenresMap }
    if (media !== null && genres !== null) {
      const result = sortData(media, genres)
      setSortedMedia(result)
    }
  }, [media, moviesGenresMap, tvGenresMap])

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Billboard />
      <Routes>

        <Route path='/' element={<MovieSection moviesObject={media} search={search} />} />

        <Route path='/genres' element={<GenreSection mediaObject={sortedMedia} genres={{ movies: moviesGenresMap, tv: tvGenresMap }} />} />

        <Route path='/myList' element={<div>
          <h1 className='big-title1'>Hola mundo</h1>
          <h1 className='title'>Hola mundo</h1>
          <h2 className='subtitle'>Hola mundo</h2>
          <h3 className='subtitle2'>Hola mundo</h3>
          <p className='body'>Hola mundo</p>
        </div>} />

      </Routes>
    </div>
  )
}

// FIRST OF ALL VERIFY THE API FETCHING IS WORKING PROPERLY AND THE CODE IS RUNNIG SMOOTHLY
// THEN, WORK ON CREATING THE NEW PAGES AND SECTIONS NEEDED TO EFFECTIVELY DIVIDE THE PAGE IN STRUCTURE SECTIONS (steps explained below).

// Create a principal page to display different types of media content.
// Display here top trends of each type: Top movies, top series and TV programs.
// Use a global state to manage data used for several components, avoiding to double fetching the API.
