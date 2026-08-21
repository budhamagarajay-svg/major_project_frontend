import React from "react";
import {
  FaBook,
  FaLaptop,
  FaSearch,
  FaUsers,
  FaClock,
  FaGraduationCap,
  FaWifi,
  FaBookReader,
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";

const Library = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "Academic Book Collection",
      desc: "Textbooks, reference books, manuals and learning materials are available to support Agriculture, Veterinary and Information Technology programs.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning",
      desc: "Students can use digital learning resources, e-books, online study materials and technical information for academic development.",
    },
    {
      icon: <FaSearch />,
      title: "Research & Project Support",
      desc: "Library resources support assignments, project work, practical learning, research and technical studies.",
    },
    {
      icon: <FaWifi />,
      title: "Internet Facility",
      desc: "Internet facilities help students access educational websites, digital resources and online learning materials.",
    },
  ];

  const facilities = [
    "CTEVT curriculum-based books and study materials",
    "Separate and comfortable reading area",
    "Reference books for Agriculture, Veterinary and IT students",
    "Computer and internet access facility",
    "Newspapers and educational magazines",
    "Project reports and research materials",
    "Peaceful environment for self-study",
    "Supportive library management service",
  ];

  const rules = [
    "Students must carry their valid college identity card.",
    "Maintain silence and discipline inside the library.",
    "Books must be returned within the specified period.",
    "Students must take proper care of library materials.",
    "Food and drinks are not allowed inside the library.",
    "Library materials must not be damaged or removed without permission.",
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

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-yellow-400/10 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border border-white/20 shadow-xl mb-7">
            <FaBookReader className="text-5xl text-yellow-300" />
          </div>

          <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3">
            Academic Resource Center
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Rolpa Polytechnic Institute
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mt-2">
            Library
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-blue-100 leading-relaxed">
            A center of knowledge, learning and innovation supporting
            students in Agriculture, Veterinary Science and Information
            Technology.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaBook className="inline mr-2 text-yellow-300" />
              Academic Resources
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaLaptop className="inline mr-2 text-yellow-300" />
              Digital Learning
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20">
              <FaSearch className="inline mr-2 text-yellow-300" />
              Research Support
            </span>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <img
            src="/images/library1.jpg"
            alt="Rolpa Polytechnic Institute Library"
            className="w-full h-[450px] md:h-[550px] object-cover hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FaBookReader className="text-3xl text-yellow-300" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  RPI Library
                </h2>

                <p className="text-blue-100 mt-1">
                  A peaceful environment for reading, learning and research
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="relative max-w-6xl mx-auto px-6 -mt-2">

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center border-r-0 md:border-r border-gray-200">

              <FaBook className="text-4xl text-blue-700 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-900">
                5000+
              </h3>

              <p className="text-gray-500 mt-1">
                Books & Resources
              </p>

            </div>

            <div className="text-center border-r-0 md:border-r border-gray-200">

              <FaUsers className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-900">
                Students
              </h3>

              <p className="text-gray-500 mt-1">
                Learning Support
              </p>

            </div>

            <div className="text-center border-r-0 md:border-r border-gray-200">

              <FaGraduationCap className="text-4xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-900">
                CTEVT
              </h3>

              <p className="text-gray-500 mt-1">
                Curriculum Based
              </p>

            </div>

            <div className="text-center">

              <FaClock className="text-4xl text-orange-500 mx-auto mb-3" />

              <h3 className="text-3xl font-extrabold text-blue-900">
                6 Days
              </h3>

              <p className="text-gray-500 mt-1">
                Open Weekly
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

              <span className="text-blue-700 font-bold uppercase tracking-wider">
                About Our Library
              </span>

            </div>

            <h2 className="text-4xl font-extrabold text-blue-950 mb-6">
              Knowledge Begins With
              <span className="text-blue-600"> Learning</span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              The Library of{" "}
              <strong>Rolpa Polytechnic Institute</strong> is
              an important academic facility established to support teaching,
              learning and research activities.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              It provides textbooks, reference materials, project resources
              and digital learning facilities according to academic and
              CTEVT curriculum requirements.
            </p>

            <p className="text-gray-600 leading-8">
              The library provides students with a peaceful environment where
              they can study, explore new knowledge and develop professional
              skills.
            </p>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/library2.jpg"
                alt="Library Reading Area"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">

                  <FaBook className="text-2xl text-blue-700" />

                </div>

                <div>

                  <p className="text-2xl font-bold text-blue-900">
                    5000+
                  </p>

                  <p className="text-gray-500">
                    Books & Resources
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

            <span className="text-blue-700 font-bold uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="text-4xl font-extrabold text-blue-950 mt-3">
              Library Services
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              Academic resources and facilities designed to support
              students in their educational journey.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {services.map((service, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {service.desc}
                </p>

                <div className="mt-5 flex items-center text-blue-700 font-semibold text-sm">
                  <FaArrowRight className="mr-2" />
                  Student Support
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <span className="text-blue-700 font-bold uppercase tracking-wider">
            Our Resources
          </span>

          <h2 className="text-4xl font-extrabold text-blue-950 mt-3">
            Library Facilities
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Facilities available to create a comfortable and productive
            learning environment for students.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {facilities.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition"
            >

              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">

                <FaCheckCircle className="text-blue-600" />

              </div>

              <span className="font-medium text-gray-700">
                {item}
              </span>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-blue-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="text-white">

              <FaClock className="text-5xl text-yellow-300 mb-5" />

              <h2 className="text-4xl font-extrabold mb-5">
                Library Opening Hours
              </h2>

              <p className="text-blue-200 leading-7">
                Students are encouraged to use the library during opening
                hours for reading, study, research and academic activities.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

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

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <span className="text-blue-700 font-bold uppercase tracking-wider">
              Important Information
            </span>

            <h2 className="text-4xl font-extrabold text-blue-950 mt-3 mb-6">
              Library Rules & Regulations
            </h2>

            <p className="text-gray-600 leading-7">
              Students are expected to follow these basic rules to maintain
              a peaceful, organized and productive learning environment.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-7">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

                <FaClipboardList className="text-2xl text-blue-700" />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Student Guidelines
                </h3>

                <p className="text-gray-500">
                  Please follow library regulations.
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {rules.map((rule, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />

                  <p className="text-gray-700 leading-6">
                    {rule}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <FaChalkboardTeacher className="text-5xl text-yellow-300 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Supporting Academic Excellence
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-blue-100 text-lg leading-8">
            The library plays an important role in helping students improve
            their academic performance, develop reading habits, complete
            projects and gain additional knowledge beyond the classroom.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Library;