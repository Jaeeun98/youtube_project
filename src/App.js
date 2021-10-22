import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Loading from './components/loading/loading';
import Main from './components/main/main';

function App({ youtube }) {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Loading />
          </Route>
          <Route path="/Home">
            <Main youtube={youtube}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
