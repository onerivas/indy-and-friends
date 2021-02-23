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
    <div className='d-flex justify-content-center'>
    <Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/friends'>Friends</Nav.Link>
        </Nav.Item>
      </Nav>
        <img
          src={indyAndFriendsLogo}
          alt='indyAndFriendsLogo'
          width='180'
          height='180'
          // className='d-line-block align-top'
           />
      <Nav>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/faq'>FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' href ='/contact'>Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    <div className='main'>
    </div>
    </div>
  );
}

export default NavBar;
