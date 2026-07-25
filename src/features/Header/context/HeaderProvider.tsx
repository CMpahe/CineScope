import { useState } from "react"
import { HeaderContext } from "./header.context"


export function HeaderProvider ({ children }: {children: React.ReactNode}) {
    const [isSearchActive, setIsSearchActive] = useState(false)


    const value = { 
        isSearchActive,
        openSearch: () => setIsSearchActive(true),
        closeSearch: () => setIsSearchActive(false),
        toggleSearch: () => setIsSearchActive(v => !v)
    }

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}