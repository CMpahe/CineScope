// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export const useAutoNavegate = ({ setMoviesToDisplay, filterMovies, search, movies }) => {
  const navegate = useNavigate()
  const location = useLocation()
  const timeoutRef = useRef(null)
  return (
    useEffect(() => {
      // Cancel the previous timeout if any
      if (timeoutRef.current) { clearTimeout(timeoutRef.current) }

      // Change the path if the user is in another
      if (location.pathname !== '/') { navegate('/') } // añadir para que evalue tambien si se ha escrito algo en el input: && search !== ''

      // Asign a new timeout
      timeoutRef.current = setTimeout(() => {
        setMoviesToDisplay(filterMovies({ search, movies }))
      }, 400)

      // Clean the timeout when unmounting or updating the effect
      return () => { clearTimeout(timeoutRef.current) }
    }, [search])
  )
}
