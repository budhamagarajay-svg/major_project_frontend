import React from "react";
import {
  FaDesktop,
  FaLaptop,
  FaNetworkWired,
  FaCode,
  FaWifi,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaGraduationCap,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaServer,
  FaDatabase,
  FaCalendarAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ComputerLab = () => {
  const facilities = [
    {
      icon: <FaDesktop />,
      title: "Modern Computer Systems",
      desc: "Modern desktop computers are available to support practical learning, programming, project work and technical activities.",
    },
    {
      icon: <FaCode />,
      title: "Programming Environment",
      desc: "Students practice programming, web development, database systems and software development projects.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking Laboratory",
      desc: "Students can learn LAN configuration, networking concepts, communication technologies and basic network security.",
    },
    {
      icon: <FaWifi />,
      title: "Internet Facility",
      desc: "Internet connectivity supports online learning, research, educational resources and technical exploration.",
    },
    {
      icon: <FaServer />,
      title: "Server & System Practice",
      desc: "Students can understand basic server concepts, operating systems and system administration activities.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Learning",
      desc: "Database concepts and practical activities help students understand data management and database technologies.",
    },
  ];

  const hardware = [
    "Desktop computer systems",
    "Computer monitors and accessories",
    "Networking devices and equipment",
    "LAN cables and networking tools",
    "Printer and scanning facilities",
    "Projector and presentation equipment",
    "Computer maintenance tools",
    "Internet connectivity",
  ];

  const software = [
    "Programming IDEs",
    "Web development tools",
    "Database management systems",
    "Office productivity applications",
    "Graphics and multimedia software",
    "Operating systems",
    "Networking tools",
    "Development frameworks",
    "Educational software",
  ];

  const rules = [
    "Students must use computers and laboratory equipment carefully.",
    "Do not install unauthorized software or applications.",
    "Maintain discipline and silence inside the laboratory.",
    "Do not change system configurations without permission.",
    "Report technical problems to the laboratory assistant.",
    "Internet facilities should mainly be used for educational purposes.",
    "Food and drinks are not allowed near computer equipment.",
    "Students must properly shut down computers after use.",
  ];

  const timings = [
    {
      day: "Sunday - Friday",
      time: "10:00 AM - 5:00 PM",
    },
    {
      day: "Saturday",
      time: "Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO */}

      <section className="relative min-h-[600px] flex items-center overflow-hidden">

        <img
          src="/images/computer-lab.jpg"
          alt="Computer Laboratory"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-blue-900/85 to-blue-700/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full text-white mb-7">

              <FaLaptop className="text-yellow-300 text-xl" />

              <span className="font-semibold tracking-wide">
                INFORMATION TECHNOLOGY LABORATORY
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">

              Computer Laboratory

              <span className="block text-yellow-300">
                Rolpa Polytechnic Institute
              </span>

            </h1>

            <p className="mt-7 text-lg md:text-xl text-blue-100 max-w-3xl leading-8">

              A practical learning environment where students develop
              programming, networking, database, software development and
              modern digital technology skills.

            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaDesktop className="inline mr-2 text-yellow-300" />

                Practical Learning

              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaCode className="inline mr-2 text-yellow-300" />

                Programming

              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaNetworkWired className="inline mr-2 text-yellow-300" />

                Networking

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-7 md:p-9">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center md:border-r border-gray-200">

              <FaDesktop className="text-4xl text-blue-700 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-950">
                50+
              </h3>

              <p className="text-gray-500 mt-1">
                Computer Systems
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaUsers className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-950">
                Students
              </h3>

              <p className="text-gray-500 mt-1">
                Practical Learning
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaGraduationCap className="text-4xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-950">
                DIT
              </h3>

              <p className="text-gray-500 mt-1">
                CTEVT Program
              </p>

            </div>

            <div className="text-center">

              <FaClock className="text-4xl text-orange-500 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-950">
                Daily
              </h3>

              <p className="text-gray-500 mt-1">
                Lab Practice
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-1 bg-yellow-400"></div>

              <span className="text-blue-700 font-bold uppercase tracking-wider">
                About Our Laboratory
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-6">

              Learning Technology Through

              <span className="text-blue-600">
                {" "}Practical Experience
              </span>

            </h2>

            <p className="text-gray-600 leading-8 mb-5">

              The Computer Laboratory of{" "}
              <strong>Rolpa Polytechnic Institute</strong> provides
              students with a practical environment for developing
              Information Technology skills.

            </p>

            <p className="text-gray-600 leading-8 mb-5">

              Students can practice programming, web development,
              database management, networking, operating systems and
              other technical subjects through hands-on activities.

            </p>

            <p className="text-gray-600 leading-8">

              The laboratory supports students in completing assignments,
              practical examinations, academic projects and technical
              learning activities.

            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="font-medium">
                  Practical IT Education
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="font-medium">
                  Programming Practice
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="font-medium">
                  Networking Practice
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="font-medium">
                  Digital Learning
                </span>

              </div>

            </div>

          </div>


          {/* PHOTO */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/computer-lab.jpg"
                alt="Students Computer Lab"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="absolute -bottom-7 -left-5 md:-left-8 bg-white rounded-2xl shadow-xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

                  <FaChalkboardTeacher className="text-2xl text-blue-700" />

                </div>

                <div>

                  <p className="font-bold text-blue-950">
                    Practical Education
                  </p>

                  <p className="text-sm text-gray-500">
                    Learn by doing
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FACILITIES */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-blue-700 font-bold uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="text-4xl font-extrabold text-blue-950 mt-3">
              Computer Lab Facilities
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-4 leading-7">

              Facilities designed to help students gain practical
              knowledge and professional IT skills.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 mb-6">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3">

                  {item.title}

                </h3>

                <p className="text-gray-600 leading-7 text-sm">

                  {item.desc}

                </p>

                <div className="mt-5 flex items-center text-blue-700 font-semibold text-sm">

                  <FaArrowRight className="mr-2" />

                  Practical Learning

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HARDWARE */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <FaDesktop className="text-3xl text-blue-700" />

              <h2 className="text-3xl font-extrabold text-blue-950">
                Hardware Facilities
              </h2>

            </div>

            <p className="text-gray-600 leading-7 mb-8">

              The laboratory provides computer hardware and networking
              equipment that support practical Information Technology
              education.

            </p>

            <div className="space-y-4">

              {hardware.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-4 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition"
                >

                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">

                    <FaCheckCircle className="text-blue-600" />

                  </div>

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* HARDWARE IMAGE */}

          <div className="relative">

            <img
              src="/images/computer-lab.jpg"
              alt="Computer Laboratory Equipment"
              className="w-full h-full min-h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent rounded-3xl"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">

              <FaTools className="text-4xl text-yellow-300 mb-4" />

              <h3 className="text-3xl font-bold">
                Modern Technical Environment
              </h3>

              <p className="mt-3 text-blue-100">
                Supporting practical learning and technical skill
                development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SOFTWARE */}

      <section className="bg-blue-950 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <FaCode className="text-5xl text-yellow-300 mx-auto mb-5" />

            <h2 className="text-4xl font-extrabold text-white">
              Software & Development Resources
            </h2>

            <p className="max-w-2xl mx-auto text-blue-200 mt-4 leading-7">

              Software resources used for programming, database,
              networking, web development and digital learning.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {software.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-xl p-5 hover:bg-white/20 transition"
              >

                <FaTools className="text-yellow-300 text-2xl mb-3" />

                <p className="text-white font-medium">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SECURITY */}

      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">

            <FaShieldAlt className="text-4xl text-yellow-300" />

          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold">

            Safe & Professional Learning Environment

          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-blue-100 leading-8">

            The Computer Laboratory promotes responsible technology
            use, discipline, computer security and a professional
            environment for practical learning.

          </p>

        </div>

      </section>


      {/* OPENING HOURS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <FaClock className="text-5xl text-blue-700 mb-5" />

            <h2 className="text-4xl font-extrabold text-blue-950 mb-5">

              Laboratory Opening Hours

            </h2>

            <p className="text-gray-600 leading-7">

              Students are encouraged to use the computer laboratory
              during the available hours for practical classes,
              project work and academic activities.

            </p>

          </div>


          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {timings.map((item, index) => (

              <div
                key={index}
                className={`flex justify-between items-center p-6 ${
                  index !== timings.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-blue-700" />

                  <span className="font-semibold text-gray-700">
                    {item.day}
                  </span>

                </div>

                <span
                  className={`font-bold ${
                    item.time === "Closed"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {item.time}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* RULES */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <FaShieldAlt className="text-5xl text-blue-700 mb-5" />

              <h2 className="text-4xl font-extrabold text-blue-950 mb-6">

                Computer Lab Rules

              </h2>

              <p className="text-gray-600 leading-8">

                Students are expected to follow laboratory rules
                to protect equipment and maintain a safe,
                disciplined and productive learning environment.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-xl p-8">

              <div className="space-y-5">

                {rules.map((rule, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">

                      <FaCheckCircle className="text-green-600" />

                    </div>

                    <p className="text-gray-700 leading-6">

                      {rule}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL SECTION */}

      <section className="bg-gradient-to-r from-indigo-900 to-blue-700 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <FaLaptop className="text-5xl text-yellow-300 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-extrabold">

            Building Future IT Professionals

          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-blue-100 text-lg leading-8">

            The Computer Laboratory provides students with opportunities
            to transform theoretical knowledge into practical skills
            and prepare for professional careers in Information Technology.

          </p>

        </div>

      </section>

    </div>
  );
};

export default ComputerLab;