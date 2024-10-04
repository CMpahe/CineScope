// ---- ---- ---- HOOKS ---- ---- ----
import { useEffect, useState } from 'react'
// ---- ---- ---- SERVICES ---- ---- ----
import { getData } from '../services/getData'

export const useFetchMoviesAndGenres = ({ moviesEndpoint, genresEndpoint }) => {
  const [moviesData, setMoviesData] = useState([])
  const [genresData, setGenresData] = useState([])

  useEffect(() => {
    // Getting movies from the API
    const fetchMoviesAndGenres = async () => {
      const [moviesResponse, genresResponse] = await Promise.all([
        getData(moviesEndpoint),
        getData(genresEndpoint)
      ])

      setMoviesData(await moviesResponse.results)
      setGenresData(await genresResponse.genres)
    }

    fetchMoviesAndGenres()
  }, [])

  return { moviesData, genresData }
}
