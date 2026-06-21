import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="scroll-reveal">
      <div className="section-container">
        <h2 className="section-title">About <span className="text-gradient">Us</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>At QuantaqTech, we are driven by the pursuit of technological excellence. Our team of visionary engineers and designers craft digital experiences that not only meet today's demands but anticipate tomorrow's challenges.</p>
            <p>From complex enterprise systems to intuitive user interfaces, we blend creativity with robust engineering to deliver solutions that make a real impact.</p>
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="text-gradient">99%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">10+</h3>
                <p>Industries Served</p>
              </div>
            </div>
          </div>

          <div className="glass-card code-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">quantaqtech.js</span>
            </div>
            <pre className="code-body"><code>{`const future = new QuantaqTech();

future.innovate({
  ai: true,
  cloud: "multi",
  scale: "global",
  impact: "maximum"
});

future.deploy();
// ✅ Success!`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
