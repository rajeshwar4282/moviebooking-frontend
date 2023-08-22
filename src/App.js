import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import TicketBooking from './components/TicketBooking';
import Login from './components/Login';
import AdminView from './components/AdminView';
import Registration from './components/Registration';
import Logout from './components/Logout';
import Home from './components/Home';

function App() {
  localStorage.setItem('username', '');

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">Movie Booking App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link nav-item-font">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link nav-item-font">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link nav-item-font">Movie List</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/search" className="nav-link nav-item-font">Movie Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/tickets/add" className="nav-link nav-item-font">Book Ticket</Link>
              </li>
              <li className="nav-item">
                <Link to="/tickets/list/viewticket" className="nav-link nav-item-font">View Tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/delete/deleteticket" className="nav-link nav-item-font">Delete Movie</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/update/updateticket" className="nav-link nav-item-font">Update Ticket</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link nav-item-font">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/movies" element={<MovieList />} />
        <Route exact path="/movies/search" element={<MovieSearch />} />
        <Route exact path="/tickets/add" element={<TicketBooking />} />
        <Route exact path="/tickets/list/:value" element={<AdminView />} />
        <Route exact path="/movies/delete/:value" element={<AdminView />} />
        <Route exact path="/movies/update/:value" element={<AdminView />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
