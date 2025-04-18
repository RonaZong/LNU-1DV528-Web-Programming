import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * Scrape reservations from the restaurant website.
 *
 * @param {String} url The URL of the restaurant website.
 * @param {String} username The username for login.
 * @param {String} password The password for login.
 * @returns {Promise<Array>} The available reservations.
 */

export async function scrapeReservations(url, username, password, days) {
  // const response = await axios.get(url);
  // const $ = cheerio.load(response.data);
  // Log the dinner response data for debugging
  // console.log(`Dinner response data for ${url}:`, response.data);

  // Log in to the restaurant website
  const loginResponse = await axios.post(`${url}/login`, 
    new URLSearchParams({ username, password }), 
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400,
    }
  );
  // Log the login response data for debugging
  // console.log(loginResponse.data); //Found. Redirecting to login/booking

  // Extract cookies from the login response
  const cookies = loginResponse.headers['set-cookie'];
  if (!cookies) {
    throw new Error('Login failed, no cookies received.');  
  }

  // Follow the redirect to the booking page
  const bookingResponse = await axios.get(`${url}/login/booking`, {
    headers: {
      'Cookie': cookies.join('; '),
    },
  });
  const $ = cheerio.load(bookingResponse.data);
  
  // Extract available reservations
  const reservations = [];
  $('input[type="radio"]').each((index, element) => {
    const value = $(element).attr('value'); // e.g., "fri1416"
    const day = value.slice(0, 3); // Extract the day prefix (e.g., "fri")
    const timeSlot = $(element).next('span').text().trim(); // e.g., "14-16 Free"
    if (days.map(d => d.slice(0, 3).toLowerCase()).includes(day) && timeSlot.includes('Free')) {
      const [start, end] = timeSlot.split(' ')[0].split('-');
      reservations.push({ day, start, end });
    }
  });

  // console.log('Available reservations:', reservations)

  return reservations;
}