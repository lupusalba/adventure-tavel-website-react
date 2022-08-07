import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import contactBgImage from '../images/contactBackground.jpg'



const submitForm = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const inputObject = Object.fromEntries(formData)

  console.log(inputObject)
}

const Contact = () => {
  return (
    <div className="contactPage onePage" style={{ backgroundImage:`url(${contactBgImage})`}}>
      
      <Logo />
      <Navigation />
      <div className="contactForm">
        <h1>Contact Us NOW!</h1>
        <h3>And Get BEST Deal!</h3>
        
        <form onSubmit={submitForm}>
          <input
            name="title"
            type="text"
            placeholder="Message Title"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
          />

          <textarea
            name="message"
            type="textarea"
            placeholder="Your Message"
          />

          <button type="submit">Submit</button>


        </form>

      </div>
    </div>
  )
}

export default Contact
