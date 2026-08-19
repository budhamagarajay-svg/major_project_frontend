import React, { useState } from "react";

import {
  FaGraduationCap,
  FaSearch,
  FaDownload,
  FaCalendarAlt,
  FaUniversity,
  FaGlobe,
  FaAward,
  FaUserGraduate,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Scholarships = () => {
  const [search, setSearch] = useState("");

  // ================= SCHOLARSHIP DATA =================

  const scholarships = [
    {
      id: 1,
      title: "Model United Nations Scholarship Program",
      date: "2021-01-04",
      category: "International",
    },

    {
      id: 2,
      title: "Hosei University Scholarship Opportunity",
      date: "2021-01-04",
      category: "University",
    },

    {
      id: 3,
      title: "Hosei University English Based Graduate Program",
      date: "2021-01-04",
      category: "Graduate",
    },

    {
      id: 4,
      title: "ANSO Scholarship Recommendation",
      date: "2021-01-04",
      category: "Research",
    },

    {
      id: 5,
      title: "Saitama University Application Procedure",
      date: "2021-01-04",
      category: "Exchange",
    },
  ];

  // ================= SEARCH FILTER =================

  const filteredScholarships = scholarships.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen pt-[120px]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          mx-4 md:mx-6
          h-[500px] md:h-[520px]
          rounded-[35px] md:rounded-[40px]
          overflow-hidden
          relative
          shadow-2xl
        "
      >

        {/* Background Image */}

        <img
          src="/Scholarship.png.jpeg"
          alt="Scholarship Opportunities"
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
            from-blue-950/95
            via-blue-800/80
            to-yellow-500/70
          "
        ></div>

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-white
            px-6
          "
        >

          {/* Icon */}

          <div
            className="
              w-28 h-28
              md:w-32 md:h-32
              rounded-full
              bg-white
              text-blue-900
              flex
              items-center
              justify-center
              text-6xl md:text-7xl
              shadow-2xl
              animate-bounce
            "
          >
            <FaGraduationCap />
          </div>

          {/* Small Heading */}

          <p
            className="
              mt-7
              uppercase
              tracking-[5px] md:tracking-[8px]
              text-yellow-300
              font-bold
            "
          >
            Future Opportunity
          </p>

          {/* Main Heading */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              mt-4
              drop-shadow-xl
            "
          >
            SCHOLARSHIPS
          </h1>

          {/* Subtitle */}

          <p
            className="
              text-xl
              md:text-2xl
              mt-5
              font-semibold
            "
          >
            Unlock Your Educational Dreams
          </p>

          {/* Description */}

          <p
            className="
              mt-4
              text-gray-200
              text-sm
              md:text-lg
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
              px-8 md:px-10
              py-3 md:py-4
              rounded-full
              font-bold
              flex
              items-center
              gap-3
              hover:bg-white
              transition
              shadow-xl
              hover:scale-105
            "
          >
            Explore Opportunities
            <FaArrowRight />
          </button>

        </div>
      </section>


      {/* =====================================================
          STATISTICS SECTION
      ====================================================== */}

      <section
        className="
          max-w-6xl
          mx-auto
          px-6
          py-14
          grid
          sm:grid-cols-2
          md:grid-cols-3
          gap-8
        "
      >

        {/* STAT 1 */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            text-center
            hover:-translate-y-3
            hover:shadow-2xl
            transition
            duration-300
          "
        >

          <FaAward
            className="
              text-5xl
              text-yellow-500
              mx-auto
            "
          />

          <h2
            className="
              text-4xl
              font-black
              text-blue-900
              mt-4
            "
          >
            50+
          </h2>

          <p className="text-gray-600 mt-2">
            Scholarship Programs
          </p>

        </div>


        {/* STAT 2 */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            text-center
            hover:-translate-y-3
            hover:shadow-2xl
            transition
            duration-300
          "
        >

          <FaGlobe
            className="
              text-5xl
              text-yellow-500
              mx-auto
            "
          />

          <h2
            className="
              text-4xl
              font-black
              text-blue-900
              mt-4
            "
          >
            20+
          </h2>

          <p className="text-gray-600 mt-2">
            International Partners
          </p>

        </div>


        {/* STAT 3 */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            text-center
            hover:-translate-y-3
            hover:shadow-2xl
            transition
            duration-300
          "
        >

          <FaUserGraduate
            className="
              text-5xl
              text-yellow-500
              mx-auto
            "
          />

          <h2
            className="
              text-4xl
              font-black
              text-blue-900
              mt-4
            "
          >
            100+
          </h2>

          <p className="text-gray-600 mt-2">
            Student Benefits
          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-16
          grid
          lg:grid-cols-3
          gap-10
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="lg:col-span-2">

          {/* SEARCH BOX */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-3
              flex
              items-center
              mb-10
            "
          >

            <FaSearch
              className="
                text-blue-900
                text-xl
                ml-4
              "
            />

            <input
              type="text"
              placeholder="Search Scholarship Opportunities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                p-5
                outline-none
                text-lg
              "
            />

          </div>


          {/* TITLE */}

          <div
            className="
              flex
              justify-between
              items-center
              gap-4
              mb-8
              flex-wrap
            "
          >

            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                text-blue-900
              "
            >
              Available Scholarships
            </h2>

            <span
              className="
                bg-yellow-400
                text-blue-950
                px-5
                py-2
                rounded-full
                font-bold
              "
            >
              {filteredScholarships.length} Available
            </span>

          </div>


          {/* SCHOLARSHIP LIST */}

          <div className="space-y-6">

            {filteredScholarships.length > 0 ? (

              filteredScholarships.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    p-6 md:p-7
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    justify-between
                    gap-6
                    border-l-8
                    border-yellow-400
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition
                    duration-300
                  "
                >

                  {/* INFORMATION */}

                  <div className="flex-1">

                    {/* DATE */}

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-blue-700
                        font-bold
                      "
                    >
                      <FaCalendarAlt />
                      {item.date}
                    </div>


                    {/* TITLE */}

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-gray-800
                        mt-4
                        hover:text-blue-900
                        transition
                      "
                    >
                      {item.title}
                    </h3>


                    {/* CATEGORY */}

                    <span
                      className="
                        inline-block
                        mt-4
                        bg-blue-900
                        text-white
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                      "
                    >
                      {item.category}
                    </span>

                  </div>


                  {/* DOWNLOAD BUTTON */}

                  <button
                    className="
                      bg-yellow-400
                      text-blue-950
                      px-6
                      py-3
                      rounded-xl
                      font-bold
                      flex
                      items-center
                      gap-2
                      hover:bg-blue-900
                      hover:text-white
                      transition
                      whitespace-nowrap
                    "
                  >
                    <FaDownload />
                    Download
                  </button>

                </div>

              ))

            ) : (

              /* EMPTY RESULT */

              <div
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  p-12
                  text-center
                "
              >

                <FaSearch
                  className="
                    text-5xl
                    text-gray-300
                    mx-auto
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-gray-700
                    mt-5
                  "
                >
                  No Scholarship Found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try searching with a different keyword.
                </p>

              </div>

            )}

          </div>

        </div>


        {/* =================================================
            SIDEBAR
        ================================================= */}

        <div className="space-y-8">

          {/* INFO CARD */}

          <div
            className="
              bg-gradient-to-br
              from-blue-950
              to-blue-700
              text-white
              rounded-3xl
              shadow-xl
              p-8
              relative
              overflow-hidden
            "
          >

            <FaUniversity
              className="
                text-5xl
                text-yellow-400
              "
            />

            <h2
              className="
                text-3xl
                font-bold
                mt-5
              "
            >
              Scholarship Info
            </h2>

            <p
              className="
                mt-4
                leading-8
                text-gray-200
              "
            >
              Find national and international scholarship
              opportunities, get financial support and build
              a successful career.
            </p>


            {/* Small decorative circle */}

            <div
              className="
                absolute
                -right-10
                -bottom-10
                w-32
                h-32
                rounded-full
                bg-yellow-400/10
              "
            ></div>

          </div>


          {/* RECENT SCHOLARSHIPS */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-7
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-blue-900
                mb-6
              "
            >
              Recent Scholarships
            </h2>

            <ul className="space-y-5">

              {scholarships.map((item) => (

                <li
                  key={item.id}
                  className="
                    flex
                    gap-3
                    border-b
                    pb-4
                    text-gray-700
                    hover:text-blue-700
                    cursor-pointer
                    transition
                  "
                >

                  <FaCheckCircle
                    className="
                      text-yellow-500
                      mt-1
                      flex-shrink-0
                    "
                  />

                  <span>
                    {item.title}
                  </span>

                </li>

              ))}

            </ul>

          </div>


          {/* CATEGORIES */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-7
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-blue-900
                mb-6
              "
            >
              Scholarship Categories
            </h2>

            <ul className="space-y-4">

              <li
                className="
                  flex
                  items-center
                  gap-3
                  hover:text-yellow-500
                  cursor-pointer
                  transition
                "
              >
                🌎
                <span>International Scholarship</span>
              </li>

              <li
                className="
                  flex
                  items-center
                  gap-3
                  hover:text-yellow-500
                  cursor-pointer
                  transition
                "
              >
                🎓
                <span>University Scholarship</span>
              </li>

              <li
                className="
                  flex
                  items-center
                  gap-3
                  hover:text-yellow-500
                  cursor-pointer
                  transition
                "
              >
                🔬
                <span>Research Opportunity</span>
              </li>

              <li
                className="
                  flex
                  items-center
                  gap-3
                  hover:text-yellow-500
                  cursor-pointer
                  transition
                "
              >
                ✈️
                <span>Student Exchange</span>
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}

      <section
        className="
          bg-gradient-to-r
          from-blue-950
          to-blue-700
          text-white
          py-16
          text-center
          px-6
        "
      >

        <FaGraduationCap
          className="
            text-yellow-400
            text-6xl
            mx-auto
          "
        />

        <h2
          className="
            text-3xl
            md:text-5xl
            font-black
            mt-6
          "
        >
          Your Dream Education Starts Here
        </h2>

        <p
          className="
            text-gray-200
            mt-4
            text-lg
          "
        >
          Apply for scholarships and achieve your academic goals.
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
          "
        >
          Find Scholarship
        </button>

      </section>

    </div>
  );
};

export default Scholarships;