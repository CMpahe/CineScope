import {  cache, getCacheData} from "@/shared/cache";
import { saveIndex } from "@/domain/media/media.cache";
import { Media, MediaDTO, MediaResponseDTO} from "@/domain/media/media.types";
import { request } from "./api.service";
import { adaptDtoToMedia } from "@/domain/media/media.adapter";
import { resolveGenres } from "./genres.service";
import { getMediaType } from "@/domain/media/media.utils";
import { MEDIA_CACHE_VERSION } from "@/domain/media/media.constants";


export async function resolveMedia (
    endpoint: string,
    cacheSetting: {
        key: string | null,
        enable: boolean,
        ttl: null | number
    }
): Promise<Media[]>{

    let result = null

    if (cacheSetting.enable && cacheSetting.key) {
        result = getCacheData(
            cacheSetting.key,
            MEDIA_CACHE_VERSION,
            cacheSetting.ttl
        )
    }

    if (result) {  
        return result
    }

    const response = await request<MediaResponseDTO>(endpoint)

    const genres = await resolveGenres()

    const type = getMediaType(endpoint)

    const data: Media[] = response.results
        .filter(item => item.media_type !== "person")
        .map((media: MediaDTO) =>
            adaptDtoToMedia(media, genres, type)
        )

    if (cacheSetting.enable && cacheSetting.key) {
        cache(data, MEDIA_CACHE_VERSION, cacheSetting.key)
        saveIndex(cacheSetting.key)
    }

    return data

  

}

