import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
// import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
        </div>
    </div>
  )
}

export default About