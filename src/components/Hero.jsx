import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚀 Next-Gen Technology</div>
        <h1 className="hero-title">
          Shaping the Future with{' '}
          <span className="text-gradient">Quantum Innovation</span>
        </h1>
        <p className="hero-subtitle">
          We build scalable software, AI solutions, and cloud infrastructure
          that accelerate your business growth.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo('services')}>Explore Services</button>
          <button className="btn-secondary" onClick={() => scrollTo('portfolio')}>View Our Work</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>50+</span><p>Projects</p></div>
          <div className="stat"><span>99%</span><p>Satisfaction</p></div>
          <div className="stat"><span>3+</span><p>Years</p></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glass-card main-card">
          <div className="card-glow" />
          <div className="cube-container">
            <div className="cube">
              <div className="face front" /><div className="face back" />
              <div className="face right" /><div className="face left" />
              <div className="face top" /><div className="face bottom" />
            </div>
          </div>
          <div className="floating-badge badge-1 glass-card">AI Ready</div>
          <div className="floating-badge badge-2 glass-card">Cloud Native</div>
        </div>
      </div>
    </section>
  )
}
