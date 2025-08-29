import ReactDOM from 'react-dom'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { RegularBtn } from '../../../Buttons/RegularBtn'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { addIcon, playIcon } from '../../../../assets/icons/icons'
// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './HoverCardPortal.module.scss'
//
//
//

export const HoverCardPortal = ({ children, position, eleSize }) => {
  return ReactDOM.createPortal(
    <div
      style={{ // Some preset styles for this component
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: 'auto',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        transition: '.3s all easy-in', // revisar por qué esto no funciona!!
        zIndex: 1000,
        pointerEvents: 'none' // para que no interfiera con scroll, MIRAR ESTO PORQUE SINO NO FUNCIONAN LOS BOTONES EN EL PORTAL
      }}
      className={styles.portalCard}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${children.poster_path}`}
        alt={children.title}
        style={
          {
            width: `${eleSize.width * 1.5}px`,
            height: `${eleSize.height * 1.3}px`
          }
        }
      />

      <div className={styles.buttons}> {/* Buttons section */}

        <RegularBtn icon={playIcon} background={2} padding={false} border={3} aspectRatio={2} />

        <RegularBtn icon={addIcon} background={3} padding={false} border={1} color={2} aspectRatio={2} />

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
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the portal that it displayed when a Media is hovered. It shows more information about the media and some other optiones through the buttons it has on it.

// - children -> It receives as a children the media object with all the information.

// - position -> This prop contains the information about the exact position of the element hovered within the page so the portal can be placed exactly in front of it.

// - eleSize -> This prop contains the information about the size of the media card being hovered so the portal can set its size according to this one.
