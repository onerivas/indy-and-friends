import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Main from '../components/main';
import Image from 'react-bootstrap/Image';
import indyPort from '../images/indyPort.JPG';




function Home() {
  return(
    <Main>
      <div className='w-75 mx-auto'>
        <h3 className='text'>Welcome, friends!</h3>
        <p className='text'> This is the home of Indy and Friends Dog Walking and Pet Sitting. We have friends all over the bay area and look forward to meeting many more.</p>
      </div>
      <div>
        <Image
          src={indyPort}
          width='600'
          thumbnail
          className='d-block mx-auto'
        />
      </div>
      <div className='w-75 mx-auto my-3'>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque molestie orci. Maecenas facilisis ipsum quis metus porta, ut ultrices tortor sollicitudin. Donec imperdiet mi sit amet hendrerit tristique. Aenean et ullamcorper sem. Donec in nisi tempor, suscipit lacus eu, tempor nulla. Fusce scelerisque accumsan pretium. Fusce at convallis risus. Sed porta eget metus ut ornare. Fusce convallis imperdiet nulla, tincidunt tincidunt nibh mollis a. Aliquam in odio magna.

Ut blandit, lectus eget efficitur bibendum, risus odio tincidunt mi, in pulvinar mi elit sed purus. Duis odio est, ullamcorper in elit ut, blandit euismod purus. Morbi tempor lobortis tortor vel porttitor. Etiam convallis finibus congue. Duis ut diam commodo, dictum diam vitae, eleifend eros. Aenean tristique nec ex nec tincidunt. Sed rhoncus feugiat nunc, interdum porta nunc ultricies non. Etiam auctor a lacus at suscipit. Ut sollicitudin lorem vitae arcu iaculis, eget finibus nulla finibus.

Vivamus dapibus, velit non rhoncus pulvinar, erat tellus ultricies justo, a auctor quam sem id mauris. Aenean a sodales ante. Donec sapien lorem, varius et justo non, viverra faucibus orci. Donec tincidunt ante vel odio imperdiet fermentum. Morbi lacinia enim dolor, quis tempor dui sollicitudin auctor. Vivamus ullamcorper eget diam id vehicula. Nunc mi metus, iaculis sed sagittis a, mattis et metus. Aliquam efficitur vestibulum felis, in auctor quam interdum vitae.

Etiam quis eros lacinia leo vehicula tristique. Suspendisse feugiat nisi in purus condimentum, a dapibus ex gravida. Morbi blandit fermentum sapien at ullamcorper. Duis et fermentum mauris. Vestibulum ac volutpat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed semper vehicula erat nec tristique. Suspendisse et iaculis neque, sed lacinia enim. In metus leo, semper a iaculis vitae, laoreet ultricies lectus. Nam sit amet urna luctus elit tincidunt aliquet eget sed lacus. Vivamus consequat justo ac nulla aliquam, eu rhoncus eros placerat. Suspendisse lobortis ex dolor, et vestibulum turpis ultricies et. Nam vestibulum luctus scelerisque. Quisque egestas turpis et mollis posuere.

Vivamus id augue volutpat, semper purus et, dictum ipsum. In sit amet lectus lobortis, accumsan turpis vitae, fringilla purus. Nullam sapien tellus, mollis ut nibh a, tempor placerat neque. Aliquam ornare, nisi eget maximus commodo, mauris ipsum tempor dolor, at mattis nisl risus id orci. Praesent dignissim pretium magna, id pulvinar mi lacinia id. Nam eu justo congue, pulvinar libero eget, auctor orci. Nam porttitor vulputate efficitur. Nunc lobortis turpis sed commodo tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris congue commodo sem vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus neque mi, tincidunt at dignissim nec, sagittis sed quam.
        </p>
      </div>
    </Main>
  );
}

export default Home;
