import { Media } from './media.types'
import { MediaDTO } from './media.types'
import {  GenresData, GenreMap } from '../../services/genres.service'
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from './media.constants'

function mapGenres(genreIds: number[], genres: GenreMap): string[] {

  return genreIds
    .map(id => genres[id])
    .filter((genre): genre is string => Boolean(genre))// elimina undefined y le dice a TS que son strings
}

// Adapter principal
export function adaptDtoToMedia(movie: MediaDTO, genres: GenresData): Media {
  return {
    id: movie.id,
    title: movie.title ?? movie.name ?? '',
    year: movie.release_date?.slice(0, 4) ?? movie.first_air_date?.slice(0, 4) ?? '',
    genres: movie.title ? mapGenres(movie.genre_ids, genres.movie) : mapGenres(movie.genre_ids, genres.tv),
    description: movie.overview,
    poster: movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : null,
    backdrop: movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : null
  }
}
