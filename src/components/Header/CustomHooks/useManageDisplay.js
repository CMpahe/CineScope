// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import { useState } from 'react'
//
//
//

export const useManageDisplay = (start) => { // verificar que solo reciba valores booleanos
  const [state, setState] = useState(start)

  return {
    state,
    toggleState: () => setState(prev => !prev),
    setState: (newState) => setState(newState)
  }
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// useManageDisplay -> This hook manages the state for a toggle function. It returns an object that contains a state value, a toggle function and a method to update the state value with custom value.
