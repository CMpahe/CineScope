import { update } from '@/domain/favorite/favorite.store'
import { Media } from '@/domain/media/media.types'
import { isFavorite } from '@/services/favorite.service'
import { plusIcon, checkIcon } from '@/assets/icons/icons'
import styles from './FavoriteButton.module.scss'

type FavoriteButtonProps = {
    text?: boolean
    media: Media   
}

export const FavoriteButton = ({ media, text= false }: FavoriteButtonProps) => {

    const favorite = isFavorite(media)

    return (
        <button 
        onClick={() => update(media)}
        className={styles.favoriteButton + (favorite ? ` ${styles.isFavorite}` : '')}>
            {favorite ? checkIcon : plusIcon}
            {text && <p>{favorite ? 'Added' : 'Add to List'}</p>}
        </button>
    )
}
