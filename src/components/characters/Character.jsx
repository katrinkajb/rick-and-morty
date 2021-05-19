import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, status, species, image, origin, location }) => (
    <figure>
        <img src={image} alt={name}/>
        <figcaption>
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{species}</p>
            <p>{origin.name}</p>
            <p>{location.name}</p>
        </figcaption>
    </figure>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default Character;
