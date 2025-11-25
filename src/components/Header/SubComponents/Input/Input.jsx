// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Input/Input.module.scss'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { clearInput, focusInput } from '../../Header.logic'
// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
// import { useState } from 'react'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { SmallBtn } from '../../../Buttons/SmallBtn/SmallBtn'
//
//
//

export const Input = ({ inputRef, searchActive, searchQuery, setSearchQuery }) => {
  // const [isActiveInput, setIsActiveInput] = useState(false) // Visibility input state

  // const handleSearchClick = () => { // // Open the input field
  //   setIsActiveInput(prev => !prev)
  //   if (!isActiveInput) focusInput({ inputRef })
  //   else inputRef.current.blur()
  // }

  const handleSearchClick = () => {
    searchActive[1](prev => !prev)
    if (!searchActive.state) focusInput({ inputRef })
    else inputRef.current.blur()
  }

  const handleCloseClick = () => clearInput({ inputRef, setSearchQuery, searchActive }) // Clean and close the input field

  return (
    <div className={`${styles.search_container} ${searchActive[0] ? styles.is_active : ''}`}>

      <SmallBtn className='l-padding--0' handleClick={handleSearchClick} type={2} />

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
            onChange={ev => {
              ev.preventDefault()
              setSearchQuery(ev.target.value)
            }}
          />

          <SmallBtn handleClick={handleCloseClick} type={1} searchQuery={searchQuery} />

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
