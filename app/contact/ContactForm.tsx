
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, RotateCcw } from "lucide-react";

const services = [
  "Software Development",
  "Website Design",
  "Mobile Applications",
  "Data Migration",
  "Motion Graphics",
  "Cloud Services",
  "SEO / GEO / AEO",
  "Digital Marketing",
  "UX/UI Design",
  "Graphic Design / Print",
  "Data Entry",
  "ERP Systems",
  "Product enquiry",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="contact-form-wrap">
      {sent ? (
        <div className="contact-form-success" role="status" aria-live="polite">
          <span className="contact-success-icon">
            <CheckCircle2 size={30} aria-hidden="true" />
          </span>

          <span className="contact-mini-label">FORM PREVIEW COMPLETE</span>
          <h4>Your enquiry is ready for the next step.</h4>
          <p>
            This demo form hasn’t sent or saved your information. Please
            contact our team directly by email or WhatsApp to share your
            project details.
          </p>

          <div className="contact-success-actions">
            <a
              className="contact-btn-primary"
              href="https://wa.me/14378707083"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="contact-reset-btn"
              onClick={() => setSent(false)}
            >
              <RotateCcw size={15} aria-hidden="true" />
              Start again
            </button>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label className="contact-field">
              <span>Full name <i>*</i></span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="contact-field">
              <span>Work email <i>*</i></span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>

            <label className="contact-field">
              <span>Company</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Your company name"
              />
            </label>

            <label className="contact-field">
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+1 (000) 000-0000"
              />
            </label>

            <label className="contact-field contact-field-full">
              <span>What can we help you with? <i>*</i></span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Choose a service
                </option>
                {services.map((service) => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact-field contact-field-full">
              <span>Project details <i>*</i></span>
              <textarea
                name="message"
                rows={5}
                minLength={10}
                placeholder="Tell us about your goals, challenges, timeline or the result you want to achieve..."
                required
              />
              <small>
                A short overview is enough to get the conversation started.
              </small>
            </label>
          </div>

          <div className="contact-form-submit-row">
           

            <button type="submit" className="contact-btn-primary">
              Prepare enquiry
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
