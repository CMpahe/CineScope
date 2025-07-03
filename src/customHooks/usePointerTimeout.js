import { useRef } from 'react'

export const usePointerTimeout = () => {
  const enter = useRef(null)
  const leave = useRef(null)

  return { enter, leave }
}
