import axios from 'axios';

export async function scrapeCinema(url, days) {
  const response = await axios.get(url);
  const movies = response.data.movies.filter(movie => days.includes(movie.day));
  return movies;
}