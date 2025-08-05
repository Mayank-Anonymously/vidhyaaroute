import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import SectionHeading from "./ui/SectionHeading";

const VisaCategoriesSection = () => {
  const cardData = [
    {
      id: 1,
      image: "/images/admission.jpg",
      icon: "/images/icons/building.png",
      title: "Overseas Admission",
      description: "Explore Global Education with Vidhyaa Route's Guidance",
      features: [
        "Why Study Abroad with Vidhyaa Route?",
        "Our End-to-End Admission Process",
        "Where We Place Students",
      ],
      link: "/overseasadmission",
    },
    {
      id: 2,
      image: "/images/passport.jpg",
      icon: "/images/icons/suitcase.png",
      title: "Education Loan Assistance",
      description: "Vidhyaa Route Simplifies Global Education Financing",
      features: [
        "Trusted Experts in Education Loans",
        "Our Loan Assistance Includes:",
        "Why Loan Support Matters",
      ],
      link: "/educationloan",
    },
    {
      id: 3,
      image: "/images/student.jpg",
      icon: "/images/icons/profile.png",
      title: "Student Visa Assistance",
      description:
        "We offer complete visa support to help students submit strong, timely applications.",
      features: [
        "Why Visa Guidance Matters",
        "Visa Support for All Major Destinations",
        "Our Visa Assistance Process",
      ],
      link: "/studentvisa",
    },
  ];

  return (
    <section
      className="visa-section"
      style={{ backgroundImage: 'url("/images/bgdots.png")' }}
    >
      <div className="container position-relative z-1">
        <SectionHeading
          label="Visa Categories"
          title="Simplifying Your Path to Global Education"
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center card-row">
          {cardData.map((card) => (
            <div key={card.id} className="col">
              <div className="card h-100 border-0 rounded-3 shadow card-hover-effect">
                <div className="card-image-wrapper">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="card-body position-relative pt-5 text-center">
                  <div className="card-icon">
                    <Image
                      src={card.icon}
                      alt="Icon"
                      width={30}
                      height={30}
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="fs-4 fw-semibold text-start text-blue mb-3">
                    {card.title}
                  </h3>
                  <p className="text-secondary text-start mb-4">
                    {card.description}
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    {card.features.map((feature, index) => (
                      <li key={index} className="list-item">
                        <FaCheck /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.link}
                    className="text-decoration-none  fw-semibold read-more"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    Read More <BsArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategoriesSection;
