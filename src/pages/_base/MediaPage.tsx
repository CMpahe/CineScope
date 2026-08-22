import { SectionWrapper } from '@/features/common/SectionWrapper'
import { MediaCard } from '@/features/MediaCard/MediaCard'
import styles from './Pages.module.scss'
import { Media } from '@/domain/media/media.types'

type MediaPageProp = {
  data: Media[]
}

export const MediaPage = ({data}: MediaPageProp) => {


  return (
    <SectionWrapper variant='coreSection' padding='b-padding--15rem'>
      <div className={`${styles.mediaGrid} ${styles.marginTop}`}>
        {data?.map((media: Media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </SectionWrapper>
  )
}
  