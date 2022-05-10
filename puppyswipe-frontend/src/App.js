import React from 'react';
import './App.css';
import PuppyCards from './PuppyCards';
import Login from "./Login";
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/PuppyCards" component={PuppyCards}/>
      </Switch>
    </Router> 


  </>    
  );
}

export default App;
