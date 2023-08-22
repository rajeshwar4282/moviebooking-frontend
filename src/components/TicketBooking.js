import React, { useState } from 'react';
import axios from 'axios';

const TicketBooking = () => {
  const [movieName, setMovieName] = useState('');
  const [numTickets, setNumTickets] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://54.221.6.173:8000/api/v1.0/moviebooking/${movieName}/add/`, {
        num_tickets: numTickets,
        seat_number: seatNumber
      });
      setMovieName('');
      setNumTickets('');
      setSeatNumber('');
      setBookingStatus(`Tickets booked successfully! Movie: ${response.data.movie.movie_name}, Tickets: ${response.data.ticket.num_tickets}`);
      setErrorMessage('');
    } catch (error) {
      setBookingStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while booking tickets.');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">Ticket Booking</h2>
      <br></br>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label htmlFor="movieName" className="form-label fw-bold">
            <span className="label-icon">&#128221;</span> Movie Name:
          </label>
          <input type="text" id="movieName" className="form-control" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="numTickets" className="form-label fw-bold">
            <span className="label-icon"></span> Number of Tickets:
          </label>
          <input type="number" id="numTickets" className="form-control" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="seatNumber" className="form-label fw-bold">
            <span className="label-icon">&#128186;</span> Seat Number:
          </label>
          <input type="text" id="seatNumber" className="form-control" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
        </div>
        <br></br>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-outline-danger">
            Book Tickets
          </button>
        </div>
      </form>

      <br></br>
      {bookingStatus && <p className="fs-4 fw-bold text-center">{bookingStatus}</p>}
      {errorMessage && <p className="fs-4 fw-bold text-center">{errorMessage}</p>}
    </div>
  );
};

export default TicketBooking;
