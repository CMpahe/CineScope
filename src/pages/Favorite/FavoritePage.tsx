import { useFavorite } from "@/hooks/useFavorites"
import { MediaPage } from "../_base/MediaPage"

export const FavoritePage = () => {
    // const data = useFavorite()

    const { references, favorites } = useFavorite()

    // return (MediaPage({data}))

    return (
         <div>
            <h1>Favorite Debug</h1>

            <p>
                References: {references.length}
            </p>

            <p>
                Favorites: {favorites.length}
            </p>

            <pre>
                {JSON.stringify(references, null, 2)}
            </pre>
        </div>
    )
}