import axios from 'axios';

const BASE_URL = 'http://pets-v2.dev-apis.com';

export const fetchPets = async (params = {}) => {
  try {
    const { animal, location, breed } = params;
    const response = await axios.get(`${BASE_URL}/pets`, {
      params: { animal, location, breed },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw new Error('Failed to fetch pets');
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pet by ID:', error);
    throw new Error('Failed to fetch pet details');
  }
};

export const fetchBreedsByAnimalType = async (animal) => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds?animal=${animal}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds by animal type:', error);
    throw new Error('Failed to fetch breeds');
  }
};

export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${BASE_URL}/pets`, {
      params: { animal, location, breed },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching pets:', error);
    throw new Error('Failed to search pets');
  }
};
