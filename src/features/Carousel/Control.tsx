import styles from './styles/Carousel.module.scss'


export const Control = ({ direction, move }: {direction: string, move: () => void}) => {
  
  return (
    <div
      className={`${styles.control_container} ${styles[direction]}`}
      onClick={move}
    >
      <i className={`${styles.control} bi-chevron-compact-${direction}`} />
    </div>
  )
}