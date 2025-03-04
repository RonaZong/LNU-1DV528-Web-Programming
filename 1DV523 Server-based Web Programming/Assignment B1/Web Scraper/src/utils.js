export function findRecommendations(freeDays, movies, reservations) {
    const recommendations = [];
  
    for (const day of freeDays) {
      const dayMovies = movies.filter(movie => movie.day === day);
      const dayReservations = reservations.filter(reservation => reservation.day === day);
  
      for (const movie of dayMovies) {
        const movieEndTime = new Date(`1970-01-01T${movie.time}`).getTime() + 2 * 60 * 60 * 1000;
        const availableReservations = dayReservations.filter(reservation =>
          new Date(`1970-01-01T${reservation.time}`).getTime() >= movieEndTime
        );
  
        for (const reservation of availableReservations) {
          recommendations.push(`On ${day} the movie "${movie.title}" starts at ${movie.time} and there is a free table between ${reservation.time}.`);
        }
      }
    }
  
    return recommendations;
  }