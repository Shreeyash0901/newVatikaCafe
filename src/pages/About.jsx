import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section style={{ paddingTop: '140px', background: 'var(--navy)', minHeight: '60vh' }}>
      <SectionTitle
        label="Our Story"
        title="About New Vatika Café"
        sub="Established in 2020, New Vatika Café is a labour of love rooted in the heart of Hingoli, Maharashtra."
      />
      <div style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(244,225,210,0.75)', lineHeight: 1.9, fontWeight: 300 }}>
        <p style={{ marginBottom: '24px' }}>
          We believe that great food starts with honest ingredients, unhurried preparation, and an
          environment that feels like home. Every dish on our menu carries a piece of that
          philosophy — from the slow-simmered dal to our signature paneer makhani.
        </p>
        <p>
          Our kitchen is entirely vegetarian, drawing on both classic Maharashtrian flavours and
          pan-Indian traditions. We are proud to serve our community and welcome guests who are
          just passing through. Pull up a chair — every visit is a story we want to be part of.
        </p>
      </div>
    </section>
  );
}
