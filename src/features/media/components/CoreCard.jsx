// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import { forwardRef } from 'react'
import styles from '../styles/MediaCard.module.scss'
//
//
//

export const CoreCard = forwardRef(({ children, ...props }, ref) => { // Received the props from its parent
  return (

    <div // a) Reference
      ref={ref}
      {...props}
      className={`${styles.movie}`}
    >

      <img src={`https://image.tmdb.org/t/p/w500${children.poster_path}`} alt={children.title} />
    </div>

  )
})

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the main component within MediaCard, this is the responsable of displaying the media image.

// Works with Floating-ui, and is setted as the reference for the floating portal.
