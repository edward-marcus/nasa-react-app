import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={require('../images/nasa-logo.png')} alt='nasa logo' />
      </div>
      <span>Check the latest articles and videos from NASA!</span>
    </header>
  );
}

export default Header;
