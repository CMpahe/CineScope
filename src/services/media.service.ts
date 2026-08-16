import { isExpired, cache} from "@/shared/cache";
import { cacheExists, load } from "@/shared/local-storage";
import { save } from "@/domain/media/media.cache";
import { Media, MediaDTO, MediaResponseDTO} from "@/domain/media/media.types";
import { request } from "./api.service";
import { adaptDtoToMedia } from "@/domain/media/media.adapter";
import { resolveGenres } from "./genres.service";


export async function resolveMedia (
    endpoint: string,
    cacheSetting: {
        key: null | string,
        enable: boolean,
        ttl: null | number
    }
): Promise<Media[]>{

    if (cacheSetting.enable && cacheSetting.key && cacheSetting.ttl){

        if (cacheExists(cacheSetting.key) && !isExpired(cacheSetting.key, cacheSetting.ttl)) return load(endpoint)  
    }

    const response = await request<MediaResponseDTO>(endpoint)
    const genres = await resolveGenres()

    const data: Media[] = response.results
        .filter(item => item.media_type !== "person")
        .map((media: MediaDTO) => adaptDtoToMedia(media, genres))
 
    if (cacheSetting.enable && cacheSetting.key) {
        cache(data, cacheSetting.key)
        save(cacheSetting.key)
    }

    return data

}

