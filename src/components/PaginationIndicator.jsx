// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { translateSliderWithIndicator, activateIndicatorWithTarget } from '../utils/logic'

export const PaginationIndicator = ({ sections }) => {
  const listItems = []

  for (let i = 0; i < sections; i++) {
    listItems.push(i)
  }

  return (
    <ul className='pagination-indicator'>
      {
        listItems.map((i) => {
          return (
            <li
              className={i === 0 ? 'active' : ''}
              key={i} onClick={(e) => {
                activateIndicatorWithTarget(e.target)
                translateSliderWithIndicator(e.target)
              }}
            />
          )
        })
      }
    </ul>
  )
}
