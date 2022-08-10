import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import aboutBgImage from '../images/aboutBackground2.jpg'



const About = () => {
  return (
    <div className="aboutPage onePage" style={{
      backgroundImage: `url(${aboutBgImage})`
    }}>
      <Logo />
      <Navigation />

      <div className="aboutIntro">
        <div className="aboutTitle">
          <h2>We are THE Explorers!</h2>
          <h1>We are THE Adventurers!</h1>
          <h2>And we brought our expiriences to YOU!</h2>
        </div>

        <p className="aboutIntroDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="/travel" className="btn-explore">Find YOUR Adventure NOW!</a>
      </div>


    </div>
  )
}

export default About
