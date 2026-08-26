import { hash } from "@/utils/hash"
import { load, remove, save } from "./local-storage"

export function cache (data: any, version: number, cacheKey: string) {

    save(
        cacheKey,
        JSON.stringify({ 
            version: version,
            data, 
            saveAt: Date.now(), 
            hash: hash(data) })
    )
}

function loadCache (cacheKey: string) {
    const result = load(cacheKey)
    return result ? JSON.parse(result) : null
}

export function cacheExists (cacheKey: string): boolean {
    return load(cacheKey) ? true : false
}

export function getCacheData (cacheKey: string, version: number, ttl: number | null) {

    const result = loadCache(cacheKey)

    if (!result) return null

    if (result.version !== version) {
        remove(cacheKey)
        return null
    }

    if (ttl !== null) {
        const now = Date.now()
        if (now - result.saveAt > ttl) {
            remove(cacheKey)
            return null
        }
    }
    
    return result.data
}