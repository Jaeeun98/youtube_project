import React from 'react';
import styles from './search.module.css'

const Search = props => (
    <>
        <span className={styles.logo}>
            <img src="img/logo.png" alt="logoImg" />
        </span>
        <form className={styles.form}>
            <input type="search" placeholder="search.." />
            <button type="submit" className={styles.submitBtn}>
                <img src="img/search.png" alt="searchImg" />
            </button>
        </form>
    </>
);

export default Search;