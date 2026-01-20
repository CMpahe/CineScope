// src/domain/media/media.types.ts


// 1️. Tipo que representa UNA película tal como viene de la API
export interface MediaDTO {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date?: string
  first_air_date?: string
  genre_ids: number[]
  original_language: string
}

// 2️ Tipo de la respuesta completa del endpoint
export interface MediaResponseDTO {
  page: number
  results: MediaDTO[]
  total_pages: number
}

//  3. Representa un contenido multimedia normalizado
//  que la UI puede consumir sin conocer la API.

export type Media = {
  id: number

  title: string
  year: string
  genres: string[]
  description: string

  poster: string | null
  backdrop: string | null
}