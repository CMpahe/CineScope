// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../Carousel/Carousel'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../../customHooks/useWindowResize'
// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './GenreSection.module.scss'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'

// TO DO: METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenreSection = ({ mediaObject, genres }) => {
  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  if (!checkObject(mediaObject) || !checkObject(genres)) {
    return <h2>Something went wrong!!</h2>
  }

  // CARROUSEL RECIBE SOLO LA LISTA DE PELICULAS A MOSTRAR,NO EL OBJETO

  return (
    <section className={`${styles.genreSection} ${styles.section}`}>
      {
        Object.keys(mediaObject).map((category) => {
          return (
            <section
              className={`${styles.category}`}
              key={category}
            >
              <h2 className={`${styles.title} title1`}>{category}</h2> {/* nombre de la categoria, ejemplo: pelicula */}
              {
              Object.entries(mediaObject[category]).map((pageData) => {
                return (
                  Object.entries(pageData[1]).map((data) => {
                    return (
                      <Carousel
                        data={data[1]}
                        title={genres[category][data[0]]} itemsPerSection={itemsPerSection}
                        key={genres[category][data[0]]}
                      />
                    )
                  })
                )
              })
            }
            </section>
          )
        })
      }
    </section>
  )
}
