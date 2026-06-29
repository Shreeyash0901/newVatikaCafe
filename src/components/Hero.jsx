import Button from './Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* CSS scene — stars, building, plants, fairy lights */}
      <div className="hero-scene">
        <div className="stars" />
        <div className="building">
          <div className="building-roof" />
          <div className="building-body">
            <div className="window w1" />
            <div className="window w2" />
            <div className="window w3" />
            <div className="door" />
            <div className="awning" />
          </div>
        </div>
        <div className="plant p1" />
        <div className="plant p2" />
        <div className="plant p3" />
        <div className="fairy-lights">
          <div className="fl-strand" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="hero-bg" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">Welcome to New Vatika Café</div>

        <h1 className="hero-title">
          Experience <span className="gold">Delicious</span>
          <br />
          Dishes, Crafted
          <br />
          with Care.
        </h1>

        <p className="hero-sub">
          An elegant ambiance where every dish tells a story — from slow-cooked curries to
          signature starters, all made with love.
        </p>

        <div className="hero-actions">
          <Button href="#craft" variant="gold">View Menu</Button>
          <Button href="#gallery" variant="outline">Gallery</Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
