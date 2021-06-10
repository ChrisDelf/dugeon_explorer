import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'pcln-design-system'

import FormikLoginForm from './components/loginpage/loginpage.js'
import FormikRegisterForm from './components/registerpage/registerpage.js'
import HomePage from './components/homepage/homepage.js'
import FormikMapForm from './components/mapcreation/mapForm.js';
import SavedMenu from './components/savegames/savedgamemenu.js';
// setting up the general theme I want the project in 

const theme = {
  primary: "#483B20",
  secondary: "#F92245 "
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={FormikLoginForm} />
        <Route path="/register/" component={FormikRegisterForm} />
        <Route path="/homepage/" component={HomePage} />
        <Route path="/newgame/" component={FormikMapForm} />
        <Route path="/savedgames/" component={SavedMenu} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
