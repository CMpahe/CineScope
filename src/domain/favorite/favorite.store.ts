import { createObservable } from "@/shared/observable";
import { getCacheReferences } from "./favorite.cache";
import { Media } from "../media/media.types";
import { FavoriteReference, FavoriteReferences } from "./favorite.types";
import { cache } from "@/shared/cache";
import { FAVORITE_CACHE_VERSION, FAVORITE_CACHE_REFERENCES_KEY } from "./favorite.constants";

let favoriteReferences = getCacheReferences()

export function getFavoriteReferences() {
    return favoriteReferences
}

const favoriteObservable = createObservable()

export const subscribe = favoriteObservable.subscribe

export function getSnapshot () {
    return favoriteReferences
}
function notifyFavoritesChanged () { 
    favoriteObservable.notify() 
}

function isSameReference(
    media: Media,
    reference: FavoriteReference
) {
    return (
        media.id === reference.id &&
        media.type === reference.type
    );
}

export function isMediaInReferences (media: Media, references: FavoriteReferences): number {
    for (let i = 0; i < references.length; i++){
            if (isSameReference(media, references[i])) {
                return i
            }
        }
    return -1
}



export function update(media: Media) {

     const isMediaIn = isMediaInReferences(media, favoriteReferences)

     if (isMediaIn !== -1 ){

        favoriteReferences =
            favoriteReferences.filter(
                ref => !isSameReference(media, ref)
            )
        cache(favoriteReferences, FAVORITE_CACHE_VERSION, FAVORITE_CACHE_REFERENCES_KEY)
        notifyFavoritesChanged()
        return

     } else {

        favoriteReferences = [
            ...favoriteReferences,
             {
                id: media.id, 
                type: media.type
            }
        ]
        cache(favoriteReferences, FAVORITE_CACHE_VERSION, FAVORITE_CACHE_REFERENCES_KEY)
        notifyFavoritesChanged()
        return

     }

}
