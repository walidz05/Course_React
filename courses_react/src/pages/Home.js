import React,{useState,useContext} from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import ModelContext from "../context/ModelContext";
import Register from '../auth/Register';
import Login from '../auth/Login';

const Home = () => {

  const {state:stateModel,login,dispatch} = useContext(ModelContext); 
  console.log(login);
   
     const [state,setState] = useState({
            'video' : '/assets/videos/header.mp4',  
            'poster':'/assets/images/screen.png',
            'heading':' we are travel friends',
            'paragraph':"  Come and join us we travel the most famous and beatiful places in the world",
            'logo':'/assets/images/logo.png',
      });

  return (
    <>
      <Modal>{login === false ? <Login /> : <Register />}</Modal>
      <Header state={state}>
        <button
          onClick={() => dispatch({ type: "OPEN_MODEL" })}
          className="btn-default"
        >
          Get Started
        </button>
      </Header>
    </>
  );
}

export default Home