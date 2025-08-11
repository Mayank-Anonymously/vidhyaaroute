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

const StudentVisa = () => {
  const studyPurposes = [
    "Pursuing undergraduate or postgraduate degrees",
    "Attending language or diploma courses",
    "Enrolling in exchange or pathway programs",
    "Research or doctoral studies",
    "Short-term academic training or internships",
  ];

  const visaPrograms = [
    {
      title: "USA F1 Student Visa",
      description: "Required for full-time academic study in the United States",
      image: "/images/visaB.jpg",
      links: ["Eligibility", "Application Process", "Interview Tips"],
    },
    {
      title: "Canada Study Permit",
      description: "Study permit required for programs over 6 months",
      image: "/images/visawaiver.jpg",
      links: ["Eligibility", "Biometrics", "Visa Checklist"],
    },
    {
      title: "UK Student Visa (Tier 4)",
      description: "For students with confirmed offers from UK institutions",
      image: "/images/america.jpg",
      links: ["CAS Process", "Financial Requirements", "Visa Fees"],
    },
  ];

  return (
    <>
      <Navbar />
      <BreadcrumbBanner title="Student Visa Assistance" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-8">
            <div className="p-4">
              {/* Header Section */}
              <div className="mb-5">
                <h1 className="display-4 fw-bold text-blue mb-3">
                  Student Visa Support
                </h1>
                <p className="lead text-muted">
                  Planning to study abroad? Our Student Visa Assistance program
                  provides expert help with application forms, financial
                  documentation, embassy interviews, and more. Navigate the visa
                  process with clarity and confidence.
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
                      Personalized guidance for student visa applications and
                      university support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Sections */}
              <div className="row mb-5">
                {/* Study Purposes */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <Briefcase className="me-2" size={24} />
                      Common Study Visas Are Issued For
                    </h3>
                    <p className="text-muted mb-3">
                      Student visas are designed for academic and career-based
                      education abroad. Here are common use cases:
                    </p>
                    <ul className="list-unstyled">
                      {studyPurposes.map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
                          <CheckCircle
                            className="me-2 text-success flex-shrink-0 mt-1"
                            size={16}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Documentation & Tips */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <FileText className="me-2" size={24} />
                      Documentation Checklist & Tips
                    </h3>
                    <div className="alert alert-warning">
                      <strong>Pro Tip:</strong> Start your visa application
                      early to avoid delays due to embassy appointments and
                      biometrics.
                    </div>
                    <p className="text-muted">
                      Typical student visa requirements include passport,
                      admission letter, financial proof (education loan, sponsor
                      affidavit), academic transcripts, and language proficiency
                      test scores (like IELTS, TOEFL).
                    </p>
                  </div>
                </div>
              </div>

              {/* Visa by Country */}
              <div className="mb-5">
                <h2 className="text-blue mb-4">
                  Popular Student Visa Programs by Country
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
                      Need Help With Your Student Visa Application?
                    </h3>
                    <p className="mb-0">
                      Schedule a consultation to get expert advice on form
                      filling, visa slots, embassy interviews, and university
                      documentation.
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

export default StudentVisa;
