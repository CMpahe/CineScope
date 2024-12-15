// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Header.module.scss'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useEffect, useRef, useState } from 'react'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavLink } from 'react-router-dom'

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

      if (currentScrollY > lastScrollY) {
        headerRef.current.classList.add(`${styles.hidden}`)
      } else {
        headerRef.current.classList.remove(`${styles.hidden}`)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.header_bar}>

        <div>
          <NavLink
            to='/' className={({ isActive }) => {
              return isActive
                ? `c-white header_link ${styles.links} ${styles.is_active}`
                : `c-white header_link ${styles.links}`
            }}
          >Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/genres' className={({ isActive }) => {
              return isActive
                ? `c-white header_link ${styles.is_active} ${styles.links}`
                : `c-white header_link ${styles.links}`
            }}
          >Genres
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/myList' className={({ isActive }) => {
              return isActive
                ? `c-white header_link ${styles.is_active} ${styles.links}`
                : `c-white header_link ${styles.links}`
            }}
          >My list
          </NavLink>
        </div>
      </div>

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
