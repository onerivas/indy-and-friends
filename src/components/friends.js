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
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Hello, I'm Indy!</h3>
            <p className='text'> Click through and check out all our friends!!!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={bambamBear}
              alt='Two small dogs at the beach'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>BamBam and Bear</h3>
            <p className='text'>Our friends on one of our trips to the beach!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={bear}
              alt='Bear (a small fluffy dog) sitting on a hardwood floor'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Bear</h3>
            <p className='text'>Patiently posing for his photo</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={bearTree}
              alt='Bear (a small fluffy dog) relaxing under a tree'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Bear</h3>
            <p className='text'> Taking a break under a tree during one of his visits</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={josie}
              alt='An extreme close up of Josie (a maine coon cat)'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Josie</h3>
            <p className='text'> She was trying to hide but we were about to get a good photo of her. </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={lenny}
              alt='Lenny, a tuxedo cat, sitting at a bathroom sink'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Lenny</h3>
            <p className='text'> Waiting for a drink at the sink. He loves it!!! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={maggieDeck}
              alt='Maggie, a newfoundland dog, sitting in the sun on a deck'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Maggie</h3>
            <p className='text'> Taking in the sun on her deck </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={maggiePort}
              alt='Maggie, a newfoundland dog, sitting patiently'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Maggie</h3>
            <p className='text'> She was a good girl and posing for a photo </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={ryderDigger}
              alt='Two golden retreivers on a beach'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Ryder and Digger</h3>
            <p className='text'> They had so much fun at the beach! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={sophie}
              alt='Sophie, a small goldendoodle, sitting in her backyard.'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Sophie</h3>
            <p className='text'> She looked so cute we had to take a photo!!! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={stanleyAndSophie}
              alt='Sophie and Stanely, two goldendoodles sitting in their backyard.'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Sophie and Stanley</h3>
            <p className='text'> He wanted a join the fun! </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={teddy}
              alt='Teddy, a tabby cat, laying on his side in her bed.'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Teddy</h3>
            <p className='text'>Relaxing in his bed</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
            <Image
              className='carImg'
              src={tuna}
              alt='Tuna, a maine coon cat, laying in his bed.'
              thumbnail
            />
          </div>
          <div className='carCap'>
            <h3>Tuna</h3>
            <p className='text'>My big brother, Tuna!!!</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Main>
    );
}

export default Friends;
