import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="row">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No movies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;