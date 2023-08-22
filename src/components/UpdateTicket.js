import React, { useState } from 'react';
import axios from 'axios';

const UpdateTicket = () => {
  const [movieId, setMovieId] = useState('');
  const [movieName, setMovieName] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://54.221.6.173:8000/api/v1.0/moviebooking/${movieName}/update/${movieId}/`, {
        movie_id : movieId,
        movie_name : movieName
      });
      setUpdateStatus(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setUpdateStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while updating the ticket.');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">Update Ticket</h2>
      <br></br>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="movieId" className="form-label fw-bold">Movie ID:</label>
          <input
            type="number"
            className="form-control"
            id="movieId"
            placeholder='Enter Movie ID'
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="movieName" className="form-label fw-bold">Movie Name:</label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            placeholder='Enter Movie Name'
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <br></br>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-outline-danger">Update Ticket</button>
        </div>
      </form>

      <br></br>
      {updateStatus && <p className="fs-4 fw-bold text-center">{updateStatus}</p>}
      {errorMessage && <p className="fs-4 fw-bold text-center">{errorMessage}</p>}
    </div>
  );
};

export default UpdateTicket;
