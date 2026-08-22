import React from "react";

import {
  FaStethoscope,
  FaPaw,
  FaDog,
  FaCat,
  FaHorse,
  FaSyringe,
  FaMicroscope,
  FaFlask,
  FaShieldAlt,
  FaHeartbeat,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaMedkit,
  FaVial,
  FaLeaf,
  FaDna,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaUserTie,
  FaBookOpen,
  FaUsers,
  FaHospital,
} from "react-icons/fa";

const VeterinaryDepartment = () => {
  const programs = [
    {
      icon: <FaGraduationCap />,
      title: "Veterinary Science",
      description:
        "Practical and theoretical education in animal health, disease prevention, treatment and livestock management.",
    },
    {
      icon: <FaStethoscope />,
      title: "Animal Health Care",
      description:
        "Students learn clinical examination, diagnosis, treatment and preventive healthcare practices.",
    },
    {
      icon: <FaMicroscope />,
      title: "Laboratory Practice",
      description:
        "Hands-on laboratory training in disease identification, sample examination and veterinary diagnostics.",
    },
    {
      icon: <FaPaw />,
      title: "Livestock Management",
      description:
        "Training focused on proper management, nutrition, breeding and production of livestock.",
    },
  ];

  const services = [
    {
      icon: <FaStethoscope />,
      title: "Animal Diagnosis",
      description:
        "Basic clinical examination and identification of common animal health problems.",
    },
    {
      icon: <FaSyringe />,
      title: "Vaccination Support",
      description:
        "Practical knowledge of vaccination procedures and disease prevention.",
    },
    {
      icon: <FaMicroscope />,
      title: "Laboratory Testing",
      description:
        "Laboratory-based examination of samples for educational and diagnostic purposes.",
    },
    {
      icon: <FaMedkit />,
      title: "Animal Treatment",
      description:
        "Students develop practical knowledge of basic veterinary treatment procedures.",
    },
    {
      icon: <FaLeaf />,
      title: "Animal Nutrition",
      description:
        "Learning about balanced feeding, nutritional requirements and livestock productivity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Disease Prevention",
      description:
        "Training on hygiene, biosecurity and prevention of infectious animal diseases.",
    },
  ];

  const facilities = [
    {
      icon: <FaFlask />,
      title: "Veterinary Laboratory",
      description:
        "A dedicated laboratory for practical veterinary science, sample examination and diagnostic learning.",
    },
    {
      icon: <FaMicroscope />,
      title: "Microscopy Section",
      description:
        "Microscopes and practical resources for observing biological and pathological samples.",
    },
    {
      icon: <FaVial />,
      title: "Sample Collection",
      description:
        "Facilities and equipment for learning proper collection, handling and examination of samples.",
    },
    {
      icon: <FaSyringe />,
      title: "Vaccination Practice",
      description:
        "Practical training for learning vaccination and preventive veterinary procedures.",
    },
    {
      icon: <FaPaw />,
      title: "Animal Handling",
      description:
        "Practical learning environment for safe handling and basic examination of animals.",
    },
    {
      icon: <FaDna />,
      title: "Diagnostic Learning",
      description:
        "Educational resources for understanding diseases, pathogens and veterinary diagnostics.",
    },
  ];

  const animals = [
    {
      icon: <FaDog />,
      title: "Dogs",
      description:
        "Basic care, examination, vaccination and common health problems.",
    },
    {
      icon: <FaCat />,
      title: "Cats",
      description:
        "Learning about feline health, nutrition and disease prevention.",
    },
    {
      icon: <FaHorse />,
      title: "Large Animals",
      description:
        "Practical knowledge related to large livestock and farm animal health.",
    },
    {
      icon: <FaPaw />,
      title: "Livestock",
      description:
        "Training related to cattle, buffalo, goats, sheep and other livestock.",
    },
  ];

  const highlights = [
    "Practical veterinary education",
    "Veterinary laboratory practice",
    "Animal health and disease prevention",
    "Livestock management training",
    "Animal nutrition and breeding",
    "Hands-on clinical learning",
    "Laboratory sample examination",
    "Experienced teaching support",
  ];

  return (
    <div className="veterinary-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .veterinary-page {
          width: 100%;
          overflow-x: hidden;
          background: #f8fafc;
          color: #1f2937;
          font-family: Arial, Helvetica, sans-serif;
        }

        .vet-hero {
          min-height: 540px;
          padding: 90px 7%;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(
              135deg,
              rgba(3, 78, 58, 0.97),
              rgba(5, 150, 105, 0.88)
            ),
            url("https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1800&q=85")
            center/cover;
        }

        .vet-hero-content {
          max-width: 820px;
          position: relative;
          z-index: 2;
        }

        .vet-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 30px;
          margin-bottom: 22px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.28);
          font-size: 14px;
          font-weight: 600;
        }

        .vet-hero h1 {
          margin: 0 0 22px;
          font-size: clamp(40px, 6vw, 68px);
          line-height: 1.05;
          font-weight: 800;
        }

        .vet-hero h1 span {
          color: #bbf7d0;
        }

        .vet-hero p {
          max-width: 750px;
          margin: 0 0 30px;
          color: #ecfdf5;
          font-size: 18px;
          line-height: 1.8;
        }

        .vet-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .vet-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .vet-btn-primary {
          background: #fff;
          color: #065f46;
        }

        .vet-btn-primary:hover {
          transform: translateY(-3px);
          background: #ecfdf5;
        }

        .vet-btn-outline {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.55);
        }

        .vet-btn-outline:hover {
          background: rgba(255,255,255,0.12);
        }

        .vet-hero-icon {
          position: absolute;
          right: 8%;
          bottom: 50px;
          color: rgba(255,255,255,0.08);
          font-size: 190px;
        }

        .vet-section {
          padding: 80px 7%;
        }

        .vet-section-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .vet-section-label {
          margin-bottom: 12px;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 800;
        }

        .vet-section-header h2 {
          margin: 0 0 15px;
          color: #064e3b;
          font-size: clamp(30px, 4vw, 45px);
        }

        .vet-section-header p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
        }

        .vet-intro {
          background: #fff;
        }

        .vet-intro-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        .vet-intro-content h2 {
          margin: 0 0 20px;
          color: #064e3b;
          font-size: 40px;
        }

        .vet-intro-content p {
          margin: 0 0 18px;
          color: #64748b;
          line-height: 1.9;
        }

        .vet-check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 25px;
        }

        .vet-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334155;
          font-weight: 600;
        }

        .vet-check-item svg {
          flex-shrink: 0;
          color: #059669;
        }

        .vet-intro-card {
          position: relative;
          overflow: hidden;
          padding: 45px;
          border-radius: 24px;
          color: #fff;
          background: linear-gradient(145deg, #064e3b, #059669);
        }

        .vet-intro-card-icon {
          margin-bottom: 25px;
          color: #bbf7d0;
          font-size: 80px;
        }

        .vet-intro-card h3 {
          margin: 0 0 15px;
          font-size: 28px;
        }

        .vet-intro-card p {
          margin: 0;
          color: #d1fae5;
          line-height: 1.8;
        }

        .vet-teacher-section {
          background: #f8fafc;
        }

        .vet-teacher-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 55px;
          align-items: center;
        }

        .vet-teacher-image-wrapper {
          position: relative;
        }

        .vet-teacher-image {
          width: 100%;
          height: 500px;
          display: block;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(15,23,42,0.15);
        }

        .vet-teacher-badge {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 20px;
          border-radius: 15px;
          color: #fff;
          background: rgba(6,78,59,0.94);
          backdrop-filter: blur(8px);
        }

        .vet-teacher-badge-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #10b981;
          font-size: 22px;
        }

        .vet-teacher-badge h4 {
          margin: 0 0 4px;
          font-size: 17px;
        }

        .vet-teacher-badge p {
          margin: 0;
          color: #d1fae5;
          font-size: 13px;
        }

        .vet-teacher-content .vet-section-label {
          text-align: left;
        }

        .vet-teacher-content h2 {
          margin: 0 0 20px;
          color: #064e3b;
          font-size: 42px;
        }

        .vet-teacher-content > p {
          margin: 0 0 18px;
          color: #64748b;
          line-height: 1.9;
        }

        .vet-teacher-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 28px;
        }

        .vet-teacher-feature {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .vet-teacher-feature-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #059669;
          background: #ecfdf5;
        }

        .vet-teacher-feature h4 {
          margin: 0 0 5px;
          color: #064e3b;
          font-size: 15px;
        }

        .vet-teacher-feature p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
        }

        .vet-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .vet-card {
          height: 100%;
          padding: 30px 24px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #fff;
          transition: 0.3s ease;
        }

        .vet-card:hover {
          transform: translateY(-8px);
          border-color: #a7f3d0;
          box-shadow: 0 18px 40px rgba(15,23,42,0.1);
        }

        .vet-card-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border-radius: 14px;
          color: #059669;
          background: #ecfdf5;
          font-size: 25px;
        }

        .vet-card h3 {
          margin: 0 0 12px;
          color: #064e3b;
          font-size: 20px;
        }

        .vet-card p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .vet-lab {
          background: #ecfdf5;
        }

        .vet-lab-image-wrapper {
          max-width: 1150px;
          height: 440px;
          margin: 0 auto 50px;
          position: relative;
          overflow: hidden;
          border-radius: 25px;
          box-shadow: 0 20px 50px rgba(6,78,59,0.15);
        }

        .vet-lab-main-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .vet-lab-image-wrapper:hover .vet-lab-main-image {
          transform: scale(1.04);
        }

        .vet-lab-image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 50px;
          background: linear-gradient(
            90deg,
            rgba(6,78,59,0.88),
            rgba(6,78,59,0.12)
          );
        }

        .vet-lab-overlay-content {
          max-width: 530px;
          color: #fff;
        }

        .lab-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 15px;
          background: rgba(255,255,255,0.16);
          font-size: 30px;
        }

        .vet-lab-overlay-content h3 {
          margin: 0 0 12px;
          font-size: 34px;
        }

        .vet-lab-overlay-content p {
          margin: 0;
          color: #ecfdf5;
          line-height: 1.8;
        }

        .vet-lab-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .vet-lab-card {
          padding: 30px;
          border: 1px solid #d1fae5;
          border-radius: 18px;
          background: #fff;
          transition: 0.3s ease;
        }

        .vet-lab-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(6,78,59,0.1);
        }

        .vet-lab-card .vet-card-icon {
          color: #fff;
          background: #064e3b;
        }

        .vet-lab-card h3 {
          margin: 0 0 10px;
          color: #064e3b;
          font-size: 19px;
        }

        .vet-lab-card p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .vet-animal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .vet-animal-card {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          text-align: center;
          background: #fff;
          transition: 0.3s ease;
        }

        .vet-animal-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.09);
        }

        .vet-animal-icon {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(135deg,#064e3b,#10b981);
          font-size: 70px;
        }

        .vet-animal-content {
          padding: 25px;
        }

        .vet-animal-content h3 {
          margin: 0 0 10px;
          color: #064e3b;
        }

        .vet-animal-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .vet-services {
          background: #fff;
        }

        .vet-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .vet-service-card {
          display: flex;
          gap: 20px;
          padding: 28px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #fff;
          transition: 0.3s ease;
        }

        .vet-service-card:hover {
          border-color: #6ee7b7;
          box-shadow: 0 10px 30px rgba(15,23,42,0.07);
        }

        .vet-service-icon {
          width: 52px;
          height: 52px;
          min-width: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #059669;
          background: #ecfdf5;
          font-size: 21px;
        }

        .vet-service-card h3 {
          margin: 0 0 8px;
          color: #064e3b;
          font-size: 18px;
        }

        .vet-service-card p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .vet-cta {
          padding: 70px 7%;
          color: #fff;
          background: linear-gradient(135deg,#064e3b,#047857);
        }

        .vet-cta-inner {
          max-width: 1000px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .vet-cta h2 {
          margin: 0 0 12px;
          font-size: 38px;
        }

        .vet-cta p {
          margin: 0;
          color: #d1fae5;
          line-height: 1.8;
        }

        .vet-contact {
          background: #f8fafc;
        }

        .vet-contact-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .vet-contact-card {
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          text-align: center;
          background: #fff;
          transition: 0.3s ease;
        }

        .vet-contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(15,23,42,0.08);
        }

        .vet-contact-card svg {
          margin-bottom: 15px;
          color: #059669;
          font-size: 28px;
        }

        .vet-contact-card h3 {
          margin: 0 0 8px;
          color: #064e3b;
        }

        .vet-contact-card p {
          margin: 0;
          color: #64748b;
        }

        @media (max-width: 1100px) {
          .vet-card-grid,
          .vet-animal-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .vet-service-grid,
          .vet-lab-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .vet-teacher-grid {
            grid-template-columns: 1fr;
            max-width: 800px;
          }
        }

        @media (max-width: 800px) {
          .vet-hero {
            padding: 70px 6%;
          }

          .vet-hero-icon {
            display: none;
          }

          .vet-intro-grid {
            grid-template-columns: 1fr;
          }

          .vet-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .vet-contact-grid {
            grid-template-columns: 1fr;
          }

          .vet-lab-image-wrapper {
            height: 350px;
          }

          .vet-lab-image-overlay {
            padding: 30px;
          }

          .vet-lab-overlay-content h3 {
            font-size: 28px;
          }
        }

        @media (max-width: 600px) {
          .vet-section {
            padding: 60px 5%;
          }

          .vet-card-grid,
          .vet-animal-grid,
          .vet-service-grid,
          .vet-lab-grid {
            grid-template-columns: 1fr;
          }

          .vet-check-list {
            grid-template-columns: 1fr;
          }

          .vet-intro-card {
            padding: 30px;
          }

          .vet-cta h2 {
            font-size: 30px;
          }

          .vet-teacher-content h2 {
            font-size: 32px;
          }

          .vet-teacher-features {
            grid-template-columns: 1fr;
          }

          .vet-teacher-image {
            height: 400px;
          }

          .vet-teacher-badge {
            left: 15px;
            right: 15px;
            bottom: 15px;
          }

          .vet-lab-image-wrapper {
            height: 420px;
          }

          .vet-lab-image-overlay {
            align-items: flex-end;
            padding: 25px;
            background: linear-gradient(
              0deg,
              rgba(6,78,59,0.92),
              rgba(6,78,59,0.1)
            );
          }

          .vet-lab-overlay-content h3 {
            font-size: 25px;
          }
        }
      `}</style>

      <section className="vet-hero">
        <div className="vet-hero-content">
          <div className="vet-badge">
            <FaStethoscope />
            Veterinary Department
          </div>

          <h1>
            Veterinary Science <span>& Animal Health</span>
          </h1>

          <p>
            Developing skilled veterinary professionals through practical
            education, laboratory training, animal healthcare and modern
            livestock management practices.
          </p>

          <div className="vet-hero-buttons">
            <a href="#programs" className="vet-btn vet-btn-primary">
              Explore Programs
              <FaArrowRight />
            </a>

            <a href="#laboratory" className="vet-btn vet-btn-outline">
              Veterinary Laboratory
              <FaFlask />
            </a>
          </div>
        </div>

        <div className="vet-hero-icon">
          <FaPaw />
        </div>
      </section>

      <section className="vet-section vet-intro">
        <div className="vet-intro-grid">
          <div className="vet-intro-content">
            <div className="vet-section-label">
              About Department
            </div>

            <h2>Building Skills for Better Animal Health</h2>

            <p>
              The Veterinary Department provides students with knowledge and
              practical skills required for animal health, disease prevention,
              treatment, nutrition, breeding and livestock management.
            </p>

            <p>
              The department emphasizes practical learning through classroom
              instruction, laboratory activities, animal handling and field
              oriented veterinary education.
            </p>

            <div className="vet-check-list">
              {highlights.map((item, index) => (
                <div className="vet-check-item" key={index}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="vet-intro-card">
            <div className="vet-intro-card-icon">
              <FaHeartbeat />
            </div>

            <h3>Animal Health First</h3>

            <p>
              Our practical learning approach helps students understand
              veterinary science and develop the confidence needed for
              responsible animal healthcare and livestock production.
            </p>

            <FaShieldAlt
              style={{
                position: "absolute",
                right: "-15px",
                bottom: "-20px",
                fontSize: "90px",
                opacity: 0.08,
              }}
            />
          </div>
        </div>
      </section>

      <section className="vet-section vet-teacher-section">
        <div className="vet-teacher-grid">
          <div className="vet-teacher-image-wrapper">
            <img
              className="vet-teacher-image"
              src="./images/veterinary Teacher.jpg.jpeg"
              alt="Veterinary Teacher"
            />

            <div className="vet-teacher-badge">
              <div className="vet-teacher-badge-icon">
                <FaUserTie />
              </div>

              <div>
                <h4>Veterinary Teaching Faculty</h4>
                <p>
                  Academic and practical teaching support
                </p>
              </div>
            </div>
          </div>

          <div className="vet-teacher-content">
            <div className="vet-section-label">
              Our Teaching Faculty
            </div>

            <h2>Learn From Experienced Veterinary Teachers</h2>

            <p>
              Our veterinary teaching team supports students through classroom
              instruction, laboratory practice and practical animal healthcare
              activities.
            </p>

            <p>
              Teachers guide students in understanding animal diseases,
              diagnosis, treatment, nutrition, vaccination and livestock
              management.
            </p>

            <div className="vet-teacher-features">
              <div className="vet-teacher-feature">
                <div className="vet-teacher-feature-icon">
                  <FaBookOpen />
                </div>

                <div>
                  <h4>Academic Guidance</h4>
                  <p>
                    Strong theoretical foundation in veterinary science.
                  </p>
                </div>
              </div>

              <div className="vet-teacher-feature">
                <div className="vet-teacher-feature-icon">
                  <FaMicroscope />
                </div>

                <div>
                  <h4>Practical Training</h4>
                  <p>
                    Laboratory and diagnostic practical activities.
                  </p>
                </div>
              </div>

              <div className="vet-teacher-feature">
                <div className="vet-teacher-feature-icon">
                  <FaUsers />
                </div>

                <div>
                  <h4>Student Support</h4>
                  <p>
                    Individual and group-based learning assistance.
                  </p>
                </div>
              </div>

              <div className="vet-teacher-feature">
                <div className="vet-teacher-feature-icon">
                  <FaPaw />
                </div>

                <div>
                  <h4>Animal Handling</h4>
                  <p>
                    Practical guidance for safe animal handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vet-section" id="programs">
        <div className="vet-section-header">
          <div className="vet-section-label">
            Academic Areas
          </div>

          <h2>Veterinary Education</h2>

          <p>
            Students receive a combination of theoretical knowledge and
            practical experience across important areas of veterinary science.
          </p>
        </div>

        <div className="vet-card-grid">
          {programs.map((program, index) => (
            <div className="vet-card" key={index}>
              <div className="vet-card-icon">
                {program.icon}
              </div>

              <h3>{program.title}</h3>

              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vet-section vet-lab" id="laboratory">
        <div className="vet-section-header">
          <div className="vet-section-label">
            Practical Learning
          </div>

          <h2>Veterinary Laboratory</h2>

          <p>
            The veterinary laboratory supports practical education, diagnostic
            learning, sample examination and scientific understanding of
            animal health.
          </p>
        </div>

        <div className="vet-lab-image-wrapper">
          <img
            className="vet-lab-main-image"
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=85"
            alt="Veterinary Laboratory"
          />

          <div className="vet-lab-image-overlay">
            <div className="vet-lab-overlay-content">
              <div className="lab-icon">
                <FaMicroscope />
              </div>

              <h3>Modern Practical Laboratory</h3>

              <p>
                Students gain practical experience in microscopy, sample
                examination, laboratory procedures, disease identification
                and veterinary diagnostics.
              </p>
            </div>
          </div>
        </div>

        <div className="vet-lab-grid">
          {facilities.map((facility, index) => (
            <div className="vet-lab-card" key={index}>
              <div className="vet-card-icon">
                {facility.icon}
              </div>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vet-section">
        <div className="vet-section-header">
          <div className="vet-section-label">
            Animal Care
          </div>

          <h2>Animals & Livestock</h2>

          <p>
            Practical veterinary education covers companion animals, large
            animals and livestock commonly encountered in the community.
          </p>
        </div>

        <div className="vet-animal-grid">
          {animals.map((animal, index) => (
            <div className="vet-animal-card" key={index}>
              <div className="vet-animal-icon">
                {animal.icon}
              </div>

              <div className="vet-animal-content">
                <h3>{animal.title}</h3>

                <p>{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vet-section vet-services">
        <div className="vet-section-header">
          <div className="vet-section-label">
            Practical Training
          </div>

          <h2>Veterinary Services & Skills</h2>

          <p>
            Students develop practical knowledge in important veterinary
            healthcare and livestock management activities.
          </p>
        </div>

        <div className="vet-service-grid">
          {services.map((service, index) => (
            <div className="vet-service-card" key={index}>
              <div className="vet-service-icon">
                {service.icon}
              </div>

              <div>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vet-cta">
        <div className="vet-cta-inner">
          <div>
            <h2>Learn. Practice. Serve.</h2>

            <p>
              Developing capable veterinary professionals for healthier
              animals and stronger livestock communities.
            </p>
          </div>

          <a
            href="#laboratory"
            className="vet-btn vet-btn-primary"
          >
            Visit Veterinary Lab
            <FaChevronRight />
          </a>
        </div>
      </section>

      <section className="vet-section vet-contact">
        <div className="vet-section-header">
          <div className="vet-section-label">
            Department Information
          </div>

          <h2>Contact Veterinary Department</h2>

          <p>
            For academic information, practical training and department
            activities, contact the institute administration.
          </p>
        </div>

        <div className="vet-contact-grid">
          <div className="vet-contact-card">
            <FaMapMarkerAlt />

            <h3>Location</h3>

            <p>Rolpa Polytechnic Institute</p>
          </div>

          <div className="vet-contact-card">
            <FaPhone />

            <h3>Phone</h3>

            <p>Contact Institute Administration</p>
          </div>

          <div className="vet-contact-card">
            <FaEnvelope />

            <h3>Email</h3>

            <p>Contact Institute Administration</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeterinaryDepartment;