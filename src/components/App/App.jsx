// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import React, { useEffect, useMemo, useState } from 'react'
// ---- ---- ---- ---- SERVICES ---- ---- ---- ----
// import { getMovie } from './services/getMovie'
// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
// import { filterMovies } from '../logic/logic'
import { formatData } from '../../features/media/data/utils/formatData'
import { formatGenres } from '../../features/media/data/utils/formatGenres'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Header } from '../../components/Header/Header'
import { MoviePage } from '../MoviePage'
import { GenrePage } from '../GenrePage/GenrePage'
// import { useAutoNavegate } from '../customHooks/useAutoNavegate'
import { Routes, Route } from 'react-router-dom'
import { Billboard } from '../../components/Billboard/Billboard'
// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { genresEndpoints, mediaEndpoints } from '../../data/endpoints'
import { useDataSWRO } from '../../features/media/data/hooks/useDataSWRO'

import { useSortDataByGenre } from '../../features/media/data/hooks/useSortDataByGenre'
//
//
//

export const App = () => {
  // ---- ---- STATES ---- ----
  const [search, setSearch] = useState(false) // Nothing in the meantime!

  const [apiResponse, setApiResponse] = useState(null) // Media data received from the API

  const [genresResponse, SetGenresResponse] = useState(null) // Genres data received from de API

  // MediaData API request
  useEffect(() => useDataSWRO(setApiResponse, 'mediaData', mediaEndpoints), [])

  // Genres API request
  useEffect(() => useDataSWRO(SetGenresResponse, 'genresData', genresEndpoints), [])

  // Format the genres object into a better structure
  const formattedGenres = useMemo(() => formatGenres(genresResponse), [genresResponse])

  // Translate genres from numbers into strings
  const formattedData = useMemo(() => formatData(apiResponse, formattedGenres), [apiResponse])

  const sortedData = useSortDataByGenre(formattedData, formattedGenres) // Organize the data received into genres category so the component can use it properly.

  // Navegate automatically everytime the user search a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // adding this new hook to replace the above
  // useUpdateMediaData(moviesWithGenres, tvWithGenres, setMedia)

  return (
    <div className='container'>
      <Header search={search} setSearch={setSearch} />
      <Billboard />
      <Routes>

        <Route path='/' element={<MoviePage search={search}>{formattedData}</MoviePage>} />

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
