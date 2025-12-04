// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Billboard.module.scss'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { RegularBtn } from '../Buttons/RegularBtn/RegularBtn'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { addIcon, playIcon } from '../../assets/icons/icons'
import { checkObject } from '../../utils/logic'
import { useMemo, useEffect, useState, useRef } from 'react'
// import Swiper from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, EffectFade } from 'swiper/modules'
import { shuffle } from './Billboard.logic'
import 'swiper/css'
import 'swiper/css/effect-fade'
//
//
//

export const Billboard = ({ children, delay = 5000, fadeMs = 900 }) => {
  if (!checkObject(children)) {
    return <h1>Loading...</h1>
  }
  const data = Object.keys(children).length === 1 ? children.results : children.movies[0].results // Extracting the data we want for this section.

  const shuffled = useMemo(() => shuffle(data), [data])
  const len = shuffled.length

  const [index, setIndex] = useState(0)

  const layerARef = useRef(null)
  const layerBRef = useRef(null)
  const visibleIsA = useRef(true)
  const timerRef = useRef(null)

  // start both layers with data (avoid flash)
  useEffect(() => {
    if (!len) return
    // set initial backgrounds
    const a = layerARef.current
    const b = layerBRef.current
    if (a) a.style.backgroundImaga = `url(https://image.tmdb.org/t/p/w500${shuffled[0].backdrop_path})`
    if (b) b.style.backgroundImaga = `url(https://image.tmdb.org/t/p/w500${shuffled[1 % len].backdrop_path})`

    // force first visible
    if (a) a.style.opacity = '1'
    visibleIsA.current = true
    setIndex(0)
  }, [len, shuffled])

  useEffect(() => {
    if (!len) return
    function next () {
      const nextIndex = (index + 1) % len
      // which is the next layer
      const nextLayer = visibleIsA.current ? layerBRef.current : layerARef.current
      const currLayer = visibleIsA.current ? layerARef.current : layerBRef.current

      // Load data of the next movie in the hidden layer
      const movie = shuffled[nextIndex]
      if (!movie) return
      nextLayer.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}`

      // use requestAnimationFrame to ensure that the browser record the background change before opacity change.
      requestAnimationFrame(() => {
        nextLayer.style.opacity = '1'
      })

      // after fadeNs, hide previus layer and update index/visible flag
      setTimeout(() => {
        currLayer.style.opacity = '0'
        visibleIsA.current = !visibleIsA.current
        setIndex(nextIndex)
      }, fadeMs)
    }

    timerRef.current = setInterval(next, delay)

    return () => {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [index, shuffled, len, delay, fadeMs])

  // To display information (title/overview/buttons) from the visible layer without manipulating the DOM,

  // We always render the content based on `index` on top of the layers.

  // This way, the information changes when `index` changes (without touching innerHTML).

  const movie = shuffled[index] || null

  if (!len) return null

  return (
    <div className={`${styles.billboard}`}>
      <div ref={layerARef} className={styles.layer} />
      <div ref={layerBRef} className={styles.layer} />
      <div className={`${styles.media_info}`} area-live='polite'>
        <h1 className='big-title1 bolder'>{movie?.title}</h1>
        <p className='body opaque'>{movie?.overview}</p>
        {/* <p className='big-text light'>Description of the movie here, is a main summary of the movie, is a main summary of the movie. Description of the movie here</p> */}
        <div className={`${styles.btn_container}`}>
          <RegularBtn variant='red' icon={playIcon}> Whatch </RegularBtn>
          <RegularBtn icon={addIcon} opaque> Add list </RegularBtn>
        </div>
      </div>
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component is temporarily not reusable, is a static component. Although it is intended to be reactive and interactive.

// In the mean time it doesn't receive any prop, but is intented to received a list of medias so the component can display it one by one, just like a billboard.
