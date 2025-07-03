// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { forwardRef } from 'react'
import { MediaCard } from '../../MediaCard/MediaCard'

export const Slider = forwardRef(({ children, pointerTimeout, manageHover }, ref) => {
  return (
    <div className={styles.slider} ref={ref}>
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
)
