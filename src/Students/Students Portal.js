import React from "react";
import {
  FaUserGraduate,
  FaBell,
  FaBook,
  FaDownload,
  FaClipboardCheck,
  FaCalendarAlt,
  FaLaptop,
  FaFileAlt,
  FaClock,
  FaBullhorn,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const StudentsPortal = () => {
  const services = [
    {
      icon: <FaBell />,
      title: "Notices",
      description:
        "Important college notices, announcements and student information.",
    },
    {
      icon: <FaBook />,
      title: "Academic Resources",
      description:
        "Syllabus, study materials and other useful academic resources.",
    },
    {
      icon: <FaDownload />,
      title: "Downloads",
      description:
        "Important forms, documents, notices and academic materials.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Results",
      description:
        "Information related to examinations, results and academic performance.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Academic Calendar",
      description:
        "Academic sessions, holidays, examinations and important dates.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning",
      description:
        "Digital learning resources and useful online educational materials.",
    },
  ];

  const announcements = [
    {
      title: "Examination Information",
      date: "August 18, 2026",
      description:
        "Students are requested to follow the examination schedule and prepare accordingly.",
    },
    {
      title: "Academic Session",
      date: "August 15, 2026",
      description:
        "Students are requested to regularly attend classes and follow the academic schedule.",
    },
    {
      title: "Important Student Notice",
      date: "August 10, 2026",
      description:
        "Students are advised to regularly check college notices for important information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400 opacity-20"></div>

        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-yellow-300 opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-24">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
            <FaUserGraduate className="text-5xl text-yellow-300" />
          </div>

          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            <FaUniversity />
            Rolpa Polytechnic Institute
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Student Portal
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Welcome to the Rolpa Polytechnic Institute Student Portal.
            Find important academic information, student services,
            resources and announcements in one place.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6">

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b p-6 text-center sm:border-r lg:border-b-0">
            <FaBullhorn className="mx-auto mb-3 text-3xl text-blue-700" />
            <h3 className="text-2xl font-extrabold text-blue-950">
              12+
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Latest Notices
            </p>
          </div>

          <div className="border-b p-6 text-center lg:border-r lg:border-b-0">
            <FaGraduationCap className="mx-auto mb-3 text-3xl text-blue-700" />
            <h3 className="text-2xl font-extrabold text-blue-950">
              6+
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Academic Programs
            </p>
          </div>

          <div className="border-b p-6 text-center sm:border-r lg:border-b-0">
            <FaFileAlt className="mx-auto mb-3 text-3xl text-blue-700" />
            <h3 className="text-2xl font-extrabold text-blue-950">
              25+
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Academic Resources
            </p>
          </div>

          <div className="p-6 text-center">
            <FaClock className="mx-auto mb-3 text-3xl text-blue-700" />
            <h3 className="text-2xl font-extrabold text-blue-950">
              24/7
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Portal Information
            </p>
          </div>

        </div>
      </section>

      {/* Student Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">

          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Student Information
          </p>

          <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
            Student Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore the different academic and student-related services
            available at Rolpa Polytechnic Institute.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                  {service.icon}
                </div>

                <span className="text-sm font-bold text-gray-300">
                  0{index + 1}
                </span>

              </div>

              <h3 className="text-xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {service.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-20"></div>

            </div>
          ))}

        </div>
      </section>

      {/* Announcements */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Important Information
            </p>

            <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
              Latest Announcements
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Important information for students regarding academics,
              examinations and college activities.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <FaBell />
                  </div>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    NOTICE
                  </span>

                </div>

                <h3 className="text-lg font-bold text-blue-950">
                  {announcement.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-blue-600">
                  {announcement.date}
                </p>

                <p className="mt-4 leading-7 text-gray-500">
                  {announcement.description}
                </p>

                <div className="mt-6 h-px w-full bg-gray-200"></div>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-400">
                  <FaFileAlt />
                  Student Information
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Academic Information */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 to-blue-800 p-8 text-white shadow-2xl md:p-12">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-yellow-300">
                <FaGraduationCap />
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                Academic Life
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Learn, Grow and Build Your Future
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                Stay connected with your academic activities, learning
                resources and important college information. Make the
                most of your educational journey at Rolpa Polytechnic
                Institute.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <FaBook className="mb-4 text-3xl text-yellow-300" />
                <h3 className="font-bold">
                  Learning
                </h3>
                <p className="mt-2 text-sm text-blue-200">
                  Academic materials and resources.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <FaCalendarAlt className="mb-4 text-3xl text-yellow-300" />
                <h3 className="font-bold">
                  Activities
                </h3>
                <p className="mt-2 text-sm text-blue-200">
                  Academic events and activities.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <FaClipboardCheck className="mb-4 text-3xl text-yellow-300" />
                <h3 className="font-bold">
                  Performance
                </h3>
                <p className="mt-2 text-sm text-blue-200">
                  Examination and result information.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <FaLaptop className="mb-4 text-3xl text-yellow-300" />
                <h3 className="font-bold">
                  Digital
                </h3>
                <p className="mt-2 text-sm text-blue-200">
                  Digital learning resources.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default StudentsPortal;