// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import { forwardRef } from 'react'
import styles from '../styles/MediaCard.module.scss'
//
//
//

export const CoreCard = forwardRef(({ media, ...props }, ref) => { // Received the props from its parent
  return (

    <div // a) Reference
      ref={ref}
      {...props}
      className={`${styles.movie}`}
    >

      <img src={media.poster} alt={media.title} />
    </div>

  )
})

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the main component within MediaCard, this is the responsable of displaying the media image.

// Works with Floating-ui, and is setted as the reference for the floating portal.
