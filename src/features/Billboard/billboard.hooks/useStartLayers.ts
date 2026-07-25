import { Media } from "@/domain/media/media.types"
import { useEffect } from "react"

type UseStartLayersProps = {
    layerA: React.RefObject<HTMLDivElement | null>,
    layerB: React.RefObject<HTMLDivElement | null>,
    shuffled: Media[],
    visibleIsA: React.RefObject<boolean>,
    setIndex: (i: number) => void
}

export function useStartLayers ({
    layerA,
    layerB,
    shuffled,
    visibleIsA,
    setIndex
}: UseStartLayersProps) {

    const len = shuffled.length


    useEffect(() => {

        if (!len) return

        const a = layerA.current
        const b = layerB.current

        if (a) a.style.backgroundImage = `url(${shuffled[0].backdrop})`
        if (b) b.style.backgroundImage = `url(${shuffled[1 % len].backdrop})`
        
        // force first visible
        if (a) a.style.opacity = '1'

        visibleIsA.current = true

        setIndex(0)

    }, [len, shuffled])
}