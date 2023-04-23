import axios from 'axios';
import { HOST } from './constants';

export async function getAllCollections() {
  const url = `${ HOST }/collections`;

  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB2YWxkZW1hci5jb20iLCJleHAiOjE2ODE1Nzc4MTgsImlhdCI6MTY4MTU1OTgxOH0.cCCK2zkBZEoflE_iaoOkB3xEFirlbMXroOGhopDHT_Q1o7_arBFHwFjdFSJ0WWP7sqsCYHYiqnPWiOKnJm-Yug';

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value'
  };

  const mocked = require('../mocks/collections.json');

  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch (error) {
    return error;
  }
}
