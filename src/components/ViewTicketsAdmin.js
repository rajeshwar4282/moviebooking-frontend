import React, { useState } from 'react';
import axios from 'axios';

function ViewTicketsAdmin() {
  const [tickets, setTickets] = useState([]);
  const [error,setErrors] = useState([]);
  fetchTickets();
  async function fetchTickets() {
    try {
      const username = localStorage.getItem('username');

      const response = await axios.get('http://54.221.6.173:8000/api/v1.0/moviebooking/tickets/list/', {
        params:{
          username : username,
      }
      });
      if (response.data.error === ""){
        setTickets(response.data.ticket);
        setErrors('')
      }
      else{
        setErrors(response.data.error)
        throw new Error(error, response.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">View Tickets</h2>
      <br></br>
      {error ? (
        <p className="fs-4 fw-bold text-center">{error}</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="table-danger text-center">
              <th>Movie Name</th>
              <th>Theatre Name</th>
              <th>Number of Tickets</th>
              <th>Seat Number</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="table-light text-center">
                <td>{ticket.movie.movie_name}</td>
                <td>{ticket.movie.theatre_name}</td>
                <td>{ticket.num_tickets}</td>
                <td>{ticket.seat_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewTicketsAdmin;

