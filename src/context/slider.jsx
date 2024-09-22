import { createContext } from 'react'
import useSections from '../customHooks/useSections'

export const SliderContext = createContext()

export function SliderProvider ({ children, listByGenre, moviesPerSection }) {
  const sections = useSections(listByGenre, moviesPerSection)

  return (
    <SliderContext.Provider value={{
      sections,
      listByGenre,
      moviesPerSection
    }}
    >
      {children}
    </SliderContext.Provider>
  )
}
