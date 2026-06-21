import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { label: 'Home',      id: 'home' },
  { label: 'About Us',  id: 'about' },
  { label: 'Mission',   id: 'mission' },
  { label: 'Services',  id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact',   id: 'contact' },
]

const SocialLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const SocialTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const SocialInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer">
      {/* Gradient top border */}
      <div className="footer-gradient-bar" />

      <div className="footer-inner">
        {/* ── Column 1: Brand ── */}
        <div className="footer-brand">
          <div className="footer-logo">QUANTAQ<span>TECH</span></div>
          <p className="footer-tagline">
            Shaping the future through quantum innovation,<br />
            one line of code at a time.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn" className="social-btn"><SocialLinkedIn /></a>
            <a href="#" aria-label="Twitter" className="social-btn"><SocialTwitter /></a>
            <a href="#" aria-label="Instagram" className="social-btn"><SocialInstagram /></a>
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div className="footer-col">
          <h5 className="footer-col-title">Quick Links</h5>
          <ul className="footer-nav">
            {quickLinks.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => scrollTo(l.id)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contact ── */}
        <div className="footer-col">
          <h5 className="footer-col-title">Get In Touch</h5>
          <div className="footer-contact-info">
            <a href="mailto:quantaqtech@gmail.com" className="footer-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              quantaqtech@gmail.com
            </a>
            <p className="footer-location">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              India
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary footer-cta"
            onClick={() => scrollTo('contact')}
          >
            Start a Project →
          </a>
        </div>
      </div>

      {/* ── Bottom bar: centered copyright only ── */}
      <div className="footer-bottom">
        <p>© 2026 QuantaqTech. All rights reserved.</p>
      </div>
    </footer>
  )
}
