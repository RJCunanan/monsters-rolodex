import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/serach-box/search-box.component';
import './App.css';

const App = () => {  
  // Use array destructuring to get two values from useState():
  // [value, setValue]

  // Initialize hooks:
  // search string that user types in:
  const [ searchField, setSearchField ] = useState('');  

  // array of monsters:
  const [ monsters, setMonsters ] = useState([]); 

  // filtered list of monsters initialized to monsters value:
  const [ filteredMonsters, setFilteredMonsters] = useState(monsters);  


  // Get the monsters data when this component mounts.
  useEffect(() => {
    // fetch the data from the provided url:
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // convert data returned into a JSON object
    .then((users) => setMonsters(users));
  }, []);


  // Update our filtered list of monsters only whenever the list of monsters or
  // the search field value the user types in changes.
  useEffect(() => {
    // Filters the monsters based on the callback function and return a new
    // array.
    const newFilteredMonsters = monsters.filter((monster) => {
      // If the monster's name includes the search string, keep it.
      // If it does not, get rid of it.
      return monster.name.toLowerCase().includes(searchField);
    });

    // Update state with new list of filtered monsters
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  // Updates the searchField string in state based on what the user enters
  // into the search box.
  const onSearchChange = (event) => {
    // Lowercase the search string so our search is not case-sensitive
    const searchFieldString = event.target.value.toLowerCase();

    // Update the search string in state
    setSearchField(searchFieldString);
  }


  return (
    <>
      <div>
        <h1 className='app-title'>Monsters Rolodex</h1>
        
        <SearchBox 
          className='monsters-search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    </>
  )
}


// Class component that represents our entire application
// class App extends Component {
  
//   constructor() {
//     super();  // Calls the underlying constructor from Component

//     // local state:
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }


//   // Lifecyle method that fetches users from the API the first time this
//   // component "mounts" or gets placed onto the DOM
//   componentDidMount() {
//     // fetch the data from the provided url:
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json()) // convert data returned into a JSON object
//       .then((users) => this.setState(() => {  // update state with new users
//         return {monsters: users}
//       }
//     ))
//   }



//   onSearchChange = (event) => {
//     // Lowercase the search string so our search is not case-sensitive
//     const searchField = event.target.value.toLowerCase();

//     // Update the search string in state
//     this.setState(
//       () => {
//         return { searchField };
//       }
//     )
//   }


//   render() {
//     // Destructuring values and methods using "this" into variables
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // Filters the monsters based on the callback function and return a new
//     // array.
//     const filteredMonsters = monsters.filter((monster) => {
//       // If the monster's name includes the search string, keep it.
//       // If it does not, get rid of it.
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <>
//         <div>
//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox 
//             className='monsters-search-box'
//             placeholder='search monsters'
//             onChangeHandler={onSearchChange}
//           />
//           <CardList monsters={filteredMonsters} />
//         </div>
//       </>
//     );
//   }
// }

export default App