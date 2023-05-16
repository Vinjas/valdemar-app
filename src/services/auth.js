import axios from 'axios';
import { HOST } from './constants';

export async function postLogin(loginPayload) {
  const url = `${ HOST }/authenticate`;

  const headers = {
    'X-Custom-Header': 'value'
  };

  const payload = loginPayload;

  try {
    const { data, status } = await axios.post(url, payload, { headers });

    return { data, status };
  } catch (error) {
    return error;
  }
}

export async function getLogout(token) {
  const url = `${ HOST }/logout`;

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

export async function postRegister(registerPayload) {
  const url = `${ HOST }/register`;

  const headers = {
    'X-Custom-Header': 'value'
  };

  const payload = registerPayload;

  try {
    const { data } = await axios.post(url, payload, { headers });

    return data;
  } catch (error) {
    return error;
  }
}
