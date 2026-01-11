import { SectionWrapper } from '../../components/common/SectionWrapper'
import { MediaCard } from '../../features/media/components/MediaCard'
import { useEffect, useMemo, useState } from 'react'
import { useDataSWRO } from '../../features/media/hooks/useDataSWRO.js'
import { genresEndpoints, mediaEndpoints } from '../../constants/endpoints'
import styles from '../styles/Pages.module.scss'
import { formatGenres } from '../../features/media/utils/formatGenres'
import { formatData } from '../../features/media/utils/formatData'
import { Billboard } from '../../components/Billboard/Billboard.jsx'

export const MoviePage = () => {
  const [dataResponse, setDataResponse] = useState(null)
  const [genreResponse, setGenreResponse] = useState(null)

  const dataEndPoint = mediaEndpoints.trending.movies
  const genreEndPoint = genresEndpoints.movies

  // 1. Fetch: genres and data
  useEffect(() => {
    useDataSWRO(setGenreResponse, 'genres_data', genreEndPoint)
    useDataSWRO(setDataResponse, 'trending_movies_data', dataEndPoint)
  }, [])

  // 2. Translate genres from numbers to strings
  const formattedGenres = useMemo(() => {
    if (genreResponse) return formatGenres(genreResponse)
  }, [genreResponse])

  // 3. Add string genres to the data
  const uiData = useMemo(() => {
    console.log('dataResponse: ', dataResponse)
    if (dataResponse && formattedGenres) return formatData(dataResponse, formattedGenres)
    return []
  }, [dataResponse, formattedGenres])

  return (
    <SectionWrapper variant='coreSection'>
      {uiData.results && <Billboard data={uiData.results} />}
      <div className={styles.moviesGrid}>
        {uiData.results?.map((media) => (
          <MediaCard key={media.id}>
            {media}
          </MediaCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
