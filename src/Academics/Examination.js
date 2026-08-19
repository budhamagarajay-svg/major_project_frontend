import React from "react";
import {
  FaClipboardCheck,
  FaCalendarAlt,
  FaFileAlt,
  FaBook,
  FaUserGraduate,
  FaDownload,
  FaCheckCircle,
  FaBell,
} from "react-icons/fa";

const Examination = () => {
  const examSteps = [
    {
      title: "Internal Assessment",
      desc: "Students are evaluated through assignments, practical work, attendance, presentations, and internal examinations conducted by the institute.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Semester Examination",
      desc: "Semester examinations are conducted according to the official CTEVT examination schedule for all diploma and pre-diploma programs.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Practical Examination",
      desc: "Laboratory work, field practice, viva-voce, and practical demonstrations are conducted before or after the theory examinations.",
      icon: <FaBook />,
    },
    {
      title: "Result Publication",
      desc: "Results are published by CTEVT after the evaluation process. Students can check their results through the official notice.",
      icon: <FaCheckCircle />,
    },
  ];

  const notices = [
    "Semester Examination Routine",
    "Practical Examination Schedule",
    "Examination Center Notice",
    "Examination Guidelines",
    "Result Publication Notice",
    "Re-totaling & Rechecking Notice",
  ];

  return (
    <div className="pt-48 bg-gray-100 min-h-screen">

      {/* Hero Section */}

      <section className="mx-6 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-500 text-white py-20 text-center">

        <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center text-blue-900 text-6xl shadow-xl">
          <FaClipboardCheck />
        </div>

        <h1 className="text-5xl font-bold mt-8">
          Examination
        </h1>

        <p className="text-xl mt-4 font-semibold">
          Rolpa Polytechnic Institute
        </p>

        <p className="mt-3 text-lg">
          Examination System Based on CTEVT Guidelines
        </p>

      </section>

      {/* Overview */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Examination Overview
          </h2>

          <p className="text-gray-700 leading-9 text-lg">

            Rolpa Polytechnic Institute follows the examination system
            prescribed by the Council for Technical Education and Vocational
            Training (CTEVT). Students are evaluated through continuous
            internal assessment, practical examinations, project work,
            internship evaluation and final semester examinations.

            <br /><br />

            The examination process ensures transparency, fairness and
            competency-based evaluation. Students are required to satisfy
            attendance requirements and complete all practical activities
            before appearing in the final semester examination.

          </p>

        </div>

      </section>

      {/* Examination Process */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Examination Process
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {examSteps.map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >

              <div className="text-yellow-500 text-5xl mb-5">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Important Notices */}

      <section className="bg-blue-900 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Examination Notices
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {notices.map((notice, index) => (

              <div
                key={index}
                className="bg-white rounded-xl p-6 flex justify-between items-center shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <FaBell className="text-yellow-500 text-2xl" />

                  <span className="font-semibold text-lg">
                    {notice}
                  </span>

                </div>

                <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-900">

                  View

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Examination Rules */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Examination Rules
          </h2>

          <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">

            <li>Students must maintain the minimum attendance required by CTEVT.</li>

            <li>Students must carry the official Admit Card during every examination.</li>

            <li>Mobile phones and electronic devices are strictly prohibited inside the examination hall.</li>

            <li>Unfair means during examination will result in disciplinary action according to CTEVT rules.</li>

            <li>Practical examinations are compulsory for all technical programs.</li>

            <li>Project work and internship evaluation are mandatory before final certification.</li>

            <li>Students may apply for re-totaling according to official CTEVT notice after result publication.</li>

          </ul>

        </div>

      </section>

      {/* Downloads */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <FaDownload className="text-blue-800 text-6xl mx-auto mb-5" />

          <h2 className="text-4xl font-bold text-blue-900">
            Examination Downloads
          </h2>

          <p className="text-gray-600 mt-5 text-lg">

            Download examination routine, admit card notices,
            examination guidelines and other official documents.

          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg">

            Download Documents

          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-12">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-2xl font-bold mb-4">
              ABOUT US
            </h2>

            <p className="text-gray-300 leading-8">
              Established in 2074 BS by the Council for Technical
              Education and Vocational Training (CTEVT). The institute
              provides quality skill-based technical education in Nepal.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              QUICK LINK
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>Ministry of Education</li>
              <li>CTEVT Nepal</li>
              <li>CTEVT Lumbini Province</li>
              <li>TITI</li>
              <li>NSTB</li>
            </ul>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              PROGRAM WE OFFER
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>Diploma in Information Technology</li>
              <li>Diploma in Agriculture (Plant Science)</li>
              <li>Diploma in Agriculture (Animal Science)</li>
              <li>Vocational Training Courses</li>
            </ul>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              CONTACT
            </h2>

            <p className="text-gray-300">
              Rolpa Municipality-1, Mewang, Rolpa
            </p>

            <p className="text-gray-300 mt-2">
              Phone: 086-594026
            </p>

            <p className="text-gray-300">
              Mobile: 9857824891
            </p>

            <p className="text-gray-300">
              Email: rolpapolytechnicinstitute@gmail.com
            </p>

            <p className="text-gray-300">
              Web: https://rpi.edu.np
            </p>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2025 Rolpa Polytechnic Institute | All Rights Reserved
        </div>

      </footer>

    </div>
  );
};

export default Examination;