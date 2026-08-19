import React from "react";
import {
  FaGraduationCap,
  FaClipboardCheck,
  FaSearch,
  FaBook,
  FaCalendarAlt,
  FaAward,
  FaClipboardList, // Added missing import
  FaCheckCircle,
  FaFileAlt,      // Added missing import
} from "react-icons/fa";

const Results = () => {
  const latestResults = [
    { title: "Diploma in Information Technology", semester: "First Semester", date: "July 2026", status: "Published" },
    { title: "Diploma in Agriculture (Plant Science)", semester: "Second Semester", date: "July 2026", status: "Published" },
    { title: "Diploma in Agriculture (Animal Science)", semester: "Third Semester", date: "July 2026", status: "Published" },
    { title: "Pre Diploma Program", semester: "Annual Examination", date: "June 2026", status: "Published" },
  ];

  const semesterResults = [
    { semester: "First Semester", description: "Results of all first semester diploma programs conducted under CTEVT." },
    { semester: "Second Semester", description: "Second semester regular examination results with practical evaluation." },
    { semester: "Third Semester", description: "Third semester results including theory and laboratory assessments." },
    { semester: "Fourth Semester", description: "Fourth semester diploma examination results officially published." },
    { semester: "Fifth Semester", description: "Fifth semester examination results for all diploma streams." },
    { semester: "Sixth Semester", description: "Final semester examination results with graduation eligibility." },
  ];

  return (
    <div className="pt-24 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="mx-6 rounded-3xl shadow-2xl bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-500 text-white py-20">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-white text-blue-900 flex items-center justify-center text-6xl mx-auto shadow-xl">
            <FaGraduationCap />
          </div>
          <h1 className="text-5xl font-extrabold mt-8">Examination Results</h1>
          <p className="mt-4 text-xl font-semibold">Rolpa Polytechnic Institute</p>
        </div>
      </section>

      {/* Results Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-blue-900 flex items-center gap-3">
            <FaClipboardCheck /> Results Information
          </h2>
          <p className="text-gray-700 text-lg leading-9 mt-6">
            Rolpa Polytechnic Institute publishes examination results according to the official schedule of the CTEVT.
          </p>
        </div>
      </section>

      {/* Latest Results Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Latest Published Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {latestResults.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-green-600">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">{item.status}</span>
              </div>
              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-3"><FaBook className="text-yellow-500" /> <strong>Semester:</strong> {item.semester}</p>
                <p className="flex items-center gap-3"><FaCalendarAlt className="text-blue-700" /> <strong>Published:</strong> {item.date}</p>
              </div>
              <button className="mt-8 bg-blue-800 text-white px-8 py-3 rounded-lg flex items-center gap-3 hover:bg-blue-950">
                <FaSearch /> View Result
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Publication Process */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Result Publication Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaClipboardList />, title: "Examination Completed" },
            { icon: <FaCheckCircle />, title: "Paper Evaluation" },
            { icon: <FaFileAlt />, title: "Result Processing" },
            { icon: <FaAward />, title: "Result Published" }
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl text-blue-700 flex justify-center mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Results;