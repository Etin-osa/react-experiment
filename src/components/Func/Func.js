import React, { useState } from 'react';
import './Func.css'

const Func = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Maximillian", age: 28 },
      { name: "Manu", age: 27 },
      { name: "Stephanie", age: 24 }
    ],
    otherValue: "Think of something later."
  });

  const [otherState, ] = useState({ otherState: "Think of something later"})

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 }
      ],
      ...otherState
    })
  }

  const h1Style = {
    "color": "red",
    "textTransform": "Capitalize",
    "textDecoration": "underline",
    "paddingBottom": "2rem"
  }

  return (
    <div className="Func">
      <h1 style={ h1Style }>Switch Name of Candidates</h1>

      <button onClick={ switchNameHandler }>Switch Name</button>

      <div>{`Name: ${ personState.persons[0].name }, Age: ${ personState.persons[0].age }`}</div>
      <div>{`Name: ${ personState.persons[1].name }, Age: ${ personState.persons[1].age }`}</div>
      <div>{`Name: ${ personState.persons[2].name }, Age: ${ personState.persons[2].age }`}</div>
    </div>
  )
}

export default Func;