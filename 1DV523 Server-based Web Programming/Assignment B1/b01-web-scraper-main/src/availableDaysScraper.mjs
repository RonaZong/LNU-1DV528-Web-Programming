import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * Scrape available days from the calendar links.
 *
 * @param {Array} calendarLinks The array of calendar links to scrape available days from each user.
 * @returns {Array} The array of common available days.
 */

export async function scrapeAvailableDays(calendarLinks) {
  const availableDays = {};

  for (const calendarLink of calendarLinks) {
    const userResponse = await axios.get(calendarLink);
    const $ = cheerio.load(userResponse.data);
    // Log the user calendar response data for debugging
    // console.log(`User Calendar response data for ${link}:`, userResponse.data)
    // console.log(`HTML content for ${link}:`, userPage.html());

    const days = [];
    $('table tbody tr td').each((index, element) => {
      const day = $(element).text().trim();
      if (day === 'ok' || day === 'OK') {
        if (index === 0) {
          days.push('Friday');
        };
        if (index === 1) {
          days.push('Saturday');
        };
        if (index === 2) {
          days.push('Sunday');
        };
      };
    });
    availableDays[calendarLink] = days;
  }
  // console.log('Available Days:', availableDays);

  const commonAvailableDays = ['Friday', 'Saturday', 'Sunday'].filter((day) =>
    Object.values(availableDays).every((days) => days.includes(day))
  );
  // console.log('Common available days:', commonAvailableDays);

  return commonAvailableDays;
}
