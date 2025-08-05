import React from "react";
import {
  Briefcase,
  Building,
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const visaCategories = [
    {
      name: "Business Visa",
      icon: <Building className="me-2" size={20} />,
      active: true,
    },
    { name: "Working Visas", icon: <Briefcase className="me-2" size={20} /> },
    { name: "Residence Visas", icon: <Users className="me-2" size={20} /> },
    { name: "Student Visas", icon: <FileText className="me-2" size={20} /> },
    { name: "Spouse/Family Visas", icon: <Users className="me-2" size={20} /> },
    { name: "Tourist Visas", icon: <Globe className="me-2" size={20} /> },
  ];

  return (
    <div className="col-lg-3 col-md-4 p-0">
      {/* Section 1: Visa Categories */}
      <div className="text-white p-3 " style={{ backgroundColor: "#f5f5f5" }}>
        <div className="bg-blue-dark p-4">
          <ul className="list-unstyled">
            {visaCategories.map((category, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className={`text-decoration-none d-flex align-items-center p-2 rounded ${
                    category.active
                      ? "bg-primary text-white"
                      : "text-light hover-bg-secondary"
                  }`}
                >
                  {/* {category.icon} */}
                  {category.name}
                  <ExternalLink className="ms-auto" size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Travel Pass */}
      <div className="bg-blue-dark text-white p-3 mt-3">
        <div
          className=""
          style={{
            backgroundImage: "url('images/america.jpg')",
            height: "200px",
          }}
        >
          <div
            className="position-absolute p-3"
            style={{ background: "#042b66b5" }}
          >
            <h5 className="mb-3">Travel Pass</h5>
            {["Application Form", "Checklist", "Guidelines"].map((item, i) => (
              <div className="d-flex align-items-center mb-2" key={i}>
                <CheckCircle className="me-2 text-success" size={16} />
                <span className="small">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Annual Report */}
      <div className="bg-blue-dark text-white p-4 mt-3">
        <h5 className="mb-3">Annual Report /<br/> Online Application</h5>
        <div className="row">
          {[1, 2].map((_, i) => (
            <div className="col-6 mb-3" key={i}>
              <div className="text-center p-3 rounded" style={{border:"1px solid"}}>
                <FileText size={32} className="mb-2" />
                <div className="small">
                  <div>PDF</div>
                  <div>Application Form</div>
                  <div className="text-white">450kb</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
