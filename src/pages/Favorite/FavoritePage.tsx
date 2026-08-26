import { useFavorite } from "@/hooks/useFavorites"
import { MediaPage } from "../_base/MediaPage"
import { getFavorites } from "@/services/favorite.service"

export const FavoritePage = () => {

    useFavorite()
    const data = getFavorites()

    return (MediaPage({data}))
}