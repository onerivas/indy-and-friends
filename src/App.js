import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/nav.js';
import Main from './components/main.js';
import Home from './components/home.js';
import Friends from './components/friends.js';
import Faq from './components/faq.js';
import Contact from './components/contact.js';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/friends'>
              <Friends />
            </Route>
            <Route exact path='/faq'>
              <Faq />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
