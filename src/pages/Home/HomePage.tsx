import { MediaCarouselPage } from '../_base/MediaCarouselPage'
import { homeSection } from './home.sections' // URLs


export const HomePage = () => {
  return <MediaCarouselPage 
    mediaSections={homeSection}
    type={'mixed'}
  /> 
}
