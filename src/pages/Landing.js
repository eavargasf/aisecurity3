// src/pages/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <h1>Welcome to Our Web App</h1>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </div>
);

export default Landing;
