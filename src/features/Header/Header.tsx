import styles from './Header.module.scss'
import { useManageDisplay } from './header.hooks/useManageDisplay'
// import { Hamburger } from '@/features/Header/Hamburger/Hamburger'
import { NavBar } from '@/features/Header/NavBar/NavBar'
import { useScrollTrigger } from '@/features/Header/header.hooks/useScrollTrigger'
import { Input } from '@/features/Header/Input/Input'
import { HeaderProvider } from './context/HeaderProvider'


export const Header = () => {

  const headerDisplay = useManageDisplay(true)

  useScrollTrigger({ headerDisplay })

  return (
    <header className={`${styles.header} bg-glass border-b-glass ${headerDisplay.state ? '' : styles.hidden}`}>

      <HeaderProvider>

        <NavBar />

        <Input />

      </HeaderProvider>
    </header>
  )
}
