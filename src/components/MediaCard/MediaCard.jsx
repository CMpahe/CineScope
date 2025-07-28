// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { HoverCardPortal } from './SubComponents/HoverCardPortal/HoverCardPortal'
import { useRef, useState } from 'react'
import { CoreCard } from './SubComponents/CoreCard'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { pointerEnter, pointerLeave } from './MediaCarda.logic'
//
//
//

export const MediaCard = ({ children, pointerTimeout, manageHover }) => {
  const cardRef = useRef(null)
  const [hoverPos, setHoveredPos] = useState({ top: 500, left: 500 })
  const [eleSize, setEleSize] = useState({ Width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handlePointerEnter = () => {
    pointerEnter({
      manageHover,
      children,
      setEleSize,
      setHoveredPos,
      setIsHovered,
      pointerTimeout,
      cardRef
    })
  }

  const handlePointerLeave = () => {
    pointerLeave({
      pointerTimeout,
      manageHover,
      setIsHovered
    })
  }

  const showPortal = manageHover.id === children.id && isHovered

  return (
    <>
      <CoreCard
        cardRef={cardRef}
        handlePointer={{ enter: handlePointerEnter, leave: handlePointerLeave }}
      >
        {children}
      </CoreCard>

      {showPortal &&

        <HoverCardPortal position={hoverPos} eleSize={eleSize}>
          {children}
        </HoverCardPortal>}
    </>
  )
}
