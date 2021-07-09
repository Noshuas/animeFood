import React, { useState } from 'react';
import Modal from './Modal.jsx';

const Header = ({ setUser, setModal }) => {

  const triggerModal = (e) => {
    let name = e.target.name;
    setModal(<Modal name={name}  reset={setModal} />);
  }

  return (
      <header>
        <div className="center">
          <img src="logo.svg" id="logo" />
          <div id="title">
            <h1>ANIME</h1>
            <i>
              <b>a</b>ll your <b>n</b>utritional <b>i</b>nformation <b>m</b>ade <b>e</b>asy
            </i>
          </div>
          <div id="accountButtons">
              <button type="button" name="signUp" onClick={triggerModal}>Sign up</button>
              <button type="button" name="login"  onClick={triggerModal}>Log in</button>
          </div>
        </div>
      </header>
  )
}

export default Header;
