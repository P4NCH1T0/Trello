import React from 'react';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import {Routes, Route, Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/home">Logo</Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/aboutme">About me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar