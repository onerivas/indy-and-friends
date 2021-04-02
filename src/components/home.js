import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Main from '../components/main';
import Image from 'react-bootstrap/Image';
import indyPort from '../images/indyPort.JPG';




function Home() {
  return(
    <Main>
      <div className='w-75 mx-auto'>
        <h3 className='text'><strong>Hello, friends!</strong></h3>
        <p className='text'> <strong>I'm Indy!</strong> Welcome to the home of Indy and Friends Dog Walking and Pet Sitting. We have friends all over the Bay Area and look forward to meeting many more!</p>
      </div>
      <div>
        <Image
          src={indyPort}
          width='500'
          thumbnail
          className='d-block mx-auto'
        />
      </div>
      <div className='w-75 mx-auto my-3'>
        <h3 className='text'><strong>It's what we do!</strong></h3>
        <p className='text'> Here at Indy and Friends we love spending time with and taking care of our friends when their pet parents are away. We make sure our friends dont experience </p>
      </div>
    </Main>
  );
}

export default Home;
