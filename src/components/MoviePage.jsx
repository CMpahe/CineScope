// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { MediaCard } from './MediaCard/MediaCard'
import { SectionWrapper } from './HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../utils/logic'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { usePointerTimeout } from '../customHooks/usePointerTimeout'
import { useManageHover } from '../customHooks/useManageHover'

export const MoviePage = ({ children, search }) => {
  if (!checkObject(children)) {
    return <h2>Something went wrong!!</h2>
  }

  const data = children.movies[0]

  const pointerTimeout = usePointerTimeout()
  const manageHover = useManageHover()

  return (
    <SectionWrapper coreSection translateUp>
      <div className='moviesGrid'>
        {data.results.map((media) => (
          <MediaCard
            key={media.id}
            pointerTimeout={pointerTimeout}
            manageHover={manageHover}
          >{media}
          </MediaCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
