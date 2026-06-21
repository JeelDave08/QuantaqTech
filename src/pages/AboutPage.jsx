import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import './AboutPage.css'
import vaidikImg from '../assets/founders/vaidik.jpg'
import karanImg from '../assets/founders/karan.jpg'
import jeelImg from '../assets/founders/jeel.jpg'

const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3+',  label: 'Years Experience' },
  { value: '3',   label: 'Expert Founders' },
  { value: '10+', label: 'Industries Served' },
]

const founders = [
  {
    photo: vaidikImg,
    initials: 'VP',
    name: 'Vaidik Panday',
    role: 'Co-Founder & Strategy Lead',
    desc: 'Visionary leader with deep expertise in product strategy, business development, and go-to-market execution. Vaidik bridges the gap between technology and business outcomes, ensuring every solution delivers measurable ROI.',
    skills: ['Product Strategy', 'Business Development', 'Market Research'],
  },
  {
    photo: karanImg,
    initials: 'KU',
    name: 'Karan Udani',
    role: 'Co-Founder & Tech Lead',
    desc: 'Full-stack engineer with hands-on experience architecting scalable systems across cloud platforms. Karan leads technical decision-making and ensures code quality to ship fast and reliably.',
    skills: ['Full-Stack Engineering', 'Cloud Architecture', 'System Design'],
  },
  {
    photo: jeelImg,
    initials: 'JD',
    name: 'Jeel Dave',
    role: 'Co-Founder & Creative Lead',
    desc: 'Builder at the intersection of code and creativity. Jeel engineers intelligent, visually immersive digital products — from AI-driven interfaces to full-stack platforms — that captivate users and drive real business growth.',
    skills: ['AI-Powered Products', 'Full-Stack Dev', 'Creative Engineering'],
  },
]

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We embrace emerging technologies — AI, cloud-native architectures, and real-time systems — and translate them into practical, impactful solutions that give our clients a competitive edge.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We treat every project as our own. From kickoff to launch, we stay in sync with your team, align our goals with yours, and celebrate your wins as our own.' },
  { icon: '⚡', title: 'Speed & Quality', desc: "We believe great software doesn't have to take forever. Our agile workflow, modular architecture, and reusable component libraries let us ship fast — without ever cutting corners on quality." },
  { icon: '🔒', title: 'Integrity', desc: "No surprises. Transparent pricing, honest timelines, and reliable deliverables every time. We build trust through consistency, and we never overpromise what we can't deliver." },
  { icon: '🌐', title: 'Scalability by Design', desc: 'Every system we build is engineered to grow. Whether you start with 10 users or 10,000, our architectures are designed to scale seamlessly without costly rewrites.' },
  { icon: '🎯', title: 'Impact-Driven', desc: 'We measure success by outcomes, not outputs. Code is a means to an end — and that end is real, measurable impact for your business and the people you serve.' },
]

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Express'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'CI/CD Pipelines'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'PWAs', 'iOS & Android'] },
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
              reserved for big corporations. Founded by three passionate engineers in 2022, we set out
              to democratize enterprise-grade digital solutions for businesses of every size,
              across India and beyond.
            </p>
            <p>
              What started as a small team building MVPs for local startups quickly grew into a
              full-service technology company. Today we work with healthcare providers, fintech
              firms, e-commerce brands, and SaaS companies — helping each one harness the power
              of modern software, AI, and cloud infrastructure.
            </p>
            <p>
              Every project has deepened our conviction: the right technology, thoughtfully
              applied, can transform any business. We don't just write code — we architect
              solutions that endure, scale, and deliver lasting competitive advantage.
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
  founded: 2022,
  values:  ["quality", "speed",
            "integrity", "impact"]
});

team.launch();
// ✅ Transforming Digital India
// 🚀 Building for scale from day 1`}</code></pre>
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
        <p className="section-subtitle">Three builders, one vision — to make great technology accessible to every business.</p>
        <div className="founders-grid">
          {founders.map(f => (
            <div key={f.name} className="founder-profile glass-card">
              <div className="founder-avatar-large">
                <img src={f.photo} alt={f.name} className="founder-photo" />
              </div>
              <h3>{f.name}</h3>
              <span className="founder-role-badge">{f.role}</span>
              <p>{f.desc}</p>
              <div className="founder-skills">
                {f.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-tech section-container">
        <h2 className="section-title">What We <span className="text-gradient">Build With</span></h2>
        <p className="section-subtitle">A curated, battle-tested stack chosen for performance, scalability, and developer experience.</p>
        <div className="tech-grid">
          {techStack.map(t => (
            <div key={t.category} className="tech-card glass-card">
              <h4 className="tech-category">{t.category}</h4>
              <div className="tech-items">
                {t.items.map(item => (
                  <span key={item} className="tech-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-container">
        <h2 className="section-title">What We <span className="text-gradient">Stand For</span></h2>
        <p className="section-subtitle">Principles that guide every line of code, every decision, and every client relationship.</p>
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

      {/* CTA */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box glass-card">
          <h2>Ready to Build <span className="text-gradient">Something Great?</span></h2>
          <p>Whether you have a fully-formed idea or just a problem to solve, we'd love to hear from you. Let's explore what's possible together.</p>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn-primary">Get in Touch →</Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
