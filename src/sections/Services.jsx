import "../styles/Services.css";
import { GrDocumentText, GrDocumentVerified, GrDocumentUser, GrDocumentWord } from "react-icons/gr";

export default function Services() {
  const services = [
    {
      icon: <GrDocumentText />,
      title: "Land Registration",
      description:
        "Complete assistance with property registration, ensuring legal compliance and smooth processing",
    },
    {
      icon: <GrDocumentUser />,
      title: "Legal Agreements",
      description:
        "Drafting and reviewing agreements such as sale deeds, rental agreements, and contracts with clarity and accuracy",
    },
    {
      icon: <GrDocumentVerified />,
      title: "Legal Opinions",
      description:
        "Expert legal advice and opinion on property transactions to safeguard your interests",
    },
    {
      icon: <GrDocumentWord />,
      title: "Affidavits & Declarations",
      description:
        "Preparation of affidavits, declarations, and supporting documents as per legal requirements",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        We provide end-to-end support in preparing land registration papers,
        drafting legal agreements, and offering expert legal opinions. Every
        document is carefully verified to ensure accuracy, compliance, and
        protection of your rights.
      </p>
      <div className="services-wrapper">
        {services.map((service, idx)=>(
          <div className="service">
            <span className="service-icon">
              {service.icon}
            </span>
            <p className="service-title">{service.title}</p>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
