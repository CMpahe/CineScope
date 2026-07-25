import { hash } from "@/utils/hash";

export function cache (data: any, cacheKey: string) {

    localStorage.setItem(
        cacheKey,
        JSON.stringify({ 
            data, 
            saveAt: Date.now(), 
            hash: hash(data) })
    )
}

export function load(cacheKey: string) {
    const cacheData = window.localStorage.getItem(cacheKey)

    return cacheData ? JSON.parse(cacheData).data : null
}

export function invalidate (cacheKey: string) { localStorage.removeItem(cacheKey) }  

export function cacheExists (cacheKey: string): boolean {
    return window.localStorage.getItem(cacheKey) ? true : false
}

export function isExpired (cacheKey: string, ttl: number): boolean {
    const data = load(cacheKey)

    const now = Date.now()

    return now - data.saveAt > ttl
}