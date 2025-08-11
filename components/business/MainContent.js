import { Briefcase, Calendar, CheckCircle, ExternalLink, FileText } from "lucide-react";
import React from "react";

const MainContent = () => {
  const businessActivities = [
    "Attending business meetings or consultations",
    "Attending a business convention or conference",
    "Negotiating contracts",
    "Conducting market research",
    "Meeting with clients or partners",
  ];

  const visaPrograms = [
    {
      title: "Visitor Visa B",
      description: "For temporary visits to conduct business activities",
      image: "/images/visaB.jpg",
      links: ["Overview", "How to Apply", "Fees"],
    },
    {
      title: "Visa Waiver Program",
      description: "For eligible countries with visa waiver agreements",
      image: "/images/visawaiver.jpg",
      links: ["Overview", "How to Apply", "Fees"],
    },
    {
      title: "Diplomatic Visas",
      description: "For official government business and diplomatic missions",
      image: "/images/america.jpg",
      links: ["Overview", "How to Apply", "Fees"],
    },
  ];
  return (
    <div className="col-lg-9 col-md-8">
      <div className="p-4">
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="display-4 fw-bold text-blue mb-3">Business Visa</h1>
          <p className="lead text-muted">
            Foreign nationals traveling to the United States to conduct
            temporary business activities need a visitor visa (B-1) unless
            qualifying for entry under the Visa Waiver Program. Our
            comprehensive guide helps you understand the requirements and
            application process.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-5">
          <div className="position-relative rounded overflow-hidden shadow-lg">
            <img
              src="/images/business.jpg"
              alt="Business Meeting"
              className="w-100 h-auto"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white p-3">
              <p className="mb-0 small">
                Professional business consultation and visa application
                assistance
              </p>
            </div>
          </div>
        </div>

        {/* Business Activities Section */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="text-blue mb-4">
                <Briefcase className="me-2" size={24} />
                Approved Business Activities
              </h3>
              <p className="text-muted mb-3">
                The B-1 visa covers various legitimate business activities. Here
                are the most common purposes:
              </p>
              <ul className="list-unstyled">
                {businessActivities.map((activity, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <CheckCircle
                      className="me-2 text-success flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="text-blue mb-4">
                <FileText className="me-2" size={24} />
                Important Guidelines
              </h3>
              <div className="alert alert-warning">
                <strong>Recent Policy Update:</strong> New regulations require
                proper documentation of business purpose and complete uniform
                compliance during official visits.
              </div>
              <p className="text-muted">
                "Standards for courtesy, accountability, responsibility,
                efficiency and service. It is high time that law enforcement be
                professionalized. We must implement our policies with
                professionalism and courtesy."
              </p>
            </div>
          </div>
        </div>

        {/* Visa Programs Section */}
        <div className="mb-5">
          <h2 className="text-blue mb-4">Related Visa Programs</h2>
          <div className="row">
            {visaPrograms.map((program, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="text-blue">{program.title}</h5>
                    <p className="card-text text-muted small">
                      {program.description}
                    </p>
                    <div className="mt-3">
                      {program.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="mb-2">
                          <a
                            href="#"
                            className="text-decoration-none d-flex text-blue align-items-center" style={{ fontSize: "14px" }}
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
                Ready to Apply for Your Business Visa?
              </h3>
              <p className="mb-0">
                Get expert guidance through the application process with our
                professional consultation services.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+88123456987231">
                <button className="btn btn-light btn-lg">
                  <Calendar className="me-2" size={20} />
                  Schedule Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
