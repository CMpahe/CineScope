// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Header.module.scss'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useRef, useState } from 'react'
// ---- ---- ---- ---- CUSTOM HOOKS ---- ---- ---- ----
import { useManageDisplay } from './CustomHooks/useManageDisplay'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { Hamburger } from './SubComponents/Hamburger/Hamburger'
import { NavBar } from './SubComponents/NavBar/NavBar'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { useScrollTrigger } from './CustomHooks/useScrollTrigger'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { Input } from './SubComponents/Input/Input'
//
//
//

export const Header = ({ searchQuery, setSearchQuery }) => {
  const showSideBar = useManageDisplay(false)
  const showHeader = useManageDisplay(true)
  const searchActive = useState(false) // probando alternativa para manejo de botones e input.
  // console.log(searchActive)

  useScrollTrigger({ showHeader })

  const inputRef = useRef(null)

  return (
    <header className={`${styles.header} bg-glass border-b-glass ${showHeader.state ? '' : styles.hidden} ${searchActive[0] ? styles.searchActive : ''}`}>

      <Hamburger display={showSideBar.state} className={styles.burgerBtn} ariaControls='mobile_menu' onClickFunction={() => showSideBar.toggleState()} />

      <NavBar showSideBar={showSideBar} />

      <NavBar mobileMode showSideBar={showSideBar} />

      <Input inputRef={inputRef} searchActive={searchActive} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - NavBar: This component has two navBar components, each one has slight differents settings and so each one can fit into each context. One has settings for mobile mode and the other one for desktop mode.

// - showSideBar -> Is a hook intended to manage the visible state of the side bar on mobile screens. It can update the state, set a custom state and toogle the state.

// - showHeader -> It is a hook intended to manage the visible state of the header, when scrolling down the header hides itself and when scrolling up again it show itself back again. This one also as the previous one has methods to update the state and set a custom one as well.

// - useScrollTrigger -> Is the function that reads the viewport position and update the showHeader State so the header can hide itself depending on the scrolling direction.
