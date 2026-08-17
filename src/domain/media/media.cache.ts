import { cache } from "@/shared/cache";
import { Media } from "./media.types";
import { load } from "@/shared/local-storage";
import { FavoriteReference, FavoriteReferences } from "../favorite/favorite.types";

const MEDIA_CACHE_INDEX_KEY = "media-cache-index"

function getIndex () {
    return load(MEDIA_CACHE_INDEX_KEY) ?? []
}

function saveIndex (index: Array<string>) {
    cache(index, MEDIA_CACHE_INDEX_KEY)
}

export function save (key: string) {
    const index = getIndex()

    if (index) {

        const keys: string[] = load(MEDIA_CACHE_INDEX_KEY)
        const newIndex = new Set(keys)
        newIndex.add(key)

        const array: string[] = [...newIndex]

        saveIndex(array)
    } else {
        saveIndex([key])
    }
}

function findMedia (reference: FavoriteReference): Media | undefined {
    const index = getIndex()

    for (const i of index) {
        const mediaList: Media[] = load(i)
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