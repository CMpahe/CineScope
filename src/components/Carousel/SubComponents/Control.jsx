// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
//
//
//

export const Control = ({ direction, currentSection }) => {
  const { moveUp, moveDown } = currentSection // Carrousel movement fucntions
  return (
    <div
      className={`${styles.control_container} ${styles[direction]}`}
      onClick={() => {
        direction === 'right' ? moveUp() : moveDown()
      }}
    >
      <i className={`${styles.control} bi-chevron-compact-${direction}`} />
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - direction = This prop helps to set the horizontal direction of the Control Icon.

// - currentSection -> Control uses currentSection to manage the state of the current visible section. With this object, the Control component can read and modify the visible section.
