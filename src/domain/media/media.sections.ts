export type MediaSection = {
    id: string
    title: string
    endpoint: string
    type: 'movie' | 'tv'
}

export const movieSections: MediaSection[] = [
    {
        id: 'now_playing',
        title: 'Now Playing',
        endpoint: '/movie/now_playing?language=en-US&page=1',
        type: 'movie'
    },
    {
        id: 'popular',
        title: 'Popular',
        endpoint: '/movie/popular?language=en-US&page=1',
        type: 'movie'
    },
    {
        id: 'top_rated',
        title: 'Top Rated',
        endpoint: '/movie/top_rated?language=en-US&page=1',
        type: 'movie'
    },
    {
        id: 'upcoming',
        title: 'Upcoming',
        endpoint: '/movie/upcoming?language=en-US&page=1',
        type: 'movie'
    }
]

export const tvSections: MediaSection[] = [
    {
        id: 'airing_today',
        title: 'Airing Today',
        endpoint: '/tv/airing_today?language=en-US&page=1',
        type: 'tv'
    },
    {
        id: 'on_the_air',
        title: 'On The Air',
        endpoint: '/tv/on_the_air?language=en-US&page=1',
        type: 'tv'    
    },
    {
        id: 'popular',
        title: 'Popular',   
        endpoint: '/tv/popular?language=en-US&page=1',
        type: 'tv'
    },
    {
        id: 'top_rated',
        title: 'Top Rated',
        endpoint: '/tv/top_rated?language=en-US&page=1',
        type: 'tv'
    }
]
