import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './VisionPage.css'

const visionPoints = [
  {
    icon: '🔮',
    title: 'Pioneering Tech Ecosystems',
    desc: 'We visualize a robust, interconnected ecosystem of digital solutions designed to help emerging businesses scale with ease.'
  },
  {
    icon: '🇮🇳',
    title: 'Made in India for the World',
    desc: 'Creating software, AI, and cloud products of global standards right here in India, serving local and international markets.'
  },
  {
    icon: '🤖',
    title: 'The AI Revolution',
    desc: 'Empowering traditional sectors with modern intelligence, bringing practical automation to retail, healthcare, and finance.'
  },
  {
    icon: '🌱',
    title: 'Sustainable Growth',
    desc: 'Designing resource-efficient software architectures that scale linearly in performance while keeping costs flat.'
  }
]

export default function VisionPage() {
  return (
    <main>
      <PageHero
        badge="🔭 Vision"
        title="India's Most Trusted"
        highlight="Technology Partner"
        subtitle="Our vision is to build a future where every business, big or small, can effortlessly leverage premium technology to create immense value."
      />

      {/* Vision Statement */}
      <section className="vision-main section-container">
        <div className="vision-statement glass-card">
          <div className="vision-quote-mark">“</div>
          <blockquote>
            QuantaqTech envisions a future where technology is a seamless utility. We aim to be the go-to Innovation Partner that helps startups launch, small businesses scale, and enterprises automate — building a long-lasting legacy of technological leadership.
          </blockquote>
          <div className="vision-quote-mark right">”</div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="vision-grid-section section-container">
        <h2 className="section-title">Key Pillars of <span className="text-gradient">Our Vision</span></h2>
        <div className="vision-grid">
          {visionPoints.map((v, i) => (
            <div key={v.title} className="vision-point-card glass-card">
              <div className="vision-index">0{i + 1}</div>
              <div className="vision-icon-lg">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values / Future Outlook */}
      <section className="vision-future section-container">
        <div className="vision-future-card glass-card">
          <h2>Shaping a <span className="text-gradient">Connected Future</span></h2>
          <p>
            As technology advances rapidly, QuantaqTech is continuously experimenting, learning, and adopting new frameworks. We are actively researching distributed AI models, next-gen cloud orchestration, and optimized user interaction models to keep our clients ahead of the curve.
          </p>
          <div className="vision-future-cta">
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn-secondary">Let's Connect</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
