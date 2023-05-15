import axios from 'axios';
import { HOST } from './constants';

export async function getAllBooks() {
  const url = `${ HOST }/books`;

  const headers = {
    'X-Custom-Header': 'value'
  };

  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch (error) {
    return error;
  }
}

export async function getBook(bookId) {
  const url = `${ HOST }/books/id/${ bookId }`;

  const headers = {
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

  const headers = {
    'X-Custom-Header': 'value'
  };

  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch (error) {
    return error;
  }
}
