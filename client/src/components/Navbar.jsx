import React from 'react';
import {Link} from 'react-router-dom';
import './styles_components/Navbar.css';

function Navbar() {
  return (
    <nav className='container'>
      <Link className='logo' to="/">Logo</Link>
      <ul className='cont'>
        <li className='btn-cont'>
          <Link className='btn' to="/">Home</Link>
        </li>
        <li className='btn-cont'>
          <Link className='btn'  to="/aboutme">About me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar