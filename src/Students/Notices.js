import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const notices = [
  {
    title: "Admission Open for New Academic Session",
    date: "July 2026",
    description:
      "Applications are invited for Diploma in Information Technology, Diploma in Agriculture (Veterinary Science), and Pre-Diploma programs. Eligible students are encouraged to apply before the deadline.",
  },
  {
    title: "First Terminal Examination Notice",
    date: "August 2026",
    description:
      "The First Terminal Examination will begin according to the academic calendar. Students must bring their college identity card and examination admit card.",
  },
  {
    title: "Class Routine Updated",
    date: "July 2026",
    description:
      "The revised class routine has been published. Students are requested to follow the new schedule from the effective date.",
  },
  {
    title: "Scholarship Application Notice",
    date: "July 2026",
    description:
      "Eligible students can submit scholarship application forms with the required documents within the specified period.",
  },
  {
    title: "Industrial Training Information",
    date: "September 2026",
    description:
      "Final-year students should contact their department for internship placement and industrial training guidelines.",
  },
  {
    title: "Library Membership Renewal",
    date: "Every Semester",
    description:
      "Students are requested to renew their library membership to continue borrowing books and accessing digital resources.",
  },
];

const Notices = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FaBell className="text-6xl mx-auto text-yellow-400 mb-5" />

          <h1 className="text-5xl font-bold">
            Student Notices
          </h1>

          <p className="mt-4 text-lg">
            Rolpa Polytechnic Institute
          </p>

          <p className="mt-2 text-gray-200">
            Stay informed with the latest academic notices, examination
            updates, admissions, scholarships, and student activities.
          </p>
        </div>
      </section>

      {/* Notices */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Latest Student Notices
        </h2>

        <div className="space-y-6">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  {notice.title}
                </h3>

                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-blue-700" />
                  {notice.date}
                </div>
              </div>

              <p className="text-gray-700 leading-7">
                {notice.description}
              </p>

              <div className="mt-5 flex items-center text-blue-700 font-semibold">
                <FaClock className="mr-2" />
                Updated by Administration

                <FaArrowRight className="ml-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Information */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Student Information
          </h2>

          <p className="mt-4 text-lg">
            Students are advised to check notices regularly for updates
            regarding admissions, examinations, scholarships, internships,
            academic calendars, library services, and other important college
            activities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Notices;