import styles from './Input.module.scss'
import { SmallBtn } from '@/features/SmallBtn/SmallBtn'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSearchInput } from './input.hooks/useSearchInput'
import { useExpandableInput } from './input.hooks/useExpandableInput'
import { useAutoFocus } from './input.hooks/useAutoFocus'


export const Input = () => {

  const { isOpen, open, close, inputRef, inputContainer} = useExpandableInput()

  const {value, handleChange, executeSearch } = useSearchInput()

  const hasQuery = value.trim().length > 0

  useAutoFocus({isOpen, inputRef})

  useClickOutside({ref: inputContainer, funct: () => close()})

  const handleButtonClick = () => {
    if (!isOpen) open()
    
    if (isOpen && hasQuery) executeSearch()
    
    if (isOpen) return close()
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!isOpen) return;

    executeSearch();
}

  return (
    <div ref={inputContainer} className={`${styles.search_container} ${isOpen ? styles.is_active : ''}`}>

      <SmallBtn 
        className={`${!isOpen ? 'l-padding--0 r-padding--0' : ''}2 ${styles.search_btn}`} 
        handleClick={handleButtonClick} 
        type={2}
        id='search_btn'
      />

      <div className={styles.input_container}>
        <form
          onSubmit={handleSubmit}
        >
          <input
          ref={inputRef}
            className={styles.search_input}
            id='search_input'
            type='text'
            name='search'
            placeholder='Search...'
            value={value}
            onChange={handleChange}
          />

          <SmallBtn id='close_btn' type={1} />

        </form>
      </div>
    </div>
  )
}

