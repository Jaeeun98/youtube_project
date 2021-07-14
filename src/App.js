import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list/list';
import Search from './components/search/search';
import ClickVideos from './components/clickVideos/clickVideos';

function App({ youtube }) {

  const [videos, setVideos] = useState([]);
  const [clickVideos, setClickVideos] = useState(null);

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
    setClickVideos({video});
  }

  const onMoveHome = () => {
    setClickVideos(null);
    onLoad();
  }

  return (
    <div className="app">
      <div className="wrap">
        <header>
          <Search onSearchList={onSearchList} onMoveHome={onMoveHome}/>
        </header>
        <section>
          {clickVideos && <ClickVideos clickVideo={clickVideos} />}
          <div className={clickVideos ? 'detail' : 'list'}>
            <List videos={videos} onClickVideos={onClickVideos} />
          </div>
         
        </section>
      </div>
    </div>
  )
}

export default App;
