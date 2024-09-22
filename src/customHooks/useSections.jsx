import { useState, useEffect } from 'react'

function useSections (listByGenre, moviesPerSection) {
  const [sections, setSections] = useState(Math.ceil((listByGenre.length - 1) / moviesPerSection))

  useEffect(() => {
    setSections(Math.ceil((listByGenre.length - 1) / moviesPerSection))
  }, [moviesPerSection])

  return sections
}

export default useSections
