import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('https://awap-6server.onrender.com/registration', userData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Unknown error occurred');
    } else if (error.request) {
      throw new Error('No response received');
    } else {
      throw new Error('Error setting up request');
    }
  }
};