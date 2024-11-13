import { Component } from 'react';


/*
Creates our list of monsters
*/
class CardList extends Component {
    render() {
        // "monsters" contains the already filtered list of monsters
        const { monsters } = this.props;
        
        return (
            <div>
                {/* Cycle through each monster in filtered list and return an h1 tag 
                with the monster's name */}
                {monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

// Allows other files to import CardList
export default CardList;