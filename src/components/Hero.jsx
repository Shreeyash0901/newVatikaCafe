import "./Hero.css";

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

          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>

          <a href="#contact" className="btn-secondary">
            Book Table
          </a>

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