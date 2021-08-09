import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Validation from '../components/Validation/Validation';
import Charlist from '../components/Charlist/Charlist';
import './App.css';


function App() {
  const [userInput, setUserInput] = useState({
    userInput: '',
  });

  useState('Clarity Over all..')

  let lengthOfInput = userInput.userInput.length;
  let userSplit = userInput.userInput.split('');


  // Input Handler
  const inputChangedHandler = (event) => {
    setUserInput({ userInput: event.target.value });
  }

  // Delete Char Handler
  const deleteCharHandler = (ind) => {
    let curIndex = userSplit.findIndex((cur, index) => index === ind);
    let usInput = [...userSplit];

    usInput.splice(curIndex, 1);
    let userJoin = usInput.join('');
    
    setUserInput({ userInput: userJoin });
  }


  return (
    <div className="App">
      <Header />
      <hr />
      <Validation length={lengthOfInput} />

      <Charlist 
        changed={inputChangedHandler}
        userInput={userInput.userInput}
        userSplit={userSplit}
        clicked={deleteCharHandler}
      />
    </div>
  );
}

export default App;