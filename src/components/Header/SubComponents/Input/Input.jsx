// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Input/Input.module.scss'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { focusInput } from '../../Header.logic'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
// import { useState } from 'react'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { SmallBtn } from '../../../Buttons/SmallBtn/SmallBtn'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//
//
//

export const Input = ({ inputRef, searchActive, searchQuery, setSearchQuery }) => {
  const navegate = useNavigate()
  const location = useLocation()

  useEffect(() => { // Close the input field when clicking outside
    function handleClickOutside (ev) {
      if (ev.target.id === 'closeIcon') { setSearchQuery(''); searchActive[1](false) }
      if (inputRef.current && !inputRef.current.contains(ev.target)) {
        searchActive[1](false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
  })

  const handleSearchClick = () => { // Handle click on search Icon
    searchActive[1](prev => !prev)
    if (!searchActive.state) focusInput({ inputRef })
    else inputRef.current.blur()
  }

  const handleChange = (ev) => {
    const value = ev.target.value
    setSearchQuery(value)

    // if user writes anything, navegate to Home page
    if (value.trim().length > 0 && location.pathname !== '/') navegate('/')
  }

  return (
    <div className={`${styles.search_container} ${searchActive[0] ? styles.is_active : ''}`}>

      <SmallBtn className={`${!searchActive[0] ? 'l-padding--0 r-padding--0' : ''}2 ${styles.search_btn}`} handleClick={handleSearchClick} type={2} />

      <div className={styles.input_container}>
        <form
          onSubmit={ev => ev.preventDefault()}
        >
          <input
            className={styles.search_input}
            id='search-input'
            ref={inputRef}
            type='text'
            name='search'
            placeholder='Search...'
            value={searchQuery}
            onChange={ev => { ev.preventDefault(); handleChange(ev) }}
          />

          <SmallBtn type={1} searchQuery={searchQuery} />

        </form>
      </div>
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// - Search -> Is the state that holds the input value, and which can be used to call the API.

// - SetSearch -> Is the method used to update the state hook of the inout value.

// - InputRef -> Is the ref bonded to the imput element in the DOM.

// - isActiveInput -> Is a state that manage whether the input field is focused or not.
