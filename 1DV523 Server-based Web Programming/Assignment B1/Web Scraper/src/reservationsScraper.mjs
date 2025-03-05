import axios from 'axios';

export async function scrapeReservations(url, username, password) {
  const loginResponse = await axios.post(`${url}/login`, { username, password });
  const cookies = loginResponse.headers['set-cookie'];

  const response = await axios.get(`${url}/reservations`, {
    headers: { Cookie: cookies.join('; ') }
  });

  return response.data.reservations;
}