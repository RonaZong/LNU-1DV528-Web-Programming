import { scrapeLinks } from './linksScraper.mjs';
import { scrapeAvailableDays } from './availableDaysScraper.mjs';
import { scrapeShowTimes } from './showTimesScraper.mjs';
import { scrapeReservations } from './reservationsScraper.mjs';
import { findRecommendations } from './recommendations.mjs';

const startUrl = process.argv[2];

if (!startUrl) {
  console.error('Please provide a starting URL as a parameter.');
  process.exit(1);
}

(async () => {
  console.log('Scraping links...OK');
  const { cinemaUrl, dinnerUrl, calendarLinks } = await scrapeLinks(startUrl);

  console.log('Scraping available days...OK');
  const availableDays = await scrapeAvailableDays(calendarLinks);
  if (availableDays.length === 0) {
    console.log('No common available days found.');
    return;
  }

  console.log('Scraping showtimes...OK');
  const movies = await scrapeShowTimes(cinemaUrl, availableDays);
  if (movies.length === 0) {
    console.log('No available times for movies found.');
    return;
  }

// Start here
  console.log('Scraping possible reservations...OK');
  const reservations = await scrapeReservations(dinnerUrl, 'zeke', 'coys');
  console.log(reservations);

  console.log('Recommendations\n===============');
  const recommendations = findRecommendations(availableDays, movies, reservations);
  recommendations.forEach(recommendation => console.log(`* ${recommendation}`));
})();