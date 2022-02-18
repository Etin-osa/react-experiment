import React, { Component } from 'react';

class Classed extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],

    otherValue: 'Think of something later'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 27 },
        { name: "Stephanie", age: 24 }
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Switch Name of Candidates</h1>

        <button onClick={ this.switchNameHandler }>Switch Name</button>

        <div>{`Name: ${this.state.persons[0].name}, Age: ${this.state.persons[0].age}`}</div>
        <div>{`Name: ${this.state.persons[1].name}, Age: ${this.state.persons[1].age}`}</div>
        <div>{`Name: ${this.state.persons[2].name}, Age: ${this.state.persons[2].age}`}</div>
      </div>
    )
  }
}

export default Classed;