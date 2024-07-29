// PetList.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

const PetList = ({ pets }) => {
  if (!pets || pets.length === 0) {
    return <Typography variant="h6">No pets available.</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {pets.map((pet) => (
        <Grid item xs={12} sm={6} md={4} key={pet.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={pet.images && pet.images.length > 0 ? pet.images[0] : '/default-pet.jpg'}
              alt={pet.name || 'No name available'}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {pet.name || 'Unknown'}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {pet.breed || 'Unknown breed'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

PetList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      breed: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.string
      ),
    })
  ).isRequired,
};

export default PetList;
