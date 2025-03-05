/**
 * Find recommendations based on available days, movies, and reservations.
 *
 * @param {Array} availableDays The list of available days.
 * @param {Array} showTimes The list of showtimes.
 * @param {Array} reservations The list of reservations.
 * @returns {Array} The list of recommendations.
 */

export function findRecommendations(availableDays, movies, reservations) {
    const recommendations = [];
  
    for (const day of availableDays) {
      const dayMovies = movies.filter(movie => movie.day === day);
      const dayReservations = reservations.filter(reservation => reservation.day === day);
  
      for (const movie of dayMovies) {
        for (const show of movie.availability) {
          if (show.status === 'Sites available') {
            const availableTable = dayReservations.find(reservation => reservation.start <= show.time && reservation.end >= show.time);
            if (availableTable) {
              recommendations.push(`On ${day} the movie "${movie.title}" starts at ${movie.time} and there is a free table between ${availableTable.start}-${availableTable.end}.`);
            }
          }
        }
      }
    }
  
    return recommendations;
  }