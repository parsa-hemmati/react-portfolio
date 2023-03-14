import React from 'react';
import './HomePage.css';


function HomePage() {
  return (
    <div className="container">
      <h1>Parsa Hemmati</h1>
      <img src={process.env.PUBLIC_URL + "./images/headshot.jpg"} alt="My picture" className="img-fluid" />
      <p className="lead">Welcome to my portfolio website!</p>
    </div>
  );
}

export default HomePage;
