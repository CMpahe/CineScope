// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../Carousel/Carousel'
import { GenreTitle } from '../HtmlComponents/TextTags/GenreTitle'
import { SectionWrapper } from '../HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../../customHooks/useWindowResize'
import { useManageHover } from '../../customHooks/useManageHover'
import { usePointerTimeout } from '../../customHooks/usePointerTimeout'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'
//
//
//

export const GenrePage = ({ mediaObject, genres }) => {
  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  const pointerTimeout = usePointerTimeout() // Global PointerEnter and PointerLeave timeout

  const manageHover = useManageHover() // Holds the media Id being hovered so just one at a time throw the portal

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
                        pointerTimeout={pointerTimeout}
                        manageHover={manageHover}
                      >
                        {data[1]}
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
