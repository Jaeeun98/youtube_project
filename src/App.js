import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list/list';
import Search from './components/search/search';
import axios from 'axios';
import ClickVideos from './components/clickVideos/clickVideos';

function App() {

  const [videos, setVideos] = useState([]);
  const [clickVideos, setClickVideos] = useState(null);

  useEffect(() => {

    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => setVideos(response.data.items)) 
  }, [])

  const onSearchList = text => {
    setClickVideos(null);

    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${text}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => setVideos(response.data.items))
  }

  const onClickVideos = (video) => {
    setClickVideos({video});
  }

  const onMoveHome = () => {
    setClickVideos(null);
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