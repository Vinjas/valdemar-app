import axios from 'axios';
import { HOST } from './constants';

export async function getBooksByCollection(collectionId) {
  const url = `${ HOST }/books/collections/${ collectionId }`;

  const mocked = require('../mocks/books-by-collections.json');

  try {
    // const { data } = await axios.get(url);

    return mocked;
  } catch (error) {
    return error;
  }
}
