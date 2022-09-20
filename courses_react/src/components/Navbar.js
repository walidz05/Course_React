import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import NavContext from '../context/NavContext';
const Navbar = () => {

  const {state,dispatch} = useContext(NavContext);

  return (
    <>
      {state ? <div className="navLayer"></div> : ""}

      <div className={state ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>

        <div className="nav__close" onClick={() => dispatch({type:'CLOSE_NAV'})}>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Navbar