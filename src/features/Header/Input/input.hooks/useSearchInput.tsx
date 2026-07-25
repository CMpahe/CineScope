import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useSearchInput = () => {

    const [value, setValue] = useState('')
    const navigate = useNavigate()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value
        setValue(v)
    }

    const executeSearch = () => {
        if (!value.trim()) return

        const params = new URLSearchParams({
        q: value
        })

        navigate({
        pathname: '/search',
        search: `?${params.toString()}`
        })
  }

  return { value, handleChange, executeSearch }
}