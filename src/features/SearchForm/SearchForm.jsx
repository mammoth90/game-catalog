import styles from './SearchForm.module.scss'
import cn from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const [isFocus, setFocus] = useState(false)
  const [inputValue, setValue] = useState('')
  const navigate = useNavigate()

  const hadleSubmit = (e) => {
    e.preventDefault()
    const value = inputValue.trim()
    if (value === '') return
    const searchParam = value
    navigate(`/games?search=${searchParam}`)
    setValue('')
  }
  const textInput = cn({
    [styles.base]: true,
    [styles.textInput]: true,
    [styles.active]: isFocus,
  })
  const buttonInput = cn({
    [styles.base]: true,
    [styles.buttonInput]: true,
  })
  return (
      <form onSubmit={hadleSubmit} className={styles.container}>
        <input
          type="text"
          className={textInput}
          value={inputValue}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className={buttonInput}>
          {' '}
          Search
        </button>
      </form>
  )
}

export default SearchForm
