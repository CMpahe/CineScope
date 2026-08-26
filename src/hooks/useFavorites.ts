import { useSyncExternalStore } from "react"
import { subscribe, getSnapshot } from "@/domain/favorite/favorite.store"
import { getFavorites } from "@/services/favorite.service"

export const useFavorite = () => {
        
   useSyncExternalStore(
        subscribe,
        getSnapshot
    )
}