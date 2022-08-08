import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Navigation
