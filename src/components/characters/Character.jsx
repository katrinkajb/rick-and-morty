import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, status, species, image, origin, location }) => (
    <figure>
        <img src={image} alt={name}/>
        <figcaption>
            <h3>{name}</h3>
            <p>{status}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin.name}</p>
            <p>Location: {location.name}</p>
        </figcaption>
    </figure>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

export default Character;
