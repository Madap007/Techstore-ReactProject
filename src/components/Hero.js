import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
import './Hero.css'

function Hero({ img, title, max, children }) {
    return (
      <div className={`hero-wrapper ${max ? 'max-height' : ''}`}>
        <div className="banner">
          <h1 className="title">{title}</h1>
          {children}
        </div>
      </div>
    );
  }
  
  Hero.defaultProps = {
    img: mainBcg,
  };
  
  export default Hero;