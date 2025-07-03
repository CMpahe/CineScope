import { useState } from 'react'

// Provides a state and the method to update it to handle the hovered movie Id
export const useManageHover = () => {
  const [hoveredId, setHoveredId] = useState(null) // Handle media hovered: to avoid multiple media scales at a time

  const manageHover = {
    id: hoveredId,
    setId: (id) => setHoveredId(id),
    cleanId: () => setHoveredId(null)
  }
  return manageHover
}
