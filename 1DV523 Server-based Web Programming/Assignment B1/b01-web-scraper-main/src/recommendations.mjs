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
  
  for (const movie of movies) {
    for (const movieStartTime of movie.availableTimes) {
      const movieEndTime = addMinutesToTime(movieStartTime, 100); // Add 1 hour and 40 minutes (100 minutes) to the movie start time
      const availableTable = reservations.find(reservation => reservation.day === movie.day.slice(0, 3).toLowerCase() && reservation.start >= movieEndTime);
      if (availableTable) {
        recommendations.push(`On ${movie.day} the movie "${movie.movieTitle}" starts at ${movieStartTime} and there is a free table between ${availableTable.start}-${availableTable.end}.`);
      };
    }
  }

  // console.log('Recommendations:', recommendations);
  
  return recommendations;
}

/**
 * Helper function to add minutes to a time string (HH:mm).
 *
 * @param {String} time The time string (e.g., "16:00").
 * @param {Number} minutes The number of minutes to add.
 * @returns {String} The new time string.
 */
function addMinutesToTime(time, minutes) {
  const [hours, mins] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + mins + minutes;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
}