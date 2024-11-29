// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { scroll } from '../Carousel.logic'

export const Control = ({ sliderRef, direction, sections }) => {
  return (
    <div
      className={`${styles.control_container} ${styles[direction]}`} onClick={() => {
        scroll({ direction, sliderRef, sections })
      }}
    >
      <i className={`${styles.control} bi-chevron-compact-${direction}`} />
    </div>
  )
}
