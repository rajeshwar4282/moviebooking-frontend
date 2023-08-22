import React, { useState } from 'react';
import axios from 'axios';

const DeleteMovie = () => {
  const [movieId, setMovieId] = useState('');
  const [movieName, setMovieName] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://54.221.6.173:8000/api/v1.0/moviebooking/${movieName}/delete/${movieId}/`);
      setDeleteStatus(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setDeleteStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while deleting the movie.');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">Delete Movie</h2>
      <br></br>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label htmlFor="movieId" className="form-label fw-bold">
            <span className="label-icon">&#128221;</span> Movie ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="movieId"
            placeholder="Enter Movie ID"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="movieName" className="form-label fw-bold">
            <span className="label-icon"></span> Movie Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            placeholder="Enter Movie Name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <br></br>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-outline-danger">
            Delete Movie
          </button>
        </div>
      </form>

      <br></br>
      {deleteStatus && <p className="fs-4 fw-bold text-center">{deleteStatus}</p>}
      {errorMessage && <p className="fs-4 fw-bold text-center">{errorMessage}</p>}
    </div>
  );
};

export default DeleteMovie;
