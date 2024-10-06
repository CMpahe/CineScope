// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useSections from '../customHooks/useSections'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { createContext } from 'react'

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
