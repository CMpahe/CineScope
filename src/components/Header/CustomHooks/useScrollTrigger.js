// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import { useEffect } from 'react'
//
//
//

export const useScrollTrigger = ({ showHeader }) => {
  let scrollY = 0

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const width = window.innerWidth

    if (Math.floor(width) > 650 && showHeader.state === false) showHeader.setState(true) // To make it visible when mounting the component
    if (currentScrollY > scrollY && showHeader.state === true) {
      showHeader.setState(false)
    } else {
      showHeader.setState(true)
    }

    scrollY = currentScrollY
  }

  return useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// useScrollTrigger is a hook that hides and display the header according to the user scroll.

// When a scroll Y downwards is made the hook hides the Header and when scrolling upwards it shows the Header again.

// It does it by reading the scroll Y value and comparing it with the previous one so it can know whether is moving downwards or upwards.

// The hook use a let declare variable becouse it worked better than an useState in this case.

// - showHeader -> This prop is an object that manage the state of the header. It has the state value and some methods to update it.
