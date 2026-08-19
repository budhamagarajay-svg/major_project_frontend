import React from "react";
import {
  FaUniversity,
  FaBullseye,
  FaEye,
  FaUsers,
  FaGraduationCap,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";

const Overview = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="mx-6 mt-6 rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">

        <img
          src="/overview-banner.jpg.jpeg"
          alt="Rolpa Polytechnic Institute"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-800/70 to-yellow-500/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">

          <div className="bg-white text-blue-900 w-28 h-28 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-yellow-400">
            <FaUniversity />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-7">
            OVERVIEW
          </h1>

          <p className="text-2xl mt-4 font-semibold">
            Rolpa Polytechnic Institute
          </p>

          <p className="mt-3 text-lg">
            Constituent School of CTEVT
          </p>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-900 text-white p-4 rounded-xl">
              <FaUniversity className="text-3xl" />
            </div>

            <h2 className="text-4xl font-bold text-blue-900">
              About Rolpa Polytechnic Institute
            </h2>
          </div>

          <p className="text-gray-700 leading-8 text-lg">
            Rolpa Polytechnic Institute is a constituent school of the
            Council for Technical Education and Vocational Training (CTEVT),
            Nepal. The institute focuses on technical and vocational education
            and aims to develop skilled and competent human resources.
          </p>

          <p className="mt-5 text-gray-700 leading-8 text-lg">
            The institute provides practical and skill-oriented education
            through technical programs, training and learning activities.
            It focuses on developing knowledge, practical skills and
            professional competency among students.
          </p>

        </div>
      </section>


      {/* PROGRAM IMAGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-blue-900">
            Our Academic Environment
          </h2>

          <p className="text-gray-600 mt-3">
            Technical education, practical learning and skill development
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/ag.jpg.jpeg"
              alt="Agriculture Program"
              className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900">
                Agriculture Education
              </h3>

              <p className="text-gray-600 mt-2">
                Practical learning and technical education related to
                agriculture.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/it-program.jpg"
              alt="Information Technology Program"
              className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900">
                Information Technology
              </h3>

              <p className="text-gray-600 mt-2">
                Technical education focused on computer and information
                technology.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/skill-development.jpg"
              alt="Skill Development"
              className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900">
                Skill Development
              </h3>

              <p className="text-gray-600 mt-2">
                Practical training and skill-oriented learning opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-blue-900 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-3xl">
              <FaEye />
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mt-5">
              Our Vision
            </h2>

            <p className="text-gray-700 leading-8 mt-4">
              To become a leading technical education institution producing
              competent, creative and skilled professionals for society.
            </p>

          </div>


          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-yellow-500 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-3xl">
              <FaBullseye />
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mt-5">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8 mt-4">
              To provide quality technical education through practical
              training, modern learning facilities and effective teaching
              practices.
            </p>

          </div>

        </div>
      </section>


      {/* ACADEMIC PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-blue-900">
            Academic Programs
          </h2>

          <p className="text-gray-600 mt-3">
            Technical and vocational education for skill development
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

            <FaGraduationCap className="text-5xl text-blue-900 mx-auto" />

            <h3 className="text-xl font-bold mt-5 text-blue-900">
              Diploma in Agriculture
            </h3>

            <p className="mt-3 text-gray-600">
              Plant Science and Animal Science
            </p>

          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

            <FaBookOpen className="text-5xl text-blue-900 mx-auto" />

            <h3 className="text-xl font-bold mt-5 text-blue-900">
              Diploma in Information Technology
            </h3>

            <p className="mt-3 text-gray-600">
              Computer and Information Technology Education
            </p>

          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

            <FaUsers className="text-5xl text-blue-900 mx-auto" />

            <h3 className="text-xl font-bold mt-5 text-blue-900">
              Skill Development
            </h3>

            <p className="mt-3 text-gray-600">
              Practical and vocational training
            </p>

          </div>

        </div>
      </section>


      {/* KEY FEATURES */}
      <section className="bg-blue-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold">
              Why Rolpa Polytechnic Institute?
            </h2>

            <p className="text-gray-300 mt-3">
              Focused on technical education and practical skill development
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <FaCheckCircle className="text-yellow-400 text-4xl mx-auto" />
              <h3 className="font-bold text-lg mt-4">
                Practical Learning
              </h3>
            </div>


            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <FaGraduationCap className="text-yellow-400 text-4xl mx-auto" />
              <h3 className="font-bold text-lg mt-4">
                Technical Education
              </h3>
            </div>


            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <FaUsers className="text-yellow-400 text-4xl mx-auto" />
              <h3 className="font-bold text-lg mt-4">
                Skilled Instructors
              </h3>
            </div>


            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <FaBookOpen className="text-yellow-400 text-4xl mx-auto" />
              <h3 className="font-bold text-lg mt-4">
                Skill Development
              </h3>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Overview;