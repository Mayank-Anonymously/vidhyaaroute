import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { PiClockLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import AdmissionModal from "./AdmissionModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  // Country data with flag emojis
  const countries = [
    { code: 'uk', name: 'UK', flag: '🇬🇧', path: '/countries/uk' },
    { code: 'usa', name: 'USA', flag: '🇺🇸', path: '/countries/usa' },
    { code: 'ireland', name: 'Ireland', flag: '🇮🇪', path: '/countries/ireland' },
    { code: 'canada', name: 'Canada', flag: '🇨🇦', path: '/countries/canada' },
    { code: 'germany', name: 'Germany', flag: '🇩🇪', path: '/countries/germany' },
    { code: 'dubai', name: 'Dubai', flag: '🇦🇪', path: '/countries/dubai' },
    { code: 'france', name: 'France', flag: '🇫🇷', path: '/countries/france' },
    { code: 'europe', name: 'Europe', flag: '🇪🇺', path: '/countries/europe' },
    { code: 'italy', name: 'Italy', flag: '🇮🇹', path: '/countries/italy' },
    { code: 'australia', name: 'Australia', flag: '🇦🇺', path: '/countries/australia' },
    { code: 'newzealand', name: 'New Zealand', flag: '🇳🇿', path: '/countries/newzealand' },
    { code: 'georgia', name: 'Georgia', flag: '🇬🇪', path: '/countries/georgia' },
    { code: 'malta', name: 'Malta', flag: '🇲🇹', path: '/countries/malta' },
    { code: 'japan', name: 'Japan', flag: '🇯🇵', path: '/countries/japan' }
  ];

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked or overlay is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ======= Top Navbar ======= */}
      <div className="navbar-top">
        <div className="left-info">
          <div className="info-item">
            <HiOutlineMail />
            <span className="info-text">info@yourmail.com</span>
          </div>
          <div className="info-item">
            <GoLocation />
            <span className="info-text">12 Queen Park, LA, USA</span>
          </div>
          <div className="info-item">
            <PiClockLight />
            <span className="info-text">Mon - Sat: 9.00 to 18.00</span>
          </div>
        </div>

        <div className="right-info">
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <BsSearch />
          </div>

          <button className="appointment-btn">Appointment</button>
        </div>
      </div>

      {/* ======= Bottom Navbar ======= */}
      <div className="navbar-bottom">
        {/* Centered logo visible on larger screens */}
        <div className="nav-empty justify-content-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Vidhyaarohee"
              style={{ width: 80, height: 80 }}
              className="mt-2 mobile-logo"
            />
          </Link>
        </div>

        <div className="navbar-bottom-wrapper">
          {/* Button Section */}
          <div className="profile-section">
            <button className="btn-blue" onClick={() => setShowModal(true)}>
              Get Your Admission
            </button>
          </div>

          {/* ======= Navigation Links (Desktop & Mobile) ======= */}
          <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
            {/* Mobile Logo (visible only when menu is open) */}
            {isMenuOpen && (
              <div className="mobile-logo text-center mb-4">
                <img
                  src="/images/logo.png"
                  alt="Vidhyaarohee"
                  style={{ width: 100, height: "auto", margin: "0 auto" }}
                />
              </div>
            )}

            <Link href="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link href="/businessvisa" className="nav-link" onClick={closeMenu}>
              Our Services
            </Link>
            <Link href="/oetcoaching" className="nav-link" onClick={closeMenu}>
              Coaching
            </Link>
            
            {/* Enhanced Countries Dropdown */}
            <div className="nav-link dropdown-container countries-dropdown">
              <span>Countries</span>
              <div className="dropdown-menu countries-grid">
                <div className="countries-container">
                  {countries.map((country) => (
                    <Link
                      key={country.code}
                      href={country.path}
                      className="country-item"
                      onClick={closeMenu}
                    >
                      <span className="country-flag">{country.flag}</span>
                      <span className="country-name">{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/teamdetails" className="nav-link" onClick={closeMenu}>
              Team
            </Link>
            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>

          {/* ======= Mobile Hamburger Icon ======= */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ======= Mobile Overlay (for dim background click-to-close) ======= */}
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      <AdmissionModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </>
  );
};

export default Navbar;