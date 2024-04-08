import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>Custom Paintings & Classes</h3>
            <h2>Celebrating Artistic Expression</h2>
            <p>Embark on an enriching journey through the captivating world of art with our gallery's vibrant offerings. Our diverse collection of artworks spans across genres, mediums, and cultures, providing a dynamic platform for artists and art enthusiasts alike.</p>
            <p>Yucateka Art was founded by an experienced painter, with years practicing in a professional environment.
              We now offer classes where you can learn techniques such as pallet knife painting. With a commitment to showcasing creativity, fostering dialogue, and nurturing talent, our gallery serves as a nurturing hub for artistic expression and exploration. From solo exhibitions showcasing emerging talents to group shows celebrating established artists, we offer a curated experience that inspires and delights.</p>
            <p>Whether you're a seasoned collector, a budding artist, or simply an admirer of beauty, our gallery invites you to immerse yourself in the transformative power of art and discover new perspectives that enrich the soul.</p>
        </div>
    </div>
  )
}

export default About