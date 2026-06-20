import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

const founders = [
  { name: 'Vaidik Panday', role: 'Co-Founder', initials: 'VP' },
  { name: 'Karan Udani', role: 'Co-Founder', initials: 'KU' },
  { name: 'Jeel Dave', role: 'Co-Founder', initials: 'JD' },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => { setStatus('sent'); e.target.reset() }, 1500)
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" ref={ref} className="scroll-reveal">
      <div className="section-container">
        <div className="contact-card glass-card">
          <div className="contact-info">
            <h2>Ready to <span className="text-gradient">Innovate?</span></h2>
            <p>Let's build something extraordinary together. Reach out to discuss your next big project.</p>

            <div className="founders-section">
              <h4>Meet Our Founders</h4>
              <div className="founders-grid">
                {founders.map(f => (
                  <div key={f.name} className="founder-card">
                    <div className="founder-avatar">{f.initials}</div>
                    <div>
                      <strong>{f.name}</strong>
                      <span>{f.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-methods">
              <div className="method">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:quantaqtech@gmail.com">quantaqtech@gmail.com</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="5" required />
            </div>
            <button
              type="submit"
              className={`btn-primary w-full ${status !== 'idle' ? 'btn-loading' : ''}`}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && '✅ Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
