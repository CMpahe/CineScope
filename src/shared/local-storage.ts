export function load(cacheKey: string) {
    return window.localStorage.getItem(cacheKey)
}

export function save(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function remove(key: string) {
  window.localStorage.removeItem(key)
}  


