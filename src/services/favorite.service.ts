import { getFavoriteReferences } from "@/domain/favorite/favorite.store";
import { findMediaList } from "@/domain/media/media.cache";
import { Media } from "@/domain/media/media.types";

export const getFavorites = () => {
    const references = getFavoriteReferences()

    return findMediaList(references)
}

