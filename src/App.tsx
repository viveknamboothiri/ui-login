// import { Switch } from '@material-ui/core';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/register"><Register /></Route>
      </Switch>
    </Router>   
  );
}

export default App;
