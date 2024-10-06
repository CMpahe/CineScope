// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { PaginationIndicator } from './PaginationIndicator'
import { RowContainer } from './RowContainer'
// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import { useSlider } from '../customHooks/useSlider'
import useEmptySection from '../customHooks/useEmptySection'

export function GenreContainer ({ genre, index }) {
  // ---- ---- CONTEXT DATA ---- ----
  const { listByGenre } = useSlider()
  const { sections } = useSlider()
  const { moviesPerSection } = useSlider()

  useEmptySection(sections, index)

  return (
    <div className='genre-container'>
      <div className='genre-header'>

        <h2 className='T-semibold title2'>{genre}</h2>

        {
        listByGenre.length > moviesPerSection &&
          <PaginationIndicator index={index} sections={sections} />
        }

      </div>

      <RowContainer index={index} />
    </div>
  )
}
