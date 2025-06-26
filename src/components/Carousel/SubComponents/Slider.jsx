// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { forwardRef, useState, useRef } from 'react'
import { MediaCard } from '../../MediaCard/MediaCard'

export const Slider = forwardRef(({ children }, ref) => {
  const [hoveredMediaId, setHoveredMediaId] = useState(null)

  const enterTimeout = useRef(null)
  const leaveTimeout = useRef(null)

  const handlePointerEnter = (id) => {
    clearTimeout(enterTimeout.current) // clear the last timer before setting other
    enterTimeout.current = setTimeout(() => {
      setHoveredMediaId(id)
    }, 300)
  }

  const handlePointerLeave = () => {
    clearTimeout(leaveTimeout.current) // clear the last timer before setting other
    leaveTimeout.current = setTimeout(() => {
      setHoveredMediaId(null)
    }, 300)
  }

  return (
    <div className={styles.slider} ref={ref}>
      {
        children.map((media) => {
          return (
            <div className={styles.media_frame} key={media.id}>
              <MediaCard
                key={media.id}
                isHovered={hoveredMediaId === media.id}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
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
