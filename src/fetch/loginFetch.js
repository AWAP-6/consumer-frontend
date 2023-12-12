import axios from 'axios';

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post('https://awap-6server.onrender.com/login', loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response);
      throw new Error(error.response.data.message || 'Unknown error occurred');
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received');
    } else {
      console.error('Error setting up request:', error.message);
      throw new Error('Error setting up request');
    }
  }
};