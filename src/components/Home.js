import React from 'react';

const Home = () => {
  return (
    <div>
      <marquee scrollamount="15">
        <h1 className="text-primary">Welcome to Movie Booking App</h1>
      </marquee>
      <br></br>
      <p className="text-center fs-4 ">
        Explore the latest movies and book tickets with ease!
      </p>
    </div>
  );
};

export default Home;
