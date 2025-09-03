import { useState, useEffect } from 'react'

// This customHook is responsable for reading the viewport width to determine the amount of movies per section that should contain the slider at a time. It returns --> the MoviesPerSection.

function useWindowInfo () { // revisar si es necesario aplicar un useCallback
  const [itemsPerSection, setItemsPerSection] = useState( // 1. Setting the initial values for itemsPerSection
    window.innerWidth < 450
      ? 5
      : window.innerWidth >= 1050
        ? 9
        : window.innerWidth >= 800 ? 7 : 5
  )

  const [desktopMode, setDesktopMode] = useState(window.innerWidth >= 768) // 2. Evaluete if desktopMode state is on

  useEffect(() => {
    //
    // 3. Create a varible to save the timeout id
    let timeoutId
    const handleResize = () => {
      // 4. Check whether it is another timeout already set and clean it
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        // 5. Recalculate all the information again
        const windowWidth = window.innerWidth
        const newItems = getItemsPerSection(windowWidth)
        const newDesktopMode = windowWidth >= 768

        // 6. Update if result vary
        if (newItems !== itemsPerSection) {
          setItemsPerSection(prev => {
            return prev !== newItems ? newItems : prev
          })
        }
        setDesktopMode(prev => {
          return prev !== newDesktopMode ? newDesktopMode : prev
        })
      }, 400)
    }

    // Add the event listener when mounting
    window.addEventListener('resize', handleResize)

    // Remove the event listener when unmounting
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { itemsPerSection, desktopMode }
}

export default useWindowInfo

// Evaluate the window width and return the amount of items that should contain according to the width
const getItemsPerSection = (windowWidth) => {
  if (windowWidth < 450) return 5
  if (windowWidth >= 1050) return 9
  if (windowWidth >= 800) return 7
  return 5
}
