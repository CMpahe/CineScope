// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import React, { useState } from 'react'
// ---- ---- ---- ---- SERVICES ---- ---- ---- ----
// import { getMovie } from './services/getMovie'
// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
// import { filterMovies } from '../logic/logic'
// import { formatData } from '../features/media/utils/formatData'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Header } from '../components/Header/Header'
import { Routes, Route } from 'react-router-dom'
// import { Billboard } from '../components/Billboard/Billboard'
// ---- ---- ---- ----  DATA  ---- ---- ---- ----
// import { useSortDataByGenre } from '../features/media/hooks/useSortDataByGenre'
import { MoviePage } from '../pages/Movies/MoviePage'
import { HomePage } from '../pages/HomePage/HomePage'
import { TvPage } from '../pages/TvPage/TvPage'
// import { useSections } from '../features/Carousel/hooks/useSections'
//
//
//
export const App = () => {
  // ---- ---- STATES ---- ----
  const [searchQuery, setSearchQuery] = useState('') // Nothing in the meantime!

  // const sortedData = useSortDataByGenre(formattedData, formattedGenres) // Organize the data received into genres category so the component can use it properly.

  // const [filteredMovies, setFilteredMovies] = useState(formattedData)
  // const timeoutRef = useRef(null)

  // useEffect(() => { // Manage input logic with a timeout to wait until de user enter the entire value for the search
  //   if (timeoutRef.current) clearTimeout(timeoutRef.current)

  //   timeoutRef.current = setTimeout(() => {
  //     //
  //     if (searchQuery.trim().length === 0) setFilteredMovies(formattedData)
  //     //
  //     else if (formattedData) {
  //       const result = [...formattedData.movies[0].results, ...formattedData.movies[1].results, ...formattedData.tv[0].results, ...formattedData.tv[1].results] // gather all the movie and tv list together
  //       const cleanResult = result.filter(movie => // Remove movies duplicated
  //         movie.title ? movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) : movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //       setFilteredMovies({ // Update the stated with the movies already filtered by user input
  //         results: Array.from(
  //           new Map(cleanResult.map(movie => [movie.id, movie]))
  //         ).map(([_, movie]) => movie)
  //       })
  //     }
  //   }, 300)

  //   return () => { clearTimeout(timeoutRef.current) }
  // }, [searchQuery])

  // const moviesToShow = useMemo(() => { // to update the data to be display when ready
  //   if (searchQuery.trim().length > 0) return filteredMovies
  //   else if (formattedData) return formattedData
  // }, [formattedData, filteredMovies])

  // Navegate automatically everytime the user searchs a movie
  // useAutoNavegate({ setMoviesToDisplay, filterMovies, search, movies }) // Arreglar para que no cambie el path cuando esta en otra sección y se elimina el contenido del input (solución en el archivo del customHook)

  // adding this new hook to replace the above
  // useUpdateMediaData(moviesWithGenres, tvWithGenres, setMedia)

  return (
    <div className='container'>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/' element={<HomePage search={searchQuery} />} />

        <Route path='/tv' element={<TvPage />} />

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
