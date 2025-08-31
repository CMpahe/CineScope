// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../../styles/Carousel.module.scss'
//
//
//

export const PaginationIndicator = ({ sections, currentSection }) => {
  const listItems = []

  for (let i = 0; i < sections; i++) {
    listItems.push(i)
  }

  const handleClick = (index) => {
    currentSection.setSection(index)
  }

  return (
    <ul className={`${styles.pagination_indicator}`}>
      {
        listItems.map((i) => {
          return (
            <li
              data-index={i}
              key={i} onClick={() => handleClick(i)}
              className={i === currentSection.section ? styles.active : ''}
            />
          )
        })
      }
    </ul>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// ---- ---- PROPS VALUES ---- ----

// - sections -> gives the amount of sections available within the slider and so the amount of indicators to be displayed.

// - currentSection -> PaginationIndicator uses currentSection to manage the state of the current visible section. With this object, the PaginationIndicator component can read and modify the visible section.
