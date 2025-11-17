// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './NavigationLinks.module.scss'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavLink } from 'react-router-dom'
//
//
//

export const NavigationLinks = ({ path, children, ...props }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={
          ({ isActive }) => `nav-item c_white header_link border-glass s-padding border-radius--15px ${styles.links} ${isActive ? styles.is_active : ''}`
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component just makes simple the work of using NavLinks, by being already set whit some styles and some other settings that save time and code.

// - path -> This prop holds the value of the path that the nav link will lead to.

// - children -> Is the name or text that will show the NavLink.
