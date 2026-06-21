import PageHero from '../components/PageHero'
import './PortfolioPage.css'

const categories = ['All', 'Enterprise', 'AI & ML', 'Mobile App', 'Web Portal']

const projects = [
  {
    label: 'Enterprise',
    title: 'Cloud Migration Strategy',
    desc: "Successfully moved a retail giant's legacy on-prem database and application logic to a modern multi-zone AWS environment, shrinking latency by 50% and cloud cost by 40%.",
    tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    metric: '40% Cost Savings',
    gradient: 'from-blue'
  },
  {
    label: 'AI & ML',
    title: 'Predictive Inventory Engine',
    desc: 'Developed a custom neural network model trained on past transactional trends to predict inventory shortfalls, enabling automated supplier notifications.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    metric: '+25% Sales Efficiency',
    gradient: 'from-purple'
  },
  {
    label: 'Mobile App',
    title: 'FinTech Wallet Platform',
    desc: 'Created an ultra-secure cross-platform mobile wallet supporting local bank transfers, instantaneous bills settlement, and biometric authentication.',
    tech: ['React Native', 'Node.js', 'Redis', 'PostgreSQL'],
    metric: '100k+ Active Users',
    gradient: 'from-blue'
  },
  {
    label: 'Web Portal',
    title: 'Automated HR Recruitment Portal',
    desc: 'Designed a dashboard that reads CVs, extracts key candidate capabilities, filters matching backgrounds, and sets up screening pipelines automatically.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Python NLP'],
    metric: '75% Faster Screening',
    gradient: 'from-purple'
  },
  {
    label: 'Enterprise',
    title: 'IoT Telemetry Dashboard',
    desc: 'Built a real-time tracking interface analyzing sensor telemetry from manufacturing plants to proactively warn operators about equipment failures.',
    tech: ['React.js', 'Go', 'TimescaleDB', 'Grafana'],
    metric: 'Zero Unplanned Downtime',
    gradient: 'from-blue'
  },
  {
    label: 'Web Portal',
    title: 'Hospital Management & Scheduling',
    desc: 'Integrated booking schedules, billing sheets, lab records, and video consultations into one HIPAA-compliant portal for a network of clinics.',
    tech: ['React.js', 'Node.js', 'Docker', 'AWS ECS'],
    metric: '15k Monthly Bookings',
    gradient: 'from-purple'
  }
]

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        badge="🗂️ Portfolio"
        title="Our Digital Innovation"
        highlight="Showcase"
        subtitle="Real-world case studies demonstrating our capacity to build secure, robust, and scalable technology."
      />

      {/* Grid of Work */}
      <section className="portfolio-list-section section-container">
        <div className="portfolio-full-grid">
          {projects.map((p) => (
            <div key={p.title} className={`portfolio-detail-card glass-card ${p.gradient}`}>
              <div className="portfolio-detail-visual">
                <span className="portfolio-detail-metric">{p.metric}</span>
              </div>
              <div className="portfolio-detail-content">
                <div className="portfolio-detail-label">{p.label}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="portfolio-detail-tech">
                  {p.tech.map(t => <span key={t} className="portfolio-tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
