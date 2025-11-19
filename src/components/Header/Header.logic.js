export const clearInput = ({ inputRef, setSearch, searchActive }) => { // Clear input-field when closed
  inputRef.current.value = ''
  setSearch(false)
  // setIsActiveInput(false)
  searchActive[1](false)
}

// - ClearInput -> Using the input reference this function clear the input field by setting the state an empty string.

export const focusInput = ({ inputRef }) => { // Auto focus input field when displayed
  setTimeout(() => {
    inputRef.current.focus()
  }, 300)
}

// - focusInput -> This function focus the input passed through it as an argument with the delay spacified within the function.
