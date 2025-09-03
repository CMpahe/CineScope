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
  cardRef,
  time
}) => {
  clearTimeout(pointerTimeout.enter.current) // 1. clear the last timer before setting other

  pointerTimeout.enter.current = setTimeout(() => {
    //
    // 2. Get the scroll values and element measures
    const scrollValue = getScrollValues()
    const [rect, width, height] = eleMeasurements({ cardRef })

    setEleSize({ // 3. Update the state within the parent component
      width: rect.width,
      height: rect.height
    })

    // 4. Wrap all the information together
    setHoveredPos({
      top: rect.top + scrollValue.top + height, // Calculate the exact position within the page
      left: rect.left + scrollValue.left + width
    })

    // 5. Update the id state within the manageHover object and set the hover state to true
    manageHover.setId(children.id)
    setIsHovered(true)
  }, time)
}

// - pointerEnter -> Is a function that is executed when a MediaCard is hovered, cleaning the timeout and setting a new one.
// This function reads the scroll values as well as the position and sizes of the element bieng hovered so to calculate its actual positon within the viewport and within the entire page. This information is then wrapped together in an object and returned to be used to properly place the portal within the page, exactly in front of its MediaCard.

// ---- ---- ----  Handle Pointer leave event ---- ---- ----
export const pointerLeave = ({
  pointerTimeout,
  manageHover,
  setIsHovered
}) => {
  // 1. Clean the last timer before setting other
  clearTimeout(pointerTimeout.leave.current)
  clearTimeout(pointerTimeout.enter.current)
  // 2. Clean the hover state and the id of the component being hovered
  manageHover.cleanId()
  setIsHovered(false)
}

// - pointerLeave -> This function is in charge of cleaning the timeout when the pointer leave the MediaCard and also cleans the movie Id from the hovered state, so the portal hides again and set the isHovered to false as it no more media hovered.
