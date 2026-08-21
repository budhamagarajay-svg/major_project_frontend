import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaBookOpen,
  FaAward,
  FaUniversity,
  FaRunning,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";

const notices = [
  {
    title: "Admission Open for New Academic Session",
    date: "July 2026",
    category: "Admission",
    icon: <FaGraduationCap />,
    description:
      "Applications are invited for Diploma in Information Technology, Diploma in Agriculture (Veterinary Science), and Pre-Diploma programs. Eligible students are encouraged to apply before the deadline.",
  },
  {
    title: "First Terminal Examination Notice",
    date: "August 2026",
    category: "Examination",
    icon: <FaClipboardList />,
    description:
      "The First Terminal Examination will begin according to the academic calendar. Students must bring their college identity card and examination admit card.",
  },
  {
    title: "Class Routine Updated",
    date: "July 2026",
    category: "Academic",
    icon: <FaBookOpen />,
    description:
      "The revised class routine has been published. Students are requested to follow the new schedule from the effective date.",
  },
  {
    title: "Scholarship Application Notice",
    date: "July 2026",
    category: "Scholarship",
    icon: <FaAward />,
    description:
      "Eligible students can submit scholarship application forms with the required documents within the specified period.",
  },
  {
    title: "Industrial Training Information",
    date: "September 2026",
    category: "Training",
    icon: <FaUniversity />,
    description:
      "Final-year students should contact their department for internship placement and industrial training guidelines.",
  },
  {
    title: "Library Membership Renewal",
    date: "Every Semester",
    category: "Library",
    icon: <FaBook />,
    description:
      "Students are requested to renew their library membership to continue borrowing books and accessing digital resources.",
  },
  {
    title: "College Sports Week",
    date: "October 2026",
    category: "Sports",
    icon: <FaRunning />,
    description:
      "The annual college sports week will be organized in October. Students interested in participating are requested to register with their respective departments.",
  },
];

const Notices = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-700 rounded-full opacity-30"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-600 rounded-full opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <FaBell className="text-5xl text-yellow-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Student Notices
          </h1>

          <p className="mt-4 text-xl font-medium text-blue-100">
            Rolpa Polytechnic Institute
          </p>

          <p className="max-w-3xl mx-auto mt-5 text-gray-200 leading-7">
            Stay informed with the latest academic notices, examination
            updates, admissions, scholarships, training programs, and
            student activities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 border border-white/20 rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">
                {notices.length}
              </span>
              <span className="text-sm text-blue-100">
                Current Notices
              </span>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">
                2026
              </span>
              <span className="text-sm text-blue-100">
                Academic Year
              </span>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">
                24/7
              </span>
              <span className="text-sm text-blue-100">
                Information Access
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
            Important Information
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
            Latest Student Notices
          </h2>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Important announcements and information for students of
            Rolpa Polytechnic Institute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-7">

          {notices.map((notice, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-blue-800"></div>

              <div className="p-7">

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-4">

                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-2xl group-hover:bg-blue-800 group-hover:text-white transition duration-300">
                      {notice.icon}
                    </div>

                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wide bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {notice.category}
                      </span>

                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <FaCalendarAlt className="text-blue-700" />
                        {notice.date}
                      </div>
                    </div>

                  </div>

                  <div className="hidden sm:flex w-9 h-9 rounded-full bg-gray-100 items-center justify-center text-gray-500 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                <h3 className="text-xl md:text-2xl font-bold text-blue-950 mt-6 leading-snug">
                  {notice.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {notice.description}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaClock className="text-blue-700" />
                    <span>Updated by Administration</span>
                  </div>

                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Notice {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-white border-t border-gray-200 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-blue-950 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">

            <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
              <FaBell className="text-3xl text-yellow-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>

            <p className="max-w-3xl mx-auto mt-4 text-blue-100 leading-7">
              Students are advised to check the official college notices
              regularly for information regarding admissions, examinations,
              scholarships, internships, academic activities, library
              services, sports, and other important college programs.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">

              <div className="bg-white/10 rounded-xl p-5">
                <FaClipboardList className="text-yellow-400 text-2xl mb-3" />
                <h3 className="font-bold">
                  Academic Updates
                </h3>
                <p className="text-sm text-blue-200 mt-1">
                  Examination and class-related information.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-5">
                <FaAward className="text-yellow-400 text-2xl mb-3" />
                <h3 className="font-bold">
                  Student Opportunities
                </h3>
                <p className="text-sm text-blue-200 mt-1">
                  Scholarships, training, and activities.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-5">
                <FaUniversity className="text-yellow-400 text-2xl mb-3" />
                <h3 className="font-bold">
                  College Information
                </h3>
                <p className="text-sm text-blue-200 mt-1">
                  Important institutional announcements.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Notices;