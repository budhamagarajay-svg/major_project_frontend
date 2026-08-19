import React from "react";
import {
  FaBookOpen,
  FaUniversity,
  FaCheckCircle,
  FaShieldAlt,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const Rules = () => {
  const rulesList = [
    {
      title: "Student Discipline Rules",
      icon: <FaShieldAlt />,
      description:
        "Maintain discipline, respect teachers and follow institute ethics.",
    },
    {
      title: "Academic Rules",
      icon: <FaGraduationCap />,
      description:
        "Follow academic guidelines, class schedules and learning standards.",
    },
    {
      title: "Examination Rules",
      icon: <FaBookOpen />,
      description:
        "Important examination procedures and evaluation guidelines.",
    },
    {
      title: "Attendance Policy",
      icon: <FaCheckCircle />,
      description:
        "Students must maintain required attendance percentage.",
    },
    {
      title: "Library Rules",
      icon: <FaBookOpen />,
      description:
        "Guidelines for proper use of library resources.",
    },
    {
      title: "Laboratory Rules",
      icon: <FaShieldAlt />,
      description:
        "Safety rules for practical laboratory activities.",
    },
    {
      title: "Hostel Rules",
      icon: <FaUsers />,
      description:
        "Rules for hostel discipline and student safety.",
    },
    {
      title: "Code of Conduct",
      icon: <FaUniversity />,
      description:
        "Professional behavior expected from every student.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          mx-6
          rounded-[40px]
          overflow-hidden
          shadow-2xl
          h-[520px]
          flex
          items-center
          justify-center
          text-center
        "
      >
        {/* Background Image */}
        <img
          src="/rules-banner.jpg"
          alt="Institute Rules"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-blue-950/90
            via-blue-800/80
            to-yellow-500/70
          "
        ></div>

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            text-white
            px-5
          "
        >
          {/* Icon */}
          <div
            className="
              w-36
              h-36
              mx-auto
              bg-white
              text-blue-950
              rounded-full
              flex
              items-center
              justify-center
              text-7xl
              shadow-2xl
              border-8
              border-yellow-400
              animate-bounce
            "
          >
            <FaBookOpen />
          </div>

          {/* Small Heading */}
          <p
            className="
              mt-8
              text-yellow-300
              font-bold
              tracking-[6px]
              uppercase
            "
          >
            Student Guidelines
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-6xl
              md:text-7xl
              font-black
              mt-4
              tracking-widest
            "
          >
            RULES
          </h1>

          {/* Divider */}
          <div
            className="
              w-44
              h-1
              bg-yellow-400
              mx-auto
              mt-5
            "
          ></div>

          {/* Subtitle */}
          <p
            className="
              text-2xl
              md:text-3xl
              font-bold
              mt-7
            "
          >
            Institute Rules & Regulations
          </p>

          {/* Description */}
          <p
            className="
              text-lg
              md:text-xl
              mt-4
              text-gray-200
            "
          >
            Rolpa Polytechnic Institute | CTEVT Nepal
          </p>

          {/* Button */}
          <button
            className="
              mt-8
              bg-yellow-400
              text-blue-950
              px-10
              py-4
              rounded-full
              font-bold
              text-lg
              hover:bg-white
              hover:scale-105
              transition
              duration-300
              shadow-xl
              inline-flex
              items-center
              gap-3
            "
          >
            Explore Guidelines
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION SECTION
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}

          <div>
            <span
              className="
                inline-block
                bg-yellow-400
                text-blue-950
                px-5
                py-2
                rounded-full
                font-bold
              "
            >
              RPI STUDENT GUIDELINES
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                text-blue-950
                mt-6
                leading-tight
              "
            >
              Building Professional,
              <br />
              Disciplined &
              <br />
              Responsible Students
            </h2>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
                mt-6
              "
            >
              Rolpa Polytechnic Institute follows CTEVT standards
              to create a professional learning environment. Every
              student is expected to respect institute rules,
              teachers, staff members and fellow students.
            </p>

            {/* Statistics */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {/* Rules */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  transition
                "
              >
                <h3
                  className="
                    text-5xl
                    font-black
                    text-blue-900
                  "
                >
                  08+
                </h3>

                <p className="mt-3 font-semibold text-gray-700">
                  Major Rules
                </p>
              </div>

              {/* Responsibility */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  transition
                "
              >
                <h3
                  className="
                    text-5xl
                    font-black
                    text-yellow-500
                  "
                >
                  100%
                </h3>

                <p className="mt-3 font-semibold text-gray-700">
                  Student Responsibility
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div>
            <div
              className="
                bg-white
                rounded-[35px]
                shadow-2xl
                p-10
                hover:-translate-y-2
                transition
              "
            >

              {/* Header */}

              <div className="flex items-center gap-5">

                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-blue-900
                    text-yellow-400
                    flex
                    justify-center
                    items-center
                    text-4xl
                    shadow-lg
                  "
                >
                  <FaUniversity />
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-black
                      text-blue-900
                    "
                  >
                    Institute Mission
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Discipline • Quality • Innovation
                  </p>
                </div>

              </div>

              {/* Description */}

              <p
                className="
                  text-gray-600
                  leading-8
                  mt-8
                "
              >
                Every student should maintain discipline,
                punctuality, honesty, respect and professionalism
                inside and outside the institute.
              </p>

              {/* Button */}

              <div className="mt-8">

                <button
                  className="
                    bg-blue-900
                    hover:bg-yellow-400
                    hover:text-blue-950
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-bold
                    transition
                    duration-300
                    inline-flex
                    items-center
                    gap-3
                  "
                >
                  Read Student Handbook
                  <FaArrowRight />
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          RULE CARDS SECTION
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        {/* Section Heading */}

        <div className="text-center">

          <span
            className="
              inline-block
              bg-yellow-400
              text-blue-950
              px-5
              py-2
              rounded-full
              font-bold
              text-sm
            "
          >
            IMPORTANT GUIDELINES
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-blue-950
              mt-5
            "
          >
            Institute Rules
          </h2>

          <p
            className="
              text-gray-600
              mt-4
              text-lg
            "
          >
            Important policies that every student must follow.
          </p>

        </div>

        {/* Rule Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-14
          "
        >
          {rulesList.map((rule, index) => (

            <div
              key={index}
              className="
                group
                bg-white
                rounded-[30px]
                shadow-xl
                overflow-hidden
                hover:-translate-y-4
                hover:shadow-2xl
                transition
                duration-500
              "
            >

              {/* Top Border */}

              <div
                className="
                  h-2
                  bg-gradient-to-r
                  from-blue-900
                  to-yellow-400
                "
              ></div>

              {/* Card Content */}

              <div className="p-8">

                {/* Icon */}

                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-blue-900
                    text-yellow-400
                    flex
                    justify-center
                    items-center
                    text-4xl
                    group-hover:rotate-12
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                >
                  {rule.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-blue-950
                    mt-7
                  "
                >
                  {rule.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-gray-600
                    leading-7
                    mt-5
                  "
                >
                  {rule.description}
                </p>

                {/* Learn More */}

                <button
                  className="
                    mt-8
                    text-blue-900
                    font-bold
                    flex
                    items-center
                    gap-2
                    group-hover:text-yellow-500
                    transition
                  "
                >
                  Learn More
                  <FaArrowRight />
                </button>

              </div>
            </div>

          ))}
        </div>

      </section>

      {/* =====================================================
          FINAL CTA SECTION
      ====================================================== */}

      <section
        className="
          bg-gradient-to-r
          from-blue-950
          to-blue-700
          text-white
          py-16
        "
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaShieldAlt
            className="
              text-yellow-400
              text-6xl
              mx-auto
            "
          />

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              mt-6
            "
          >
            Discipline Builds Success
          </h2>

          <p
            className="
              text-gray-200
              text-lg
              leading-8
              mt-5
              max-w-3xl
              mx-auto
            "
          >
            Following institute rules helps create a safe,
            respectful and productive learning environment
            for every student.
          </p>

          <button
            className="
              mt-8
              bg-yellow-400
              text-blue-950
              px-10
              py-4
              rounded-full
              font-bold
              hover:bg-white
              hover:scale-105
              transition
              duration-300
              inline-flex
              items-center
              gap-3
            "
          >
            Follow The Guidelines
            <FaArrowRight />
          </button>

        </div>

      </section>

    </div>
  );
};

export default Rules;