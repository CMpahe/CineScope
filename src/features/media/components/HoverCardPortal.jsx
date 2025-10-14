import ReactDOM from 'react-dom'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { RegularBtn } from '../../../components/Buttons/RegularBtn/RegularBtn'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { addIcon, playIcon } from '../../../assets/icons/icons'
// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../styles/HoverCardPortal.module.scss'
import { forwardRef } from 'react'
//
//
//

export const HoverCardPortal = forwardRef(({ children, style, ...props }, ref) => {
  return ReactDOM.createPortal(
    <div
      {...props}
      ref={ref}
      style={style}
      className={styles.portalCard}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${children.poster_path}`}
        alt={children.title}
      />

      <div className={styles.buttons}> {/* Buttons section */}

        <RegularBtn icon={playIcon} background={2} padding={false} border={3} aspectRatio={2} width='medium' />

        <RegularBtn icon={addIcon} background={3} padding={false} border={1} color={2} aspectRatio={2} width='small' />

      </div>

      <div className={styles.info}> {/* Media information section */}
        <p className='card-text opaque'>{children.release_date}</p>

        <p className='card-text'>
          {children.genres?.length
            ? children.genres.join(' • ')
            : 'No genres available'}
        </p>
      </div>
    </div>,
    document.body
  )
})

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the portal that it displayed when a Media is hovered. It shows more information about the media and some other optiones through the buttons it has on it.

// - children -> It receives as a children the media object with all the information.

// - position -> This prop contains the information about the exact position of the element hovered within the page so the portal can be placed exactly in front of it.

// - eleSize -> This prop contains the information about the size of the media card being hovered so the portal can set its size according to this one.
