import styles from './Billboard.module.scss'
import { RegularBtn } from '@/features/RegularBtn/RegularBtn'
import { playIcon } from '../../assets/icons/icons'
import { useState, useRef, useMemo } from 'react'
import { Media } from '@/domain/media/media.types'
// import 'swiper/css'
// import 'swiper/css/effect-fade'
import { useMemoShuffle } from './billboard.hooks/useMemoShuffle'
import { useStartLayers } from './billboard.hooks/useStartLayers'
import { usePlayLayers } from './billboard.hooks/usePlayLayers'
import { update } from '@/domain/favorite/favorite.store'

import { FavoriteButton } from '@/features/FavoriteButton/FavoriteButton'
import { useFavorite } from '@/hooks/useFavorites'

type billboardConfig = {
  delay: number
  fadeMs: number
}
type BillboardProps = {
  data: Media[]
  config?: Partial<billboardConfig>
}

const DEFAULT_BILLBOARD_CONFIG = {
  delay: 5000,
  fadeMs: 900,
}

export const Billboard = ({ data, config }: BillboardProps) => {

  useFavorite()

  const finalConfig = useMemo(() => ({
     ...DEFAULT_BILLBOARD_CONFIG, ...config 
    }), [config])  

  const shuffled = useMemoShuffle(data)

  const [index, setIndex] = useState(0)

  const layerA = useRef<HTMLDivElement | null>(null)
  const layerB = useRef<HTMLDivElement | null>(null)

  const visibleIsA = useRef<boolean>(true)

  const timerRef = useRef<number | null>(null)


  useStartLayers({
    layerA,
    layerB,
    shuffled,
    visibleIsA,
    setIndex
  })

  usePlayLayers({
    layerA, 
    layerB, 
    shuffled,
    visibleIsA, 
    index,
    setIndex, 
    config: finalConfig,
    timerRef
  })

  const movie = shuffled[index] || null

  if (!shuffled.length) return null

  return (
    <div className={`${styles.billboard}`}>

      <div ref={layerA} className={styles.layer} />
      <div ref={layerB} className={styles.layer} />

      <div className={`${styles.media_info}`} area-live='polite'>

        <h1 className='big-title1 bolder'>{movie?.title}</h1>

        <p className='body opaque'>{movie?.description}</p>

        <div className={`${styles.btn_container}`}>
          <RegularBtn variant='red' icon={playIcon}> Whatch </RegularBtn>
          <FavoriteButton media={movie} text={true} inBillboard={true}></FavoriteButton>
        </div>

      </div>
    </div>
  )
}