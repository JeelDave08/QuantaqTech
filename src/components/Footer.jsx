import { Link } from 'react-router-dom'
import './Footer.css'

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const founders = [
  { name: 'Vaidik Panday', initials: 'VP' },
  { name: 'Karan Udani', initials: 'KU' },
  { name: 'Jeel Dave', initials: 'JD' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">QUANTAQ<span>TECH</span></div>
          <p className="footer-tagline">Shaping the future with quantum innovation.</p>
        </div>

        <div className="footer-founders">
          <h4>Our Founders</h4>
          <div className="founders-list">
            {founders.map(f => (
              <div key={f.name} className="founder-chip">
                <div className="founder-avatar">{f.initials}</div>
                <span>{f.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedInIcon /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram" className="social-icon"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 QuantaqTech. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <a href="mailto:quantaqtech@gmail.com">quantaqtech@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
