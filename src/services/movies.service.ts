import { mediaEndpoints } from "@/constants/endpoints"
import { MediaDTO } from "@/domain/media/media.types"
import { MediaResponseDTO } from "@/domain/media/media.types"

const TOKEN  = import.meta.env.VITE_REACT_APP_TOKEN

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }

export async function getMovies(): Promise<MediaDTO[]> {
    const response = await fetch(`https://api.themoviedb.org/3${mediaEndpoints.discover.movies}`, options)

    if(!response.ok) {
        throw new Error('Error fetching movies')
    }

    const data: MediaResponseDTO = await response.json()
    return data.results
}

export async function getTrendingMovies(): Promise<MediaDTO[]> {
  const endpoint = mediaEndpoints.trending.movies 
  const response = await fetch(`https://api.themoviedb.org/3${endpoint}`, options)

    if(!response.ok) {
        throw new Error('Error fetching movies')
    }

    const data: MediaResponseDTO = await response.json()
    return data.results
}