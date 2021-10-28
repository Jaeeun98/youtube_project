import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from './common/theme';
import Loading from './components/loading/loading';
import Main from './components/main/main';

function App({ youtube }) {
  const [ loadingComplete, setLoadingComplete ] = useState(null);
  const [theme, setTheme] = useState(light);

  const complete = (data) => {
    setLoadingComplete(data)
  }

  const darkMode = () => {
    theme === light ? setTheme(dark) : setTheme(light);
    console.log(theme);
  }


  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {loadingComplete ? <Main youtube={youtube} data={loadingComplete} darkMode={darkMode}/> : <Loading complete={complete} />}
      </div>
    </ThemeProvider>
    
  )
}

export default App;
