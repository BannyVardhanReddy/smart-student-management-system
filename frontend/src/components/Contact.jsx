import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const supportEmail = "support@smartstudent.com";
    const mailSubject = formData.subject || "Support request from Smart Student Management";
    const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    setSubmitted(true);
    window.location.href = mailtoLink;
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="section-label">Contact</p>
          <h1>Reach Smart Student Management Support</h1>
          <p>
            Send a message to the administration team for help with student records,
            account access, feature requests, or technical assistance.
          </p>
        </div>
      </section>

      <div className="contact-layout">
        <div className="contact-panel">
          <h2>Contact Information</h2>
          <p className="panel-description">
            Our support team is available during business hours to help you manage student data
            and resolve system issues.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>
                <a href="mailto:support@smartstudent.com">support@smartstudent.com</a>
              </p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>+91 868 809 7484</p>
            </div>
            <div>
              <strong>Office hours</strong>
              <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
            </div>
            <div>
              <strong>Address</strong>
              <p>DivyaSree Omega, Block 1, Survey No. 13, Kondapur Village, Serilingampally Mandal, Gachibowli, Hyderabad, Telangana – 500084, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send a Message</h2>
          <p className="form-description">
            Provide your details and a brief message, and one of our staff will
            respond promptly.
          </p>

          {submitted && (
            <div className="form-success">
              Thank you for reaching out. Your message has been received.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this message about?"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your question or request here"
              required
            />

            <button type="submit" className="active">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
