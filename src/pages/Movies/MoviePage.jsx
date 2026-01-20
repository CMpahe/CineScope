import { useMovies } from '../../hooks/useMovies.ts'
import { MediaPage } from '../_base/MediaPage.jsx'

export const MoviePage = () => {
  return <MediaPage title='Movies' useData={useMovies} />
}
