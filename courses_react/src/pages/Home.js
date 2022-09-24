import React,{useState,useContext} from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import ModelContext from "../context/ModelContext";
import Register from '../auth/Register';
import Login from '../auth/Login';
import Distination from '../components/Distination';
import Services from '../components/services/Services';

const Home = () => {

  const {state:stateModel,dispatch} = useContext(ModelContext); 
   
     const [state,setState] = useState({
            'video' : '/assets/videos/header.mp4',  
            'poster':'/assets/images/screen.png',
            'heading':' we are travel friends',
            'paragraph':"  Come and join us we travel the most famous and beatiful places in the world",
            'logo':'/assets/images/logo.png',
      });

      const [registerModel] = useState('registerModel');
      const [loginModel] = useState('loginModel');

  return (
    <>
      <Header state={state}>
        <button
          onClick={() =>
            dispatch({ type: "OPEN_MODEL", payload: registerModel })
          }
          className="btn-default"
        >
          Get Started
        </button>
      </Header>

      <Modal current={registerModel}>
        <Register currentModel={loginModel} />
      </Modal>
      <Modal current={loginModel}>
        <Login currentModel={registerModel} />
      </Modal>
      <Distination/>
      <Services/>
    </>
  );
}

export default Home