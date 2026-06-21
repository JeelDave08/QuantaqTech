import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './MissionPage.css'

const pillars = [
  { icon: '💻', title: 'Tailored Software', desc: 'Build custom digital solutions that solve real business problems — not generic products.' },
  { icon: '🤖', title: 'AI for Everyone', desc: 'Make artificial intelligence accessible and practical for businesses of every size.' },
  { icon: '☁️', title: 'Scalable Infrastructure', desc: 'Design systems that grow with your business — from startup to enterprise.' },
  { icon: '🇮🇳', title: 'Empower Indian Business', desc: 'Give every Indian entrepreneur access to world-class technology at fair prices.' },
]

export default function MissionPage() {
  return (
    <main>
      <PageHero
        badge="🎯 Mission"
        title="Building Tomorrow's Tech,"
        highlight="Today"
        subtitle="We exist to bridge the gap between cutting-edge technology and real-world business impact."
      />

      {/* Main Mission */}
      <section className="mission-main section-container">
        <div className="mission-statement glass-card">
          <div className="mission-quote-mark">"</div>
          <blockquote>
            At QuantaqTech, our mission is to <strong>empower businesses of all sizes</strong> with
            intelligent, scalable, and affordable digital solutions — from AI-powered automation
            to robust cloud systems — enabling them to compete and thrive in a rapidly evolving
            digital world.
          </blockquote>
          <div className="mission-quote-mark right">"</div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mission-pillars-section section-container">
        <h2 className="section-title">Mission <span className="text-gradient">Pillars</span></h2>
        <div className="mission-pillars-grid">
          {pillars.map((p, i) => (
            <div key={p.title} className="pillar-card glass-card">
              <div className="pillar-number">0{i + 1}</div>
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="mission-how section-container">
        <div className="mission-how-grid">
          <div>
            <h2>How We <span className="text-gradient">Work</span></h2>
            <div className="mission-steps">
              {[
                { step: '01', title: 'Understand', desc: 'We dive deep into your business needs, goals, and challenges before writing a single line of code.' },
                { step: '02', title: 'Design', desc: 'Our team architects a tailored solution — selecting the right tech stack and design approach for your specific context.' },
                { step: '03', title: 'Build', desc: 'We develop with speed and precision, keeping you involved at every milestone.' },
                { step: '04', title: 'Launch & Scale', desc: 'We deploy, monitor, and continue evolving your product as your business grows.' },
              ].map(s => (
                <div key={s.step} className="mission-step">
                  <div className="step-number">{s.step}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mission-cta-panel glass-card">
            <span className="mission-cta-emoji">🚀</span>
            <h3>Ready to Join Our Mission?</h3>
            <p>Let's build something meaningful together. Your idea deserves the best technology.</p>
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/vision" className="btn-secondary">See Our Vision →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
