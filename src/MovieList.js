import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = React.useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A sci-fi epic about space exploration.',
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    }
  ]);

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movie-cards">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;