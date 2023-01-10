import React from 'react'
import ScrollDown from './ScrollDown';
import './home.css'

const Data = () => {
  return (
    <div className="home__data">
      <div className="home__titles">
        <h1 className="home__title">Charlotte Raz </h1>
        <h3 className="home__subtitle">Frontend Developer</h3>
      </div>
      
      <p className="home__description">
        I'm Charlotte. I enjoy building creative products and bringing them to life.
      </p>

      <ScrollDown />
    </div>
  );
}

export default Data