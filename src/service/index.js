import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const getVagas = async () => {
  try {
    const response = await instance.get('/vagas');
    return response.data;
  } catch (error) {
    throw error;
  }
};
