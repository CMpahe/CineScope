// ---- ---- ---- ---- STYLES ---- ---- ---- ---- ----
import styles from './Carousel.module.scss'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { PaginationIndicator } from './SubComponents/PaginationIndicator.jsx'
import { Slider } from './SubComponents/Slider.jsx'
import { Control } from './SubComponents/Control.jsx'
// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import useEmptySection from '../../customHooks/useEmptySection.js'
import { useSections } from '../../customHooks/useSections.jsx'
import { useRef } from 'react'

export function Carousel ({ children, title, itemsPerSection }) {
  // ---- ---- CONTEXT DATA ---- ----
  // console.log('Estoy recibiendo esta data bro:', data)

  const sections = useSections(children, itemsPerSection)

  // También: revisar que ajusta la cantidad de películas que se muestran en una section del slider

  // ---- ---- ELEMENTS ---- ----
  const sliderRef = useRef(null)

  useEmptySection(sections, sliderRef)

  // INFORMACIÓN PRINCIPAL: 1) mediaList, itemsPerSection
  // INFORMACIÓN SECUNDARIA: 1) sections

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.carousel_header}`}>

        <h2 className='body'>{title}</h2>

        {
        children.length > itemsPerSection &&
          <PaginationIndicator sections={sections} />
        }

      </div>

      <div className={`${styles.row_container}`}>
        {
        children.length > itemsPerSection &&
          <Control sliderRef={sliderRef} sections={sections} direction='left' />
        }

        <Slider ref={sliderRef}>{children}</Slider>

        {
        children.length > itemsPerSection &&
          <Control sliderRef={sliderRef} sections={sections} direction='right' />
        }
      </div>
    </div>
  )
}
