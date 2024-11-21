// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
// import { useEffect, useState } from 'react'
// ---- ---- ---- ----  SERVICES  ---- ---- ---- ----
import { getData } from '../services/getData'

export const useFetchMediaData = async ({ mediaEndpoints }) => {
  console.log('Estoy en UseFetchMedia!')
  console.log(mediaEndpoints.discover[0].endpoint) // to see if the object is working properly
  const [discoverMoviesResponse, discoverTvResponse, trendingMoviesResponse, trendingTvResponse] = await Promise.all([
    getData(mediaEndpoints.discover[0].endpoint),
    getData(mediaEndpoints.discover[1].endpoint),
    getData(mediaEndpoints.trending[0].endpoint),
    getData(mediaEndpoints.trending[1].endpoint)
  ])

  const moviesPackage = [ // List with movies data for each discover and trends
    {
      ...await discoverMoviesResponse,
      content_category: 'discover',
      medi_type: 'movies'
    },
    {
      ...await trendingMoviesResponse,
      content_category: 'trending',
      media_type: 'movies'
    }
  ]
  const tvPackage = [ // List with TV data for each discover and trends
    {
      ...await discoverTvResponse,
      content_category: 'discover',
      media_type: 'tv'
    },
    {
      ...await trendingTvResponse,
      content_category: 'trending',
      media_type: 'tv'
    }
  ]

  return { moviesPackage, tvPackage }
  // [moviesData, tvData]
  // return { moviesPackages, tvPackages } Check this warning here !!!
}
