import React from 'react'
import styles from './SearchBar.module.css'
const SearchBar = ({...rest}) => {
  return (
    <div className={styles.coin_search} >
      <input className={styles.coin_input} {...rest} />
    </div>
  )
}

export default SearchBar
