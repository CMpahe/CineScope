// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
// import useSections from '../customHooks/useSections'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { createContext } from 'react'

export const SliderContext = createContext<any | null>(null)

type SliderProviderProp = {
  children: any
  listByGenre: any
}

export function SliderProvider ({ children, listByGenre }: SliderProviderProp) {
  // const sections = useSections(listByGenre, moviesPerSection)
  // verificar que componente consume la constante sections

  return (
    <SliderContext.Provider value={{
      listByGenre
      // moviesPerSection
    }}
    >
      {children}
    </SliderContext.Provider>
  )
}
