import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetDetails from '../components/PetDetails';
import { fetchPetById } from '../services/api';

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPetById(id)
      .then((data) => setPet(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!pet) return <p>Loading...</p>;

  return <PetDetails pet={pet} />;
};

export default PetDetailsPage;
