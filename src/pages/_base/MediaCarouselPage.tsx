import { SectionWrapper } from '@/shared/SectionWrapper'
import { Carousel } from '@/features/Carousel/Carousel'
import useWindowInfo from '@/features/Carousel/carousel.hooks/useWindowInfo'
import { MediaSection } from '@/domain/media/media.sections'
import { useBillboard } from '@/features/Billboard/billboard.hooks/useBillboard'
import { Billboard } from '@/features/Billboard/Billboard'


type MediaCarouselPageProp = {
  mediaSections: MediaSection[]
  type: 'movie' | 'tv' | 'mixed'
}

export const MediaCarouselPage = ({ mediaSections, type }: MediaCarouselPageProp) => {

    const billboard = useBillboard(type)

    const windowInfo= useWindowInfo()

    return (

        <SectionWrapper variant='coreSection' margin='m-bottom-10rem'>
            {billboard && <Billboard data={billboard.data} />}
            {
                mediaSections.map(
                    (section: MediaSection) => (
                        <Carousel 
                            key={section.id}
                            section={section}
                            type={section.type}
                            windowInfo={windowInfo} 
                        />
                    )
                )
            }
        </SectionWrapper>
    )
}