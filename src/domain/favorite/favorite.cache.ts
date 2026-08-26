import { FavoriteReferences } from "./favorite.types"
import { FAVORITE_CACHE_REFERENCES_KEY, FAVORITE_CACHE_TTL, FAVORITE_CACHE_VERSION } from "./favorite.constants"
import { getCacheData } from "@/shared/cache"


export function getCacheReferences (): FavoriteReferences {

   const data = getCacheData(FAVORITE_CACHE_REFERENCES_KEY, FAVORITE_CACHE_VERSION, FAVORITE_CACHE_TTL)

   return data ? data : []
}

