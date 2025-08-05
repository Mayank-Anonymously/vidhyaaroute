import React from "react";
import SectionHeading from "../ui/SectionHeading";

const teamMembers = [
  {
    name: "Roman Frederick",
    role: "Regional Manager",
    image: "/images/team.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Medical Assistant",
    image: "/images/team.jpg",
  },
  {
    name: "Esther Howard",
    role: "President of Sales",
    image: "/images/team.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "Marketing Coordinator",
    image: "/images/team.jpg",
  },
];

const Team = () => {
  return (
    <section
      className="py-5 bg-light text-center position-relative"
      style={{ backgroundImage: 'url("/images/bgdots.png")' }}
    >
      <div className="container">
        <SectionHeading
          label="Visa Categories"
          title="Simplifying Your Path to Global Education"
        />
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <div
                className="rounded-4 overflow-hidden bg-white shadow position-relative"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                {/* Full Card Image */}
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Share Icon */}
                <div
                  className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    bottom: "80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    border: "2px solid #f0f0f0",
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#007bff";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#6c757d";
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>

                {/* Info */}
                <div className="p-3 text-center">
                  <h5 className="text-blue fw-bold mb-1">{member.name}</h5>
                  <p className="text-muted mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
