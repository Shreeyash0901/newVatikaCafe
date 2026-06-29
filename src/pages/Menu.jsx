import SectionTitle from '../components/SectionTitle';
import { CRAFT_ITEMS } from '../data/index.jsx';
import '../components/Craft.css';

export default function Menu() {
  return (
    <section id="menu" className="craft-section" style={{ paddingTop: '120px' }}>
      <SectionTitle
        label="Full Menu"
        title="What We Serve"
        sub="Explore our complete selection of vegetarian dishes, crafted with care and tradition."
      />
      <div className="craft-grid">
        {CRAFT_ITEMS.map(({ icon, title, description }) => (
          <div className="craft-item fade-in" key={title}>
            <div className="craft-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
