// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { translateSliderWithIndicator, activateIndicatorWithTarget } from '../Carousel.logic'
import { useState } from 'react'

export const PaginationIndicator = ({ sections }) => {
  const listItems = []

  for (let i = 0; i < sections; i++) {
    listItems.push(i)
  }

  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index, e) => {
    setActiveIndex(index)
    activateIndicatorWithTarget(index, e.target)
    translateSliderWithIndicator(index, e.target)
  }

  // funciona el indicador pero no traslada el slider

  return (
    <ul className={`${styles.pagination_indicator}`}>
      {
        listItems.map((i) => {
          return (
            <li
              data-index={i}
              data-active={i === activeIndex}
              // className={`${i === activeIndex ? styles.active : ''}`}
              key={i} onClick={(e) => handleClick(i, e)}
            />
          )
        })
      }
    </ul>
  )
}
