import axios from 'axios';
import { HOST } from './constants';

export async function getAllCollections() {
  const url = `${ HOST }/collections`;
  const urlTest = 'https://type.fit/api/quotes';

  const mocked = require('../mocks/collections.json');

  try {
    // const { data } = await axios.get(urlTest);

    return mocked;
  } catch (error) {
    return error;
  }
}
