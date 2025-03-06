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

export async function scrapeReservations(url, username, password) {
  // Log in to the restaurant website
  const loginResponse = await axios.post(`${url}/login`, 
    new URLSearchParams({ username, password }), 
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // validateStatus: (status) => status >= 200 && status < 400,
    }

  );
  console.log(loginResponse.data)
  process.exit(1);

  // Extract cookies from the login response
  const cookies = loginResponse.headers['set-cookie'];
  console.log(cookies)
  if (!cookies) {
    throw new Error('Login failed, no cookies received.');
  }

  // Extract the redirect URL from the login response
  const bookingUrlMatch = loginResponse.data.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
  if (!bookingUrlMatch) {
    throw new Error('Login failed, no redirect URL found.');
  }
  const bookingUrl = bookingUrlMatch[1];

  // Follow the redirect to the booking page
  const bookingResponse = await axios.get(`${url}${bookingUrl}`, {
    headers: {
      'Cookie': cookies.join('; '),
    },
  });

  // Load the booking page HTML
  const $ = cheerio.load(bookingResponse.data);

  // Extract available reservations
  const reservations = [];
  $('li.reservation').each((index, element) => {
    const timeRange = $(element).text().trim().split(' - ');
    reservations.push({ start: timeRange[0], end: timeRange[1] });
  });

  // return reservations;
  
}