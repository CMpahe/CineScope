// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../Carousel/Carousel'
import { GenreTitle } from '../HtmlComponents/TextTags/GenreTitle'
import { SectionWrapper } from '../HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../../customHooks/useWindowResize'
import { useRef, useState } from 'react'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'

// TO DO: METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenrePage = ({ mediaObject, genres }) => {
  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  const enter = useRef(null)
  const leave = useRef(null)

  // Esta logica la puedo extraer en un hook luego
  const [hoveredId, setHoveredId] = useState(null) // Handle media hovered: to avoid multiple media scales at a time

  const manageHover = {
    id: hoveredId,
    setId: (id) => setHoveredId(id),
    cleanId: () => setHoveredId(null)
  }

  if (!checkObject(mediaObject) || !checkObject(genres)) {
    return <h2>Something went wrong!!</h2>
  }

  // CARROUSEL RECIBE SOLO LA LISTA DE PELICULAS A MOSTRAR,NO EL OBJETO

  // Mirar como limpiar mas esta fraccion de código
  return (
    <SectionWrapper translateUp>
      {
        Object.keys(mediaObject).map((category) => {
          return (
            <SectionWrapper key={category} marginDown>
              <GenreTitle>{category}</GenreTitle> {/* nombre de la categoria, ejemplo: pelicula */}
              {Object.entries(mediaObject[category]).map((pageData) => {
                return (
                  Object.entries(pageData[1]).map((data) => {
                    return (
                      <Carousel
                        title={genres[category][data[0]]}
                        itemsPerSection={itemsPerSection}
                        key={genres[category][data[0]]}
                        manageTimeout={{ enter, leave }}
                        manageHover={manageHover}
                      >{data[1]}
                      </Carousel>
                    )
                  })
                )
              })}
            </SectionWrapper>
          )
        })
      }
    </SectionWrapper>
  )
}
