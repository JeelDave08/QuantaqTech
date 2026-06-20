import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

const projects = [
  {
    label: 'Enterprise',
    title: 'Cloud Migration',
    desc: "Migrated a Fortune 500 company's legacy infrastructure to a scalable AWS cloud environment, cutting costs by 40%.",
    tech: ['AWS', 'Terraform', 'Docker'],
    gradient: 'from-blue',
  },
  {
    label: 'AI / ML',
    title: 'Predictive Analytics',
    desc: 'Built a custom machine learning model for real-time predictive analytics in the retail sector, boosting revenue by 25%.',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    gradient: 'from-purple',
  },
  {
    label: 'Mobile App',
    title: 'FinTech Platform',
    desc: 'Developed a high-performance, secure cross-platform mobile application for a leading banking platform.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    gradient: 'from-blue',
  },
]

export default function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section id="portfolio" ref={ref} className="scroll-reveal">
      <div className="section-container">
        <h2 className="section-title">Our <span className="text-gradient">Work</span></h2>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div key={p.title} className={`portfolio-card glass-card ${p.gradient}`}>
              <div className="portfolio-visual" />
              <div className="portfolio-label">{p.label}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech-tags">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
