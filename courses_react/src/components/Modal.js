import React,{useContext} from 'react';
import ModelContext from '../context/ModelContext';

const Modal = (props) => {

  const {state,dispatch} = useContext(ModelContext); 



  const closeModel = () => {
    dispatch({modelStatus:false});
  }

  const close = (e) => {
    if (e.target.getAttribute('class') === 'modal');
    {
      closeModel();
    }
  }

  return state.modelStatus && state.current === props.current ? (
    <div className="modal">
      <div className="modal__body">
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Modal