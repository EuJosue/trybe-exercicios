import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.sumClick = this.sumClick.bind(this);
  }

  state = {
    firstButton: 0,
    secondButton: 0,
    thirdButton: 0,
  }

  sumClick(key) {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }))
  }

  render() {
    const { state: { firstButton, secondButton, thirdButton } } = this;

    return (
      <div className="App">
        <button onClick={ () => this.sumClick('firstButton') }>
          { firstButton }
        </button>
        <button onClick={ () => this.sumClick('secondButton') }>
        { secondButton }
        </button>
        <button onClick={ () => this.sumClick('thirdButton') }>
        { thirdButton }
        </button>
      </div>
    );
  }
}

export default App;
