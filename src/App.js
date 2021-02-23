import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/nav.js';
import Main from './components/main.js';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <NavBar />
        <Main>

        </Main>
      </Container>
    </Router>
  );
}

export default App;
