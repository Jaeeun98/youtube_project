import React from 'react';
import styles from './search.module.css'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${props => props.theme.textColor};
    color : ${props => props.theme.textColor}
`

const Span = styled.span`
  color:${props => props.theme.textColor}
`

const Icon = styled.div`
    color:${props => props.theme.textColor}
`

const Search = React.memo(({ onSearchList, onMoveHome }) => {

    const searchList = e => {
        e.preventDefault();
        onSearchList(e.target[0].value);

        e.target[0].value = '';
    }

    return (
        <>
            <span className={styles.logo} onClick={onMoveHome}>
                <img src="img/logo.png" alt="logoImg" />
                <Span className={styles.youtube}>YOUTUBE</Span>
            </span>
            <form className={styles.form} onSubmit={searchList}>
                <Input pe="search" placeholder="search.." />
                <button type="submit" className={styles.submitBtn}>
                    <Icon>
                        <FaSearch />
                    </Icon>
                </button>
            </form>
        </>
    );
})

export default Search;