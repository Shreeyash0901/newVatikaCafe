import "./Hero.css";
import { Link } from "react-router-dom";
import { NAV_LINKS } from '../data';
export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-subtitle">
          Welcome To
        </p>

        <h1 className="hero-title">
          New Vatika
        </h1>

        <h2 className="hero-title-outline">
          Café
        </h2>

        <p className="hero-description">
          Experience handcrafted flavours, premium ambience,
          and unforgettable moments with every bite.
        </p>

        <div className="hero-buttons">

       
  <Link to="/menu" className="btn-primary">
    Explore Menu
  </Link>

          

          <Link to="/contact" className="btn-primary">
            Book Table
          </Link>

        </div>

        <div className="hero-stats">

          <div className="stat">
            <h3>100+</h3>
            <p>Dishes</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Vegetarian</p>
          </div>

          <div className="stat">
            <h3>5★</h3>
            <p>Experience</p>
          </div>

          <div className="stat">
            <h3>₹50+</h3>
            <p>Starting Price</p>
          </div>

        </div>

      </div>

      <div className="scroll-down">
        Scroll
      </div>

    </section>
  );
}