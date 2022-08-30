import MenuIcon from '../images/icon-hamburger.svg'
import MenuIconClose from '../images/icon-close.svg'
import Logo from '../images/logo.png'

const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
}

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
}

const Navigation = () => {
  return (
    <div id="navigationContainer">
      {/* <nav id="menu">
        <img src={Logo} alt="Logo" className="logo" />

        <ul className="navigation">
          <li>
            <a href="/contact" className="navLink">
              Contact
            </a>
          </li>
          <li>
            <a href="/about" className="navLink">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="navLink">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="navLink">
              Destinations
            </a>
          </li>
          <li>
            <a href="/destinations" className="navLink">
              Home
            </a>
          </li>
        </ul>
      </nav> */}


      <div id="myNav" className="overlay">

        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>


        <div className="overlay-content">
          <ul className="">
            <li>
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li>
              <a href="/destinations" className="navLink">
                Destinations
              </a>
            </li>
            <li>
              <a href="/services" className="navLink">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="navLink">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>


          </ul>
        </div>

      </div>

      <span onClick={openNav} id="navIcon"><img src={MenuIcon} height="40" width="40" /></span>
    </div>
  )
}

export default Navigation
