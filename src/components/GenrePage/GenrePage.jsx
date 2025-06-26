// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../Carousel/Carousel'
import { GenreTitle } from '../HtmlComponents/TextTags/GenreTitle'
import { SectionWrapper } from '../HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../../customHooks/useWindowResize'
// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './GenreSection.module.scss'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'

// TO DO: METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenrePage = ({ mediaObject, genres }) => {
  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  if (!checkObject(mediaObject) || !checkObject(genres)) {
    return <h2>Something went wrong!!</h2>
  }

  // CARROUSEL RECIBE SOLO LA LISTA DE PELICULAS A MOSTRAR,NO EL OBJETO

  return (
    <section className={`${styles.genreSection} ${styles.section}`}> {
        Object.keys(mediaObject).map((category) => {
          return (
            <SectionWrapper key={category}>
              <GenreTitle>{category}</GenreTitle> {/* nombre de la categoria, ejemplo: pelicula */}
              {Object.entries(mediaObject[category]).map((pageData) => {
                return (
                  Object.entries(pageData[1]).map((data) => {
                    return (
                      <Carousel
                        title={genres[category][data[0]]}
                        itemsPerSection={itemsPerSection}
                        key={genres[category][data[0]]}
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
    </section>
  )
}
