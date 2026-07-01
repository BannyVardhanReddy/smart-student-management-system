import { useState } from "react";
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    // Later replace this with an API call

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-desc">
        Have a question, suggestion, or found a bug? We'd love to hear from
        you.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info">
            <h4>Email</h4>
            <p>support@studentmanager.com</p>
          </div>

          <div className="info">
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info">
            <h4>Address</h4>
            <p>Hyderabad, Telangana</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}