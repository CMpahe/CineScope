import { useTv } from '../../hooks/useTv'
import { MediaPage } from '../_base/MediaPage'

export const TvPage = () => {
  return <MediaPage title='Tv' useData={useTv} />
}
