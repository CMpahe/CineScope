import { Media } from "@/domain/media/media.types";

export const shuffle = (array: Media[]) => {
  const arr = [...array] // copy without modify the original one

  for (let i = arr.length - 1; i > 0; i--) {
    // random number within 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // switch positions
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
