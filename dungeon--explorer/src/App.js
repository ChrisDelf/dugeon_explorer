import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

import FormikLoginForm from './components/loginpage/loginpage.js'
import FormikRegisterForm from './components/registerpage/registerpage.js'



function App() {
  return (
    <Router>
    <Route exact path = "/" component={FormikLoginForm}/>
    <Route path = "/register/" component = {FormikRegisterForm} />
    </Router>
  );
}

export default App;
