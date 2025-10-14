// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { HoverCardPortal } from './HoverCardPortal'
import { CoreCard } from './CoreCard'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useState } from 'react'
import { autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react'
//
//
//

export const MediaCard = ({ children }) => {
  // 1) Open portal state
  const [open, setOpen] = useState(false)
  // 2) basic floating settings
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(({ rects }) => -(rects.reference.height / 2 + rects.floating.height / 2)),
      flip(),
      shift({ padding: 10 })
    ]
  })

  // 3) interactions settings
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss
  ])

  return (
    <>
      <CoreCard // a) Reference
        id={children.id}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </CoreCard>

      {open &&

        <HoverCardPortal // b) Floating portal
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
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

// This component works with floating-ui as the main tool for position the floating portal. Here are the main position settings.
