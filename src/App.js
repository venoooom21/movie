import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= parseFloat(rating));
    }
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of the new movie',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
    };
    addMovie(newMovie);
  };

  return (
    <div className="App">
      <button onClick={handleAddMovie}>Add a New Movie</button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;