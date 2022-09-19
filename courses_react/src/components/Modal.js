import React,{useContext} from 'react';
import ModelContext from '../context/ModelContext';

const Modal = () => {

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

  return state.modelStatus ? (
    <div className="modal" onClick={() => dispatch({type:'CLOSE_MODEL'})}>
      <div className="modal__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
        aperiam recusandae sapiente, unde asperiores debitis nobis numquam in
        maxime quam magni, accusantium quod saepe eos neque perspiciatis rerum
        illo.
      </div>
    </div>
  ) : (
    ''
  );
}
export default Modal