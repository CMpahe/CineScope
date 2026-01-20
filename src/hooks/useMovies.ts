import { useState, useEffect } from 'react'
import { getMovies } from '../services/movies.service'
import { getGenres } from '../services/genres.service'
import { adaptMovieToMedia } from '../domain/media/media.adapter'
import { hash } from '@/utils/hash'
import type { Media } from '../domain/media/media.types'

export function useMovies(cacheItemName: string) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function fetchMovies () {
            try {

                setLoading(true)

                const TTL =  5 * 60 * 1000

                const cachedRaw = window.localStorage.getItem(cacheItemName)
                if (!cachedRaw) return
                const cached = JSON.parse(cachedRaw)

                const now = Date.now()

                const mustRevalidate = !cached ||  now - cached.savedAt > TTL

                if (mustRevalidate) {
                    const moviesData = await getMovies()
                    const genresData = await getGenres('media')

                    const adaptedMovies = moviesData.map(movie => 
                    adaptMovieToMedia(movie, genresData)

                    const fresHash = hash(adaptedMovies)
                )
                }                

                setData(adaptedMovies)

            } catch (err) {

                setError(err)
                console.error(err)

            } finally {

                setLoading(false)

            }
        }

        fetchMovies()
        
    }, [])

    return { data, loading, error }

}