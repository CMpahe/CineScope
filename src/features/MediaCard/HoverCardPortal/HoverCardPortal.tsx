import ReactDOM from 'react-dom'
import { RegularBtn } from '@/features/RegularBtn/RegularBtn'
import { playIcon} from '@/assets/icons/icons'
import styles from './HoverCardPortal.module.scss'
import { CSSProperties, forwardRef } from 'react'
import { Media } from '@/domain/media/media.types'
import { useFavorite } from '@/hooks/useFavorites'
import { FavoriteButton } from '@/features/FavoriteButton/FavoriteButton'

type HoverCardPortalProp = {
  media: Media
  style: CSSProperties
} & React.ComponentPropsWithoutRef<"div">;

export const HoverCardPortal = forwardRef<HTMLDivElement, HoverCardPortalProp>(({ media, style, ...props }, ref) => {

  useFavorite()

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

      <div className={styles.buttons}>

        <RegularBtn icon={playIcon} variant='red' width='w--40' />

        <FavoriteButton media={media}></FavoriteButton>

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