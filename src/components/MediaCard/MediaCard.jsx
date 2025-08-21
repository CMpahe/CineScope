// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { HoverCardPortal } from './SubComponents/HoverCardPortal/HoverCardPortal'
import { CoreCard } from './SubComponents/CoreCard'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useRef, useState } from 'react'
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
    pointerEnter({ // Retrieve all the necessary information to place the portal.
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
    pointerLeave({ // Clean the media Id hovered from the state, and hides the portal.
      pointerTimeout,
      manageHover,
      setIsHovered
    })
  }

  const showPortal = manageHover.id === children.id && isHovered // Holds a boolean value that decides whether the portal is displayed or not.

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

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// MediaCard is a component that receives an object through its props and displays it as a Movie card.

// - children -> Is the object received by the component and used to be passed to the CoreCard to be displayed.

// - pointerTimeout -> Is a hook that holds an timeout and some methods to update it. This hook is placed in the main component o section so to ensure all the MediaCards works with the same timeout avoinding duplicity. The timeout and its methods are all wrap together in an object to make it easier to handle.
// This

// - manageHover -> Is a hook just as before, placed in the main component to ensure that all MediaCards works with the same information at the same time. This hook has a state that holds the Id of the movie that is being hovering. All MediaCard uses this information to compare it with its own Id and whenever both Ids matches, the MediaCard will display the HoverCardPortal.
// This hook works with a timeout preventing the Portal to be throw immdiatly when the MediaCard is hovered.
// Its main function is ensure that only one movie at a time throwS the portal.
