import { movieSections } from '@/domain/media/media.sections'
import { MediaCarouselPage } from '../_base/MediaCarouselPage'


export const MoviePage = () => {

  return <MediaCarouselPage 
    mediaSections={movieSections}
    type={'movie'}
  />
}