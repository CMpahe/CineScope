import { useEffect, useRef } from 'react'

export const useScrollTrigger = ({ headerDisplay }: {headerDisplay: any}) => {
  let scrollY = useRef(0)

  const handleScroll = () => {

    const currentScrollY = window.scrollY
    const width = window.innerWidth


    if (width > 650) {
      headerDisplay.open()
      scrollY.current = currentScrollY
      return
    }

    if (currentScrollY <= 0) {
      headerDisplay.open()
      scrollY.current = currentScrollY
      return
    }
    
    if (currentScrollY > scrollY.current) {
      headerDisplay.close()
    } else if (currentScrollY < scrollY.current){
      headerDisplay.open()
    }

    scrollY.current = currentScrollY
  }

  return useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}