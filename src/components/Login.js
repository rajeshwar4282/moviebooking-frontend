import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToRegistration, setRedirectToRegistration] = useState(false);
  const navigate = useNavigate();
  const [loggedInUsername, setLoggedInUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername && storedUsername !== '') {
      setLoggedInUsername(storedUsername);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(`http://54.221.6.173:8000/api/v1.0/moviebooking/login/`, {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('username', response.data.username);
        console.log('User Logged In successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.log('Username And Password Failure');
      });
  };

  const handleRegister = () => {
    setRedirectToRegistration(true);
  };

  if (redirectToRegistration) {
    return <Navigate replace to="/register" />;
  }

  return (
    <div className="container">
      <br></br>
      {loggedInUsername ? (
        <h2 className="fs-1 fw-bold text-center">
          Already logged in as user {loggedInUsername}
        </h2>
      ) : (
        <>
          <h2 className="fs-1 fw-bold text-center">LOGIN</h2>
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
            </div>
            <br></br>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-danger" type="submit">
                Login
              </button>
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={handleRegister}
              >
                New User
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
