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
        
        window.sessionStorage.removeItem('searchKey');
        window.sessionStorage.setItem('searchKey', text);

        youtube
            .onSearch(text)
            .then(data => setVideos(data))
    }

    const onClickVideos = (video) => {
        setClickVideos({ video });
    }

    const onMoveHome = () => {
        window.sessionStorage.removeItem('searchKey');
        window.history.back();
        setClickVideos(null);

        !clickVideos && onLoad();
 
    }

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