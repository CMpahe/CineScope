import { useFavorite } from "@/hooks/useFavorites"
import { MediaPage } from "../_base/MediaPage"

export const FavoritePage = () => {
    const data = useFavorite()

    return (MediaPage({data}))
}