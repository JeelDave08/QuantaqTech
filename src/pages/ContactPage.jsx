import { useState } from 'react'
import PageHero from '../components/PageHero'
import './ContactPage.css'

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      e.target.reset()
    }, 1500)
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <main>
      <PageHero
        badge="📬 Contact"
        title="Let's Build Something"
        highlight="Extraordinary"
        subtitle="Reach out to discuss your software project, request a technical assessment, or learn how we can help you scale."
      />

      {/* Main Contact Section */}
      <section className="contact-main-section section-container">
        <div className="contact-page-card glass-card">
          {/* Info Side */}
          <div className="contact-page-info">
            <h2>Ready to <span className="text-gradient">Innovate?</span></h2>
            <p>
              Fill out the project request form, and our engineering team will get back to you with an initial feasibility outline within 24 hours.
            </p>

            <div className="contact-detail-items">
              <div className="contact-detail-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email Us Directly</h4>
                  <a href="mailto:quantaqtech@gmail.com">quantaqtech@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Company / Project Name</label>
              <input type="text" placeholder="e.g. QuantaqTech Solutions" />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Describe your product requirements, target audience, and desired timeframe..." rows="6" required />
            </div>
            <button
              type="submit"
              className={`btn-primary w-full ${status !== 'idle' ? 'btn-loading' : ''}`}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending Request...'}
              {status === 'sent' && '✅ Request Sent!'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
