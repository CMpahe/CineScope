import { useEffect } from 'react'

export const useScrollTrigger = ({ showHeader }: {showHeader: any}) => {
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