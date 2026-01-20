import { SectionWrapper } from '../../components/common/SectionWrapper'
import { MediaCard } from '../../features/media/components/MediaCard'
import styles from './Pages.module.scss'
import { Billboard } from '../../components/Billboard/Billboard.jsx'

export const MediaPage = ({ title, useData }) => {
  const { data, loading, error } = useData()

  if (loading) return <p className={styles.state}>Cargando…</p>

  if (error) return <p className={styles.state}>Error: {error}</p>

  if (!data.length) return <p className={styles.state}>No hay contenido disponible</p>

  return (
    <SectionWrapper variant='coreSection'>
      {data && <Billboard data={data} />}
      <div className={styles.mediaGrid}>
        {data?.map((media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </SectionWrapper>
  )
}
