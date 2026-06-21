import './PageHero.css'

export default function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="page-hero-content">
        {badge && <div className="page-hero-badge">{badge}</div>}
        <h1>
          {title}{highlight && <> <span className="text-gradient">{highlight}</span></>}
        </h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
      <div className="page-hero-divider" />
    </section>
  )
}
