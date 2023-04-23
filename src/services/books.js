import axios from 'axios';
import { HOST } from './constants';

export async function getBook(bookId) {
  const url = `${ HOST }/books/id/${ bookId }`;

  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB2YWxkZW1hci5jb20iLCJleHAiOjE2ODE1Nzc4MTgsImlhdCI6MTY4MTU1OTgxOH0.cCCK2zkBZEoflE_iaoOkB3xEFirlbMXroOGhopDHT_Q1o7_arBFHwFjdFSJ0WWP7sqsCYHYiqnPWiOKnJm-Yug';

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value'
  };

  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch (error) {
    return error;
  }
}

export async function getBooksByCollection(collectionId) {
  const url = `${ HOST }/books/collections/${ collectionId }`;

  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB2YWxkZW1hci5jb20iLCJleHAiOjE2ODE1Nzc4MTgsImlhdCI6MTY4MTU1OTgxOH0.cCCK2zkBZEoflE_iaoOkB3xEFirlbMXroOGhopDHT_Q1o7_arBFHwFjdFSJ0WWP7sqsCYHYiqnPWiOKnJm-Yug';

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value'
  };

  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch (error) {
    return error;
  }
}
