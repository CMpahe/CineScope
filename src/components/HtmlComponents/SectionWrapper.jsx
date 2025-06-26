// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './TextTags.module.scss'

export const SectionWrapper = ({ children, marginDown = false, translateUp = false }) => {
  return (
    <section
      className={`${marginDown ? styles.marginDown : ''} ${translateUp ? styles.translateUp : ''}`}
    >
      {children}
    </section>
  )
}
