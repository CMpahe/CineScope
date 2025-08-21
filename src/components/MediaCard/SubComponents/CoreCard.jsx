// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../MediaCard.module.scss'
//
//
//

export const CoreCard = ({
  children,
  cardRef,
  handlePointer
}) => {
  return (

    <div
      className={`${styles.movie}`}
      ref={cardRef}
      // Hover handling functions
      onPointerEnter={() => handlePointer.enter()}
      onPointerLeave={() => handlePointer.leave()}
    >

      <img src={`https://image.tmdb.org/t/p/w500${children.poster_path}`} alt={children.title} />
    </div>

  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the main component within MediaCard, this is the responsable of displaying the media image.

// It has two functions to handle the pointer enter and pointer leave events.
