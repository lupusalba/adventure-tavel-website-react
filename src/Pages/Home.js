import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Logo />
      <Navigation />

      <div className="intro">

        <h1>Explore our Planet</h1>
        <p>- Finde Hidden places -</p>

        <p className="introDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

      </div>

      
    </div>
    
  )
}

export default Home
