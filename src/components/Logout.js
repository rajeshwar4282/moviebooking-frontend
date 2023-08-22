import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    axios
      .get('http://54.221.6.173:8000/api/v1.0/moviebooking/logout/')
      .then((response) => {
        localStorage.setItem('username', '');
        console.log('User logged out successfully');
        // Handle successful logout
        
      })
      .catch((error) => {
        console.log('An error occurred during logout');
      });
  }, []);

  return <h2 className="fs-1 fw-bold text-center">Logged out successfully!</h2>;
};

export default Logout;
