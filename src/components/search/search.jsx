import React from 'react';
import styles from './search.module.css'

const Search = props => (
    <header>
        <span className={styles.logo}>
            <img src="img/logo.png" alt="logoImg" />
        </span>
        <form>
            <input type="search" placeholder="search.." />
            <button type="submit">
                <img src="img/search.png" alt="searchImg" />
            </button>
        </form>
    </header>
);

export default Search;