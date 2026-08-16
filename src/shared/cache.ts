import { hash } from "@/utils/hash"
import { load } from "./local-storage"

export function cache (data: any, cacheKey: string) {

    localStorage.setItem(
        cacheKey,
        JSON.stringify({ 
            data, 
            saveAt: Date.now(), 
            hash: hash(data) })
    )
}

export function isExpired (cacheKey: string, ttl: number): boolean {
    const data = load(cacheKey)

    const now = Date.now()

    return now - data.saveAt > ttl
}
