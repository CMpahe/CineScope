import styles from '../Header.module.scss'
import { NavigationLinks } from '@/features/Header/NavBar/NavigationLinks'
import { useHeaderUI } from '../header.hooks/useHeaderUI'


export const NavBar = () => {

  const { isSearchActive } = useHeaderUI()

  const navBarStyles = `${styles.desktop_navbar} ${isSearchActive ? styles.searchActive : ''}`

  return (

    <nav className={navBarStyles}>

      <ul>
        <NavigationLinks className='border-glass border-radius--15px s-padding' path='/'>Home</NavigationLinks>
        <NavigationLinks className='border-glass border-radius--15px s-padding' path='/movies'>Movies</NavigationLinks>
        <NavigationLinks className='border-glass border-radius--15px s-padding' path='/tv'>Tv</NavigationLinks>
        <NavigationLinks className='border-glass border-radius--15px s-padding' path='/myList'>My list</NavigationLinks>

      </ul>

    </nav>
  )
}