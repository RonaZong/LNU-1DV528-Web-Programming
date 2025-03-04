import { scrapeCalendar } from './calendarScraper.js';
import { scrapeCinema } from './cinemaScraper.js';
import { scrapeRestaurant } from './restaurantScraper.js';
import { findRecommendations } from './utils.js';

const startUrl = process.argv[2];

(async () => {
  console.log('Scraping links...OK');
  const freeDays = await scrapeCalendar(startUrl);

  if (freeDays.length === 0) {
    console.log('No common free days found.');
    return;
  }

  console.log('Scraping available days...OK');
  const movies = await scrapeCinema(`${startUrl}/cinema`, freeDays);

  console.log('Scraping showtimes...OK');
  const reservations = await scrapeRestaurant(`${startUrl}/restaurant`, 'zeke', 'coys');

  console.log('Scraping possible reservations...OK');
  const recommendations = findRecommendations(freeDays, movies, reservations);

  console.log('Recommendations\n===============');
  recommendations.forEach(recommendation => console.log(`* ${recommendation}`));
})();