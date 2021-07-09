import React from 'react';
import server from '../serverCalls.js';

const Modal = ({ name, reset }) => {
  const title = (name === 'login') ? 'Login to your account' : 'Sign up for an account!';

  const action = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (name === 'login') {
      server.signIn(username, password);
    } else {
      server.signUp(username, password);
    }
    reset('');
  }

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      reset('');
    }
  }

  return (
    <div id="modal" onClick={handleOutsideClick}>
      <div>
      <h2>{title}</h2>
      <label>
        Username
        <input id="username" type="text" />
      </label>
      <label>
        Password
        <input id="password" type="password" />
      </label>
      <button type="button" onClick={action}>Submit</button>
    </div>
    </div>
  )
}

export default Modal;
