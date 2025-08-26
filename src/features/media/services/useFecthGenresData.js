// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
// import { useEffect, useState } from 'react'
// ---- ---- ---- ----  SERVICES  ---- ---- ---- ----
import { getData } from '../../../services/getData'
//
//
//

export const useFetchGenresData = async (genresEndpoints) => {
  const [movies, tv] = await Promise.all([
    getData(genresEndpoints.moviesGenresEndpoint),
    getData(genresEndpoints.tvGenresEndpoint)
  ])

  return { movies, tv }
}
