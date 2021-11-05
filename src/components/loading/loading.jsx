import React, { useState } from 'react';
import styles from './loading.module.css';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';

const BgDiv = styled.div`
    background : ${props => props.theme.pointColor};
`

const Loading = ({ complete }) => {

    const [ ani, setAni ] = useState(null);
    const history = useHistory();

    const clickAni = () => {
        setAni(true);
    }

    const pageMove = (e) => {
        if (window.event.keyCode === 13){
            history.push({
                pathname: '/home',
                state : {
                    searchData : e.target.value
                }
            })
        }   
    }

    return(
        <BgDiv className={styles.loading}>
            <div className={styles.search}>
                {ani && <div className={styles.title}>Youtube | Jaeeun@naver.com</div>}
                <input className={ani ? [styles.input, styles.inputAni].join(' ') : styles.input} 
                       type='search' 
                       placeholder='검색어를 입력해 주세요.'
                       onKeyUp={pageMove} 
                />
                <div className={ani ? styles.none: styles.icon} onClick={clickAni}>
                    <div className={styles.searchIcon}>
                        <FaSearch />
                    </div>
                    <span>Click Me!</span>
                </div>
            </div>
        </BgDiv>
    )
    
}

export default Loading;