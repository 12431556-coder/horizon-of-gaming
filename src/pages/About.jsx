import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to Horizon of Gaming — your ultimate destination for PlayStation, Xbox, Nintendo
        and PC products. We're passionate gamers dedicated to bringing you the latest consoles,
        accessories, and gift cards from official sources.
      </p>
      <p>
        Our mission is simple: to make gaming accessible, exciting, and reliable for everyone.
        Whether you're upgrading your setup or looking for the perfect gift, we've got you covered
        with authentic products and a professional shopping experience.
      </p>
      <p>
        We believe gaming connects people, inspires creativity, and builds communities. That's why
        we focus on quality, trust, and design — so every gamer feels at home here.
      </p>
      <br /><br />
      <Link to="/products" className="btn">Explore Products</Link>
    </section>
  )
}

export default About
