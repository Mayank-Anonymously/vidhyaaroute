import { Briefcase, Calendar, CheckCircle, ExternalLink, FileText } from "lucide-react";
import React from "react";

const ContentPage = () => {
  const coachingBenefits = [
    "Personalized training plans for each student",
    "Expert instructors with healthcare backgrounds",
    "Mock tests and real-time assessments",
    "Flexible timing for working professionals",
    "Comprehensive materials and practice resources",
  ];

  const courseModules = [
    {
      title: "OET Listening Module",
      description: "Improve listening skills with practical healthcare conversations.",
      image: "/images/visaB.jpg",
      links: ["Overview", "Curriculum", "Enroll Now"],
    },
    {
      title: "OET Reading Module",
      description: "Develop critical reading skills for real-world medical scenarios.",
      image: "/images/visawaiver.jpg",
      links: ["Overview", "Curriculum", "Enroll Now"],
    },
    {
      title: "OET Writing & Speaking",
      description: "Master communication for patient care and documentation.",
      image: "/images/america.jpg",
      links: ["Overview", "Curriculum", "Enroll Now"],
    },
  ];

  return (
    <div className="col-lg-9 col-md-8">
      <div className="p-4">
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="display-4 fw-bold text-blue mb-3">OET Coaching for Agencies</h1>
          <p className="lead text-muted">
            Empower your candidates to achieve OET success. Our agency-oriented coaching
            program helps students prepare effectively for all modules of the OET exam
            with expert guidance and real-time feedback.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-5">
          <div className="position-relative rounded overflow-hidden shadow-lg">
            <img
              src="/images/business.jpg"
              alt="OET Coaching"
              className="w-100 h-auto"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white p-3">
              <p className="mb-0 small">
                Dedicated coaching programs designed for agencies and healthcare aspirants
              </p>
            </div>
          </div>
        </div>

        {/* Coaching Benefits Section */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="text-blue mb-4">
                <Briefcase className="me-2" size={24} />
                Why Partner with Us
              </h3>
              <p className="text-muted mb-3">
                Our OET coaching ensures your candidates meet international English
                standards. We focus on results-driven methods and practical training.
              </p>
              <ul className="list-unstyled">
                {coachingBenefits.map((benefit, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <CheckCircle
                      className="me-2 text-success flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="text-blue mb-4">
                <FileText className="me-2" size={24} />
                Key Guidelines
              </h3>
              <div className="alert alert-warning">
                <strong>Note for Agencies:</strong> Ensure your students follow our
                recommended schedule and utilize the learning portal for consistent progress.
              </div>
              <p className="text-muted">
                "Success in OET requires consistency and feedback. Our platform ensures
                accountability and performance tracking across all modules."
              </p>
            </div>
          </div>
        </div>

        {/* Course Modules Section */}
        <div className="mb-5">
          <h2 className="text-blue mb-4">OET Modules Covered</h2>
          <div className="row">
            {courseModules.map((module, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="text-blue">{module.title}</h5>
                    <p className="card-text text-muted small">
                      {module.description}
                    </p>
                    <div className="mt-3">
                      {module.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="mb-2">
                          <a
                            href="#"
                            className="text-decoration-none d-flex text-blue align-items-center"
                            style={{ fontSize: "14px" }}
                          >
                            <span className="text-blue fw-bold">
                              {linkIndex + 1}.
                            </span>
                            {link}
                            <ExternalLink className="ms-auto" size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-white p-4 rounded mb-4" style={{ background: "#162799" }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-2">
                Want to Enroll Your Candidates in OET Coaching?
              </h3>
              <p className="mb-0">
                Book a session with our onboarding team and get your agency
                started with customized OET coaching solutions.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+88123456987231">
                <button className="btn btn-light btn-lg">
                  <Calendar className="me-2" size={20} />
                  Schedule Onboarding
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
