import { useSlider } from '../customHooks/useSlider'
import { PaginationIndicator } from './PaginationIndicator'

export function GenreHeader ({ genre, index }) {
  const { listByGenre } = useSlider()
  const { sections } = useSlider()
  return (
    <div className='genre-header'>
      <h2 className='T-semibold'>{genre}</h2>
      {
        listByGenre.length > sections &&
          <PaginationIndicator index={index} />
        }
    </div>
  )
}
