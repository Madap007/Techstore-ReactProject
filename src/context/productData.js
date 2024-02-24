import axios from 'axios'


export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/items');
    const data = response.data;
    

    return data; // Assuming courses is an array in the server response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};