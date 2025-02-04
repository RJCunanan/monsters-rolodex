import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
    monster: Monster;
}

/*
Takes in list of monsters through props and returns a single card displaying
the monster's information
*/
const Card = ({ monster }: CardProps) => {  
    // Destructure properties from our list of monsters:
    const { id, name, email } = monster;

    return (                    
        <div className='card-container' key={id}>
            <img 
                alt={'monster ${name}'} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card;