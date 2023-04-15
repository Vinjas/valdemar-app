import axios from 'axios';
import { HOST } from './constants';

export async function getAllCollections() {
  const url = `${ HOST }/collections`;

  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    return error;
  }
}
