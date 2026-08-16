import { load } from "@/shared/local-storage"
import { FavoriteReferences } from "./favorite.types"
import { MEDIA_CACHE_REFERENCES } from "./favorite.constants"


export function getCacheReferences (): FavoriteReferences {
    return load(MEDIA_CACHE_REFERENCES) ?? []
}

