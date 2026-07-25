import { useContext } from "react"
import { HeaderContext } from "../context/header.context"

export function useHeaderUI () {
    const ctx = useContext(HeaderContext)

    if (!ctx) {
        throw new Error(
            'useHeaderUI must be used inside a <HeaderProvider>'
        )
    }

    return ctx
}