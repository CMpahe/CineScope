export const getMediaType = (endpoint: string) => {
    if (endpoint.includes('/movie/')) {
        return 'movie'
    }

    if (endpoint.includes('/tv/')) {
        return 'tv'
    }

    throw new Error(`Unknown media type for endpoint: ${endpoint}`)
}