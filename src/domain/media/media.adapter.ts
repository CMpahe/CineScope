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
export function adaptDtoToMedia(movie: MediaDTO, genres: GenresData, type: 'movie' | 'tv' | 'multi'): Media {

  const newType = type === 'multi' ? movie.media_type : type

  const title = newType === 'movie'
      ? movie.title
      : movie.name

  if (!title) {
    throw new Error(`Media ${movie.id} has no title for type ${type}`)
  }


  return {
    id: movie.id,
    title,
    year: movie.release_date?.slice(0, 4) ?? movie.first_air_date?.slice(0, 4) ?? '',
    genres: newType === 'movie' ? mapGenres(movie.genre_ids, genres.movie) : mapGenres(movie.genre_ids, genres.tv),
    description: movie.overview,
    poster: movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : null,
    type: newType,
    backdrop: movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : null
  }
}