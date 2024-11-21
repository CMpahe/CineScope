// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
// import { useEffect, useState } from 'react'
// ---- ---- ---- ----  SERVICES  ---- ---- ---- ----
import { getData } from '../services/getData'

export const useFetchGenresData = async ({ genresEndpoints }) => {
  console.log('Pidiendo los generos')
  console.log(genresEndpoints)
  console.log(genresEndpoints.moviesGenresEndpoint)

  const [moviesGenres, tvGenres] = await Promise.all([
    getData(genresEndpoints.moviesGenresEndpoint),
    getData(genresEndpoints.tvGenresEndpoint)
  ])

  return { moviesGenres, tvGenres }
}
