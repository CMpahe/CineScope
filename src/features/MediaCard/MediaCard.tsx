import { HoverCardPortal } from './HoverCardPortal/HoverCardPortal'
import { CoreCard } from './CoreCard'
import { useState } from 'react'
import { Media } from '@/domain/media/media.types'
import { autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react'

type MediaCardType = {
  media: Media
}


export const MediaCard = ({ media }: MediaCardType) => {

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
        ref={refs.setReference}
        {...getReferenceProps()}
        media={media}
      />

      {open &&

        <HoverCardPortal // b) Floating portal
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          media={media}
        />}
    </>
  )
}