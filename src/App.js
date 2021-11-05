import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './common/theme';
import Loading from './components/loading/loading';
import Home from './components/home/home';

function App({ youtube }) {
  const [theme, setTheme] = useState(light);

  const darkMode = useCallback(() => {
    theme === light ? setTheme(dark) : setTheme(light);
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Switch>
            <Route path='/' exact>
              <Loading />
            </Route>
            <Route path='/home' >
              <Home youtube={youtube} darkMode={darkMode} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
    
  )
}

export default App;
