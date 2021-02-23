import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import indyAndFriendsLogo from '../images/IndyAndFriendsLogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <Container fluid>
    <Navbar className="justify-content-center">
      <Nav>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/friends'>Friends</Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Brand className='indyLogo'>
        <img
          src={indyAndFriendsLogo}
          alt='indyAndFriendsLogo'
          width='200'
          height='200'
          className='d-line-block align-top'
           />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/faq'>FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/Contacts'>Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </Container>
  );
}

export default NavBar;
