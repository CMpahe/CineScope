import styles from './NavigationLinks.module.scss'
import { NavLink } from 'react-router-dom'


type NavigationLinksProp = {
  path: string 
  children: any
  className: string
}

export const NavigationLinks = ({ path, children }: NavigationLinksProp) => {
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