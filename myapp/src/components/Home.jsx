import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Mainslider from './Mainslider.jsx';
import '.././css/home.css';

const Home = (props) => {
  return (
    <>
      <Mainslider />
      <div className="home1">
        <div className="card1">
          <Link to="/students" className="card-link">
            Students
          </Link>
        </div>
        <div className="card2">
          <Link to="/Institutions" className="card-link">Institutions</Link>
        </div>
        <div className="card3">
          <Link to="/privateorg" className="card-link">Private Organisation</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
