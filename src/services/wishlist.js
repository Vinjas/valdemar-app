import axios from 'axios';
import { HOST, JWT_TOKEN } from './constants';

export async function getUserWishlist() {
  const url = `${ HOST }/wishlists`;

  const token = localStorage.getItem(JWT_TOKEN);

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value'
  };

  try {
    const { data, status } = await axios.get(url, { headers });

    return { data, status };
  } catch (error) {
    return error;
  }
}

export async function postAddBookToWishlist(isbn) {
  const url = `${ HOST }/wishlists`;

  const token = localStorage.getItem(JWT_TOKEN);

  const payload = { isbn };

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value'
  };

  try {
    const data = await axios.post(url, payload, { headers });

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteBookFromWishlist(isbn) {
  const url = `${ HOST }/wishlists`;

  const token = localStorage.getItem(JWT_TOKEN);

  const headers = {
    'Authorization': `Bearer ${ token }`,
    'X-Custom-Header': 'value',
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({ isbn });

  const options = {
    method: 'DELETE',
    headers,
    body
  };

  const response = await fetch(url, options);

  return response;
}
