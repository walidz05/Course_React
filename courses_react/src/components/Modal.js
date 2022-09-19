import React,{useContext} from 'react';
import ModelContext from '../context/ModelContext';

const Modal = (props) => {

  const {state,dispatch} = useContext(ModelContext); 

    const { login, setLogin } = useContext(ModelContext); 

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
    <div className="modal">
      <div className="modal__body">
        {props.children}
        <button type="button" onClick={() => setLogin({ type: "LOGIN" })}>
          are ayou have un account ?
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Modal