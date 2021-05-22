import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
    <ul aria-label='characters'>
        {characters.map((character) =>  (
            <Link to={`/${character.id}`} key={character.id}>
                <li>
                    <Character {...character}/>
                </li>
            </Link>
        ))}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            name: PropTypes.string.isRequired, 
            image: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CharacterList;
