import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import { fetchPets } from '../services/api';
import { Container, Typography } from '@mui/material';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets();
        setPets(data.pets);
      } catch (err) {
        setError(err.message);
      }
    };

    getPets();
  }, []);

  const handleSearch = async (params) => {
    try {
      const data = await fetchPets(params);
      setPets(data.pets);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Pet Listing
      </Typography>
      <SearchForm onSearch={handleSearch} />
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <PetList pets={pets} />
      )}
    </Container>
  );
};

export default Home;
