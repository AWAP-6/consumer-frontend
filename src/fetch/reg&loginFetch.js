import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/registration', userData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('There has been a problem with your fetch operation:', error.response);
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