// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../styles/MediaCard.module.scss'
//
//
//

export const CoreCard = ({
  children,
  cardRef,
  ...props // Received the props from its parent
}) => {
  return (

    <div
      className={`${styles.movie}`}
      ref={cardRef}
      {...props}
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
