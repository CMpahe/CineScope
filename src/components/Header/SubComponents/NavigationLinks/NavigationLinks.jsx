// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './NavigationLinks.module.scss'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavLink } from 'react-router-dom'

export const NavigationLinks = () => {
  return (
    <ul>
      <li>
        <NavLink
          to='/' className={({ isActive }) => {
            return isActive
              ? `c_white header_link ${styles.links} ${styles.is_active}`
              : `c_white header_link ${styles.links}`
          }}
        >Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/genres' className={({ isActive }) => {
            return isActive
              ? `c_white header_link ${styles.is_active} ${styles.links}`
              : `c_white header_link ${styles.links}`
          }}
        >Genres
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/myList' className={({ isActive }) => {
            return isActive
              ? `c_white header_link ${styles.is_active} ${styles.links}`
              : `c_white header_link ${styles.links}`
          }}
        >My list
        </NavLink>
      </li>
    </ul>
  )
}
