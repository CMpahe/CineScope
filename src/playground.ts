import { findMediaList } from "./domain/media/media.cache"
import { update } from "./domain/favorite/favorite.cache"

const references = [
    {
        id: 969681,
        type: 'movie'
    },
    {
        id: 94997,
        type: 'tv'
    }
]

const mmedia = {
    backdrop: "https://image.tmdb.org/t/p/w1280/bzKhoFoHPmIc9UbjUlm6hIZBGna.jpg",
    description: "FBI agent Alice Black is on the hunt for a mysterious and calculating female serial killer. Both walk their own paths toward justice, and as their lives start to intertwine, the line between right and wrong begins to blur.",
    genres: ["Drama", "Crime"],
    id: 287238,
    poster: "https://image.tmdb.org/t/p/w500/cTJkD2QnyBv67ttIadEic7jT263.jpg",
    title: "Furious",
    type: "tv",
    year: "2026"
}
