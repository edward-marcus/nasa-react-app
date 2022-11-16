import React from 'react';
import '../styles/LoadingPlaceholder.css';

function LoadingPlaceholder() {
  return (
    <div className='loading-placeholder'>
      <h2>Loading images and articles...</h2>

      <img src={require('../images/Rotating_earth.gif')} alt='rotating Earth' />
    </div>
  );
}

export default LoadingPlaceholder;
