import { genresEndpoints } from "@/constants/endpoints"
import { request } from "./api.service"
import { cacheExists, load } from "@/shared/local-storage"
import { cache, isExpired } from "@/shared/cache"

export type GenreMap = Record<number, string>

export interface GenresData { 
  movie: GenreMap
  tv: GenreMap
}

interface GenresResponseDTO {
  genres: { id: number, name: string }[]
}

export async function resolveGenres(): Promise<GenresData> {
  
  if (cacheExists('genres') && !isExpired('genres', 30 * 60 * 1000)) return load('genres')  

  const moviesResponse = await request<GenresResponseDTO>(genresEndpoints.movie)

  const tvResponse = await request<GenresResponseDTO>(genresEndpoints.tv)

  const data = {
    movie: Object.fromEntries( 
      moviesResponse.genres.map(g => [g.id, g.name])
    ),
    tv:  Object.fromEntries( 
      tvResponse.genres.map(g => [g.id, g.name])
    )
  } 

  cache(data, 'genres')
  
  return data

}