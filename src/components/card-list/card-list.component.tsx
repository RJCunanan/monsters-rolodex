import { Monster } from '../../App';
import './card-list.styles.css';
import Card from '../card/card.component';

type CardListProps = {
    monsters: Monster[];
}

/*
Creates our list of monsters
*/
const CardList = ({ monsters }: CardListProps) => (
    // "monsters" contains the already filtered list of monsters
    
    <div className='card-list'>
        {/* Cycle through each monster in filtered list and return an monster card */}
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })}
    </div>
);

// Allows other files to import CardList
export default CardList;