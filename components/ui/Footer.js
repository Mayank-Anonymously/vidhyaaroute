import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white py-5"
      style={{
        backgroundImage: 'url("/images/buildingbg.png")',
        backgroundColor: "#0F181D",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Column 1 - Logo and Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Vidhyaarohee"
                style={{ width: 80, height: 80 }}
                className="mb-3"
              />
              <p className="text-white mb-4">
                Empowering students with expert guidance and global
                opportunities. Your journey to international education starts
                here.
              </p>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <FaPhone style={{ color: "#5E789C" }} className="me-3" />
                <span>+88 12345 6987 231</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaEnvelope style={{ color: "#5E789C" }} className="me-3" />
                <span>info@example.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt style={{ color: "#5E789C" }} className="me-3" />
                <span>380 St Kilda Road, Melbourne</span>
              </div>
            </div>

            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, backgroundColor: "#5E789C" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, backgroundColor: "#5E789C" }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, backgroundColor: "#5E789C" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, backgroundColor: "#5E789C" }}
              >
                <FaDribbble />
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white mb-4 position-relative">
              Explore
              <div
                className="border-bottom border-primary position-absolute"
                style={{ width: 50, height: 2, bottom: -10, left: 0 }}
              ></div>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Employment & Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Government & Elections
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Real Estate & Buildings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Health & Medical
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Transport & Traffic
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white mb-4 position-relative">
              Useful Links
              <div
                className="border-bottom border-primary position-absolute"
                style={{ width: 50, height: 2, bottom: -10, left: 0 }}
              ></div>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Administration
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Fire Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Taxation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Circular's And Go's
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - More Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white mb-4 position-relative">
              Top Countries
              <div
                className="border-bottom border-primary position-absolute"
                style={{ width: 50, height: 2, bottom: -10, left: 0 }}
              ></div>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  USA
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Canada
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Australia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  UK
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Germany
                </a>
              </li>
            </ul>
            <h5 className="text-white mb-4 position-relative">
              Top Universities
              <div
                className="border-bottom border-primary position-absolute"
                style={{ width: 50, height: 2, bottom: -10, left: 0 }}
              ></div>
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  University of Liverpool
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Harvard University
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Greenwich University
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Zurich University
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Boston University
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-12 text-center">
            <p className="text-white mb-0">
              Copyright By ©{" "}
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#5E789C" }}
              >
                Vidhyaaroute
              </a>{" "}
              - 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
