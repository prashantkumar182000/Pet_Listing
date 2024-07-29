import React from 'react';
import PropTypes from 'prop-types';
import './PetDetails.css';

const PetDetails = ({ pet }) => (
  <div className="pet-details">
    <h2 className="pet-name">{pet.name}</h2>
    <p className="pet-breed">{pet.breed}</p>
    <p className="pet-animal">{pet.animal}</p>
    <p className="pet-description">{pet.description}</p>
  </div>
);

PetDetails.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string,
    breed: PropTypes.string,
    animal: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default PetDetails;
