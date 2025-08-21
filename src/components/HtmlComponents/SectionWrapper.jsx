// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from './TextTags.module.scss'
//
//
//

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

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// SectionWrapper

// This component returns a html section tag e.g.: "<section>Something here</section>"
// It allows to add some settings to the section tag through the component prop

// This settings are:
// - marginDown = true => Add a margin bottom to the section
// - translateUp = true => Translate the section upwards on axis Y
// - coreSection = true => Apply a 100% and ensure the section cover all the space available within its parent
