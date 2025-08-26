// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../Carousel/Carousel'
import { GenreTitle } from '../HtmlComponents/TextTags/GenreTitle'
import { SectionWrapper } from '../HtmlComponents/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  CUSTOM HOOKS  ---- ---- ---- ----
import useWindowResize from '../../customHooks/useWindowResize'
import { useManageHover } from '../../customHooks/useManageHover'
import { usePointerTimeout } from '../../customHooks/usePointerTimeout'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useSortDataByGenre } from '../../features/media/data/customHooks/useSortDataByGenre'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'
//
//
//

export const GenrePage = ({ formattedData, formattedGenres }) => {
  const sortedMedia = useSortDataByGenre(formattedData, formattedGenres) // Organize the data received into genres category so the component can use it properly.

  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  const pointerTimeout = usePointerTimeout() // Global PointerEnter and PointerLeave timeout

  const manageHover = useManageHover() // Holds the media Id being hovered so just one at a time throw the portal

  if (!checkObject(sortedMedia) || !checkObject(formattedGenres)) {
    return <h2>Something went wrong!!</h2>
  }

  // note: CARROUSEL ONLY RECEIVES A LIST OF MOVIES TO DISPLAY, NOT THE OBJECT.

  return (
    <SectionWrapper translateUp>
      {
        Object.keys(sortedMedia).map((category) => {
          return (
            <SectionWrapper key={category} marginDown>
              <GenreTitle>{category}</GenreTitle> {/* name of the category, e.g.: pelicula */}
              {Object.entries(sortedMedia[category]).map((pageData) => { // Explicar como se está iterando este array u obejto.
                return (
                  Object.entries(pageData[1]).map((data) => {
                    return (
                      <Carousel
                        title={formattedGenres[category][data[0]]}
                        itemsPerSection={itemsPerSection}
                        key={formattedGenres[category][data[0]]}
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

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the Genres main section, so all the genres categories will be placed here and organized.

// This component maps the genres object and for each category it maps all the mediaObject wrapring together all medias that matches the category that has recently being mapped.

// - mediaObject -> This is the object that contains all the medias to be displayed within this section. They are not organized by category, this component makes it own work to organize the information and displays it in order.

// - genres -> This is the object that contains all the names of the categories that the medias will be organized by.
