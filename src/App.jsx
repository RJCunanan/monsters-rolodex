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
      name: {firstName: 'RJ', lastName: 'Cunanan'},
      company: 'ZTM'
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
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              // Updater function that updates our state with a new name:
              () => {
                return {
                  name: {firstName: 'Andrei', lastName: 'Neaogie'}
                }
              }, 
              // Callback function that prints our new state to the console:
              () => {
                console.log(this.state);
              });  
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
