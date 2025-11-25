// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { MediaCard } from '../../features/media/components/MediaCard'
import { SectionWrapper } from '../../components/common/SectionWrapper'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject } from '../../utils/logic'
// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './HomePage.module.scss'
//
//
//

export const HomePage = ({ children }) => {
  if (!checkObject(children)) {
    return <h2>Something went wrong!!</h2>
  }

  const data = Object.keys(children).length === 1 ? children : children.movies[0] // Extracting the data we want for this section.

  if (data.results.length === 0) return <h1 className='m-top--5rem'>No results</h1>

  return (
    <SectionWrapper variant='coreSection' padding='b-padding--10rem'>
      <div className={styles.moviesGrid}>
        {data.results.map((media) => (
          <MediaCard key={media.id}>
            {media}
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
