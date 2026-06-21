import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import './Home.css'

const teasers = [
  {
    icon: '👥', title: 'About Us', to: '/about',
    desc: 'Learn our story, our team of visionary founders, and what drives QuantaqTech to push boundaries.'
  },
  {
    icon: '🎯', title: 'Our Mission', to: '/mission',
    desc: "We're on a mission to bridge technology and business. Discover the purpose that powers every product we build."
  },
  {
    icon: '🔭', title: 'Our Vision', to: '/vision',
    desc: 'See the future we\'re building — a world where every Indian business thrives on world-class technology.'
  },
  {
    icon: '⚙️', title: 'Our Services', to: '/services',
    desc: 'From AI & ML to cloud architecture and custom software, explore everything we build for you.'
  },
  {
    icon: '🗂️', title: 'Portfolio', to: '/portfolio',
    desc: 'Real projects. Real results. Browse our work across industries and see the impact we create.'
  },
  {
    icon: '📬', title: 'Contact Us', to: '/contact',
    desc: 'Ready to build something great? Get in touch with our team and start your project today.'
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Teaser Grid */}
      <section className="home-teasers">
        <div className="home-teasers-inner">
          <h2 className="section-title">Explore <span className="text-gradient">QuantaqTech</span></h2>
          <p className="home-teasers-sub">Everything you need to know about us — in one click</p>
          <div className="teasers-grid">
            {teasers.map(t => (
              <Link to={t.to} key={t.to} className="teaser-card glass-card">
                <div className="teaser-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <span className="teaser-arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="home-cta">
        <div className="home-cta-inner glass-card">
          <div className="home-cta-glow" />
          <h2>Ready to <span className="text-gradient">Build Something Great?</span></h2>
          <p>Let's turn your idea into a world-class digital product. Our team is ready.</p>
          <Link to="/contact" className="btn-primary">Start Your Project →</Link>
        </div>
      </section>
    </main>
  )
}
