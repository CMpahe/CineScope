import styles from './styles/Carousel.module.scss'
import { SectionController } from './carousel.types'

type PaginationIndicatorProp = {
  sections: number
  sectionController: SectionController
}

export const PaginationIndicator = ({ sections, sectionController }: PaginationIndicatorProp) => {
  const listItems = []

  for (let i = 0; i < sections; i++) {
    listItems.push(i)
  }

  const handleClick = (index: number) => {
    sectionController.setSection(index)
  }

  return (
    <ul className={`${styles.pagination_indicator}`}>
      {
        listItems.map((i) => {
          return (
            <li
              data-index={i}
              key={i} onClick={() => handleClick(i)}
              className={i === sectionController.section ? styles.active : ''}
            />
          )
        })
      }
    </ul>
  )
}
