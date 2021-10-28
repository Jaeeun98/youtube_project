import React, { useEffect, useState } from 'react';
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

const Main = ({ youtube, data, darkMode, }) => {

    const [videos, setVideos] = useState([]);
    const [clickVideos, setClickVideos] = useState(null);
    
    const onLoad = () => {
        youtube
            .onLode() //
            .then(data => setVideos(data))
    }

    useEffect(() => {
        onSearchList(data);
    }, [])

    const onSearchList = text => {
        setClickVideos(null);

        youtube
            .onSearch(text)
            .then(data => setVideos(data))
    }

    const onClickVideos = (video) => {
        setClickVideos({ video });
    }

    const onMoveHome = () => {
        setClickVideos(null);
        onLoad();
    }

    return(
        <Wrap className={styles.section}>
            <NavBar darkMode={darkMode} />
            <div className={styles.wrap}>
                <header>
                    <Search onSearchList={onSearchList} onMoveHome={onMoveHome} />
                </header>
                <main className={styles.main}>
                    <Router>
                        <Switch>
                            <Route path='/' exact>
                                <div className={styles.list}>
                                    <List videos={videos} onClickVideos={onClickVideos} />
                                </div>
                            </Route>
                            <Route path='/clickVideo' exact>
                                <ClickVideos clickVideo={clickVideos} />
                                <div className={styles.detail}>
                                    <List videos={videos} onClickVideos={onClickVideos} />
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </main>
             </div>
        </Wrap>
        
    )
}

export default Main;