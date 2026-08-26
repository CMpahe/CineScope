import { cache, getCacheData } from "@/shared/cache";
import { Media } from "./media.types";
import { FavoriteReference, FavoriteReferences } from "../favorite/favorite.types";
import { MEDIA_CACHE_INDEX_KEY, INDEX_CACHE_VERSION } from "./media.constants";


function getIndexes () {
    return getCacheData(MEDIA_CACHE_INDEX_KEY, INDEX_CACHE_VERSION, null) ?? []
}

function saveIndexes (index: Array<string>) {
    cache(index, INDEX_CACHE_VERSION, MEDIA_CACHE_INDEX_KEY)
}

export function saveIndex (key: string) {
    const indexes: string[] = getIndexes()

    if (indexes) {

        const newIndexes = new Set(indexes)
        newIndexes.add(key)

        const array: string[] = [...newIndexes]

        saveIndexes(array)
    } else {
        saveIndexes([key])
    }
}

function findMedia (reference: FavoriteReference): Media | undefined {
    const indexes = getIndexes()

    for (const i of indexes) {
        const mediaList: Media[] = getCacheData(i, INDEX_CACHE_VERSION, null) ?? []
        for (const media of mediaList) {
                if ( media.id === reference.id && media.type === reference.type) return media
            }
    }

}

export function findMediaList (references: FavoriteReferences) {
    const data: Media[] = []

    for (const reference of references) {
        const result = findMedia(reference)
        if(result !== undefined) data.push(result)
    }

    return data
}