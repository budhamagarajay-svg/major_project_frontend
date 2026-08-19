import React from "react";
import {
  FaEye,
  FaBullseye,
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaUniversity,
  FaChartLine,
  FaTools,
  FaGlobe,
  FaCheckCircle,
  FaFlask,
  FaSeedling,
  FaLaptop,
} from "react-icons/fa";

const VisionMission = () => {
  const coreValues = [
    {
      icon: <FaGraduationCap />,
      title: "Quality Education",
      text: "Providing quality technical and vocational education with emphasis on knowledge, skills and professional development.",
    },
    {
      icon: <FaTools />,
      title: "Practical Learning",
      text: "Promoting hands-on learning, practical training and real-world experience to prepare students for professional careers.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "Encouraging creativity, innovation, problem solving and the effective use of modern technology.",
    },
    {
      icon: <FaUsers />,
      title: "Student Development",
      text: "Creating an environment where students can develop confidence, discipline, skills and professional attitudes.",
    },
  ];

  const objectives = [
    "Enhance the institutional capacity of Rolpa Polytechnic Institute.",
    "Conduct Technical and Vocational Education and Training (TVET) programs effectively.",
    "Ensure quality management and continuous improvement in education and training.",
    "Produce competent, skilled, confident and motivated technical workforce.",
    "Develop practical skills that meet national and global employment requirements.",
    "Encourage students towards entrepreneurship, innovation and self-employment.",
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
        py-16 md:py-20
        text-center
        "
      >

        <div
          className="
          w-28 h-28 md:w-32 md:h-32
          bg-white
          rounded-full
          mx-auto
          flex
          items-center
          justify-center
          text-blue-900
          text-5xl md:text-6xl
          shadow-2xl
          "
        >
          <FaUniversity />
        </div>

        <h1
          className="
          text-4xl md:text-5xl
          font-extrabold
          mt-6
          "
        >
          Vision & Mission
        </h1>

        <p className="text-xl mt-4 font-semibold">
          Rolpa Polytechnic Institute
        </p>

        <p className="mt-3 text-gray-100 px-4">
          Constituent School of Council for Technical Education
          and Vocational Training (CTEVT)
        </p>

        <div className="mt-6">
          <span
            className="
            inline-block
            bg-white/20
            backdrop-blur-sm
            border border-white/30
            px-6
            py-2
            rounded-full
            font-semibold
            "
          >
            Excellence • Skills • Innovation
          </span>
        </div>

      </section>


      {/* OFFICIAL VISION & MISSION */}
      <section
        className="
        max-w-7xl
        mx-auto
        px-4 md:px-6
        py-14
        grid
        md:grid-cols-2
        gap-8
        "
      >

        {/* VISION */}
        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8 md:p-10
          border-t-8
          border-yellow-500
          hover:-translate-y-2
          transition
          duration-300
          "
        >

          <div
            className="
            w-16 h-16
            rounded-2xl
            bg-blue-50
            flex
            items-center
            justify-center
            "
          >
            <FaEye className="text-blue-900 text-4xl" />
          </div>

          <h2
            className="
            text-3xl
            font-bold
            text-blue-900
            mt-6
            "
          >
            Our Vision
          </h2>

          <div
            className="
            mt-5
            bg-blue-50
            rounded-2xl
            p-6
            "
          >
            <p
              className="
              text-blue-950
              text-xl
              md:text-2xl
              font-bold
              leading-9
              "
            >
              Center of Excellence in Skilled Workforce
            </p>
          </div>

          <p className="mt-5 text-gray-600 leading-8">
            RPI aims to establish itself as a center of excellence
            in developing skilled and competent human resources
            capable of contributing to society, the nation and
            the global workforce.
          </p>

        </div>


        {/* MISSION */}
        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8 md:p-10
          border-t-8
          border-blue-900
          hover:-translate-y-2
          transition
          duration-300
          "
        >

          <div
            className="
            w-16 h-16
            rounded-2xl
            bg-yellow-50
            flex
            items-center
            justify-center
            "
          >
            <FaBullseye className="text-yellow-500 text-4xl" />
          </div>

          <h2
            className="
            text-3xl
            font-bold
            text-blue-900
            mt-6
            "
          >
            Our Mission
          </h2>

          <div
            className="
            mt-5
            bg-yellow-50
            rounded-2xl
            p-6
            "
          >
            <p
              className="
              text-blue-950
              text-xl
              md:text-2xl
              font-bold
              leading-9
              "
            >
              Producing Competent Skilled Workforce for Global Market
            </p>
          </div>

          <p className="mt-5 text-gray-600 leading-8">
            The institute focuses on quality technical and
            vocational education, practical training and skill
            development to prepare competent human resources
            for employment and entrepreneurship opportunities.
          </p>

        </div>

      </section>


      {/* INSTITUTIONAL OBJECTIVES */}
      <section className="bg-blue-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">

            <div
              className="
              w-16 h-16
              mx-auto
              rounded-full
              bg-yellow-400
              text-blue-950
              flex
              items-center
              justify-center
              text-3xl
              "
            >
              <FaChartLine />
            </div>

            <h2 className="text-4xl font-bold mt-5">
              Institutional Objectives
            </h2>

            <p className="mt-3 text-gray-300">
              Strategic objectives of Rolpa Polytechnic Institute
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {objectives.map((objective, index) => (
              <div
                key={index}
                className="
                bg-white/10
                backdrop-blur-sm
                border
                border-white/10
                rounded-2xl
                p-6
                hover:bg-white/20
                transition
                duration-300
                "
              >

                <div className="flex gap-4">

                  <div
                    className="
                    min-w-10
                    w-10 h-10
                    rounded-full
                    bg-yellow-400
                    text-blue-950
                    flex
                    items-center
                    justify-center
                    font-bold
                    "
                  >
                    {index + 1}
                  </div>

                  <p className="text-gray-200 leading-7">
                    {objective}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">

        <div className="text-center mb-12">

          <h2
            className="
            text-4xl
            font-bold
            text-blue-900
            "
          >
            Our Core Values
          </h2>

          <p className="text-gray-600 mt-3">
            Values that guide our academic and institutional development
          </p>

        </div>


        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {coreValues.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow-lg
              p-7
              border-t-4
              border-blue-900
              hover:-translate-y-2
              hover:shadow-2xl
              transition
              duration-300
              "
            >

              <div
                className="
                w-16 h-16
                rounded-2xl
                bg-blue-50
                text-blue-900
                flex
                items-center
                justify-center
                text-3xl
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                text-blue-900
                mt-5
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-gray-600
                mt-3
                leading-7
                "
              >
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* PRACTICAL EDUCATION */}
      <section className="bg-gray-200 py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-900">
              From Education to Skill
            </h2>

            <p className="mt-3 text-gray-600">
              Turning knowledge into practical skills and opportunities
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            {/* LAB */}
            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              text-center
              hover:-translate-y-2
              transition
              "
            >

              <FaFlask
                className="
                text-5xl
                text-blue-900
                mx-auto
                "
              />

              <h3 className="text-2xl font-bold text-blue-900 mt-5">
                Practical Laboratories
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Practical laboratory activities help students
                connect theoretical knowledge with real-world
                applications.
              </p>

            </div>


            {/* AGRICULTURE */}
            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              text-center
              hover:-translate-y-2
              transition
              "
            >

              <FaSeedling
                className="
                text-5xl
                text-green-600
                mx-auto
                "
              />

              <h3 className="text-2xl font-bold text-blue-900 mt-5">
                Agriculture Practice
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Agriculture-related practical facilities provide
                opportunities to apply classroom knowledge in
                real situations.
              </p>

            </div>


            {/* IT */}
            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              text-center
              hover:-translate-y-2
              transition
              "
            >

              <FaLaptop
                className="
                text-5xl
                text-blue-900
                mx-auto
                "
              />

              <h3 className="text-2xl font-bold text-blue-900 mt-5">
                Technology & Innovation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Modern technology and innovative learning help
                students prepare for changing industry requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* STRATEGIC FOCUS */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div
            className="
            rounded-3xl
            bg-gradient-to-r
            from-blue-950
            to-blue-700
            text-white
            p-8 md:p-12
            shadow-2xl
            "
          >

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-yellow-400 font-bold uppercase tracking-wider">
                  Our Direction
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  Building Skilled Human Resources
                </h2>

                <p className="mt-5 text-gray-200 leading-8">
                  RPI focuses on strengthening institutional capacity,
                  delivering quality TVET programs and developing
                  skilled human resources who can respond to the
                  needs of Nepal and the global employment market.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/10 rounded-2xl p-5">
                  <FaGraduationCap className="text-yellow-400 text-3xl" />
                  <h3 className="font-bold mt-3">
                    Skills
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Competent workforce
                  </p>
                </div>


                <div className="bg-white/10 rounded-2xl p-5">
                  <FaGlobe className="text-yellow-400 text-3xl" />
                  <h3 className="font-bold mt-3">
                    Global
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Global opportunities
                  </p>
                </div>


                <div className="bg-white/10 rounded-2xl p-5">
                  <FaLightbulb className="text-yellow-400 text-3xl" />
                  <h3 className="font-bold mt-3">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Creative thinking
                  </p>
                </div>


                <div className="bg-white/10 rounded-2xl p-5">
                  <FaHandshake className="text-yellow-400 text-3xl" />
                  <h3 className="font-bold mt-3">
                    Community
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Social contribution
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL MESSAGE */}
      <section className="py-14 bg-gray-100">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <FaCheckCircle
            className="
            text-green-600
            text-5xl
            mx-auto
            "
          />

          <h2
            className="
            text-3xl
            font-bold
            text-blue-900
            mt-5
            "
          >
            Excellence Through Skills
          </h2>

          <p
            className="
            text-gray-600
            text-lg
            leading-8
            mt-4
            "
          >
            Rolpa Polytechnic Institute continues to work towards
            becoming a center of excellence in skilled workforce
            development and producing competent human resources
            for the global market.
          </p>

        </div>

      </section>

    </div>
  );
};

export default VisionMission;