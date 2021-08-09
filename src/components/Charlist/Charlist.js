import React from 'react';
import styles from './style.module.css'
import Char from './Char/Char';

const Charlist = props => {
  let each = props.userSplit.map((str, ind) => {
    if (str !== ' ') {
      return <Char
        current={str}
        key={ind}
        click={props.clicked.bind(this, ind)}
      />
    }
  })

  return (
    <div className={styles.main}>
      <input
        type="text"
        onChange={props.changed}
        value={props.userInput} />

      <div>
        {each}
      </div>   
    </div>
  )
}


export default Charlist;