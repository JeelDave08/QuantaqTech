import { Link } from 'react-router-dom'
import './Terms.css'

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to QuantaqTech. These terms and conditions outline the rules and regulations for the use of QuantaqTech's services and website. By accessing our services, you accept these terms and conditions in full. Do not continue to use QuantaqTech if you do not agree to all terms stated on this page.`,
  },
  {
    title: '2. Intellectual Property',
    content: `Unless otherwise stated, QuantaqTech and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this for your own personal use, subjected to restrictions set in these terms.`,
  },
  {
    title: '3. Services',
    content: `QuantaqTech provides custom software development, AI & machine learning solutions, and cloud architecture services. Any formal agreements regarding specific services will be governed by separate service contracts, in addition to these general terms of use.`,
  },
  {
    title: '4. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, QuantaqTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`,
  },
  {
    title: '5. Privacy Policy',
    content: `Your use of QuantaqTech's services is also governed by our Privacy Policy. We are committed to protecting your personal data and processing it in accordance with applicable data protection laws.`,
  },
  {
    title: '6. Contact',
    content: `If you have any queries regarding any of our terms, please contact us at quantaqtech@gmail.com. Our team — Vaidik Panday, Karan Udani, and Jeel Dave — will be happy to assist you.`,
  },
]

export default function Terms() {
  return (
    <main className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <Link to="/" className="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
          <h1>Terms &amp; <span className="text-gradient">Conditions</span></h1>
          <p>Last updated: June 2026</p>
        </div>

        <div className="terms-content">
          {sections.map(s => (
            <div key={s.title} className="terms-section glass-card">
              <h2>{s.title}</h2>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
