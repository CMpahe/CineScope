// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useState, useEffect } from 'react'

export const useSections = (mediaList, itemsPerSection) => {
  const [sections, setSections] = useState(Math.ceil((mediaList.length - 1) / itemsPerSection))

  useEffect(() => {
    setSections(Math.ceil((mediaList.length - 1) / itemsPerSection))
  }, [itemsPerSection])

  return sections
}
