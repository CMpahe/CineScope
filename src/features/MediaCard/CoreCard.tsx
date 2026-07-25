import { forwardRef } from 'react'
import styles from './MediaCard.module.scss'
import { Media } from '@/domain/media/media.types'

type CoreCardProp = {
  media: Media
} & React.ComponentPropsWithoutRef<"div">;

export const CoreCard = forwardRef<HTMLDivElement, CoreCardProp>(({ media, ...props }, ref ) => {

  return (
    // a) reference
    <div ref={ref} {...props} className={`${styles.movie}`}>
      <img src={media.poster?? ''} alt={media.title} />
    </div>

  )
})

