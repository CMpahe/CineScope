// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useState, useEffect } from 'react'

export const useSections = (mediaList, itemsPerSection) => {
  const [sections, setSections] = useState(Math.ceil(mediaList.length / itemsPerSection))

  useEffect(() => {
    setSections(Math.ceil(mediaList.length / itemsPerSection))
  }, [itemsPerSection])

  return sections
}
