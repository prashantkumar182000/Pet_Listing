/**
 * Handle API response.
 * @param {Object} response - The API response.
 * @returns {Object} - The data from the response.
 * @throws {Error} - If the response is not successful.
 */
export const handleApiResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

/**
 * Handle API error.
 * @param {Error} error - The error object.
 * @returns {String} - The error message.
 */
export const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return `Error: ${error.response.status} - ${error.response.data.message}`;
  } else if (error.request) {
    // The request was made but no response was received
    return 'Error: No response from server.';
  } else {
    // Something happened in setting up the request that triggered an Error
    return `Error: ${error.message}`;
  }
};
