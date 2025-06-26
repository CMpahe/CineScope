// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { MediaCard } from './MediaCard/MediaCard'
import { SectionWrapper } from './HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../utils/logic'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useState, useRef } from 'react'

export const MoviePage = ({ children, search }) => {
  if (!checkObject(children)) {
    return <h2>Something went wrong!!</h2>
  }

  const data = children.movies[0]

  const [hoveredMediaId, setHoveredMediaId] = useState(null)

  // Mirar como funciona esta fraccion de codigo
  // Ver si puede ser extraida
  // Mirar el alcance de la funcion de timeout y los estados para entender el flujo de ejecución

  const enterTimeout = useRef(null)
  const leaveTimeout = useRef(null)

  const handlePointerEnter = (id) => {
    clearTimeout(enterTimeout.current) // clear the last timer before setting other
    enterTimeout.current = setTimeout(() => {
      setHoveredMediaId(id)
    }, 300)
  }

  const handlePointerLeave = () => {
    clearTimeout(leaveTimeout.current) // clear the last timer before setting other
    leaveTimeout.current = setTimeout(() => {
      setHoveredMediaId(null)
    }, 300)
  }

  return (
    <SectionWrapper coreSection translateUp>
      <div className='moviesGrid'>
        {data.results.map((media) => (
          <MediaCard
            key={media.id}
            isHovered={hoveredMediaId === media.id}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >{media}
          </MediaCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
