import React from 'react';
import logo from '../../assests/logo.svg';
import classes from './Header.module.css'


const header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
};

export default header;