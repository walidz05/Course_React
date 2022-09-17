import React,{Children, useState} from 'react';
const Header = ({state,children}) => {

  return (
    <div className='header'>
      <div className="header__video">
            <video poster={state.poster} src={state.video} autoPlay loop muted></video>
      </div>
      <div className="header__contents">
            <div className="container">
                  <div className="header__contents__text">
                        <div className="header__contents__text__child">
                              <h1 className='header__contents__text__child__h1'>
                              {state.heading}
                              </h1>
                              <p className="header__contents__text__child__p">
                              {state.paragraph}  
                              </p>
                              <div className="header__contents__text__child__link">
                                    {children}
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</div>
  )
}

export default Header;