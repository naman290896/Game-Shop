import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header mb-5'>
      <Link to="/" exact>
        <img className='logo' src={require('../../logo.jpeg')} />
      </Link>
    </div>
  );
};

export default Header;
