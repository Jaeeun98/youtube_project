import React, { useState } from 'react';
import styles from './loading.module.css';
import styled from 'styled-components';

const BgDiv = styled.div`
    background : ${props => props.theme.pointColor};
`

const Loading = ({ complete }) => {

    const [ ani, setAni ] = useState(null);
    const clickAni = () => {
        setAni(true);
    }

    const pageMove = (e) => {
        if (window.event.keyCode === 13){
            complete(e.target.value)
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
                    <img className={styles.searchIcon} src='img/search.png' alt='search' />
                    <span>Click Me!</span>
                </div>
            </div>
        </BgDiv>
    )
    
}

export default Loading;