import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';


/*
Creates our list of monsters
*/
class CardList extends Component {
    render() {
        // "monsters" contains the already filtered list of monsters
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {/* Cycle through each monster in filtered list and return an monster card */}
                {monsters.map(monster => {
                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        )
    }
}

// Allows other files to import CardList
export default CardList;