import { useMedia } from "@/hooks/useMedia"
import { useSearchParams } from "react-router-dom"
import { MediaPage } from "../_base/MediaPage"


export const SearchPage = () => {
  const [ searchParams ] = useSearchParams()
  const params = new URLSearchParams({
    query: searchParams.get('q') || '',
    page: "1",
    language: "es-ES",
    include_adult: "false",
  })

 const { data, loading, error } = useMedia({
    endpoint: `/search/multi?${params.toString()}`,
    cacheSetting: {
      key: null,
      enable: false,
      ttl: null
    }
  })

  if (loading) return <p>Cargando…</p>

  if (error) {
    console.error(error)
    return <p >Error: {error}</p> 
  }

  if (!data.length) return <p>No hay contenido disponible</p>

  return MediaPage({data})
}
