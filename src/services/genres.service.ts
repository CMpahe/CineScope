import { genresEndpoints } from "@/constants/endpoints"
import { request } from "./api.service"
import { cache, getCacheData} from "@/shared/cache"
import { GENRES_CACHE_TTL, GENRES_CACHE_VERSION } from "@/domain/media/media.constants"

export type GenreMap = Record<number, string>

export interface GenresData { 
  movie: GenreMap
  tv: GenreMap
}

interface GenresResponseDTO {
  genres: { id: number, name: string }[]
}

export async function resolveGenres(): Promise<GenresData> {
  
  const cacheData = getCacheData('genres', GENRES_CACHE_VERSION, GENRES_CACHE_TTL)
  
  if (cacheData) {
    return cacheData
  }

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

  cache(data, GENRES_CACHE_VERSION, 'genres')
  
  return data

}