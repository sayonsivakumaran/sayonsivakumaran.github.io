import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Main, Teaching, Projects, NotFound } from './routes';
import { STAB52F20 } from './routes/Teaching/routes';

function App() {
  return (
    <React.Fragment>
      <Router basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
          <Route exact path='/teaching' component={Teaching}/>
          <Route path='/teaching/stab52f20' component={STAB52F20}/>
          <Route path='/projects' component={Projects}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;