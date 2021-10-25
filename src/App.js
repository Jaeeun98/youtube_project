import React, { useState } from 'react';
import './App.css';
import Loading from './components/loading/loading';
import Main from './components/main/main';

function App({ youtube }) {
  const [ loadingComplete, setLoadingComplete ] = useState(null);

  const complete = (data) => {
    setLoadingComplete(data)
  }


  return (
    <div className="app">
      { loadingComplete ? <Main youtube={youtube} data={loadingComplete} /> : <Loading complete={complete}/> }
    </div>
  )
}

export default App;
