import { useEffect } from 'react'
import { SectionController } from '../carousel.types'

function useEmptySection (sections: number, sectionController: SectionController) {
  useEffect(() => {
    if (sectionController.section > (sections - 1)) {
      sectionController.setSection(sections - 1)
    }
  }, [sections])
}

export default useEmptySection