import { useState, useEffect } from 'react'

// This customHook is responsable for reading the viewport width to determine the amount of movies per section should contain the slider at a time. This is what it returns: the MoviesPerSection.

function useWindowResize () { // revisar si es necesario aplicar un useCallback
  const [moviesPerSection, setMoviesPerSection] = useState(
    window.innerWidth < 450 ? 3 : window.innerWidth >= 800 ? 5 : 4
  )

  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const windowWidth = window.innerWidth
        const newMoviesPerSection = getMoivesPerSection(windowWidth)

        if (newMoviesPerSection !== moviesPerSection) {
          setMoviesPerSection(newMoviesPerSection)
        }
      }, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [moviesPerSection])

  return moviesPerSection
}

export default useWindowResize

const getMoivesPerSection = (windowWidth) => {
  if (windowWidth < 450) return 3
  if (windowWidth >= 800) return 5
  return 4
}
