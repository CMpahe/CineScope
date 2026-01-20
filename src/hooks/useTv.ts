 import { useState, useEffect } from 'react'
 import { getTv } from '../services/tv.service'
 import { getGenres } from '../services/genres.service'
 import { adaptMovieToMedia } from '../domain/media/media.adapter'

 export function useTv() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function fetchTv () {
            try {
                
                setLoading(true)
                
                const tvData = await getTv()
                const genresData = await getGenres('tv')

                const adaptedTv = tvData.map(tv => 
                    adaptMovieToMedia(tv, genresData)
                )

                setData(adaptedTv)

            } catch (err) {

                setError(err)
                console.error(err)

            } finally {

                setLoading(false)

            }
        }

        fetchTv()
    }, [])

    return { data, loading, error }

 }