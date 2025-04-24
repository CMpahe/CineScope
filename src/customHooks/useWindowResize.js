import { useState, useEffect } from 'react'

// This customHook is responsable for reading the viewport width to determine the amount of movies per section should contain the slider at a time. It returns --> the MoviesPerSection.

function useWindowResize () { // revisar si es necesario aplicar un useCallback
  const [moviesPerSection, setMoviesPerSection] = useState(
    window.innerWidth < 450 ? 4 : window.innerWidth >= 1050 ? 7 : window.innerWidth >= 800 ? 6 : 5
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
  if (windowWidth < 450) return 4
  if (windowWidth >= 1050) return 7
  if (windowWidth >= 800) return 6
  return 5
}
