import React,{useContext} from 'react';
import NavContext from '../context/NavContext';

const Toggle = () => {

  const {state,dispatch} = useContext(NavContext);

  return (
    <>
      <div onClick={() => dispatch({type:'OPEN_NAV',payload:!state})} className="toggle-open">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default Toggle