import { useState } from 'react'

export const useManageDisplay = (start: boolean) => {
  const [state, setState] = useState(start)

  return {
    state,
    toggleState: () => setState(prev => !prev),
    setState: (newState: boolean) => setState(newState)
  }
}