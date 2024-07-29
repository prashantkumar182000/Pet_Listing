export const handleError = (error) => {
  console.error(error);
  return { message: 'An error occurred, please try again later.' };
};
