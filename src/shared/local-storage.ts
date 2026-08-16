export function load(cacheKey: string) {
    const cacheData = window.localStorage.getItem(cacheKey)

    return cacheData ? JSON.parse(cacheData).data : null
}

export function invalidate (cacheKey: string) { localStorage.removeItem(cacheKey) }  


export function cacheExists (cacheKey: string): boolean {
    return window.localStorage.getItem(cacheKey) ? true : false
}