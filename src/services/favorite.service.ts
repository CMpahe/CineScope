import { getFavoriteReferences } from "@/domain/favorite/favorite.store";
import { findMediaList } from "@/domain/media/media.cache";
import { isMediaInReferences } from "@/domain/favorite/favorite.store";
import { Media } from "@/domain/media/media.types";

export const getFavorites = () => {
    const references = getFavoriteReferences()

    return findMediaList(references)
}

export const isFavorite = (media: Media) => {
    return isMediaInReferences(media, getFavoriteReferences()) !== -1
}