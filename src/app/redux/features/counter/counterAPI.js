import axios from 'axios';

export const fetchCounter = async () => {
  const response = await axios.get('/api/counter');
  return response.data;
};
