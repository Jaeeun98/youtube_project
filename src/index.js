import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './server/youtubeApi';

const youtube = new Youtube();

ReactDOM.render(
  <React.StrictMode>
    <App youtube={ youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
