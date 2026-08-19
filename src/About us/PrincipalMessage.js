import React from "react";
import {
  FaUserTie,
  FaPhoneAlt,
  FaQuoteLeft,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFlask,
  FaLaptop,
  FaSeedling,
  FaHome,
  FaLightbulb,
} from "react-icons/fa";

const PrincipalMessage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="mx-4 md:mx-6 mt-6 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-950 via-blue-800 to-yellow-500 text-white py-14 md:py-16 text-center">

        <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl">
          <img
            src="/principal.jpg.jpeg"
            alt="Tej Pratap Dubey"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-7">
          Principal's Message
        </h1>

        <p className="text-xl mt-4 font-semibold">
          Rolpa Polytechnic Institute
        </p>

        <p className="mt-3 text-gray-100 px-4">
          A constituent institute of CTEVT committed to quality
          technical and vocational education
        </p>

      </section>


      {/* Principal Profile + Message */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Profile */}
        <div className="bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-2xl p-8 text-center border border-blue-100">

          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-8 border-yellow-400 shadow-xl">
            <img
              src="/principal.jpg.jpeg"
              alt="Principal Tej Pratap Dubey"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mt-6">
            Tej Pratap Dubey
          </h2>

          <p className="text-yellow-600 font-bold text-xl mt-2">
            Principal
          </p>

          <div className="mt-6 space-y-4 text-gray-700">

            <p className="flex justify-center items-center gap-3">
              <FaPhoneAlt className="text-blue-700" />
              9857824891
            </p>

            <p className="flex justify-center items-center gap-3">
              <FaEnvelope className="text-blue-700" />
              rpi.tej@gmail.com
            </p>

            <p className="flex justify-center items-center gap-3">
              <FaMapMarkerAlt className="text-blue-700" />
              Mewang-1, Rolpa, Nepal
            </p>

          </div>

          <div className="mt-6 inline-block bg-blue-900 text-white px-5 py-2 rounded-full font-semibold">
            CTEVT Constituent Institute
          </div>

        </div>


        {/* Message */}
        <div className="md:col-span-2 bg-white rounded-3xl shadow-2xl p-7 md:p-10 border-l-8 border-yellow-400">

          <FaQuoteLeft className="text-yellow-500 text-5xl" />

          <h2 className="text-3xl font-bold text-blue-900 mt-5 mb-6">
            Message from the Principal
          </h2>

          <div className="text-gray-700 text-lg leading-8">

            <p>
              Dear Students, Parents, and Esteemed Stakeholders,
            </p>

            <p className="mt-5">
              It is with great pleasure that I welcome you to
              Rolpa Polytechnic Institute, a constituent institute
              of the Council for Technical Education and Vocational
              Training (CTEVT).
            </p>

            <p className="mt-5">
              Established in 2074 B.S., our institution is committed
              to providing quality technical education and vocational
              training to the youth of our region and beyond.
              We understand the importance of accessible and
              skill-based education in creating better opportunities
              for students and communities.
            </p>

            <p className="mt-5">
              Technical education and vocational training are
              essential for the economic and social development of
              our nation. In today's rapidly changing world,
              theoretical knowledge alone is not enough. Therefore,
              we focus on hands-on skills, practical knowledge,
              creativity, discipline, and professional development.
            </p>

            <p className="mt-5">
              Our goal is to produce competent and skilled human
              resources who can contribute meaningfully to society
              and meet the growing demand for technical expertise
              in Nepal and the global market.
            </p>

            <p className="mt-5">
              I encourage our students to make the best use of
              their learning opportunities, develop practical skills,
              remain disciplined, and continuously work toward
              achieving their professional goals.
            </p>

            <p className="mt-5">
              I wish all our students a successful academic journey
              and a bright future.
            </p>

          </div>


          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
              <FaCheckCircle className="text-green-600" />
              Quality Technical Education
            </div>

            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
              <FaCheckCircle className="text-green-600" />
              Practical Skill Development
            </div>

            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
              <FaCheckCircle className="text-green-600" />
              Career-Oriented Learning
            </div>

            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
              <FaCheckCircle className="text-green-600" />
              Student-Centered Education
            </div>

          </div>


          <h3 className="mt-8 text-xl font-bold text-blue-900">
            Tej Pratap Dubey
          </h3>

          <p className="text-gray-600">
            Principal
            <br />
            Rolpa Polytechnic Institute
          </p>

        </div>

      </section>


      {/* Facilities Section */}
      <section className="bg-blue-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Learning & Practical Facilities
            </h2>

            <p className="mt-3 text-gray-300">
              Supporting students through practical and skill-based learning
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaFlask className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Science Laboratories
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Well-equipped laboratories support practical
                learning and experimental activities.
              </p>
            </div>


            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaLaptop className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Modern Teaching
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Modern teaching aids and technology help create
                an effective learning environment.
              </p>
            </div>


            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaSeedling className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Agriculture Farm
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Practical agricultural activities allow students
                to apply classroom knowledge in real situations.
              </p>
            </div>


            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaUserTie className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Experienced Instructors
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Faculty and staff guide students through academic,
                practical, and professional development.
              </p>
            </div>


            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaHome className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Girls' Hostel
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                A comfortable hostel facility supports the
                convenience and safety of female students.
              </p>
            </div>


            <div className="bg-white/10 rounded-2xl p-7 hover:-translate-y-2 transition">
              <FaLightbulb className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-2xl font-bold">
                Skill Development
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                The institute emphasizes practical skills,
                creativity, innovation, and professional growth.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Institute Commitment */}
      <section className="py-16 bg-gray-100">

        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">

            <FaGraduationCap className="text-blue-900 text-6xl mx-auto" />

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-5">
              Our Commitment
            </h2>

            <p className="mt-5 text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
              Rolpa Polytechnic Institute is committed to producing
              competent, skilled, confident, and motivated technical
              workforce through quality technical education,
              practical training, innovation, and skill development.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-5">

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  Quality Education
                </h3>
                <p className="text-gray-600 mt-2">
                  Focus on academic and practical excellence.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  Practical Skills
                </h3>
                <p className="text-gray-600 mt-2">
                  Learning through real-world practice.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  Global Workforce
                </h3>
                <p className="text-gray-600 mt-2">
                  Preparing skilled manpower for the global market.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Final Quote */}
      <section className="bg-blue-900 text-white py-14">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <FaQuoteLeft className="text-yellow-400 text-4xl mx-auto" />

          <h2 className="text-2xl md:text-3xl font-bold mt-6">
            "Technical education is a pathway to skills,
            confidence, and opportunity."
          </h2>

          <p className="mt-5 text-gray-300">
            Tej Pratap Dubey
          </p>

          <p className="text-yellow-400 font-semibold mt-1">
            Principal, Rolpa Polytechnic Institute
          </p>

        </div>

      </section>

    </div>
  );
};

export default PrincipalMessage;