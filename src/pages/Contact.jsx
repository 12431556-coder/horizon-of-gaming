import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    // Hide the success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Whether you have questions about our products, need support,
        or just want to share your gaming experience, reach out to us anytime.
      </p>

      {submitted && (
        <p style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>
          ✅ Message sent! We'll get back to you soon.
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">Send Message</button>
      </form><div className="contact-info">
        <p>Email: support@horizonofgaming.com</p>
        <p>Phone: +1 (555) 123‑4567</p>
       <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
