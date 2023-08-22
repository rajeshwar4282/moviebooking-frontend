import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://54.221.6.173:8000/api/v1.0/moviebooking/all');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container">
      <h2 class="fs-1 fw-bold text-center">MOVIE LIST</h2>
      <br></br>
      <table class="table table-bordered table-hover">
        <thead>
          <tr class="table-danger text-center">
            <th>Movie ID</th>
            <th>Movie Name</th>
            <th>Theatre Name</th>
            <th>Total Tickets Allotted</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} class="table-light text-center">
              <td>{movie.id}</td>
              <td>{movie.movie_name}</td>
              <td>{movie.theatre_name}</td>
              <td>{movie.total_tickets_allotted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
