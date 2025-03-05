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