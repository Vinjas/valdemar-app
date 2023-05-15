import axios from 'axios';
import { HOST } from './constants';

export async function getWishlist(collectionId) {
  const url = `${ HOST }/books/collections/${ collectionId }`;

  const token = localStorage.getItem('token');

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
