import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Main, Projects } from './routes';

// TODO: add an interests/hobbies section, experience, links

function App() {
  return (
    <React.Fragment>
      <Router basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;