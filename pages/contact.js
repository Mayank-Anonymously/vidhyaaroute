import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="contact-us__section">
        <div className="container contact-us__row">
          {/* Contact Info */}
          <div className="contact-us__info">
            <h2 className="contact-us__title">Get in Touch</h2>
            <p className="contact-us__subtitle">
              Planning to study abroad? Whether you're exploring top
              universities, applying for scholarships, or navigating visa
              formalities — our expert team is here to support you at every
              step. Reach out to get personalized guidance for your global
              education journey.
            </p>

            <div className="contact-us__detail">
              <Phone className="contact-us__icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-us__detail">
              <Mail className="contact-us__icon" />
              <span>info@example.com</span>
            </div>
            <div className="contact-us__detail">
              <MapPin className="contact-us__icon" />
              <span>123, Example Street, New Delhi, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-us__form">
            <h2 className="contact-us__title">Send Us a Message</h2>
            <form className="admission-modal__form">
              <input
                type="text"
                className="admission-modal__input"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="admission-modal__input"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                className="admission-modal__input"
                placeholder="Subject"
              />
              <textarea
                className="admission-modal__input"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>
              <button type="submit" className="admission-modal__submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
