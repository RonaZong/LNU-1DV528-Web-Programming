import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeReservations(url, username, password) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  // Log the dinner response data for debugging
  console.log(`Dinner response data for ${url}:`, response.data);

  // const loginResponse = await axios.post(`${url}/login`, qs.stringify({
  //   username,
  //   password,
  // }), {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   maxRedirects: 0,
  //   validateStatus: (status) => status >= 200 && status < 400,
  // });
  const loginResponse = await axios.post(`${url}/login`, {
    username,
    password,
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    maxRedirects: 0,
    validateStatus: (status) => status >= 200 && status < 400,
  });
  console.log(loginResponse.data);

  process.exit(1);
  // const $ = cheerio.load(loginResponse.data);
  // const cookies = loginResponse.headers['set-cookie'];

  // const response = await axios.get(`${url}/reservations`, {
  //   headers: { Cookie: cookies.join('; ') }
  // });

  // return response.data.reservations;
}