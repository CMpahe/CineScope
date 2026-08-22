import { useState } from 'react'

export const useManageDisplay = (start: boolean) => {
  const [state, setState] = useState(start)

  return {
    state,
    toggle: () => setState(prev => !prev),
    open: () => setState(true),
    close: () => setState(false)
  }
}