// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { PaginationIndicator } from './PaginationIndicator'
import { Slider } from './Slider'
import { Control } from './Control'
// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import useEmptySection from '../customHooks/useEmptySection'
import { useSections } from '../customHooks/useSections.jsx'
import { useRef } from 'react'

export function CarouselContainer ({ data, title, itemsPerSection }) {
  // ---- ---- CONTEXT DATA ---- ----
  console.log('Estoy recibiendo esta data bro:', data)

  const sections = useSections(data, itemsPerSection)

  // También: revisar que ajusta la cantidad de películas que se muestran en una section del slider

  // ---- ---- ELEMENTS ---- ----
  const sliderRef = useRef(null)

  useEmptySection(sections, sliderRef)

  // INFORMACIÓN PRINCIPAL: 1) mediaList, itemsPerSection
  // INFORMACIÓN SECUNDARIA: 1) sections

  return (
    <div className='carousel-container'>
      <div className='carousel-header'>

        <h2 className='T-semibold title2'>{title}</h2>

        {
        data.length > itemsPerSection &&
          <PaginationIndicator sections={sections} />
        }

      </div>

      <div className='row-container'>
        {
        data.length > itemsPerSection &&
          <Control sliderRef={sliderRef} sections={sections} direction='left' />
        }

        <Slider ref={sliderRef} data={data} />

        {
        data.length > itemsPerSection &&
          <Control sliderRef={sliderRef} sections={sections} direction='right' />
        }
      </div>
    </div>
  )
}
