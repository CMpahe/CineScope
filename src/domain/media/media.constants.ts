// src/domain/media/media.constants.ts


// Base URL para imágenes de TMDB
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

// Base URL de TMDB
export const BASE_URL = 'https://api.themoviedb.org/3'

// search endpoint
export const SEARCH_ENDPOINT = `${BASE_URL}/search/multi`


//  Tamaños de imágenes usados por la aplicación
//  (se pueden ampliar sin tocar la UI)

export const POSTER_SIZE = '/w500'
export const BACKDROP_SIZE = '/w1280'

export const MEDIA_CACHE_INDEX_KEY = "media-cache-index"

export const MEDIA_CACHE_VERSION = 1

export const GENRES_CACHE_VERSION = 1

export const INDEX_CACHE_VERSION = 1

export const MEDIA_CACHE_TTL = 40 * 60 * 1000

export const GENRES_CACHE_TTL = 40 * 60 * 1000
