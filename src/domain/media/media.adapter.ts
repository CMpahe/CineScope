// src/domain/media/media.adapter.ts

import { Media } from './media.types'
import { MediaDTO } from './media.types'
import { GenreDTO } from '../../services/genres.service'
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from './media.constants'

// Función para transformar genre_ids en nombres usando Map
function mapGenres(genreIds: number[], genres: GenreDTO[]): string[] {
  // Creamos un mapa id → nombre
  const genreMap = new Map(genres.map(g => [g.id, g.name]))

  // Para cada id, buscamos el nombre en el mapa
  return genreIds
    .map(id => genreMap.get(id))  // puede devolver undefined si no existe
    .filter((genre): genre is string => Boolean(genre))// elimina undefined y le dice a TS que son strings
}


// Recibe objeto crudo de TMDB y lo transforma en Media

// Adapter principal
export function adaptMovieToMedia(movie: MediaDTO, genres: GenreDTO[]): Media {
  return {
    id: movie.id,
    title: movie.title ?? movie.name ?? '',
    year: movie.release_date?.slice(0, 4) ?? movie.first_air_date?.slice(0, 4) ?? '',
    genres: mapGenres(movie.genre_ids, genres),
    description: movie.overview,
    poster: movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : null,
    backdrop: movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : null
  }
}
