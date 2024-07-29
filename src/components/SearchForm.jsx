import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ animal, location, breed });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={4}>
      <TextField
        label="Animal"
        variant="outlined"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Breed"
        variant="outlined"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
