import React from 'react';
import classes from './Char.module.css'


const Char = (props) => {
  return (
    <div onClick={props.click} className={classes.char}>
      {props.current}
    </div>
  )
}


export default Char;