import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
import image from '../../assets/hero3.png'
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <>
    <div className="hero-container section">
      <div className="hero-left-side">
        <h1> <span>Latest</span>  Arrivals...</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, sequi? Lorem ipsum dolor sit amet.</p>
        <Link>Shop Now</Link>
      </div>
      <div className="hero-right-side">
      <Tilt><img src={image} alt="" /></Tilt> 
      </div>
    </div>
    </>
  )
}

export default Hero