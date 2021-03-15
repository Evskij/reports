import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NaviBar from './components/Navibar';
import {Home} from './page/Home';
import {ScrapLog} from './page/ScrapLog';
import {Pc} from './page/Pc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NaviBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/scraplog" component={ScrapLog}/>
          <Route path="/pc" component={Pc}/>
        </Switch>
    </Router>
  );
}

export default App;
