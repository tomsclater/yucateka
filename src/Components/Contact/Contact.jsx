import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to drop us a message to get more information below.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />yucatekart@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 123-345-456</li>
                <li><img src={location_icon} alt="" />123 Mexico Lane, Mexico</li>
            </ul>
        </div>
        <div className="contact-col">
          <form >
            <label>
              Your name
            </label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label >
              Phone Number
            </label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>
              Write your message here
            </label>
            <textarea name="message" rows="6" placeholder="Enter your message" required ></textarea>
            <button type="submit" className="btn dark-btn">Submit now 🡢</button>
          </form>
          <span></span>
        </div>
    </div>
  )
}

export default Contact