import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/serach-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {  
  // Use array destructuring to get two values from useState():
  // [value, setValue]

  // Initialize hooks:
  // search string that user types in:
  const [ searchField, setSearchField ] = useState('');  

  // array of monsters:
  const [ monsters, setMonsters ] = useState<Monster[]>([]); 

  // filtered list of monsters initialized to monsters value:
  const [ filteredMonsters, setFilteredMonsters] = useState(monsters);  


  // Get the monsters data when this component mounts.
  useEffect(() => {
    // Retrievs users and sets it inside of the monsters arary
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');

      setMonsters(users);
    };

    fetchUsers();
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
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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

export default App