import { Media } from '@/domain/media/media.types'
import { useState, useEffect } from 'react'

export const useSections = (mediaList: Media[], itemsPerSection: number) => {
  const [sections, setSections] = useState(Math.ceil(mediaList.length / itemsPerSection))

  useEffect(() => {
    setSections(Math.ceil(mediaList.length / itemsPerSection))
  }, [itemsPerSection, mediaList])

  return sections
}
