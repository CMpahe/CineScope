// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { MediaCard } from '../../components/MediaCard/MediaCard'
import { SectionWrapper } from '../../components/common/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { usePointerTimeout } from '../../hooks/usePointerTimeout'
import { useManageHover } from '../../hooks/useManageHover'
// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './HomePage.module.scss'
//
//
//

export const HomePage = ({ children, search }) => {
  if (!checkObject(children)) {
    return <h2>Something went wrong!!</h2>
  }

  const data = children.movies[0] // Extracting the data we want for this section.

  const pointerTimeout = usePointerTimeout() // Manage two timeout reference for the pointer enter and leave events.
  const manageHover = useManageHover() // To handle the pointer event, when hovering.

  return (
    <SectionWrapper coreSection translateUp>
      <div className={styles.moviesGrid}>
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

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This is the main section for movies, this section will display a group of movies without any order or category, so the user can navegate through the page and discover some interesting movies.

// - children -> This is an object with all the movies and medias received from the API, the component uses this object and extract only the information of its interest and then map it to show it.
