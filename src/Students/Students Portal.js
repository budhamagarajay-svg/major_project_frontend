import React from "react";
import {
  FaUserGraduate,
  FaBell,
  FaBook,
  FaDownload,
  FaClipboardCheck,
  FaCalendarAlt,
  FaLaptop,
} from "react-icons/fa";

const StudentsPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <FaUserGraduate className="text-6xl mx-auto mb-4 text-yellow-300" />

        <h1 className="text-4xl font-bold">
          Student Portal
        </h1>

        <p className="mt-3">
          Welcome to Rolpa Polytechnic Institute Student Portal.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto p-8">

        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Student Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaBell className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Notices</h3>
            <p>College notices and announcements.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaBook className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Academic Resources</h3>
            <p>Syllabus and study materials.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaDownload className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Downloads</h3>
            <p>Download important documents.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaClipboardCheck className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Results</h3>
            <p>View examination results.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaCalendarAlt className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Calendar</h3>
            <p>Academic calendar and events.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center">
            <FaLaptop className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="font-bold">Digital Learning</h3>
            <p>Online learning resources.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentsPortal;