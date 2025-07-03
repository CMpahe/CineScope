// ---- ---- ---- ---- STYLES ---- ---- ---- ----

// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { HoverCardPortal } from './SubComponents/HoverCardPortal'
import { useRef, useState } from 'react'
import { CoreCard } from './SubComponents/CoreCard'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { pointerEnter, pointerLeave } from './MediaCarda.logic'

export const MediaCard = ({ children, manageTimeout, manageHover }) => {
  const cardRef = useRef(null)
  const [hoverPos, setHoveredPos] = useState({ top: 0, left: 0 })
  const [eleSize, setEleSize] = useState({ Width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handlePointerEnter = () => {
    pointerEnter({
      manageHover,
      children,
      setEleSize,
      setHoveredPos,
      setIsHovered,
      manageTimeout,
      cardRef
    })
  }

  const handlePointerLeave = () => {
    pointerLeave({
      manageTimeout,
      manageHover,
      setIsHovered
    })
  }

  const showPortal = manageHover.id === children.id && isHovered

  return (
    <>
      <CoreCard
        showPortal={showPortal}
        cardRef={cardRef}
        handlePointer={{ enter: handlePointerEnter, leave: handlePointerLeave }}
      >
        {children}
      </CoreCard>

      {showPortal &&

        <HoverCardPortal position={hoverPos} eleSize={eleSize}>
          <CoreCard
            showPortal={showPortal}
            cardRef={cardRef}
          >
            {children}
          </CoreCard>
        </HoverCardPortal>}
    </>
  )
}
