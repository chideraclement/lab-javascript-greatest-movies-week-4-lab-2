// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log(movies.length);
function getAllDirectors(movies) {
    let uniqueDirectors = [];
    movies.map((movie) => { 
        if (!uniqueDirectors.includes(movie.director)) { 
            uniqueDirectors.push(movie.director);
        }
      });
      return uniqueDirector;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (!movies.length) return 0;
    let stevenDrama = movies.filter((movie) => {
        return (
          movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
      });
      let dramaMovies = stevenDrama.length;
  console.log(dramaMovies);
  return dramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (!movies.length) return 0;
    let score = movies.reduce((accumulator, currentValue) => {
        if (currentValue.score) { 
            return accumulator + currentValue.score;
        }
 else {
    return accumulator;
}
}, 0);

  let averageNotFixed = score / movies.length;
  let averageFixed = (score / movies.length).toFixed(2);
  let averageFixedWithNumber = Number(averageFixed);

  console.log(averageNotFixed);
  console.log(typeof averageFixed);
  console.log(typeof averageFixedWithNumber);

  return averageFixedWithNumber;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (!movies.length) return 0;
    let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
    console.log(scoresAverage(dramaMovies));
    return scoresAverage(dramaMovies);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesInnerCopy = movies.map((movie) => movie);

  moviesInnerCopy.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) {
      return movieA.year - movieB.year;
    } else if (movieA.year < movieB.year) {
      return movieA.year - movieB.year;
    } else return movieA.title.localeCompare(movieB.title);
  });

  return moviesInnerCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let response = movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  console.log(response);
  return response;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    // Create a deep copy of the original array to avoid mutation
    const newArray = JSON.parse(JSON.stringify(movies));

    // Iterate through each movie object in the array
    newArray.forEach(movie => {
        // Extract hours and minutes from the duration string
        const durationArray = movie.duration.split(' ');
        let totalMinutes = 0;

        durationArray.forEach(duration => {
            if (duration.includes('h')) {
                totalMinutes += parseInt(duration) * 60; // Convert hours to minutes
            } else if (duration.includes('min')) {
                totalMinutes += parseInt(duration); // Add minutes
            }
        });

        // Update the duration property with the total minutes
        movie.duration = totalMinutes;
    });

    return newArray;
}

// Example usage:
const movies = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "score": 9.3
    },
    {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "duration": "2h 55min",
        "genre": ["Crime", "Drama"],
        "score": 9.2
    }
];

const moviesInMinutes = turnHoursToMinutes(movies);
console.log(moviesInMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    // Create an object to store total score and count of movies for each year
    const yearStats = {};

    // Iterate through each movie object in the array
    movies.forEach(movie => {
        const year = movie.year;
        const score = movie.score;

        // If the year already exists in yearStats, update the total score and count
        if (yearStats[year]) {
            yearStats[year].totalScore += score;
            yearStats[year].movieCount++;
        } else { // Otherwise, initialize the year with the score and count of 1
            yearStats[year] = {
                totalScore: score,
                movieCount: 1
            };
        }
    });

    let bestYear = 0;
    let bestAverage = 0;

    // Calculate the average score for each year and find the best year
    for (const year in yearStats) {
        const averageScore = yearStats[year].totalScore / yearStats[year].movieCount;
        if (averageScore > bestAverage) {
            bestYear = year;
            bestAverage = averageScore;
        }
    }

    // Return the result string
    return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`;
}

// Example usage:
const movies = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": 142,
        "genre": ["Crime", "Drama"],
        "score": 9.3
    },
    {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "duration": 175,
        "genre": ["Crime", "Drama"],
        "score": 9.2
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "duration": 152,
        "genre": ["Action", "Crime", "Drama"],
        "score": 9.0
    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "duration": 154,
        "genre": ["Crime", "Drama"],
        "score": 8.9
    }
];

console.log(bestYearAvg(movies));

