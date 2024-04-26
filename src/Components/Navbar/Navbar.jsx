import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);
  

  return (
    <nav className={`'container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo" />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>About Us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='events' smooth={true} offset={-260} duration={500}>Events</Link></li>
            <li><Link to='tesimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar