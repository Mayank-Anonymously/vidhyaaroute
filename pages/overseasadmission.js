import BreadcrumbBanner from "@/components/BreadCrumbBanner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/business/Sidebar";
import Footer from "@/components/ui/Footer";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  ExternalLink,
  FileText,
} from "lucide-react";
import React from "react";

const OverseasAdmission = () => {
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
    <>
      <Navbar />
      <BreadcrumbBanner title="Overseas Admission" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-8">
            <div className="p-4">
              {/* Header Section */}
              <div className="mb-5">
                <h1 className="display-4 fw-bold text-blue mb-3">
                  Overseas Visa
                </h1>
                <p className="lead text-muted">
                  Planning an international trip? An overseas visa is essential
                  for travel, whether for tourism, education, or personal
                  visits. Our guide simplifies the application process,
                  documentation requirements, and country-specific guidelines.
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
                      Expert assistance for overseas visa application and travel
                      support
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Sections */}
              <div className="row mb-5">
                {/* Common Purposes */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <Briefcase className="me-2" size={24} />
                      Common Visa Purposes
                    </h3>
                    <p className="text-muted mb-3">
                      Overseas visas can be issued for various reasons. Here are
                      the most common purposes:
                    </p>
                    <ul className="list-unstyled">
                      {[
                        "Tourism or vacation",
                        "Visiting family or friends abroad",
                        "Medical treatment overseas",
                        "Short-term courses or education",
                        "Religious pilgrimages or events",
                      ].map((activity, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
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

                {/* Important Notes */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <FileText className="me-2" size={24} />
                      Documentation & Tips
                    </h3>
                    <div className="alert alert-warning">
                      <strong>Pro Tip:</strong> Ensure your passport is valid
                      for at least 6 months from the travel date and check
                      embassy-specific requirements.
                    </div>
                    <p className="text-muted">
                      Be thorough with your paperwork. Always carry copies, use
                      consistent identity details, and submit financial proof,
                      travel itinerary, and sponsor letters if required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Visa Programs */}
              <div className="mb-5">
                <h2 className="text-blue mb-4">
                  Popular Country-Specific Visa Guides
                </h2>
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
              <div className="bg-primary text-white p-4 rounded mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="mb-2">
                      Need Help With Your Overseas Visa Application?
                    </h3>
                    <p className="mb-0">
                      Get personal guidance for form filling, appointment
                      booking, and document checklist tailored to your travel
                      plans.
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <a href="tel:+88123456987231">
                      <button className="btn btn-light btn-lg">
                        <Calendar className="me-2" size={20} />
                        Book Visa Consultation
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OverseasAdmission;
