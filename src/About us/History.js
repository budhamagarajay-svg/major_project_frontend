import React from "react";
import {
  FaHistory,
  FaUniversity,
  FaGraduationCap,
  FaLaptopCode,
  FaSeedling,
  FaUsers,
  FaBullseye,
  FaAward,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const History = () => {
  const milestones = [
    {
      icon: <FaUniversity />,
      title: "Establishment of RPI",
      text: "Rolpa Polytechnic Institute was established in 2074 B.S. by the Council for Technical Education and Vocational Training (CTEVT) as a constituent technical institution.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Located in Mewang, Rolpa",
      text: "The institute is situated at Rolpa Municipality-1, Mewang, Rolpa, providing technical and vocational education to students of Rolpa and surrounding communities.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Technical Education",
      text: "RPI was developed with the aim of promoting technical and vocational education and helping address poverty and unemployment through skilled human resource development.",
    },
    {
      icon: <FaSeedling />,
      title: "Agriculture Education",
      text: "The institute provides Diploma-level education in Agriculture with Plant Science and Animal Science, supporting technical manpower development in the agricultural sector.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Information Technology Education",
      text: "RPI also offers a Diploma in Information Technology, providing students with computer and technology-related knowledge and practical skills.",
    },
    {
      icon: <FaUsers />,
      title: "Skill Development and Community Service",
      text: "Along with diploma programs, the institute focuses on skill development and vocational training to prepare competent human resources for employment and national development.",
    },
  ];

  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "Technical Education",
      text: "Providing accessible and skill-based technical education.",
    },
    {
      icon: <FaUsers />,
      title: "Human Resource Development",
      text: "Preparing competent and skilled manpower for the labor market.",
    },
    {
      icon: <FaAward />,
      title: "Quality Commitment",
      text: "Working towards quality management and continuous institutional improvement.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section
        className="
          mx-4 md:mx-6
          mt-6
          rounded-3xl
          overflow-hidden
          shadow-2xl
          bg-gradient-to-r
          from-blue-950
          via-blue-800
          to-yellow-500
          text-white
          py-20
          text-center
        "
      >
        <div
          className="
            w-32 h-32
            mx-auto
            bg-white
            rounded-full
            flex
            items-center
            justify-center
            text-blue-900
            text-6xl
            shadow-xl
          "
        >
          <FaHistory />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-7">
          History of RPI
        </h1>

        <p className="text-xl md:text-2xl mt-4 font-semibold">
          Rolpa Polytechnic Institute
        </p>

        <p className="mt-3 text-lg text-gray-100">
          A Constituent Institute of CTEVT
        </p>

        <div className="mt-7 inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
          <FaUniversity />
          <span className="font-semibold">
            Established in 2074 B.S.
          </span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <div className="flex items-center gap-4 mb-7">
            <div className="bg-blue-900 text-white p-4 rounded-2xl text-2xl">
              <FaUniversity />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                About Rolpa Polytechnic Institute
              </h2>

              <p className="text-gray-500 mt-1">
                From technical education to skilled human resource development
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-9">
            Rolpa Polytechnic Institute (RPI) is a constituent technical
            institution of the Council for Technical Education and Vocational
            Training (CTEVT), Nepal. The institute was established in
            <strong> 2074 B.S. </strong>
            at Rolpa Municipality-1, Mewang, Rolpa.
          </p>

          <p className="mt-5 text-gray-700 text-lg leading-9">
            The institute was developed with the aim of promoting technical
            and vocational education and contributing to the development of
            skilled human resources. Its focus is on practical and
            skill-oriented education that can help students build professional
            capabilities and improve employment opportunities.
          </p>

          <p className="mt-5 text-gray-700 text-lg leading-9">
            RPI currently provides technical education in areas including
            Information Technology and Agriculture, along with vocational
            training opportunities. The institute continues to work toward
            strengthening technical education and developing competent
            workforce for the national and global labor market.
          </p>

        </div>
      </section>

      {/* KEY FACTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition">
            <FaUniversity className="text-5xl text-blue-900 mx-auto" />

            <h3 className="text-2xl font-bold text-blue-900 mt-4">
              2074 B.S.
            </h3>

            <p className="text-gray-600 mt-2">
              Established
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition">
            <FaGraduationCap className="text-5xl text-yellow-500 mx-auto" />

            <h3 className="text-2xl font-bold text-blue-900 mt-4">
              CTEVT
            </h3>

            <p className="text-gray-600 mt-2">
              Constituent Institute
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition">
            <FaLaptopCode className="text-5xl text-blue-900 mx-auto" />

            <h3 className="text-2xl font-bold text-blue-900 mt-4">
              IT
            </h3>

            <p className="text-gray-600 mt-2">
              Diploma in Information Technology
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition">
            <FaSeedling className="text-5xl text-green-600 mx-auto" />

            <h3 className="text-2xl font-bold text-blue-900 mt-4">
              Agriculture
            </h3>

            <p className="text-gray-600 mt-2">
              Plant & Animal Science
            </p>
          </div>

        </div>

      </section>

      {/* JOURNEY */}
      <section className="bg-blue-950 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center text-white mb-12">

            <div className="flex justify-center">
              <FaHistory className="text-yellow-400 text-5xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Our Journey
            </h2>

            <p className="mt-3 text-gray-300 text-lg">
              The development and continuing journey of Rolpa Polytechnic Institute
            </p>

          </div>

          <div className="relative">

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform -translate-x-1/2"></div>

            <div className="space-y-10">

              {milestones.map((item, index) => (

                <div
                  key={index}
                  className={`
                    relative
                    md:flex
                    items-center
                    ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }
                  `}
                >

                  <div className="md:w-1/2 p-4">

                    <div
                      className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        p-7
                        hover:-translate-y-2
                        transition
                        duration-300
                      "
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-16
                            h-16
                            rounded-full
                            bg-yellow-500
                            text-blue-950
                            flex
                            items-center
                            justify-center
                            text-2xl
                            flex-shrink-0
                          "
                        >
                          {item.icon}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                          {item.title}
                        </h3>

                      </div>

                      <p className="mt-5 text-gray-600 leading-8">
                        {item.text}
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      transform
                      -translate-x-1/2
                      w-7
                      h-7
                      bg-yellow-400
                      rounded-full
                      border-4
                      border-blue-950
                    "
                  ></div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* VISION MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-9 border-t-8 border-blue-900">

            <FaBullseye className="text-5xl text-blue-900 mb-5" />

            <h2 className="text-3xl font-bold text-blue-900">
              Institutional Mission
            </h2>

            <p className="mt-5 text-gray-700 leading-8 text-lg">
              RPI aims to produce competent and skilled human resources who
              can contribute to the labor market and society through technical
              and vocational education.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-9 border-t-8 border-yellow-500">

            <FaAward className="text-5xl text-yellow-500 mb-5" />

            <h2 className="text-3xl font-bold text-blue-900">
              Vision
            </h2>

            <p className="mt-5 text-gray-700 leading-8 text-lg">
              The institute's stated vision is to become a
              <strong> Center of Excellence in skilled workforce</strong>,
              supporting the development of capable human resources.
            </p>

          </div>

        </div>

      </section>

      {/* CONTRIBUTION */}
      <section className="bg-gray-200 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-900">
              RPI's Contribution
            </h2>

            <p className="mt-3 text-gray-600 text-lg">
              Building skills, knowledge and opportunities
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {achievements.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  p-8
                  text-center
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                <div className="text-blue-900 text-5xl flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mt-5">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OBJECTIVES */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <div className="text-center mb-10">

            <FaCheckCircle className="text-5xl text-green-600 mx-auto" />

            <h2 className="text-4xl font-bold text-blue-900 mt-4">
              Institutional Objectives
            </h2>

          </div>

          <div className="space-y-5">

            <div className="flex items-start gap-4 bg-blue-50 p-5 rounded-xl">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Enhance institutional capacity.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-5 rounded-xl">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Conduct technical and vocational education and training
                programs for a large number of participants.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-5 rounded-xl">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Ensure a quality management system within the institution.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CLOSING SECTION */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <FaUniversity className="text-yellow-400 text-6xl mx-auto" />

          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Continuing the Journey
          </h2>

          <p className="mt-5 text-gray-200 text-lg leading-8">
            From its establishment as a CTEVT constituent institute in
            2074 B.S., Rolpa Polytechnic Institute has focused on technical
            education, practical skills and human resource development.
            RPI continues to work toward its goal of producing competent
            skilled workforce for the future.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 bg-yellow-500 text-blue-950 px-7 py-3 rounded-full font-bold">
            <FaGraduationCap />
            Technical Education • Practical Skills • Skilled Workforce
          </div>

        </div>

      </section>

    </div>
  );
};

export default History;