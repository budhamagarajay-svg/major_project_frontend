import React from "react";
import {
  FaSeedling,
  FaTractor,
  FaLeaf,
  FaFlask,
  FaTree,
  FaAppleAlt,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
  FaPaw,
  FaWater,
  FaSun,
  FaAward,
} from "react-icons/fa";

const AgricultureFarm = () => {
  const facilities = [
    {
      icon: <FaSeedling />,
      title: "Crop Production Area",
      desc: "Practical farming area where students learn crop production, vegetable farming, seed technology and modern agricultural practices.",
    },
    {
      icon: <FaLeaf />,
      title: "Plant Science Practice",
      desc: "Students gain practical knowledge about plant identification, cultivation, soil management and plant protection techniques.",
    },
    {
      icon: <FaPaw />,
      title: "Animal Science Support",
      desc: "The agriculture farm supports animal science students through livestock management and practical agricultural activities.",
    },
    {
      icon: <FaFlask />,
      title: "Agriculture Research",
      desc: "Students perform field experiments, project work and practical research activities related to agriculture.",
    },
  ];

  const activities = [
    "Crop cultivation and management practice",
    "Vegetable and horticulture production",
    "Soil testing and soil management",
    "Seed production and preservation",
    "Organic farming techniques",
    "Plant disease identification",
    "Agriculture project work",
    "Field visit and practical training",
  ];

  const benefits = [
    "Develop practical farming skills",
    "Understand modern agricultural technology",
    "Learn sustainable agriculture practices",
    "Improve entrepreneurship skills",
    "Develop field research abilities",
    "Prepare skilled agricultural technicians",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-600 text-white">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full translate-x-40 translate-y-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border border-white/20 shadow-2xl mb-7">
            <FaTractor className="text-5xl text-yellow-300" />
          </div>

          <p className="uppercase tracking-widest text-green-200 font-semibold mb-3">
            Practical Agricultural Learning Center
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Rolpa Polytechnic Institute
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mt-3">
            Agriculture Farm
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-green-100 leading-relaxed">
            A practical learning environment where Agriculture students
            develop hands-on skills in crop production, farming technology,
            animal science and sustainable agriculture.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaSeedling className="inline mr-2 text-yellow-300" />
              Crop Production
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaPaw className="inline mr-2 text-yellow-300" />
              Animal Science
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaLeaf className="inline mr-2 text-yellow-300" />
              Sustainable Farming
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <img
              src="/images/agriculture-farm.jpg"
              alt="Agriculture Farm"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm text-white rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <FaSeedling className="text-3xl text-green-300" />

                <div>
                  <h3 className="font-bold text-lg">
                    Practical Agriculture Learning
                  </h3>

                  <p className="text-sm text-gray-200">
                    Learning agriculture through real field experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-yellow-400"></div>

              <span className="text-green-700 font-bold uppercase tracking-wider">
                About Our Farm
              </span>
            </div>

            <h2 className="text-4xl font-extrabold text-green-950 mb-6">
              Learning Agriculture Through
              <span className="text-green-600">
                {" "}Practical Experience
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              The Agriculture Farm of{" "}
              <strong>Rolpa Polytechnic Institute (RPI)</strong> is an
              important practical facility designed to support students of
              Diploma in Agriculture programs.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              The farm provides opportunities for students to apply classroom
              knowledge to real agricultural practices including crop
              production, farming management, field work and research.
            </p>

            <p className="text-gray-600 leading-8">
              Through practical activities, students can develop technical
              knowledge, farming skills and professional confidence for their
              future careers in agriculture.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <FaSeedling className="text-3xl text-green-600 mx-auto mb-2" />

                <h3 className="font-bold text-green-900">
                  Crop Practice
                </h3>

                <p className="text-sm text-gray-500">
                  Field Learning
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 text-center">
                <FaPaw className="text-3xl text-orange-500 mx-auto mb-2" />

                <h3 className="font-bold text-green-900">
                  Animal Practice
                </h3>

                <p className="text-sm text-gray-500">
                  Practical Training
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mb-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-7">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center md:border-r border-gray-200">
              <FaSeedling className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-900">
                Crop
              </h3>

              <p className="text-gray-500">
                Production Practice
              </p>
            </div>

            <div className="text-center md:border-r border-gray-200">
              <FaPaw className="text-4xl text-orange-500 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-900">
                Animal
              </h3>

              <p className="text-gray-500">
                Practical Support
              </p>
            </div>

            <div className="text-center md:border-r border-gray-200">
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-900">
                Students
              </h3>

              <p className="text-gray-500">
                Practical Training
              </p>
            </div>

            <div className="text-center">
              <FaGraduationCap className="text-4xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-green-900">
                CTEVT
              </h3>

              <p className="text-gray-500">
                Academic Program
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-green-700 font-bold uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="text-4xl font-extrabold text-green-950 mt-3">
              Agriculture Farm Facilities
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              Practical facilities that help students connect theoretical
              knowledge with real agricultural activities.
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

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-green-700 font-bold uppercase tracking-wider">
              Hands-on Training
            </span>

            <h2 className="text-4xl font-extrabold text-green-950 mt-3 mb-6">
              Practical Activities
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Students participate in different agricultural activities that
              help them understand farming techniques and develop practical
              professional skills.
            </p>

            <div className="space-y-4">

              {activities.map((item, index) => (
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

          <div className="relative">

            <img
              src="/images/agriculture-students.jpg"
              alt="Agriculture students practical learning"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-5">
              <FaSun className="text-4xl text-yellow-500 mx-auto mb-2" />

              <p className="font-bold text-green-900">
                Field Learning
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-green-950 to-green-700 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <FaTree className="text-6xl text-yellow-300 mx-auto mb-5" />

          <h2 className="text-4xl font-extrabold">
            Learning Through Practical Agriculture
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-green-100 text-lg leading-8">
            RPI Agriculture Farm helps students become skilled agricultural
            technicians by combining theoretical knowledge with practical
            field experience.
          </p>

          <div className="flex justify-center gap-8 mt-8 flex-wrap">

            <div className="flex items-center gap-2">
              <FaWater className="text-yellow-300" />
              <span>Sustainable Practices</span>
            </div>

            <div className="flex items-center gap-2">
              <FaSeedling className="text-yellow-300" />
              <span>Modern Farming</span>
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
            Practical agriculture helps students develop technical,
            professional and entrepreneurial abilities.
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
                  <FaSeedling className="text-3xl text-green-600" />
                )}

                {index === 1 && (
                  <FaTractor className="text-3xl text-green-600" />
                )}

                {index === 2 && (
                  <FaLeaf className="text-3xl text-green-600" />
                )}

                {index === 3 && (
                  <FaAppleAlt className="text-3xl text-green-600" />
                )}

                {index === 4 && (
                  <FaFlask className="text-3xl text-green-600" />
                )}

                {index === 5 && (
                  <FaAward className="text-3xl text-green-600" />
                )}

              </div>

              <h3 className="text-lg font-bold text-green-950">
                {item}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Practical knowledge and experience for future agricultural
                professionals.
              </p>

            </div>
          ))}

        </div>
      </section>

      <section className="bg-green-50 border-t border-green-100 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaGraduationCap className="text-5xl text-green-700 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-950">
            Building Skilled Agricultural Professionals
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg leading-8">
            The Agriculture Farm provides a valuable platform for students
            to learn by doing, develop practical skills and prepare themselves
            for professional careers in the agricultural sector.
          </p>

        </div>

      </section>

    </div>
  );
};

export default AgricultureFarm;