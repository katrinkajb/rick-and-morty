import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
    <figure>
        <img src={image} alt={name}/>
        <figcaption>
            <h3>{name}</h3>
        </figcaption>
    </figure>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Character;
