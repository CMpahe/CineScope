// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './TextTags.module.scss'

export const SectionWrapper = ({ children }) => {
  return (
    <section
      className={`${styles.category}`}
    >
      {children}
    </section>
  )
}
