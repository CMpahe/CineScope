// ---- ---- ---- ---- STYLES ---- ---- ---- ---- ----
import styles from '../styles/Carousel.module.scss'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { PaginationIndicator } from './SubComponents/PaginationIndicator.jsx'
import { Slider } from './SubComponents/Slider.jsx'
import { Control } from './SubComponents/Control.jsx'
// ---- ---- ---- ---- CUSTOM HOOKS  ---- ---- ---- ----
import useEmptySection from '../hooks/useEmptySection.js'
import { useSections } from '../hooks/useSections.js'
import { useCurrentSection } from '../hooks/useCurrentSection.js'
//
//
//

export function Carousel ({
  children,
  title,
  itemsPerSection,
  pointerTimeout,
  manageHover
}) {
//
  const sections = useSections(children, itemsPerSection) // Says the number of sections within the carrousel

  const currentSection = useCurrentSection(sections) // Carousel state to handle the current section position

  useEmptySection(sections, currentSection) // Prevent the Slider from being in an empty section

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.carousel_header}`}>

        <h2 className='body'>{title}</h2>            {/* ---- TITLE ---- */}

        {
        children.length > itemsPerSection &&
          <PaginationIndicator sections={sections} currentSection={currentSection} /> /* ---- PAGINATION INDICATOR ---- */
        }

      </div>

      <div className={`${styles.row_container}`}>
        {
        children.length > itemsPerSection &&
          <Control sections={sections} direction='left' currentSection={currentSection} /> /* ---- RIGHT CONTROL ---- */
        }

        <Slider
          pointerTimeout={pointerTimeout}
          manageHover={manageHover}
          currentSection={currentSection}
        >
          {children}
        </Slider>  {/* Array passed to the Slider */}

        {
        children.length > itemsPerSection &&
          <Control sections={sections} direction='right' currentSection={currentSection} /> /* ---- LEFT CONTROL ---- */
        }
      </div>
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - Children = Carousel receives an ARRAY as a children and the media within that the Carousel has to display.

// - temsPerSection = Is a prop that receives Carousel and carry the information of the amount of items visible per Slider section.

// - title = Holds the category name that Caorusel component will display.

// - pointerTimeout = It is an object with the timeout references, one (enter) for handling the pointerEnter timeout and the other one (leave) for handling the pointerLeave timeout. This is passed as a prop to keep the timeout at the top component so no more timeouts are created simultaneously within various Carousels components.

// - manageHover = It is an object that carry a state and two methods to modify that state, 1) first one (setId) for setting the state and 2) the secound one (cleanId) for cleaning the state. The main function of this custom hook is to keep the movie id currently hovered, preventing other movies to display the HoverCardPortal at the same time.
