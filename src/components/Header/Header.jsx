// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Header.module.scss'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useRef, useState } from 'react'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavLink } from 'react-router-dom'

// echarle un vistazo luego para descartar errores y mejorar el código
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

  return (
    <header className={styles.header}>
      <div className={styles.header_bar}>

        <div>
          <NavLink
            to='/' className={({ isActive }) => {
              return isActive
                ? `title1 ${styles.links} ${styles.is_active}`
                : `title1 ${styles.links}`
            }}
          >Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/genres' className={({ isActive }) => {
              return isActive
                ? `${styles.is_active} ${styles.links} title1`
                : `${styles.links} title1`
            }}
          >Genres
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
            if (!inputRef.current.parentNode.parentNode.parentNode.className.includes('is_active')) {
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
              placeholder='Search movies'
              onChange={ev => {
                ev.preventDefault()
                setSearch(ev.target.value)
              }}
            />
          </form>

          <div>
            {search && <i className={`${styles.close_icon} bi-x`} onClick={() => { clearInputValue() }} />}
          </div>

        </div>
      </div>
    </header>
  )
}
