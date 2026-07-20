import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import logo from './assets/RealMadridLOGpesuni.png'

export default function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="icon" />
        <h1>MADRID STORE</h1>
      </div>
      <nav>
        <Link to="/" ><FaHome /> HOME</Link>
        <Link to="/Buy-Now"><FaShoppingCart /> BUY NOW</Link>
        <Link to="/About"> <FaInfoCircle /> ABOUT US </Link>
        <Link style={{ cursor: 'pointer' }} id="mode" onClick={() => setTheme(theme === '' ? 'white' : '')}>
          {theme === '' ? <FaSun /> : <FaMoon />}
        </Link>
      </nav>
    </header>
  )
}