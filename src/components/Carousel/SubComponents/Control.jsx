// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { scroll } from '../Carousel.logic'
//
//
//

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

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - sliderRef = this contains the Ref of the slider to be moved sideways so when pressing the Control button the right Slider is moved.

// - direction = This prop helps to set the horizontal direction of the Control Icon.

// - sections = This information helps to know how many available sections has the slider so the Control button could stop when necesary and keep from showing an empty section of the Slider.
