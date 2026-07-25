import { useEffect } from "react"

type useClickOutsideProps = {
    ref: React.RefObject<HTMLDivElement | null>
    funct: () => void
}

export const useClickOutside = ({ref, funct}: useClickOutsideProps  ) => {

return ( 
    useEffect(() => {
        function handleOutside (ev: MouseEvent) {
            if (ref === null) return
            if (ref. current && !ref.current.contains(ev.target as Node)) funct()
        }
    document.addEventListener('mousedown', handleOutside)
  }, [])
)
}
