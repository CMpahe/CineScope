import { Media } from "@/domain/media/media.types"
import { shuffle } from "../Billboard.logic"
import { useMemo } from "react"

export function useMemoShuffle(data: Media[]) {
  const shuffled = useMemo(() => shuffle(data) , [data])
  return shuffled
}