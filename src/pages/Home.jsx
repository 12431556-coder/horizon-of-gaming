import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Horizon of Gaming</h2>
        <p>Your gateway to consoles, accessories, and epic adventures.</p>
        <br />
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      {/* Top Consoles Showcase */}
      <h1>Top Best Selling Consoles</h1>
      <section className="pics">
        <div className="image-box">
          <img src="/images/ps5.png" alt="PS5 Slim" />
          <div className="caption">PS5 Slim</div>
        </div>
        <div className="image-box">
          <img src="/images/ps5pro.jpeg" alt="PS5 Pro" />
          <div className="caption">PS5 Pro</div>
        </div>
        <div className="image-box">
          <img src="/images/xbox-series-x.png" alt="Xbox Series X" />
          <div className="caption">Xbox Series X</div>
        </div>
        <div className="image-box">
          <img src="/images/Nintendo-Switch-2.jpeg" alt="Nintendo Switch 2" />
          <div className="caption">Nintendo Switch 2</div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="gamesboxtitle">
        <h2>Find your Best Games in the World of Entertainment</h2>
      </section>
      <section className="featured-games">
        <div className="game-card">
          <img src="/images/forbidden west.jpeg" alt="Horizon Forbidden West" />
          <h3>Horizon Forbidden West</h3>
          <p>Explore epic adventures with next-gen visuals.</p>
          <Link to="/products" className="btn">Order Now</Link>
        </div>
        <div className="game-card">
          <img src="/images/james.jpeg" alt="First Light" />
          <h3>First Light (Upcoming)</h3>
          <p>Step into the world of espionage and action.</p>
          <Link to="/products" className="btn">Pre-Order Now</Link>
        </div>
        <div className="game-card">
          <img src="/images/Red_Dead_Redemption_II.jpeg" alt="Red Dead Redemption 2" />
          <h3>Red Dead Redemption II</h3>
          <p>A sprawling, meticulously detailed Western tragedy.</p>
          <Link to="/products" className="btn">Order Now</Link>
        </div>
      </section>

      {/* Accessories Preview */}
      <h2>Gear Up for Victory: Premium Accessories for Every Setup</h2>
      <section className="accessories-wrapper">
        <div className="accs-card">
          <img src="/images/mouse.jpeg" alt="PC Accessories" />
          <h3>PC</h3>
          <Link to="/products" className="btn">View Products</Link>
        </div>
        <div className="accs-card">
          <img src="/images/ps5acc.jpg" alt="Playstation Accessories" />
          <h3>Playstation</h3>
          <Link to="/products" className="btn">View Products</Link>
        </div>
        <div className="accs-card">
          <img src="/images/XBOXacc.jpg" alt="Xbox Accessories" />
          <h3>XBOX</h3>
          <Link to="/products" className="btn">View Products</Link>
        </div>
        <div className="accs-card">
          <img src="/images/nin2 acc.jpg" alt="Nintendo Switch Accessories" />
          <h3>Nintendo Switch</h3>
          <Link to="/products" className="btn">View Products</Link>
        </div>
        <div className="accs-card">
          <img src="/images/giftcards.webp" alt="Gift Cards" />
          <h3>Gift Cards</h3>
          <Link to="/products" className="btn">View Products</Link>
        </div>
      </section>

      {/* Support Section */}
      <div className="support-section">
        <p className="icon-line">
          <span className="material-symbols-outlined">headset_mic</span>
          CUSTOMER SUPPORT — HUMAN SUPPORT 24/7
        </p>
        <p className="icon-line">
          <span className="material-symbols-outlined">bolt</span>
          SUPER FAST (DELIVERY WITHIN 24 HOURS)
        </p>
      </div>
    </>
  )
}

export default Home
