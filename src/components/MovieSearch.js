import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://54.221.6.173:8000/api/v1.0/moviebooking/movies/search/${searchTerm}/`);
      setMovies(response.data);
      setErrorMessage('');
    } catch (error) {
      setMovies([]);
      setErrorMessage('Movie not found.');
    }
  };

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">Movie Search</h2>
      <br></br>
      <form onSubmit={handleSearch}>
        <div className="form-group d-flex">
          <label htmlFor="search" className="form-label fw-bold visually-hidden">Search:</label>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              id="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </form>

      <br></br>
      {errorMessage && <p className="fs-4 fw-bold text-center">{errorMessage}</p>}

      {movies.length > 0 && (
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="table-danger text-center">
              <th>Movie Name</th>
              <th>Theatre Name</th>
              <th>Total Tickets Allotted</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} className="table-light text-center">
                <td>{movie.movie_name}</td>
                <td>{movie.theatre_name}</td>
                <td>{movie.total_tickets_allotted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MovieSearch;
