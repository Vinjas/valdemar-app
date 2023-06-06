import axios from 'axios';
import { HOST } from './constants';

export async function getAllCollections() {
  const url = `${ HOST }/collections`;

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
