// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import ReactDOM from 'react-dom'
import { RegularBtn } from '../../../buttons/RegularBtn'
import { addIcon, playIcon } from '../../../icons'
// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './HoverCardPortal.module.scss'

export const HoverCardPortal = ({ children, position, eleSize }) => {
  // console.log('AQUI ESTOY!!')
  // console.log('element width: ', eleSize.width)
  // console.log('element height: ', eleSize.height)

  return ReactDOM.createPortal(
    <div
      style={{
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

      <div className={styles.buttons}>
        <RegularBtn icon={playIcon} background={2} padding={false} border={3} aspectRatio={2} />
        <RegularBtn icon={addIcon} background={3} padding={false} border={1} color={2} aspectRatio={2} />
      </div>

      <div className={styles.info}>
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
