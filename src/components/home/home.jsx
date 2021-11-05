import React, { useEffect, useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import Search from '../search/search';
import NavBar from '../navBar/navBar';
import styles from './home.module.css';
import styled from 'styled-components';
import List from '../list/list';
import ClickVideos from '../clickVideos/clickVideos';   
import { useHistory, useLocation } from 'react-router-dom';

const Wrap = styled.section`
    background:${props => props.theme.backColor};
`
const Home = ({ youtube, darkMode }) => {

    const [videos, setVideos] = useState([]);

    const location = useLocation();
    const history = useHistory();

    const onLoad = useCallback(() => {
        youtube
            .onLode() //
            .then(data => setVideos(data))
    }, [youtube])
    
    const onSearchList = useCallback(text => {
        youtube
            .onSearch(text)
            .then(data => setVideos(data))
    }, [youtube])

    useEffect(() => {
        if (location.state === undefined){
            onLoad();
        } else {
            onSearchList(location.state.searchData)
        }
    }, [])

    const onMoveHome = useCallback(() => {
        onLoad();
        history.push('/home');
    }, [])

    return(
        <Wrap className={styles.section}>
            <NavBar darkMode={darkMode} onMoveHome={onMoveHome} />
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <Search onSearchList={onSearchList} onMoveHome={onMoveHome} />
                </header>
                <main className={styles.main}>
                    <Route path='/home' exact>
                        <List videos={videos} />
                    </Route>
                    <Route path='/home/clickVideo' >
                        <ClickVideos videos={videos} />
                    </Route>
                </main>
            </div>
        </Wrap>
    )
}

export default Home;