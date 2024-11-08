import { Component } from 'react'
import './App.css'

class App extends Component {
  
  constructor() {
    super();  // Calls the underlying constructor from Component

    // local state:
    this.state = {
      monsters: [],
    };
  }

  // Lifecyle method that fetches users from the API the first time this
  // component "mounts" or gets placed onto the DOM
  componentDidMount() {
    // fetch the data from the provided url:
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // convert data returned into a JSON object
      .then((users) => this.setState(() => {  // update state with new users
        return {monsters: users}
      },
      () => { // Callback that console logs the new state
        console.log(this.state);
      }
    ))
  }

  render() {
    return (
      <>
        <div>
          {/* Cycle through each monster and return an h1 tag with the monster's name */}
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App
