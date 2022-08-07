import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import contactBgImage from '../images/contactBackground.jpg'

const Contact = () => {
  return (
    <div className="contactPage onePage" style={{ backgroundImage:`url(${contactBgImage})`}}>
      
      <Logo />
      <Navigation />
      <div className="contactForm">
        <h1>Contact Us NOW</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  )
}

export default Contact
