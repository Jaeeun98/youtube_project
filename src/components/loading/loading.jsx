import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './loading.module.css';

const Loading = (props) => {

    const history = useHistory();

    const [ ani, setAni ] = useState(null);
    const clickAni = () => {
        setAni(true);
    }

    const pageMove = (e) => {
        if (window.event.keyCode === 13){
            history.push('/home')
        }   
    }
    

    return(
        <div className={styles.loading}>
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
            
        </div>
    )
    
}

export default Loading;