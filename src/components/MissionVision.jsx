import useScrollReveal from '../hooks/useScrollReveal'
import './MissionVision.css'

const values = [
  { icon: '⚡', label: 'Speed' },
  { icon: '🔒', label: 'Security' },
  { icon: '🌍', label: 'Scale' },
  { icon: '💡', label: 'Innovation' },
  { icon: '🤝', label: 'Trust' },
]

export default function MissionVision() {
  const ref = useScrollReveal()

  return (
    <section id="mission" ref={ref} className="scroll-reveal mv-section">
      <div className="section-container">
        <h2 className="section-title">Our <span className="text-gradient">Purpose</span></h2>
        <p className="mv-subtitle">The values and ambitions that drive everything we build at QuantaqTech</p>

        <div className="mv-grid">
          {/* Mission Card */}
          <div className="mv-card glass-card">
            <div className="mv-card-header">
              <div className="mv-icon-wrap mission-icon">🎯</div>
              <span className="mv-tag mission-tag">Mission</span>
            </div>
            <h3>Building Tomorrow's Tech, Today</h3>
            <p>
              At QuantaqTech, our mission is to bridge the gap between cutting-edge technology
              and real-world business needs. We deliver intelligent, scalable, and affordable
              digital solutions — from custom software and AI-powered tools to cloud systems
              — that help businesses across India grow faster, smarter, and stronger.
            </p>
            <ul className="mv-points">
              <li><span className="mv-bullet" />Build tailored software that solves real problems</li>
              <li><span className="mv-bullet" />Make AI & automation accessible to every business</li>
              <li><span className="mv-bullet" />Deliver fast, reliable, and scalable tech solutions</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="mv-card glass-card vision-border">
            <div className="mv-card-header">
              <div className="mv-icon-wrap vision-icon">🔭</div>
              <span className="mv-tag vision-tag">Vision</span>
            </div>
            <h3>India's Most Trusted Tech Partner</h3>
            <p>
              QuantaqTech envisions a future where every Indian business — from startups to
              enterprises — is empowered by world-class technology. We aim to be the go-to
              innovation partner that transforms ideas into impactful digital products, while
              building a legacy of excellence, integrity, and technological leadership across
              South Asia and beyond.
            </p>
            <ul className="mv-points">
              <li><span className="mv-bullet vision-bullet" />Pioneer next-generation tech ecosystems in India</li>
              <li><span className="mv-bullet vision-bullet" />Lead the digital transformation of emerging markets</li>
              <li><span className="mv-bullet vision-bullet" />Create a globally recognized Made-in-India tech brand</li>
            </ul>
          </div>
        </div>

        {/* Core Values Strip */}
        <div className="mv-values">
          {values.map(v => (
            <div key={v.label} className="value-chip glass-card">
              <span className="value-icon">{v.icon}</span>
              <span className="value-label">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
