// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { MediaCard } from '../../MediaCard/MediaCard'
//
//
//

export const Slider = ({ children, pointerTimeout, manageHover, currentSection }) => {
  return (
    <div
      style={
        { transform: `translate(-${90 * currentSection.section}%)` } // Set the slider position according to the current section.
      }
      className={styles.slider}
    >
      {
        children.map((media) => {
          return (
            <div className={styles.media_frame} key={media.id}>
              <MediaCard
                key={media.id}
                pointerTimeout={pointerTimeout}
                manageHover={manageHover}
              >{media}
              </MediaCard>
            </div>
          )
        })
      }
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - Items per section in each slider is set within the scss file

// - The items per section calculated in GenrePage only works for measuring the amount of sections used in a slider so the Pagination Indicator could work properly. The lines that really visually sets the amount of items per section are defined in 'Carousel.module.scss'

// - currentSection -> Slider uses currentSection to manage the state of the current visible section. With this object, the Slider component can read and modify the visible section.
