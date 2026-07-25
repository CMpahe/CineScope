import { MediaSection } from "@/domain/media/media.sections";

export const homeSection: MediaSection[] = [
    {
        id: 'trending_movies',
        title: 'Trending Movies',
        endpoint: '/trending/movie/week?language=en-US',
        type: 'movie'
    },
    {
        id: 'trending_tv',
        title: 'Trending TV',
        endpoint: '/trending/tv/day?language=en-US',
        type: 'tv'
    },
    {
        id: 'top_rated_movies',
        title: 'Top Rated Movies',
        endpoint: '/movie/top_rated?language=en-US&page=1',
        type: 'movie'
    },
    {
        id: 'top_rated_tv',
        title: 'Top Rated TV',
        endpoint: '/tv/top_rated?language=en-US&page=1',
        type: 'tv'
    },
    {
        id: 'popular_movies',
        title: 'Popular Movies',
        endpoint: '/movie/popular?language=en-US&page=1',
        type: 'movie'
    },
    {
        id: 'popular_tv',
        title: 'Popular TV',
        endpoint: '/tv/popular?language=en-US&page=1',
        type: 'tv'
    }
]