// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Carousel } from '../../features/Carousel/components/Carousel'
import { GenreTitle } from '../../components/common/TextTags/GenreTitle'
import { SectionWrapper } from '../../components/common/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ----  CUSTOM HOOKS  ---- ---- ---- ----
import useWindowInfo from '../../features/Carousel/hooks/useWindowInfo'
//
//
//

export const GenrePage = ({ sortedData, formattedGenres }) => {
  // 1) Calculate the amount of movies per section according on the viewport size
  const windowInfo = useWindowInfo()

  // 2) Check whether sortedData is valid
  if (!checkObject(sortedData)) {
    return <h2>Something went wrong!!</h2>
  }

  // note: CARROUSEL ONLY RECEIVES A LIST OF MOVIES TO DISPLAY, NOT THE OBJECT.

  return (
    <SectionWrapper variant='coreSection' margin='m-bottom--10rem'>
      {
        Object.keys(sortedData).map((category) => {
          return (
            <SectionWrapper key={category} margin='r-m-bottom'>
              <GenreTitle>{category}</GenreTitle> {/* name of the category, e.g.: pelicula */}
              {Object.entries(sortedData[category]).map((pageData) => { // Explicar como se está iterando este array u obejto.
                return (
                  Object.entries(pageData[1]).map((data) => {
                    return (
                      <Carousel
                        title={formattedGenres[category][data[0]]}
                        windowInfo={windowInfo}
                        key={formattedGenres[category][data[0]]}
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
