import { Media } from '@/domain/media/media.types'
import styles from './styles/Carousel.module.scss'
import { MediaCard } from '@/features/MediaCard/MediaCard'
import { SectionController } from './carousel.types'

type SliderProp = {
  data: Media[]
  sectionController: SectionController
}



export const Slider = ({ data, sectionController }: SliderProp) => { 

  return (
    <div
      style={{ transform: `translate(-${90 * sectionController.section}%)` }}
      className={styles.slider}
    >
      {
        data.map((media) => {
          return (
            <div className={styles.media_frame} key={media.id}>
              <MediaCard key={media.id} media={media} />
            </div>
          )
        })
      }
    </div>
  )
}
