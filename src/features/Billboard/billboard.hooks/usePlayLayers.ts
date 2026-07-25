import { Media } from "@/domain/media/media.types"
import { RefObject, useEffect } from "react"

type usePlayLayersProps = {
    layerA: React.RefObject<HTMLDivElement | null>,
    layerB: React.RefObject<HTMLDivElement | null>,
    shuffled: Media[]
    visibleIsA: RefObject<boolean>
    setIndex: (i: number) => void
    index: number
    config: {
        delay: number
        fadeMs: number
    }
    timerRef: RefObject<number | null>
}

export function usePlayLayers ({
    layerA,
    layerB,
    shuffled,
    visibleIsA,
    index,
    setIndex,
    config,
    timerRef
}: usePlayLayersProps) {

    const len = shuffled.length

    const { delay, fadeMs } = config

    useEffect(() => {

        if (!len) return

        function next () {

          const nextIndex = (index + 1) % len

          const nextLayer = visibleIsA.current ? layerB.current : layerA.current

          const currLayer = visibleIsA.current ? layerA.current : layerB.current
    
          if (!nextLayer || !currLayer) return

          const movie: Media = shuffled[nextIndex]

          if (!movie) return
          nextLayer.style.backgroundImage = `url(${movie.backdrop})`

          requestAnimationFrame(() => {
            nextLayer.style.opacity = '1'
          })
    
          setTimeout(() => {
            currLayer.style.opacity = '0'
            visibleIsA.current = !visibleIsA.current
            setIndex(nextIndex)

          }, fadeMs)
        }
    
        timerRef.current = setInterval(next, delay)
    
        return () => {
          if (timerRef.current !== null) clearInterval(timerRef.current)
          timerRef.current = null
        }
      }, [index, shuffled, len, delay, fadeMs])
}