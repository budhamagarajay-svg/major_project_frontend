import React from "react";
import {
  FaMicroscope,
  FaPaw,
  FaSyringe,
  FaFlask,
  FaHeartbeat,
  FaDna,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const VeterinaryLab = () => {
  const facilities = [
    {
      icon: <FaMicroscope />,
      title: "Microscope Laboratory",
      desc: "Well-equipped microscope facilities help students study microorganisms, tissues and biological samples during practical classes.",
    },
    {
      icon: <FaFlask />,
      title: "Veterinary Diagnostic Lab",
      desc: "Students learn laboratory techniques for identifying animal diseases through sample testing and diagnostic procedures.",
    },
    {
      icon: <FaSyringe />,
      title: "Animal Health Practice",
      desc: "Students gain practical knowledge about vaccination, disease prevention and animal health management.",
    },
    {
      icon: <FaDna />,
      title: "Biology & Pathology Study",
      desc: "Students study animal anatomy, physiology, pathology and disease-related laboratory activities.",
    },
  ];

  const equipment = [
    "Microscope and laboratory instruments",
    "Blood and sample testing equipment",
    "Biological sample collection tools",
    "Animal health diagnostic materials",
    "Laboratory glassware and chemicals",
    "Safety equipment and protective materials",
    "Veterinary practical models",
    "Research and project support resources",
  ];

  const activities = [
    "Animal disease identification",
    "Blood and urine sample analysis",
    "Microbiology practical",
    "Parasitology study",
    "Animal anatomy and physiology practical",
    "Vaccination procedure demonstration",
    "Laboratory testing methods",
    "Veterinary research activities",
  ];

  const benefits = [
    "Develop professional veterinary laboratory skills",
    "Understand animal diseases and diagnosis",
    "Improve practical knowledge",
    "Prepare skilled veterinary technicians",
    "Support research and innovation",
    "Develop professional confidence",
  ];

  const rules = [
    "Students must wear proper laboratory safety equipment.",
    "Handle chemicals and instruments carefully.",
    "Maintain cleanliness inside the laboratory.",
    "Follow instructions from laboratory instructors.",
    "Do not use laboratory equipment without permission.",
    "Report damaged or unsafe equipment immediately.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-900 to-green-600 text-white">

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full"></div>

        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-yellow-300/10 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border border-white/20 shadow-2xl mb-7">

            <FaMicroscope className="text-5xl text-yellow-300" />

          </div>

          <p className="uppercase tracking-widest text-green-200 font-semibold mb-3">
            Practical Animal Health Learning Center
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Rolpa Polytechnic Institute
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mt-3">
            Veterinary Laboratory
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-green-100 leading-relaxed">
            A practical learning environment where Veterinary students
            develop skills in animal health, laboratory diagnosis,
            microbiology, pathology and veterinary science.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaMicroscope className="inline mr-2 text-yellow-300" />
              Laboratory Practice
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaPaw className="inline mr-2 text-yellow-300" />
              Animal Health
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaDna className="inline mr-2 text-yellow-300" />
              Diagnostic Study
            </span>

          </div>

        </div>

      </section>

      <section className="relative -mt-10 max-w-6xl mx-auto px-6 z-10">

        <div className="bg-white rounded-2xl shadow-2xl p-7">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center md:border-r border-gray-200">

              <FaMicroscope className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-950">
                Practical
              </h3>

              <p className="text-gray-500">
                Laboratory Training
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaPaw className="text-4xl text-orange-500 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-950">
                Animal
              </h3>

              <p className="text-gray-500">
                Health Practice
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaUsers className="text-4xl text-blue-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-950">
                Students
              </h3>

              <p className="text-gray-500">
                Skill Development
              </p>

            </div>

            <div className="text-center">

              <FaGraduationCap className="text-4xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-950">
                CTEVT
              </h3>

              <p className="text-gray-500">
                Academic Program
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-1 bg-yellow-400"></div>

              <span className="text-green-700 font-bold uppercase tracking-wider">
                About Our Laboratory
              </span>

            </div>

            <h2 className="text-4xl font-extrabold text-green-950 mb-6">
              Learning Veterinary Science Through
              <span className="text-green-600"> Practical Experience</span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              The{" "}
              <strong>Veterinary Laboratory of Rolpa Polytechnic Institute</strong>{" "}
              is an important academic facility supporting practical education
              for students studying Veterinary and Animal Science programs.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              The laboratory provides hands-on learning opportunities in
              animal disease diagnosis, laboratory testing, microbiology,
              pathology and animal health management.
            </p>

            <p className="text-gray-600 leading-8">
              Through laboratory-based practical education, students can
              connect theoretical knowledge with real-world veterinary
              practices and develop professional technical skills.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-green-50 rounded-xl p-5 text-center">

                <FaMicroscope className="text-3xl text-green-600 mx-auto mb-2" />

                <h3 className="font-bold text-green-900">
                  Laboratory
                </h3>

                <p className="text-sm text-gray-500">
                  Practical Learning
                </p>

              </div>

              <div className="bg-orange-50 rounded-xl p-5 text-center">

                <FaPaw className="text-3xl text-orange-500 mx-auto mb-2" />

                <h3 className="font-bold text-green-900">
                  Animal Health
                </h3>

                <p className="text-sm text-gray-500">
                  Practical Training
                </p>

              </div>

            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/veterinary-lab.jpg"
                alt="Rolpa Polytechnic Institute Veterinary Laboratory"
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-black/65 backdrop-blur-sm text-white rounded-2xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center">

                  <FaMicroscope className="text-3xl text-yellow-300" />

                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Modern Veterinary Learning
                  </h3>

                  <p className="text-sm text-gray-200 mt-1">
                    Developing practical knowledge through laboratory
                    education and scientific learning.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-green-700 font-bold uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="text-4xl font-extrabold text-green-950 mt-3">
              Veterinary Laboratory Facilities
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              Practical facilities designed to help students develop
              laboratory and animal health skills.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-3xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-green-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center text-green-700 font-semibold text-sm">

                  <FaArrowRight className="mr-2" />

                  Practical Training

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/veterinary-microscope.jpg"
                alt="Veterinary laboratory microscope"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-5">

              <FaMicroscope className="text-4xl text-green-600 mx-auto mb-2" />

              <p className="font-bold text-green-900">
                Laboratory Study
              </p>

            </div>

          </div>

          <div>

            <span className="text-green-700 font-bold uppercase tracking-wider">
              Laboratory Resources
            </span>

            <h2 className="text-4xl font-extrabold text-green-950 mt-3 mb-6">
              Equipment & Resources
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              The laboratory provides different equipment and resources
              that support practical classes, laboratory demonstrations,
              research activities and student projects.
            </p>

            <div className="space-y-4">

              {equipment.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition"
                >

                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-green-50 flex items-center justify-center">

                    <FaCheckCircle className="text-green-600" />

                  </div>

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="bg-green-950 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center text-white mb-12">

            <span className="text-green-300 font-bold uppercase tracking-wider">
              Hands-on Education
            </span>

            <h2 className="text-4xl font-extrabold mt-3">
              Veterinary Laboratory Practical Activities
            </h2>

            <p className="max-w-2xl mx-auto text-green-200 mt-4">
              Students participate in laboratory activities that strengthen
              their practical knowledge and technical skills.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {activities.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-white hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-green-700 flex items-center justify-center mb-5">

                  <FaVial className="text-2xl text-yellow-300" />

                </div>

                <h3 className="font-bold text-lg leading-7">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-green-800 to-emerald-600 py-20">

        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5"></div>

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <FaBookMedical className="text-6xl text-yellow-300 mx-auto mb-5" />

          <h2 className="text-4xl font-extrabold">
            Practical Veterinary Education
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-green-100 text-lg leading-8">
            The Veterinary Laboratory at RPI bridges theoretical knowledge
            with practical skills and prepares students for professional
            veterinary services, animal health activities and future careers.
          </p>

          <div className="flex justify-center flex-wrap gap-8 mt-8">

            <div className="flex items-center gap-2">

              <FaShieldAlt className="text-yellow-300" />

              <span>Animal Health</span>

            </div>

            <div className="flex items-center gap-2">

              <FaMicroscope className="text-yellow-300" />

              <span>Laboratory Skills</span>

            </div>

            <div className="flex items-center gap-2">

              <FaGraduationCap className="text-yellow-300" />

              <span>Practical Education</span>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <span className="text-green-700 font-bold uppercase tracking-wider">
            Student Development
          </span>

          <h2 className="text-4xl font-extrabold text-green-950 mt-3">
            Benefits for Students
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            Practical veterinary laboratory education helps students
            develop technical knowledge and professional confidence.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-5">

                {index === 0 && (
                  <FaMicroscope className="text-3xl text-green-600" />
                )}

                {index === 1 && (
                  <FaHeartbeat className="text-3xl text-green-600" />
                )}

                {index === 2 && (
                  <FaBookMedical className="text-3xl text-green-600" />
                )}

                {index === 3 && (
                  <FaGraduationCap className="text-3xl text-green-600" />
                )}

                {index === 4 && (
                  <FaDna className="text-3xl text-green-600" />
                )}

                {index === 5 && (
                  <FaAward className="text-3xl text-green-600" />
                )}

              </div>

              <h3 className="text-lg font-bold text-green-950">
                {item}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Practical knowledge and experience for future veterinary
                professionals.
              </p>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-blue-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center text-white mb-10">

            <FaShieldAlt className="text-5xl text-yellow-300 mx-auto mb-5" />

            <h2 className="text-4xl font-extrabold">
              Veterinary Laboratory Rules
            </h2>

            <p className="text-blue-200 mt-4">
              Safety, cleanliness and discipline are essential inside
              the laboratory.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">

            <div className="grid md:grid-cols-2 gap-5">

              {rules.map((rule, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-5"
                >

                  <div className="w-9 h-9 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">

                    <FaCheckCircle className="text-green-600" />

                  </div>

                  <div>

                    <span className="text-green-700 font-bold mr-2">
                      {index + 1}.
                    </span>

                    <span className="text-gray-700">
                      {rule}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="bg-green-50 border-t border-green-100 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaGraduationCap className="text-5xl text-green-700 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-950">
            Building Skilled Veterinary Professionals
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg leading-8">
            The Veterinary Laboratory provides a valuable platform for
            students to learn by doing, strengthen laboratory skills,
            understand animal health and prepare themselves for professional
            careers in veterinary services.
          </p>

        </div>

      </section>

    </div>
  );
};

export default VeterinaryLab;