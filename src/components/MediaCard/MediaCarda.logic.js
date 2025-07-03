import { getScrollValues, eleMeasurements } from '../../utils/logic'

// Handle Pointer enter event
export const pointerEnter = ({
  manageHover,
  children,
  setEleSize,
  setHoveredPos,
  setIsHovered,
  manageTimeout,
  cardRef
}) => {
  clearTimeout(manageTimeout.enter.current) // clear the last timer before setting other
  manageTimeout.enter.current = setTimeout(() => {
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
  }, 300)
}

// Handle Pointer leave event
export const pointerLeave = ({
  manageTimeout,
  manageHover,
  setIsHovered
}) => {
  clearTimeout(manageTimeout.leave.current) // clear the last timer before setting other
  clearTimeout(manageTimeout.enter.current)
  manageHover.cleanId()
  setIsHovered(false)
}
