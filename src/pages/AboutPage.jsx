import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import './AboutPage.css'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3+',  label: 'Years Experience' },
  { value: '3',   label: 'Expert Founders' },
]

const founders = [
  { initials: 'VP', name: 'Vaidik Panday', role: 'Co-Founder', desc: 'Visionary leader with expertise in product strategy and business development.' },
  { initials: 'KU', name: 'Karan Udani',   role: 'Co-Founder', desc: 'Full-stack engineer driving technical architecture and software excellence.' },
  { initials: 'JD', name: 'Jeel Dave',     role: 'Co-Founder', desc: 'Creative technologist specializing in UI/UX design and AI-powered solutions.' },
]

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We embrace emerging technologies and bring them into practical, impactful solutions.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We treat every project as our own, aligning our success with yours.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Fast delivery without cutting corners — because excellence should never wait.' },
  { icon: '🔒', title: 'Integrity', desc: 'Transparent communication, honest pricing, and reliable deliverables every time.' },
]

export default function AboutPage() {
  const ref = useScrollReveal()

  return (
    <main>
      <PageHero
        badge="Who We Are"
        title="About"
        highlight="QuantaqTech"
        subtitle="A passionate team of engineers, designers, and strategists building the future of digital India."
      />

      {/* Story */}
      <section className="about-story section-container" ref={ref}>
        <div className="about-story-grid scroll-reveal">
          <div className="about-story-text">
            <h2>Our <span className="text-gradient">Story</span></h2>
            <p>
              QuantaqTech was born from a simple belief — that powerful technology shouldn't be
              reserved for big corporations. Founded by three passionate engineers, we set out
              to build a company that delivers enterprise-grade digital solutions to businesses
              of every size across India and beyond.
            </p>
            <p>
              From our early days building MVPs for local startups to deploying complex AI
              systems for growing enterprises, every project has strengthened our conviction:
              the right technology can transform any business.
            </p>
            <Link to="/mission" className="btn-primary about-cta">Our Mission →</Link>
          </div>
          <div className="about-code-card glass-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">quantaqtech.js</span>
            </div>
            <pre className="code-body"><code>{`const team = new QuantaqTech();

team.build({
  mission: "empower businesses",
  stack:   ["AI", "Cloud", "Web"],
  focus:   "India & beyond",
  values:  ["quality", "speed",
            "integrity"]
});

team.launch();
// ✅ Transforming Digital India`}</code></pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="about-stats-inner">
          {stats.map(s => (
            <div key={s.label} className="about-stat glass-card">
              <h3 className="text-gradient">{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="about-founders section-container">
        <h2 className="section-title">Meet the <span className="text-gradient">Founders</span></h2>
        <div className="founders-grid">
          {founders.map(f => (
            <div key={f.name} className="founder-profile glass-card">
              <div className="founder-avatar-large">{f.initials}</div>
              <h3>{f.name}</h3>
              <span className="founder-role-badge">{f.role}</span>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-container">
        <h2 className="section-title">What We <span className="text-gradient">Stand For</span></h2>
        <div className="values-grid">
          {values.map(v => (
            <div key={v.title} className="value-card glass-card">
              <span className="value-icon-lg">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
