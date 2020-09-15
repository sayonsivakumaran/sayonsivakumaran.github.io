import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Main, Teaching, Projects, NotFound } from './routes';

function App() {
  return (
    <React.Fragment>
      <Router basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
          <Route path='/teaching' component={Teaching}/>
          <Route path='/projects' component={Projects}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;