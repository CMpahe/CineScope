import { useRef, useState } from "react"

export const useExpandableInput = () => {
      const inputRef = useRef <HTMLInputElement>(null)
      const inputContainer = useRef <HTMLDivElement>(null)
    
      const [isOpen, setIsOpen] = useState(false)
      const close = () => setIsOpen(false)
      const open = () => setIsOpen(true)

      return {isOpen, open, close, inputRef, inputContainer}
}