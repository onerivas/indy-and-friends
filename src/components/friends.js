import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Main from '../components/main';
import indy from '../images/Indy.png';
import bambamBear from '../images/BamBamBearBeach.PNG';
import bear from '../images/BearPort.PNG';
import bearTree from '../images/BearTree.PNG';
import josie from '../images/Josie.PNG';
import lenny from '../images/Lenny.PNG';
import maggieDeck from '../images/MaggieDeck.PNG';
import maggieHeadDeck from '../images/MaggieHeadOnDeck.PNG';
import maggiePort from '../images/MaggiePort.PNG';
import ryderDigger from '../images/RyderDiggerBeach.PNG';
import sophie from '../images/SophieYard.PNG';
import stanleyAndSophie from '../images/StanleyAndSophie.PNG';
import teddy from '../images/TeddyBed.PNG';
import tuna from '../images/Tuna.PNG';




function Friends() {
  return(
    <Main>
      <Carousel>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={indy}
              alt='Indy, the dog, dressed in a Indiana Jones costume'
            />
          </div>
          <div className='carCap'>
            <h3>Hello, I'm Indy!</h3>
            <p> Click through and check out all our friends!!!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={bambamBear}
              alt='Two small dogs at the beach'
            />
          </div>
          <div className='carCap'>
            <h3>BamBam and Bear</h3>
            <p>Our friends on one of our trips to the beach!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={bear}
              alt='Bear (a small fluffy dog) sitting on a hardwood floor'
            />
          </div>
          <div className='carCap'>
            <h3>Bear</h3>
            <p>Patiently posing for his photo</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={bearTree}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Bear</h3>
            <p> Taking a break under a tree during one of his visits</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={josie}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Josie</h3>
            <p> She was trying to hide but we were about to get a good photo of her. </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={lenny}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Lenny</h3>
            <p> Waiting for a drink at the sink. He loves it!!! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={maggieDeck}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Maggie</h3>
            <p> taking in the sun on her deck </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={maggiePort}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Maggie</h3>
            <p> being a good girl and posing for a photo </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={ryderDigger}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Ryder and Digger</h3>
            <p> They had so much fun at the beach! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={sophie}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Sophie</h3>
            <p> She looked so cute we had to take a photo!!! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={stanleyAndSophie}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Sophie and Stanley</h3>
            <p> He wanted a join the fun! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={teddy}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Teddy</h3>
            <p>relaxing in his bed</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <img
              className ='carImg'
              src={tuna}
              alt='Bear (a small fluffy dog) relaxing under a tree'
            />
          </div>
          <div className='carCap'>
            <h3>Tuna</h3>
            <p>my big brother, Tuna!!!</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Main>
    );
}

export default Friends;
