// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Header.module.scss'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useEffect, useRef, useState } from 'react'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavigationLinks } from './SubComponents/NavigationLinks/NavigationLinks'
import { Hamburger } from './SubComponents/Hamburger'

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
          <svg width='59' height='59' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.480696 1.1618L0.786388 0.786388C1.23074 0.342999 1.81657 0.0695569 2.44181 0.0136968C3.06705 -0.0421632 3.69208 0.1231 4.20799 0.480696L4.58341 0.786388L29.5 25.7083L54.4166 0.786388C54.9201 0.282872 55.603 -1.67772e-08 56.3151 0C57.0272 1.67772e-08 57.7101 0.282872 58.2136 0.786388C58.7171 1.2899 59 1.97282 59 2.6849C59 3.39698 58.7171 4.07989 58.2136 4.58341L33.2917 29.5L58.2136 54.4166C58.657 54.861 58.9304 55.4468 58.9863 56.072C59.0422 56.6973 58.8769 57.3223 58.5193 57.8382L58.2136 58.2136C57.7693 58.657 57.1834 58.9304 56.5582 58.9863C55.9329 59.0422 55.3079 58.8769 54.792 58.5193L54.4166 58.2136L29.5 33.2917L4.58341 58.2136C4.07989 58.7171 3.39698 59 2.6849 59C1.97282 59 1.2899 58.7171 0.786388 58.2136C0.282872 57.7101 1.67772e-08 57.0272 0 56.3151C-1.67772e-08 55.603 0.282872 54.9201 0.786388 54.4166L25.7083 29.5L0.786388 4.58341C0.342999 4.13905 0.0695569 3.55322 0.0136968 2.92798C-0.0421632 2.30274 0.1231 1.67772 0.480696 1.1618Z' fill='#F2F2F2' /></svg>
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
