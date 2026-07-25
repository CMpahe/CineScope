import { useEffect } from 'react'
type AutoFocusProp = {
  isOpen: boolean
  inputRef: React.RefObject<HTMLInputElement | null>
}
export const useAutoFocus = ({ isOpen, inputRef }: AutoFocusProp) => {
  return (
    useEffect(() => { 
      if (isOpen) {

      inputRef.current?.focus({
        preventScroll: true,
      });

      }
    
      }, [isOpen])
  )
}
