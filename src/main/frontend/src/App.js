import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NaviBar from './components/Navibar';
import {Home} from './page/Home'
import {UppLom} from './page/UppLom'
import {Pc} from './page/Pc'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NaviBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/upplom" component={UppLom}/>
          <Route path="/pc" component={Pc}/>
        </Switch>
    </Router>
  );
}

export default App;
