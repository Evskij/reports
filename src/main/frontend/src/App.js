import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NaviBar from './Components/Navibar';
import {Espc} from './Page/Espc'
import {Pc} from './Page/Pc'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NaviBar/>
        <Switch>
          <Route path="/espc" component={Espc}/>
          <Route path="/pc" component={Pc}/>
        </Switch>
    </Router>
  );
}

export default App;
