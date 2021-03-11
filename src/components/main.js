import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main(props) {
  return (
    <div className='main'>
      <div>
        <div className='car mx-auto'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
