import { tvSections } from '@/domain/media/media.sections'
import { MediaCarouselPage } from '@/pages/_base/MediaCarouselPage'

export const TvPage = () => {
  return <MediaCarouselPage
    mediaSections={tvSections}
    type={'tv'}
  />
}
