import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import List from '../list/list';
import Search from '../search/search';
import ClickVideos from '../clickVideos/clickVideos';
import NavBar from '../navBar/navBar';
import styles from './main.module.css';

const Main = ({ youtube }) => {

    const [videos, setVideos] = useState([]);
    const [clickVideos, setClickVideos] = useState(null);
    const history = useHistory();

    const onLoad = () => {
        youtube
            .onLode() //
            .then(data => setVideos(data))
    }

    useEffect(() => {
        onLoad();
    }, [])

    const onSearchList = text => {
        setClickVideos(null);

        youtube
            .onSearch(text)
            .then(data => setVideos(data))
    }

    const onClickVideos = (video) => {
        setClickVideos({ video });
        history.push('/video')
    }

    const onMoveHome = () => {
        setClickVideos(null);
        onLoad();
    }

    return(
        <section className={styles.section}>
            <NavBar />
            <div className={styles.wrap}>
                <header>
                    <Search onSearchList={onSearchList} onMoveHome={onMoveHome} />
                </header>
                <main className={styles.main}>
                    <Router>
                        <Switch>
                            <Route path='/home' exact>
                                <div className={clickVideos ? 'detail' : 'list'}>
                                    <List videos={videos} onClickVideos={onClickVideos} />
                                </div>
                            </Route>
                            <Route path='/video'>
                                <ClickVideos clickVideo={clickVideos} />
                            </Route>
                        </Switch>
                    </Router>
                </main>
             </div>
        </section>
        
    )
}

export default Main;