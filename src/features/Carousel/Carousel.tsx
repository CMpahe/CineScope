import styles from './styles/Carousel.module.scss'
import { PaginationIndicator } from './PaginationIndicator'
import { Slider } from './Slider'
import { Control } from './Control'
import useEmptySection from './carousel.hooks/useEmptySection'
import { useSections } from './carousel.hooks/useSections'
import { useSectionController } from './carousel.hooks/useSectionController'
import { MediaSection } from '@/domain/media/media.sections'
import { useMedia } from '@/hooks/useMedia'
import { Loader } from '../common/Loader/Loader'

type CarouselProp = {
  section: MediaSection
  type: 'movie' | 'tv'
  windowInfo: any
}



export function Carousel ({
  section,
  windowInfo
}: CarouselProp) {

  const cacheKey = section.endpoint

  const cacheConfig = {
    key: cacheKey,
    enable: true,
    ttl: 5 * 60 * 1000
  }

  const { data, loading, error } = useMedia({ endpoint: section.endpoint, cacheSetting: cacheConfig })

  const sectionNumber = useSections(data, windowInfo.itemsPerSection)

  const sectionController = useSectionController(sectionNumber)


  useEmptySection(sectionNumber, sectionController)

  if (loading) return <Loader></Loader>

  if (error) return <p className={styles.state}>Error: {error}</p>
  
  if (!data.length) return <p className={styles.state}>No hay contenido disponible</p>

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.carousel_header}`}>

        <h2 className='body'>{section.title}</h2>  

        {
          data.length > windowInfo.itemsPerSection &&
            <PaginationIndicator sections={sectionNumber} sectionController={sectionController} /> 
        }

      </div>

      <div className={`${styles.row_container}`}>
        {
          data.length > windowInfo.itemsPerSection &&
            <Control direction='left' move={sectionController.moveDown} /> 
        }

        <Slider data={data} sectionController={sectionController} />

        {
          data.length > windowInfo.itemsPerSection &&
            <Control direction='right' move={sectionController.moveUp} />
        }
      </div>
    </div>
  )
}