import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

const sendAreas = async (areas) => {
  try {
    const { data } = await api.post('/calculate', { areas });
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export default sendAreas;
