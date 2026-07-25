import styles from './SmallBtn.module.scss'
import { searchIcon, closeIcon } from '@/assets/icons/icons'


type SmallBtnProp = {
  handleClick?: () => void
  type: number
  searchQuery?: string
  className?: string
  id: string
}

export const SmallBtn = ({ handleClick, type, searchQuery, className = '', id }: SmallBtnProp) => {
  const icon = type === 1 ? closeIcon : searchIcon

  const style = type === 1 ? styles.closeBtn : styles.searchBtn

  return (
    handleClick
      ? <button 
        id={id} 
        className={`${styles.smallBtn} 
        ${className} 
        ${style} 
        ${searchQuery ? styles.show : ''}`} 
        onClick={() => handleClick()}> 
          {icon} 
        </button>
        
      : <button 
      id={id} 
      className={`${styles.smallBtn} 
      ${className} ${style} 
      ${searchQuery ? styles.show : ''}`}>
        {icon}
      </button>
  )
}

