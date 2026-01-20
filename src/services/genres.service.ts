import { genresEndpoints } from "../constants/endpoints"

export interface GenreDTO {
  id: number
  name: string
}

interface GenresResponseDTO {
  genres: GenreDTO[]
}

type MediaType = 'media' | 'tv'

const TOKEN = import.meta.env.VITE_REACT_APP_TOKEN

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
}
}


export async function getGenres(type: MediaType): Promise<GenreDTO[]> {
    const endpoint = genresEndpoints[type]
  const response = await fetch(
    `https://api.themoviedb.org/3${endpoint}`,
    options
  )

  if (!response.ok) {
    throw new Error(`Error fetching ${type} genres`)
  }

  const data: GenresResponseDTO = await response.json()

  return data.genres
}