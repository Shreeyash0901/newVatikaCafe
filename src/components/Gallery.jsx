import SectionTitle from './SectionTitle';
import { GALLERY_ITEMS } from '../data';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <SectionTitle
        label="Taste the Craft"
        title="Gallery of Crafts"
        sub="A visual feast before the real one — glimpses of what awaits your plate."
      />

      <div className="gallery-grid fade-in">
        {GALLERY_ITEMS.map(({ dishClass, label }) => (
          <div className="gallery-item" key={label}>
            <div className={`gallery-bg ${dishClass}`} />
            <div className="gallery-overlay">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
