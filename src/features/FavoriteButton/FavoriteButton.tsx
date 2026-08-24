import { update } from '@/domain/favorite/favorite.store'
import { Media } from '@/domain/media/media.types'
import { isFavorite } from '@/services/favorite.service'
import { plusIcon, checkIcon } from '@/assets/icons/icons'
import styles from './FavoriteButton.module.scss'

type FavoriteButtonProps = {
    text?: boolean
    inBillboard?: boolean
    media: Media   
}

export const FavoriteButton = ({ media, text= false, inBillboard = false }: FavoriteButtonProps) => {

    const favorite = isFavorite(media)

    return (
        <button 
        onClick={() => update(media)}
        className={styles.favoriteButton + (favorite ? ` ${styles.isFavorite}` : '') + (inBillboard ? ` ${styles.inBillboard}` : '')}>
            {favorite ? checkIcon : plusIcon}
            {text && <p>{favorite ? 'Added' : 'Add list'}</p>}
        </button>
    )
}
