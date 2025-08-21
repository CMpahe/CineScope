// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './SmallBtn.module.scss'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { searchIcon, closeIcon } from '../../icons'
//
//
//

export const SmallBtn = ({ handleClick, type, search }) => {
  const icon = type === 1 ? closeIcon : searchIcon // Decides the icon placed within the button

  const style = type === 1 ? styles.closeBtn : styles.searchBtn

  return (
    <button
      className={`${styles.smallBtn} ${style} ${search ? styles.show : ''}`}
      onClick={() => handleClick()}
    >
      {icon}
    </button>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component is not reusable, it is intended to make the parent component easier to read. Although, this button component can be used in two context: with the Search icon and with the Close Icon. It can receive the function it execute when clicking it, making it a bit reusable though.

// - type = 1 -> Close Icon will be set to the button.

// - type = 2 -> Search Icon will be set to the button.

// - style -> Also use the type prop to set the style according to the option.

// - search -> It is a boolean value that tells the component whether the input field is filled with something or not. The component according to this value shows itsel.

// - handleClick -> This is the function passed through props to the component and the one to be executed when clicking the button.
