import { getScrollValues, eleMeasurements } from '../../utils/logic'

// Handle Pointer enter event
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
    setIsHovered(true)
  }, 450)
}

// Handle Pointer leave event
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
