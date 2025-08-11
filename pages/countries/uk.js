import BreadcrumbBanner from "@/components/BreadCrumbBanner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/business/Sidebar";
import Footer from "@/components/ui/Footer";
import {
  GraduationCap,
  MapPin,
  Star,
  ExternalLink,
  Users,
  BookOpen,
  Award,
  Globe,
} from "lucide-react";
import React from "react";

const UKUniversities = () => {
  const whyStudyUK = [
    "Home to world-renowned universities like Oxford and Cambridge",
    "Shorter degree programs (3 years for Bachelor's, 1 year for Master's)",
    "Post-study work visa opportunities up to 2-3 years",
    "Rich cultural heritage and diverse student community",
    "Gateway to Europe with excellent research facilities",
  ];

  const topUniversities = [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      ranking: "#1 in UK",
      image: "/images/university/uk/oxford.webp",
      description: "The oldest university in the English-speaking world, renowned for academic excellence and research.",
      highlights: ["38 Colleges", "Rhodes Scholarships", "Alumni: 28 UK Prime Ministers"],
      tuitionRange: "£9,250 - £37,510",
      popularPrograms: ["Medicine", "Law", "Philosophy", "Engineering"],
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, England",
      ranking: "#2 in UK",
      image: "/images/university/uk/cambridge.avif",
      description: "World-leading research university with 800+ years of academic tradition and innovation.",
      highlights: ["31 Colleges", "Trinity College", "Alumni: Stephen Hawking, Newton"],
      tuitionRange: "£9,250 - £33,825",
      popularPrograms: ["Computer Science", "Mathematics", "Natural Sciences", "Economics"],
    },
    {
      name: "Imperial College London",
      location: "London, England",
      ranking: "#3 in UK",
      image: "/images/university/uk/imperial.jpeg",
      description: "Leading science, technology, engineering and medicine university in the heart of London.",
      highlights: ["Science Focus", "Industry Partnerships", "Innovation Hub"],
      tuitionRange: "£9,250 - £34,000",
      popularPrograms: ["Engineering", "Medicine", "Business", "Data Science"],
    },
    {
      name: "London School of Economics",
      location: "London, England",
      ranking: "#4 in UK",
      image: "/images/university/uk/lse.jpeg",
      description: "Specialist university focused on social sciences, economics, and political science.",
      highlights: ["Central London", "Nobel Laureates", "Global Network"],
      tuitionRange: "£9,250 - £23,330",
      popularPrograms: ["Economics", "Political Science", "Law", "International Relations"],
    },
    {
      name: "University College London",
      location: "London, England",
      ranking: "#5 in UK",
      image: "/images/university/uk/ucl.webp",
      description: "London's leading multidisciplinary university with a global reputation for research excellence.",
      highlights: ["Multidisciplinary", "Research Excellence", "Central Location"],
      tuitionRange: "£9,250 - £28,500",
      popularPrograms: ["Architecture", "Psychology", "Medicine", "Engineering"],
    },
    {
      name: "University of Edinburgh",
      location: "Edinburgh, Scotland",
      ranking: "#6 in UK",
      image: "/images/university/uk/edinburg.jpeg",
      description: "Scotland's premier university combining historic tradition with cutting-edge research.",
      highlights: ["UNESCO World Heritage", "Festival City", "Research Intensive"],
      tuitionRange: "£9,250 - £32,100",
      popularPrograms: ["Medicine", "Law", "Business", "Arts & Humanities"],
    },
  ];

  const applicationRequirements = [
    "Academic transcripts and certificates",
    "English language proficiency (IELTS/TOEFL)",
    "Personal statement or statement of purpose",
    "Letters of recommendation",
    "Portfolio (for creative courses)",
    "Entrance exams (if required by specific programs)",
  ];

  return (
    <>
      <Navbar />
      <BreadcrumbBanner title="UK Universities" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-8">
            <div className="p-4">
              {/* Header Section */}
              <div className="mb-5">
                <h1 className="display-4 fw-bold text-blue mb-3">
                  Study in the United Kingdom
                </h1>
                <p className="lead text-muted">
                  Discover world-class education at prestigious UK universities. 
                  From historic institutions like Oxford and Cambridge to modern 
                  research powerhouses, the UK offers diverse academic opportunities 
                  in a culturally rich environment.
                </p>    
              </div>

              {/* Hero Image */}
              <div className="mb-5">
                <div className="position-relative rounded overflow-hidden shadow-lg">
                  <img
                    src="/images/university/uk/oxford.webp"
                    alt="UK Universities"
                    className="w-100 h-auto"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white p-3">
                    <p className="mb-0 small">
                      Join over 485,000 international students studying at UK universities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Sections */}
              <div className="row mb-5">
                {/* Why Study in UK */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <Globe className="me-2" size={24} />
                      Why Study in the UK?
                    </h3>
                    <p className="text-muted mb-3">
                      The United Kingdom is home to some of the world's oldest and 
                      most prestigious universities, offering exceptional academic 
                      standards and research opportunities.
                    </p>
                    <ul className="list-unstyled">
                      {whyStudyUK.map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
                          <Star
                            className="me-2 text-warning flex-shrink-0 mt-1"
                            size={16}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Requirements */}
                <div className="col-lg-6">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <h3 className="text-blue mb-4">
                      <BookOpen className="me-2" size={24} />
                      Application Requirements
                    </h3>
                    <div className="alert alert-info">
                      <strong>Application Deadline:</strong> Most UK universities 
                      have deadlines between January-June for September intake.
                    </div>
                    <p className="text-muted mb-3">
                      General requirements for international students applying to UK universities:
                    </p>
                    <ul className="list-unstyled">
                      {applicationRequirements.map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
                          <Award
                            className="me-2 text-primary flex-shrink-0 mt-1"
                            size={16}
                          />
                          <span className="small">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div className="mb-5">
                <h2 className="text-blue mb-4">
                  <GraduationCap className="me-2" size={28} />
                  Top UK Universities for International Students
                </h2>
                <div className="row">
                  {topUniversities.map((university, index) => (
                    <div key={index} className="col-lg-6 mb-4">
                      <div className="card h-100 shadow-sm">
                        <img
                          src={university.image}
                          alt={university.name}
                          className="card-img-top"
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="text-blue mb-0">{university.name}</h5>
                            <span className="badge bg-primary">{university.ranking}</span>
                          </div>
                          
                          <div className="d-flex align-items-center text-muted mb-2">
                            <MapPin size={14} className="me-1" />
                            <small>{university.location}</small>
                          </div>
                          
                          <p className="card-text text-muted small mb-3">
                            {university.description}
                          </p>
                          
                          <div className="mb-3">
                            <h6 className="text-blue mb-2">Key Highlights:</h6>
                            <div className="d-flex flex-wrap gap-1">
                              {university.highlights.map((highlight, hIndex) => (
                                <span key={hIndex} className="badge bg-light text-dark small">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <h6 className="text-blue mb-2">Popular Programs:</h6>
                            <div className="d-flex flex-wrap gap-1">
                              {university.popularPrograms.map((program, pIndex) => (
                                <span key={pIndex} className="badge bg-secondary small">
                                  {program}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="border-top pt-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <small className="text-muted">Annual Tuition:</small>
                                <div className="fw-bold text-success">{university.tuitionRange}</div>
                              </div>
                              <a
                                href="#"
                                className="btn btn-outline-primary btn-sm d-flex align-items-center"
                              >
                                Learn More
                                <ExternalLink className="ms-1" size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="row mb-5">
                <div className="col-lg-3 col-md-6 mb-3">
                  <div className="text-center p-3 bg-primary text-white rounded">
                    <Users size={32} className="mb-2" />
                    <h4 className="mb-1">485K+</h4>
                    <small>International Students</small>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                  <div className="text-center p-3 bg-success text-white rounded">
                    <GraduationCap size={32} className="mb-2" />
                    <h4 className="mb-1">160+</h4>
                    <small>Universities</small>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                  <div className="text-center p-3 bg-warning text-white rounded">
                    <Award size={32} className="mb-2" />
                    <h4 className="mb-1">4</h4>
                    <small>Top 10 Universities</small>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                  <div className="text-center p-3 bg-info text-white rounded">
                    <BookOpen size={32} className="mb-2" />
                    <h4 className="mb-1">2-3 Years</h4>
                    <small>Post-Study Work Visa</small>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-primary text-white p-4 rounded mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="mb-2">
                      Ready to Start Your UK University Application?
                    </h3>
                    <p className="mb-0">
                      Get personalized guidance on university selection, application 
                      process, scholarship opportunities, and visa requirements for studying in the UK.
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <a href="tel:+88123456987231">
                      <button className="btn btn-light btn-lg">
                        <GraduationCap className="me-2" size={20} />
                        Start Your Journey
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

export default UKUniversities;