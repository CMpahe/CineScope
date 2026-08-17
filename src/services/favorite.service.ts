import { getFavoriteReferences } from "@/domain/favorite/favorite.store";
import { findMediaList } from "@/domain/media/media.cache";

export const getFavorites = () => {
    const references = getFavoriteReferences()

    return findMediaList(references)
}

