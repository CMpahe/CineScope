import { MediaCarouselPage } from '../_base/MediaCarouselPage'
import { homeSection } from './home.sections'


export const HomePage = () => {
  return <MediaCarouselPage 
    mediaSections={homeSection}
    type={'mixed'}
  /> 
}
