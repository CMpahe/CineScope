import { createContext} from "react"

type HeaderUIContext = {
    isSearchActive: boolean
    openSearch: () => void
    closeSearch: () => void
    toggleSearch: () => void
}

export const HeaderContext = createContext<HeaderUIContext | null>(null)
