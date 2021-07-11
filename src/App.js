import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list/list';
import Search from './components/search/search';
import axios from 'axios';

function App() {

  const [videos, setVideos] = useState([]);

  const onSearchList = text => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${text}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => setVideos(response.data.items))
  }

  useEffect(() => {

    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => setVideos(response.data.items))
    
  }, [])

  

  
  return (
    <div className="app">
      <div className="wrap">
        <header>
          <Search onSearchList={ onSearchList}/>
        </header>
        <section>
         <List videos={videos} />
        </section>
      </div>
    </div>
  )
}

export default App;
