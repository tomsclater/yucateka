import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>
            Uncovering art's beauty, one masterpiece at a time.
            </h1>
            <p>
            Yucateka Gallery stands as a vibrant hub for artistic expression, where every stroke of paint, every sculpted form, and every captured moment holds the power to captivate.
            Find your connection to the world of art and let it transform your perspective. Explore our diverse collection, attend exhibitions or classes, and immerse yourself in creativity.
            </p>
            <button className="btn">
                Explore more
            </button>
        </div>
    </div>
  )
}

export default Hero