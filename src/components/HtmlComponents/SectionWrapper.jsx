// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './TextTags.module.scss'

export const SectionWrapper = ({ children, coreSection = false, marginDown = false, translateUp = false }) => {
  return (
    <section
      className={`
        ${marginDown ? styles.marginDown : ''} 
        ${translateUp ? styles.translateUp : ''}
        ${coreSection ? styles.coreSection : ''}
      `}
    >
      {children}
    </section>
  )
}
