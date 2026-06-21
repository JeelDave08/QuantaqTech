import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './ServicesPage.css'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Software Development',
    tag: 'Engineering',
    desc: 'We engineer tailor-made backend systems, business automation programs, and cross-platform apps designed to streamline your unique operational flows.',
    details: [
      'ERP & CRM systems custom built for your operations',
      'API integrations and middleware engineering',
      'Database design, tuning, and optimization',
      'High-performance Node.js, Python, and Go backends'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M18 2l4 4-4 4"/><path d="M22 6h-6"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    tag: 'Artificial Intelligence',
    desc: 'Transform raw datasets into strategic advantages with intelligent neural networks, prediction algorithms, and natural language interfaces.',
    details: [
      'Custom LLM finetuning and prompt engineering',
      'Computer vision & automated image analysis',
      'Predictive analytics engines for retail & demand metrics',
      'Intelligent process automation bots'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    title: 'Cloud Architecture & DevOps',
    tag: 'Infrastructure',
    desc: 'Deploy resilient systems on public or multi-cloud infrastructures with automated continuous delivery and robust container strategies.',
    details: [
      'AWS, Azure, and Google Cloud platform setup',
      'Infrastructure as Code (IaC) using Terraform',
      'Docker & Kubernetes cluster container orchestration',
      'CI/CD pipelines using GitHub Actions or GitLab'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Premium Web Development',
    tag: 'Front-End Design',
    desc: 'Beautiful, lightning-fast frontend pages utilizing modern React frameworks, interactive visuals, and flawless responsive layouts.',
    details: [
      'React, Next.js, and Vite single page architectures',
      'Ultra-responsive interfaces built with custom CSS variables',
      'Modern state management (Zustand, Redux, Context API)',
      'Search Engine Optimization (SEO) & page speed audit optimization'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="⚙️ Services"
        title="We Build High-Impact"
        highlight="Digital Products"
        subtitle="QuantaqTech provides end-to-end design, implementation, and cloud deployment for forward-thinking businesses."
      />

      {/* Services Breakdown */}
      <section className="services-list-section section-container">
        <div className="services-full-grid">
          {services.map((s, i) => (
            <div key={s.title} className="service-detail-card glass-card">
              <div className="service-detail-header">
                <div className="service-detail-icon">{s.icon}</div>
                <div>
                  <span className="service-detail-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                </div>
              </div>
              <p className="service-detail-desc">{s.desc}</p>
              <div className="service-bullets-container">
                <h4>What we offer:</h4>
                <ul className="service-detail-bullets">
                  {s.details.map((d, index) => (
                    <li key={index}>
                      <span className="bullet-point-arrow">➔</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="services-consultation section-container">
        <div className="consultation-banner glass-card">
          <h2>Not sure what technology is right for you?</h2>
          <p>
            Schedule a free 30-minute discovery call with our co-founders. We'll analyze your current processes and propose a roadmap.
          </p>
          <Link to="/contact" className="btn-primary">Schedule Free Call →</Link>
        </div>
      </section>
    </main>
  )
}
