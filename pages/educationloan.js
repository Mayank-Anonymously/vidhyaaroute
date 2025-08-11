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

// Sample data for bank-specific or country-based loan programs
const loanPrograms = [
  {
    title: "Loan for US Education",
    description:
      "Tailored loan plans for students pursuing studies in the USA.",
    image: "/images/visaB.jpg",
    links: ["Eligibility", "Required Documents", "Repayment Terms"],
  },
  {
    title: "Loan for UK Education",
    description: "Student loans with competitive interest for UK institutions.",
    image: "/images/visawaiver.jpg",
    links: ["Overview", "Application Process", "Tax Benefits"],
  },
  {
    title: "Loan for Canada Education",
    description:
      "Flexible loan options for undergraduate and graduate studies in Canada.",
    image: "/images/america.jpg",
    links: ["Loan Limits", "How to Apply", "Moratorium Rules"],
  },
];

const EducationLoan = () => {
  return (
    <>
      <Navbar />
      <BreadcrumbBanner title="Education Loan Assistance" />

      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <Sidebar />

          <div className="col-lg-9 col-md-8">
            <div className="p-4">
              {/* Page Heading */}
              <div className="mb-5">
                <h1 className="display-4 fw-bold text-blue mb-3">
                  Education Loan Assistance
                </h1>
                <p className="lead text-muted">
                  Planning to study in India or abroad? Our education loan
                  experts help you navigate the process—from choosing the right
                  loan provider to compiling documents and submitting your
                  application for faster approval.
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
                      Expert help for education loans for international and
                      domestic studies
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits and Eligibility Section */}
              <div className="row mb-5">
                {/* Benefits */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <Briefcase className="me-2" size={24} />
                      Key Benefits of Education Loans
                    </h3>
                    <p className="text-muted mb-3">
                      Student loans make higher education more accessible.
                      Here’s what they typically cover:
                    </p>
                    <ul className="list-unstyled">
                      {[
                        "Tuition, living, and travel expenses",
                        "Flexible repayment terms after graduation",
                        "Lower interest rates for top-tier institutions",
                        "Grace period during your course (moratorium)",
                        "Income Tax benefits under Section 80E",
                      ].map((benefit, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
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

                {/* Documentation & Tips */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <FileText className="me-2" size={24} />
                      Eligibility & Documentation
                    </h3>
                    <div className="alert alert-warning">
                      <strong>Pro Tip:</strong> Ensure you apply early and
                      verify co-applicant income and academic credentials before
                      submission.
                    </div>
                    <p className="text-muted">
                      Basic requirements include an admission letter, mark
                      sheets, co-applicant’s income proof, and passport copy.
                      Banks may have additional forms or conditions based on
                      your destination country and course type.
                    </p>
                  </div>
                </div>
              </div>

              {/* Country-Specific Loan Info */}
              <div className="mb-5">
                <h2 className="text-blue mb-4">
                  Study Abroad Loan Support by Country
                </h2>
                <div className="row">
                  {loanPrograms.map((program, index) => (
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
                      Need Help With Your Education Loan Process?
                    </h3>
                    <p className="mb-0">
                      Schedule a free consultation to streamline your loan
                      paperwork and improve approval chances.
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <a href="tel:+88123456987231">
                      <button className="btn btn-light btn-lg">
                        <Calendar className="me-2" size={20} />
                        Book Loan Assistance
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

export default EducationLoan;
