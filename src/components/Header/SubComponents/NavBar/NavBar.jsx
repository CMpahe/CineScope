// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../../Header.module.scss'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavigationLinks } from './NavigationLinks'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { burgerMenu } from '../../../../assets/icons/icons'
//
//
//

export const NavBar = ({ showSideBar, mobileMode = false }) => {
  const navBarStyles = mobileMode === true ? styles.mobile_menu : styles.desktop_navbar
  return (
    <nav
      className={`${navBarStyles} ${showSideBar.state ? styles.isOpen : ''}`}
    >
      {mobileMode &&
        <button
          className={styles.closeBtn}
          onClick={() => showSideBar.toggleState()}
        >
          {burgerMenu}
        </button>}

      <ul>
        <NavigationLinks path='/'>Home</NavigationLinks>
        <NavigationLinks path='/genres'>Genres</NavigationLinks>
        <NavigationLinks path='/myList'>My list</NavigationLinks>
      </ul>
    </nav>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component works for both mobile and desktop mode, it adapts itself depending on the props passed to it.

// - showSideBar -> Is a state that manage whether the sideBar is visible or not. It contains a boolean value.

// - mobileMode -> Is also a boolean value that indicates when the component should be visible.
