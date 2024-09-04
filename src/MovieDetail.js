import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    // Example movie data
    const fetchMovie = async () => {
      // Replace with actual API call if applicable
      const movies = [
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
        // Add more movies here
      ];

      const movie = movies.find(m => m.id === parseInt(id));
      setMovie(movie);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailer} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;