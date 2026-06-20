import useScrollReveal from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Software',
    desc: 'Tailor-made applications designed to streamline your unique business processes and dramatically enhance productivity.',
    tag: 'Development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M18 2l4 4-4 4"/><path d="M22 6h-6"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Intelligent solutions that leverage data to automate tasks, predict trends, and drive smart decision-making.',
    tag: 'Artificial Intelligence',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    title: 'Cloud Architecture',
    desc: 'Scalable, secure, and highly available cloud infrastructures built on AWS, Azure, or Google Cloud platforms.',
    tag: 'Infrastructure',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" ref={ref} className="scroll-reveal services-section">
      <div className="section-container">
        <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card glass-card">
              <div className="service-tag">{s.tag}</div>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
