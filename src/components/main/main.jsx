import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from '../list/list';
import Search from '../search/search';
import ClickVideos from '../clickVideos/clickVideos';
import NavBar from '../navBar/navBar';
import styles from './main.module.css';
import styled from 'styled-components';

const Wrap = styled.section`
    background:${props => props.theme.backColor};
`

const Main = ({ youtube, data, darkMode }) => {

    const [videos, setVideos] = useState([]);
    const [clickVideos, setClickVideos] = useState([]);
    
    const onSearchList = useCallback(text => {
        setClickVideos(null);
        
        window.sessionStorage.removeItem('searchKey');
        window.sessionStorage.setItem('searchKey', text);

        youtube
            .onSearch(text)
            .then(data => setVideos(data))
    }, [youtube])

    useEffect(() => {
        onSearchList(data);
    }, [data, onSearchList])

    const onClickVideos = (video) => {
        setClickVideos({ video });
    }

    const onMoveHome = useCallback(() => {
        const onLoad = () => {
            youtube
                .onLode() //
                .then(data => setVideos(data))
        }

        window.sessionStorage.removeItem('searchKey');
        window.history.back();
        setClickVideos(null);

        !clickVideos && onLoad();
    }, [clickVideos, youtube])

    return(
        <Wrap className={styles.section}>
            <NavBar darkMode={darkMode} onMoveHome={onMoveHome} />
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <Search onSearchList={onSearchList} onMoveHome={onMoveHome} />
                </header>
                <main className={styles.main}>
                    <Router>
                        <Switch>
                            <Route path='/' exact>
                                <List videos={videos} onClickVideos={onClickVideos} />
                            </Route>
                            <Route path='/clickVideo' exact>
                                <ClickVideos clickVideo={clickVideos} videos={videos} onClickVideos={onClickVideos}/>
                            </Route>
                        </Switch>
                    </Router>
                </main>
             </div>
        </Wrap>
        
    )
}

export default Main;