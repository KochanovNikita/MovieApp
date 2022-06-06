import { API_KEY } from './constants';

const getData = async (uri) => {
  try {
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    const json = response.json();
    return json;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default getData;
