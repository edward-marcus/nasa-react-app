import React from 'react';
import '../styles/Nasa.css';

function Nasa({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className='container' key={post.title}>
          <h1>{post.title}</h1>
          <img
            src={
              post.hdurl ? post.hdurl : require('../images/fallback-image.jpg') //Some images fetched from API are not provided with a source => broken image, so this code makes sure to set the image source to a fallback static image if src is not provided by the API
            }
            alt={post.title}
            loading='lazy'
          />
          <div className='description'>{post.explanation}</div>
          <div className='date'>{post.date}</div>
        </div>
      ))}
    </>
  );
}

export default Nasa;
