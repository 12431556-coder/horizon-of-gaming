import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src="public/images/logo.png" alt="Horizon of Gaming Logo" className="logo" />
        <h1>Horizon of Gaming</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  )
}

export default Header
