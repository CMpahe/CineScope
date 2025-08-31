// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { getScrollValues, eleMeasurements } from '../../../utils/logic'
//
//
//

// ---- ---- ----  Handle Pointer enter event  ---- ---- ----
export const pointerEnter = ({
  manageHover,
  children,
  setEleSize,
  setHoveredPos,
  setIsHovered,
  pointerTimeout,
  cardRef
}) => {
  clearTimeout(pointerTimeout.enter.current) // clear the last timer before setting other
  pointerTimeout.enter.current = setTimeout(() => {
    // Get the scroll values
    const scrollValue = getScrollValues()
    const [rect, width, height] = eleMeasurements({ cardRef })

    setEleSize({
      width: rect.width,
      height: rect.height
    })

    // Wrap all the information together
    setHoveredPos({
      top: rect.top + scrollValue.top + height,
      left: rect.left + scrollValue.left + width
    })

    manageHover.setId(children.id)
    setIsHovered(true) // update the hovered state
  }, 450)
}

// - pointerEnter -> Is a function that is executed when a MediaCard is hovered, cleaning the timeout and setting a new one.
// This function reads the scroll values as well as the position and sizes of the element bieng hovered so to calculate its actual positon within the viewport and within the entire page. This information is then wrapped together in an object and returned to be used to properly place the portal within the page, exactly in front of its MediaCard.

// ---- ---- ----  Handle Pointer leave event ---- ---- ----
export const pointerLeave = ({
  pointerTimeout,
  manageHover,
  setIsHovered
}) => {
  clearTimeout(pointerTimeout.leave.current) // clear the last timer before setting other
  clearTimeout(pointerTimeout.enter.current)
  manageHover.cleanId()
  setIsHovered(false)
}

// - pointerLeave -> This function is in charge of cleaning the timeout when the pointer leave the MediaCard and also cleans the movie Id from the hovered state, so the portal hides again and set the isHovered to false as it no more media hovered.
