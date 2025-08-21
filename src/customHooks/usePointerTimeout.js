import { useRef } from 'react'

export const usePointerTimeout = () => { // Returns two useRef intended to be asigned with a timeout
  const enter = useRef(null)
  const leave = useRef(null)

  return { enter, leave }
}

// Its main purpose is to save the enter and leave timeout so all the components within a main section can have access to the same timeout and work synchronized
