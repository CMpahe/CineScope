import { Media } from "@/domain/media/media.types"
import { resolveMedia } from "@/services/media.service"
import { useEffect, useState } from "react"

type useMediaProps = {
    endpoint: string 
    cacheSetting: {
        key: null | string,
        enable: boolean,
        ttl: null | number
    }
}

type useMediaReturn = {
    data: Media[]
    loading: boolean
    error: string | null
}

export function useMedia ({endpoint, cacheSetting }: useMediaProps): useMediaReturn {
   
    const [data, setData] = useState<Media[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        
        async function load () {
            try {
                setLoading(true)

                resolveMedia(
                    endpoint, 
                    cacheSetting
                )
                .then((data: Media[]) => {
                    setData(data)
                })
                .catch((err: any) => {
                    setError(String(err))
                })

            } catch (err: any) {

                setError(String(err))

            } finally { setLoading(false) }
        }

        load()

    },[endpoint])

    return { data, loading, error }

}