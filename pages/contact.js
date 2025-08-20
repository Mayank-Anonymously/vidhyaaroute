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
              <span>UG-49 Charmwood plaza, Faridabad 121009</span>
            </div>
          </div>

          {/* Office Location Map */}
          <div className="contact-us__form">
            <h2 className="contact-us__title">Our Office Location</h2>
            <div className="map-container" style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e1e5e9' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.742628907158!2d77.30894737549654!3d28.423877575764734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddb5b1d5a5e7%3A0x8b8e8e8e8e8e8e8e!2sCharmwood%20Plaza%2C%20Sector%2015A%2C%20Faridabad%2C%20Haryana%20121007!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location - UG-49 Charmwood plaza, Faridabad"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;