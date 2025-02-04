import { ChangeEvent } from 'react';

import './search-box.styles.css';


type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

/*
Generic search box that allows user to type in and search for the name 
of a monster
*/
const SearchBox = ({ className, placeholder, onChangeHandler } : SearchBoxProps) => (
    // Search box for user to type in name of monster:
    <input 
        className={`search-box ${className}`}

        // Turns our generic input field into a search field:
        type='search' 

        placeholder={placeholder}
        
        // Updates App.jsx's searchField value in the state:
        onChange={onChangeHandler}   
    />
);

export default SearchBox;