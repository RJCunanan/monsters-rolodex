import { Component } from 'react'

// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  
  constructor() {
    super();  // Calls the underlying constructor from Component

    // local state:
    this.state = {
      name: 'RJ',
    };
  }

  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <p>
            {/* Curly braces allows us to insert JS: */}
            Hi {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({name: 'Andrei'});  
            // Update state to a different object with a new name
          }}>
            Change Name
          </button>
        </div>
      </>
    );
  }
}

export default App
