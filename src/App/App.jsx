// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import React, { useEffect, useMemo, useState } from 'react'
// ---- ---- ---- ---- SERVICES ---- ---- ---- ----
// import { getMovie } from './services/getMovie'
// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
// import { filterMovies } from '../logic/logic'
import { formatData } from '../features/media/utils/formatData'
import { formatGenres } from '../features/media/utils/formatGenres'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Header } from '../components/Header/Header'
import { HomePage } from '../pages/HomePage/HomePage'
import { GenrePage } from '../pages/GenrePage/GenrePage'
// import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'
import { Billboard } from '../components/Billboard/Billboard'
// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { genresEndpoints, mediaEndpoints } from '../constants/endpoints'
import { useDataSWRO } from '../features/media/hooks/useDataSWRO'

import { useSortDataByGenre } from '../features/media/hooks/useSortDataByGenre'
//
//
//

export const App = () => {
  // ---- ---- STATES ---- ----
  const [searchQuery, setSearchQuery] = useState('') // Nothing in the meantime!

  const [apiResponse, setApiResponse] = useState(null) // Media data received from the API

  const [genresResponse, SetGenresResponse] = useState(null) // Genres data received from de API

  // MediaData API request
  useEffect(() => useDataSWRO(setApiResponse, 'media_data', mediaEndpoints), [])

  // Genres API request
  useEffect(() => useDataSWRO(SetGenresResponse, 'genres_data', genresEndpoints), [])

  // Format the genres object into a better structure
  const formattedGenres = useMemo(() => formatGenres(genresResponse), [genresResponse])

  // Translate genres from numbers into strings
  const formattedData = useMemo(() => formatData(apiResponse, formattedGenres), [apiResponse])

  const sortedData = useSortDataByGenre(formattedData, formattedGenres) // Organize the data received into genres category so the component can use it properly.

  const filteredMovies = useMemo(() => {
    if (!searchQuery.trim()) return formattedData

    console.log('formattedData: ', formattedData)

    if (formattedData) {
      const result = [...formattedData.movies[0].results, ...formattedData.movies[1].results, ...formattedData.tv[0].results, ...formattedData.tv[1].results] // gather all the movie and tv list together
      const cleanResult = result.filter(movie => // Remove movies duplicated
        movie.title ? movie.title.toLowerCase().includes(searchQuery.toLowerCase()) : movie.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      return {
        results: Array.from(
          new Map(cleanResult.map(movie => [movie.id, movie]))
        ).map(([_, movie]) => movie)
      }
    }
  }, [formattedData, searchQuery])

  // Navegate automatically everytime the user searchs a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // adding this new hook to replace the above
  // useUpdateMediaData(moviesWithGenres, tvWithGenres, setMedia)

  return (
    <div className='container'>
      <Header search={searchQuery} setSearchQuery={setSearchQuery} />
      <Billboard />
      <Routes>

        <Route path='/' element={<HomePage search={searchQuery}>{filteredMovies}</HomePage>} />

        <Route path='/genres' element={<GenrePage sortedData={sortedData} formattedGenres={formattedGenres} />} />

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

// THEN, WORK ON CREATING THE NEW PAGES AND SECTIONS NEEDED TO EFFECTIVELY DIVIDE THE PAGE IN STRUCTURE SECTIONS (steps explained below).

// Create a principal page to display different types of media content.
// Display here top trends of each type: Top movies, top series and TV programs.
// Use a global state to manage data used for several components, avoiding to double fetching the API.
