import React,{useState} from 'react';
import Header from '../components/Header';

const Home = () => {

     const [state,setState] = useState({
            'video' : '/assets/videos/header.mp4',
            'poster':'/assets/images/screen.png',
            'heading':' we are travel friends',
            'paragraph':"  Come and join us we travel the most famous and beatiful places in the world",
            'logo':'/assets/images/logo.png',
      });

  return (
    <>
      <Header state={state}>
            <button className='btn-default'>Get Started</button>
      </Header>
    </>
  )
}

export default Home