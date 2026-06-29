import { Link } from 'react-router-dom';
import { NAV_LINKS, FOOTER_HOURS, FOOTER_LEGAL, FOOTER_SOCIALS } from '../data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">🍃 New Vatika Café</div>
          <div className="footer-tagline">Crafted with Care</div>
          <p>
            Adba Slhoos Slreon Road, 5, 12 PM to 9 PM, Nava Miots, Hingoli. An elegant
            destination for fine vegetarian cuisine in Maharashtra.
          </p>
          <div className="footer-social">
            {FOOTER_SOCIALS.map(({ icon, label, href }) => (
              <a key={label} className="social-icon" href={href} aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h4>Hours</h4>
          <ul>
            {FOOTER_HOURS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            {FOOTER_LEGAL.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed with care · Copyright © 2025 New Vatika Café. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
