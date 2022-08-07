import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/travel">Travel</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation
