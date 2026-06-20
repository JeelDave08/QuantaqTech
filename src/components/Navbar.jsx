import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon" />
          QUANTAQ<span>TECH</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => handleNav('home')}>Home</a></li>
          <li><a href="#about" onClick={() => handleNav('about')}>About</a></li>
          <li><a href="#services" onClick={() => handleNav('services')}>Services</a></li>
          <li><a href="#portfolio" onClick={() => handleNav('portfolio')}>Portfolio</a></li>
          <li><Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link></li>
        </ul>

        <a href="#contact" className="btn-primary nav-cta" onClick={() => handleNav('contact')}>
          Get in Touch
        </a>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
