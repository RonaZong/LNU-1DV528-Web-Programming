import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeShowTimes(url, days) {
  const movies = [];

  for (const day of days) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    // Log the cinema response data for debugging
    // console.log(`Cinema response data for ${url}:`, response.data);
  
    const dayValue = $(`#day option:contains(${day})`).val();
    if (!dayValue) {
      console.log(`No value found for day: ${day}`);
      continue;
    }
    console.log(`Day value for ${day}:`, dayValue);

    const movieOptions = $('#movie option');
    if (movieOptions.length === 0) {
      console.log(`No movies found on ${day}.`);
      continue;
    }

    movieOptions.each((index, element) => {
      const movieTitle = $(element).text().trim();
      const movieValue = $(element).val();
      if (!movieValue) {
        console.log(`No value found for movie: ${movieTitle}`);
        return;
      }
      if (movieTitle && movieTitle !== '--- Pick a Movie ---') {
        movies.push({ day, dayValue, movieTitle, movieValue });
      }
    });
  }

  for (const movie of movies) {
    const availableTimesResponse = await axios.get(`${url}/check?day=${movie.dayValue}&movie=${movie.movieValue}`);
    const availableTimesData = availableTimesResponse.data;
    // Log the movie response data for debugging
    console.log(`Movie response data for ${movie.movieTitle} on ${movie.day}:`, availableTimesData);
    
    movie.availableTimes = availableTimesData.filter(movie => movie.status !== 0).map(movie => movie.time);
    console.log(`Available times for ${movie.movieTitle} on ${movie.day}:`, movie.availableTimes);
  }

  return movies;
}