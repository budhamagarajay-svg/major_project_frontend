import React from "react";

import {
  FaSeedling,
  FaFlask,
  FaTractor,
  FaCheckCircle,
  FaGraduationCap,
  FaLeaf,
  FaUsers,
  FaMicroscope,
  FaTree,
  FaAward,
  FaArrowRight,
  FaStar,
  FaGlobeAsia,
} from "react-icons/fa";

const AgricultureDepartment = () => {
  const programs = [
    {
      icon: <FaSeedling />,
      title: "Diploma in Agriculture",
      subtitle: "Plant Science",
      desc: "Technical education focused on crop production, plant science, modern farming technology and practical agricultural skills.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Practical Agriculture",
      subtitle: "Field Based Learning",
      desc: "Students gain practical knowledge through agriculture farms, laboratories, field activities and project-based learning.",
    },
    {
      icon: <FaLeaf />,
      title: "Modern Agriculture",
      subtitle: "Technology & Innovation",
      desc: "Students learn sustainable farming practices, modern agricultural technologies and innovative approaches to farming.",
    },
  ];

  const facilities = [
    {
      icon: <FaFlask />,
      title: "Agriculture Laboratory",
      desc: "Practical laboratory facilities for developing technical knowledge and agricultural skills.",
    },
    {
      icon: <FaTractor />,
      title: "Agriculture Farm",
      desc: "Practical farm activities help students understand real-world crop production and farm management.",
    },
    {
      icon: <FaSeedling />,
      title: "Crop Production",
      desc: "Students learn crop production, vegetable cultivation, seed technology and crop management.",
    },
    {
      icon: <FaTree />,
      title: "Nursery Management",
      desc: "Practical learning related to plant propagation, nursery management and protected cultivation.",
    },
    {
      icon: <FaMicroscope />,
      title: "Research Activities",
      desc: "Students are encouraged to explore agricultural problems and develop practical solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Field Exposure",
      desc: "Field visits and practical activities connect classroom knowledge with real agricultural environments.",
    },
  ];

  const activities = [
    "Crop production and management",
    "Vegetable and fruit cultivation",
    "Soil and fertilizer management",
    "Seed production and technology",
    "Integrated pest management",
    "Nursery and greenhouse management",
    "Agricultural research and project work",
    "Modern farming technology",
  ];

  const objectives = [
    "Produce skilled agriculture technicians for national development.",
    "Provide practical and quality-based agricultural education.",
    "Promote modern farming technology and entrepreneurship.",
    "Develop practical agricultural skills among students.",
    "Encourage sustainable and environmentally friendly farming.",
    "Create opportunities for self-employment in agriculture.",
  ];

  const staff = [
    {
      image: "/images/agriculture/mahendra-dhami.jpg.jpeg",
      name: "Mahendra Singh Dhami",
      position: "Instructor — Plant Science",
      desc: "Supports students through technical teaching and practical Plant Science education.",
    },
    {
      image: "/images/agriculture/pawan-kumar-khadka1.jpg.jpeg",
      name: "Pawan Kumar Khadka",
      position: "Head of Department — Plant Science",
      desc: "Leads the Plant Science section and supports students in practical agricultural education.",
    },
    {
      image: "/images/agriculture/bigyan-bc1.jpg.jpeg",
      name: "Bigyan BC",
      position: "Instructor — Plant Science",
      desc: "Supports technical teaching, practical activities and Plant Science learning.",
    },
  ];

  const careers = [
    "Agriculture Technician",
    "Agriculture Extension Worker",
    "Junior Technical Assistant",
    "Farm Manager",
    "Agriculture Entrepreneur",
    "Government Agriculture Services",
    "NGO / INGO Agriculture Projects",
    "Private Agriculture Companies",
    "Agriculture Research Projects",
    "Agro-business",
    "Nursery Management",
    "Commercial Farming",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <section className="relative min-h-[680px] flex items-center overflow-hidden">

        <img
          src="/images/agriculture/agriculture-hero.jpg.jpeg"
          alt="Agriculture Department"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/80 to-green-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-green-100 mb-8">

              <FaSeedling className="text-yellow-300 text-xl" />

              <span className="font-bold tracking-widest text-sm">
                ROLPA POLYTECHNIC INSTITUTE
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">

              Agriculture

              <span className="block text-yellow-300">
                Department
              </span>

            </h1>

            <p className="text-lg md:text-xl text-green-50 max-w-3xl mt-7 leading-relaxed">

              Developing skilled agriculture professionals through
              practical education, modern farming technology,
              field-based learning and innovation.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#programs"
                className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-950 font-bold px-7 py-4 rounded-full shadow-xl transition"
              >
                Explore Programs
                <FaArrowRight />
              </a>

              <a
                href="#faculty"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold px-7 py-4 rounded-full transition"
              >
                <FaUsers />
                Meet Agriculture Faculty
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-7 md:p-9">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">

            <div className="text-center md:border-r border-gray-200">

              <FaGraduationCap className="text-4xl text-green-700 mx-auto mb-3" />

              <h3 className="text-2xl font-black">
                Diploma
              </h3>

              <p className="text-gray-500 mt-1">
                Agriculture
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaSeedling className="text-4xl text-emerald-600 mx-auto mb-3" />

              <h3 className="text-2xl font-black">
                Plant
              </h3>

              <p className="text-gray-500 mt-1">
                Science
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaTractor className="text-4xl text-orange-600 mx-auto mb-3" />

              <h3 className="text-2xl font-black">
                Practical
              </h3>

              <p className="text-gray-500 mt-1">
                Training
              </p>

            </div>

            <div className="text-center">

              <FaLeaf className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-black">
                Modern
              </h3>

              <p className="text-gray-500 mt-1">
                Agriculture
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-28 h-28 bg-green-200 rounded-3xl"></div>

            <img
              src="/images/agriculture/agriculture-field.jpg.jpeg"
              alt="Agriculture Field"
              className="relative z-10 w-full h-[480px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute z-20 -bottom-8 -right-5 bg-green-800 text-white rounded-2xl p-6 shadow-2xl w-64">

              <FaStar className="text-yellow-300 text-3xl mb-3" />

              <h3 className="font-black text-xl">
                Learn By Doing
              </h3>

              <p className="text-green-100 text-sm mt-2">
                Practical agricultural education for real-world skills.
              </p>

            </div>

          </div>

          <div>

            <span className="text-green-700 font-black uppercase tracking-widest text-sm">
              About The Department
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">

              Growing Knowledge,

              <span className="block text-green-700">
                Growing Future
              </span>

            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">

              The Agriculture Department of Rolpa Polytechnic Institute
              provides technical and practical education in Agriculture
              with a strong focus on Plant Science.

            </p>

            <p className="text-gray-600 leading-8 mt-5">

              Students develop technical knowledge through classroom
              learning, laboratory practice, agriculture farm activities,
              field visits and project-based learning.

            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">

                <div className="w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center">

                  <FaCheckCircle />

                </div>

                <span className="font-bold">
                  Practical Education
                </span>

              </div>

              <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-xl">

                <div className="w-11 h-11 rounded-full bg-yellow-500 text-white flex items-center justify-center">

                  <FaSeedling />

                </div>

                <span className="font-bold">
                  Modern Farming
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section
        id="programs"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-green-700 font-black uppercase tracking-widest text-sm">
              Academic Opportunities
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Agriculture Programs
            </h2>

            <p className="text-gray-600 mt-5 leading-7">

              Quality technical education designed to develop
              skilled and knowledgeable agriculture technicians.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {programs.map((item, index) => (

              <div
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:bg-green-700 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 group-hover:bg-white/20 group-hover:text-yellow-300 flex items-center justify-center text-3xl transition">

                  {item.icon}

                </div>

                <h3 className="text-xl font-black mt-7 group-hover:text-white">

                  {item.title}

                </h3>

                <p className="font-bold text-green-700 group-hover:text-yellow-300 mt-1">

                  {item.subtitle}

                </p>

                <p className="text-gray-600 group-hover:text-green-100 mt-4 leading-7">

                  {item.desc}

                </p>

                <div className="mt-6 flex items-center gap-2 text-green-700 group-hover:text-yellow-300 font-bold">

                  <span>
                    Learn & Practice
                  </span>

                  <FaArrowRight />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24 bg-green-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="text-yellow-300 font-black uppercase tracking-widest text-sm">
                Practical Education
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">

                Learning Beyond

                <span className="block text-green-300">
                  The Classroom
                </span>

              </h2>

              <p className="text-green-100 mt-6 leading-8 text-lg">

                Agriculture students develop their knowledge through
                practical field activities, laboratory work and
                real agricultural experiences.

              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                {activities.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/10 border border-white/10 rounded-xl p-4"
                  >

                    <FaCheckCircle className="text-yellow-300 mt-1 flex-shrink-0" />

                    <span className="text-green-50 text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <img
                src="/images/agriculture/agriculture-field.jpg.jpeg"
                alt="Agriculture Field Practical"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="mt-6 bg-white/10 border border-white/10 rounded-3xl p-7">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-green-950 flex items-center justify-center text-2xl">

                    <FaGlobeAsia />

                  </div>

                  <div>

                    <h3 className="font-black text-xl">
                      Sustainable Agriculture
                    </h3>

                    <p className="text-green-100 mt-1">
                      Skills • Technology • Innovation • Sustainability
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-green-700 font-black uppercase tracking-widest text-sm">
              Department Infrastructure
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Agriculture Facilities
            </h2>

            <p className="text-gray-600 mt-5">
              Facilities supporting practical and skill-based
              agriculture education.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center text-3xl">

                  {item.icon}

                </div>

                <h3 className="text-xl font-black mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-3">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-green-50 rounded-3xl p-8 md:p-10">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-green-700 text-white flex items-center justify-center text-2xl">

                  <FaLeaf />

                </div>

                <div>

                  <span className="text-green-700 font-bold text-sm uppercase">
                    Our Mission
                  </span>

                  <h2 className="text-3xl font-black text-gray-900">
                    Department Objectives
                  </h2>

                </div>

              </div>

              <div className="space-y-5">

                {objectives.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-4 items-start"
                  >

                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />

                    <p className="text-gray-700 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="relative min-h-[450px] overflow-hidden rounded-3xl">

              <img
                src="/images/agriculture/agriculture-field.jpg"
                alt="Agriculture Practical Field"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-green-950/80"></div>

              <div className="relative z-10 p-8 md:p-10 text-white">

                <FaAward className="text-5xl text-yellow-300 mb-6" />

                <h2 className="text-3xl font-black">
                  Skill-Based Agriculture Education
                </h2>

                <p className="text-green-100 mt-5 leading-8">

                  Students gain technical knowledge together with
                  practical skills that can be applied to farms,
                  agricultural businesses and community development.

                </p>

                <div className="mt-8 flex items-center gap-3 text-yellow-300 font-bold">

                  <FaSeedling />

                  <span>
                    Learn • Practice • Innovate
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section
        id="faculty"
        className="py-24 bg-slate-100"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-green-700 font-black uppercase tracking-widest text-sm">
              Plant Science Faculty
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Meet Our Agriculture Teachers
            </h2>

            <p className="text-gray-600 mt-5 leading-7">

              Our Agriculture Department is supported by dedicated
              Plant Science teaching staff who guide students through
              technical and practical education.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {staff.map((member, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
              >

                <div className="relative h-96 overflow-hidden bg-green-100">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-5 left-5">

                    <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-950 px-4 py-2 rounded-full font-bold text-xs">

                      <FaSeedling />

                      PLANT SCIENCE

                    </div>

                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-black text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-green-700 font-bold mt-2">
                    {member.position}
                  </p>

                  <p className="text-gray-600 mt-4 leading-7 text-sm">
                    {member.desc}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-green-700 font-bold text-sm">

                    <FaGraduationCap />

                    <span>
                      Agriculture Department
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24 bg-green-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-white">

              <span className="text-yellow-300 font-black uppercase tracking-widest text-sm">
                Future Opportunities
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">

                Build Your Career

                <span className="block text-green-300">
                  In Agriculture
                </span>

              </h2>

              <p className="text-green-100 leading-8 mt-6">

                Agriculture graduates can build careers in government
                services, private organizations, farms, agricultural
                businesses, development projects and entrepreneurship.

              </p>

            </div>

            <div className="bg-white rounded-3xl p-8">

              <div className="grid sm:grid-cols-2 gap-4">

                {careers.map((career, index) => (

                  <div
                    key={index}
                    className="flex gap-3 items-center bg-green-50 rounded-xl p-4"
                  >

                    <FaCheckCircle className="text-green-600 flex-shrink-0" />

                    <span className="font-semibold text-gray-700 text-sm">
                      {career}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden">

        <img
          src="/images/agriculture/agriculture-field.jpg.jpeg"
          alt="Agriculture Field"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-green-950/85"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">

          <FaSeedling className="text-6xl text-yellow-300 mx-auto mb-7" />

          <h2 className="text-4xl md:text-6xl font-black text-white">

            Growing Skills For

            <span className="block text-yellow-300">
              A Better Future
            </span>

          </h2>

          <p className="text-green-100 max-w-3xl mx-auto mt-6 text-lg leading-8">

            Agriculture education combines knowledge, practical skills,
            technology and innovation to prepare students for the future
            of agriculture.

          </p>

          <div className="inline-flex items-center gap-3 mt-9 bg-yellow-400 text-green-950 px-8 py-4 rounded-full font-black shadow-xl">

            <FaLeaf />

            Learn • Practice • Grow

          </div>

        </div>

      </section>

    </div>
  );
};

export default AgricultureDepartment;