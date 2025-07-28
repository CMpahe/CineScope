// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Header.module.scss'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useEffect, useRef, useState } from 'react'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavigationLinks } from './SubComponents/NavigationLinks/NavigationLinks'
import { Hamburger } from './SubComponents/Hamburger'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { burgerMenu } from '../icons'

export const Header = ({ search, setSearch }) => {
  const [isActiveInput, setIsActiveInput] = useState(false)

  const inputRef = useRef(null)

  const clearInputValue = () => { // Clear input-field when closed
    inputRef.current.value = ''
    setSearch(false)
    setIsActiveInput(false)
  }

  const focusInput = () => { // Auto focus input field when displayed
    setTimeout(() => {
      inputRef.current.focus()
    }, 300)
  }

  const headerRef = useRef(null)
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const width = window.innerWidth

      if (currentScrollY > (lastScrollY) && isOpen === false) {
        headerRef.current.classList.add(`${styles.hidden}`)
      } else {
        headerRef.current.classList.remove(`${styles.hidden}`)
      }

      if (Math.floor(width) > 650 && isOpen === true) setIsOpen(false)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header ref={headerRef} className={styles.header}>

      <nav className={styles.desktop_navbar}>
        <NavigationLinks />
      </nav>

      <Hamburger isOpen={isOpen} ariaControls='mobile_menu' onClickFunction={toggleMenu} />

      <nav id='mobile_menu' className={`${styles.mobile_menu} ${isOpen ? styles.isOpen : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={toggleMenu}
        >
          {burgerMenu}
        </button>
        <NavigationLinks />
      </nav>

      <div className={isActiveInput
        ? `${styles.search_container} ${styles.is_active}`
        : styles.search_container}
      >

        <button
          className={styles.search_btn}
          onClick={() => {
            setIsActiveInput(!isActiveInput)
            if (!inputRef.current.parentNode.parentNode.parentNode.className.includes(`${styles.is_active}`)) {
              focusInput()
            } else { inputRef.current.blur() }
          }}
        >
          <i className={`${styles.search_icon} bi-search`} />
        </button>

        <div className={styles.input_container}>
          <form
            onSubmit={(ev) => {
              ev.preventDefault()
            }}
          >
            <input
              className={styles.search_input}
              id='search-input'
              ref={inputRef}
              type='text'
              name='search'
              placeholder='Search...'
              onChange={ev => {
                ev.preventDefault()
                setSearch(ev.target.value)
              }}
            />

            <button
              className={search ? `${styles.close_icon} ${styles.show}` : styles.close_icon}
              type='button'
              onClick={() => { clearInputValue() }}
            >
              <i className='bi-x' />
            </button>

          </form>
        </div>
      </div>
    </header>
  )
}
