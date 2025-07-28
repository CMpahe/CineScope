import { useState, useEffect } from 'react'

// This customHook is responsable for reading the viewport width to determine the amount of movies per section should contain the slider at a time. It returns --> the MoviesPerSection.

function useWindowResize () { // revisar si es necesario aplicar un useCallback
  const [itemsPerSection, setItemsPerSection] = useState( // Setting the initial values for itemsPerSection
    window.innerWidth < 450
      ? 5
      : window.innerWidth >= 1050
        ? 9
        : window.innerWidth >= 800 ? 7 : 5
  )

  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const windowWidth = window.innerWidth
        const newItemsPerSection = getItemsPerSection(windowWidth)

        if (newItemsPerSection !== itemsPerSection) {
          setItemsPerSection(newItemsPerSection)
        }
      }, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [itemsPerSection])

  return itemsPerSection
}

export default useWindowResize

const getItemsPerSection = (windowWidth) => {
  if (windowWidth < 450) return 5
  if (windowWidth >= 1050) return 9
  if (windowWidth >= 800) return 7
  return 5 // REVISAR ESTO PARA LUEGO
}
