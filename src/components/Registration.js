import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://54.221.6.173:8000/api/v1.0/moviebooking/register/', {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
      })
      .then((response) => {
        console.log('User registered successfully');
        navigate('/login');
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An error occurred during registration');
        }
      });
  };

  const alreadyRegistered = localStorage.getItem('username');

  if (alreadyRegistered && alreadyRegistered !== '') {
    return (
      <div className="container">
        <br></br>
        <h2 className="fs-1 fw-bold text-center">Already logged in as user {alreadyRegistered}!</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label fw-bold">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label fw-bold">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label fw-bold">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label fw-bold">
            First Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label fw-bold">
            Last Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <br></br>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-danger" type="submit">
            Register
          </button>
        </div>
      </form>
      <br></br>
      {errorMessage && (
        <p className="fs-4 fw-bold text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default Registration;
