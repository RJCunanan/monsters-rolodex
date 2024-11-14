import { Component } from "react";
import './search-box.styles.css';

/*
Generic search box that allows user to type in and search for the name 
of a monster
*/
class SearchBox extends Component {
    render() {
        return (
            <div>
                {/* Search box for user to type in name of monster */}
                <input 
                    className={`search-box ${this.props.className}`}

                    // Turns our generic input field into a search field:
                    type='search' 

                    placeholder={this.props.placeholder}
                    
                    // Updates App.jsx's searchField value in the state:
                    onChange={this.props.onChangeHandler}   
                />
            </div>
        )
    }
}

export default SearchBox;