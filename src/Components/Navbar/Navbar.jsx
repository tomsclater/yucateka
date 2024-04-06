import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="container">
        <img src={logo} alt="" className="logo" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar