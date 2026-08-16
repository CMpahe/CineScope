import ReactDOM from 'react-dom'
import { RegularBtn } from '@/features/RegularBtn/RegularBtn'
import { addIcon, playIcon } from '@/assets/icons/icons'
import styles from './HoverCardPortal.module.scss'
import { CSSProperties, forwardRef } from 'react'
import { Media } from '@/domain/media/media.types'
import { update } from '@/domain/favorite/favorite.store'

type HoverCardPortalProp = {
  media: Media
  style: CSSProperties
} & React.ComponentPropsWithoutRef<"div">;

export const HoverCardPortal = forwardRef<HTMLDivElement, HoverCardPortalProp>(({ media, style, ...props }, ref) => {
  return ReactDOM.createPortal(
    <div
      {...props}
      ref={ref}
      style={style}
      className={styles.portalCard}
    >
      <img
        src={media.poster?? ''}
        alt={media.title}
      />

      <div className={styles.buttons}> {/* Buttons section */}

        <RegularBtn icon={playIcon} variant='red' width='w--40' />

        <RegularBtn onClick={() => update(media)} variant={null} icon={addIcon} width='w--30' padding='padding--px1' />

      </div>

      <div className={styles.info}>
        <p className='card-text opaque'>{media.year}</p>

        <p className='card-text'>
          {media.genres?.length
            ? media.genres.join(' • ')
            : 'No genres available'}
        </p>
      </div>
    </div>,
    document.body
  )
})