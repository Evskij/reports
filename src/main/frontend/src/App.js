import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NaviBar from './component/Navibar';
import {Home} from './page/Home';
import {ScrapLog} from './page/ScrapLog';
import {Pc} from './page/Pc';
import {Upp} from './page/Upp';
import {Dsp} from './page/Dsp';
import Footer from './component/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NaviBar/>
        <div style={{height: '100px'}}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/scraplog" component={ScrapLog}/>
            <Route path="/upp" component={Upp}/>
            <Route path="/dsp" component={Dsp}/>
            <Route path="/pc" component={Pc}/>
          </Switch>
      </Router>
      <Footer/>
    </>  
  );
}

export default App;