import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import bgImage from '../images/homeBackground.jpg'



const Home = () => {
  return (
    <div className="home onePage" style={{ backgroundImage:`url(${bgImage})` }}>
      <Logo />
      <Navigation />

      <div className="intro">

        <h1>Explore our Planet</h1>
        <p>- Finde Hidden places -</p>

        <p className="introDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="/travel" className="btn-explore">Explore now!</a>
      </div>

      
    </div>
    
  )
}

export default Home
