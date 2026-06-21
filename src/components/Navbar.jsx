import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Mission',   to: '/mission' },
  { label: 'Vision',    to: '/vision' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact',   to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && <div className="nav-overlay" onClick={close} />}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          <NavLink to="/" className="logo" onClick={close}>
            <div className="logo-icon" />
            QUANTAQ<span>TECH</span>
          </NavLink>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mobile-only-link">
              <NavLink to="/terms" onClick={close}>Terms</NavLink>
            </li>
          </ul>

          <div className="nav-right">
            <NavLink to="/terms" className="nav-terms-link">Terms</NavLink>
            <NavLink to="/contact" className="btn-primary nav-cta" onClick={close}>
              Get in Touch
            </NavLink>
          </div>

          <button
            className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  )
}
