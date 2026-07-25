// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useContext } from 'react'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
import { SliderContext } from '../slider'

export const useSlider = () => {
  const context = useContext(SliderContext)
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider')
  }
  return context
}
