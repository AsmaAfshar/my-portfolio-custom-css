
import Navbar from './Navbar'
import React from 'react'
import "../app/styles/hero.css"

const Hero = () => {
  return (
    <div id='hero' 
    className='hero-div'
    >
      <Navbar />
      <div className='hero-content'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
          <div className='hero-msin'>
            <p data-aos="fade-down">I&rsquo;m</p>
            <p data-aos="fade-down">Asma</p>
            <p data-aos="fade-down">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
