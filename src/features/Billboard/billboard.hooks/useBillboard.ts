import { useMedia } from "@/hooks/useMedia";
import { shuffle } from "../Billboard.logic";
import { useMemo } from "react";
import { mediaEndpoints } from "@/constants/endpoints";

export function useBillboard (type: 'movie' | 'tv' | 'mixed' ) {
    if (type === 'mixed') {

        const tv = useMedia({
            endpoint: mediaEndpoints.trending.tv,
            cacheSetting: {
                key: mediaEndpoints.trending.tv,
                enable: true,
                ttl: 5 * 60 * 1000
            }
        })
         
        const movies = useMedia({
            endpoint: mediaEndpoints.trending.movies,
            cacheSetting: {
                key: mediaEndpoints.trending.movies,
                enable: true,
                ttl: 5 * 60 * 1000
            }
        })

        const data = useMemo(() => {
            if (!movies.data.length && !tv.data.length) return []

            return shuffle([
                ...movies.data.slice(0, 10),
                ...tv.data.slice(0, 10),
            ])
        }, [movies.data, tv.data])

        return {
            data, 
            loading: movies.loading || tv.loading,
            error: movies.error || tv.error
        }

    } else {
        return useMedia(
            type === 'movie' ?
            {
                endpoint: mediaEndpoints.trending.movies,
                cacheSetting: { 
                    key: mediaEndpoints.trending.movies,
                    enable: true,
                    ttl: 5 * 60 * 1000
                }
            } :
            {
                endpoint: mediaEndpoints.trending.tv,
                cacheSetting: { 
                    key: mediaEndpoints.trending.tv,
                    enable: true,
                    ttl: 5 * 60 * 1000
                }
            }
    )
    }

}
