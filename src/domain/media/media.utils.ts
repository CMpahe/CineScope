export const getMediaType = (endpoint: string) => {
    if (endpoint.includes('/movie/')) {
        return 'movie'
    }

    if (endpoint.includes('/tv/')) {
        return 'tv'
    }

    if (endpoint.includes('/multi')) {
        return 'multi'
    }

    throw new Error(`Unknown media type for endpoint: ${endpoint}`)
}