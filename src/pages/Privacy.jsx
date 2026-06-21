import { Link } from 'react-router-dom'
import './Terms.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information that you provide directly to us when you use our services, such as your name, email address, phone number, and any other details you choose to share when contacting us or starting a project.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services, to process transactions and send related information, and to communicate with you about products, services, offers, and events offered by QuantaqTech.`,
  },
  {
    title: '3. Data Security',
    content: `We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no internet-based service is completely secure, and we cannot guarantee the absolute security of your data.`,
  },
  {
    title: '4. Sharing Your Information',
    content: `We do not sell your personal data. We may share your information with third-party service providers that perform services on our behalf, such as hosting, analytics, and customer support, under strict confidentiality agreements.`,
  },
  {
    title: '5. Your Rights',
    content: `Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict its processing. To exercise these rights, please contact us.`,
  },
  {
    title: '6. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`,
  },
  {
    title: '7. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at quantaqtech@gmail.com.`,
  },
]

export default function Privacy() {
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
          <h1>Privacy <span className="text-gradient">Policy</span></h1>
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
