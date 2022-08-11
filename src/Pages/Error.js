import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import Background from '../images/lost404.jpg'

const Error = () => {
  return (
    <div className="onePage errorPage" style={{ backgroundImage:`url(${Background})` }}>
      <div className="errorPageText">
        <h1>You are lost mate!</h1>
        <a className="btn-explore" href="/">This is the way Home</a>
        <p className="errorPageNotFound">Error 404 page not found</p>
      </div>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Error
