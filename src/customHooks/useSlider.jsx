import { useContext } from 'react'
import { SliderContext } from '../context/slider'

export const useSlider = () => {
  const context = useContext(SliderContext)
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider')
  }
  return context
}
