import React, { useState } from "react";

import {
  FaBalanceScale,
  FaSearch,
  FaDownload,
  FaFileAlt,
  FaArrowRight,
  FaUniversity,
  FaShieldAlt,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const Act = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // ================= DOCUMENT DATA =================

  const documents = [
    {
      id: 1,
      title: "Rolpa Polytechnic Institute Act 2074",
      type: "Act",
      icon: <FaBalanceScale />,
    },
    {
      id: 2,
      title: "Academic Calendar 2083",
      type: "Calendar",
      icon: <FaBookOpen />,
    },
    {
      id: 3,
      title: "Institute Property Management Report 2082",
      type: "Report",
      icon: <FaFileAlt />,
    },
    {
      id: 4,
      title: "Affiliation Regulation 2083",
      type: "Regulation",
      icon: <FaShieldAlt />,
    },
    {
      id: 5,
      title: "Financial Administration Guideline",
      type: "Guideline",
      icon: <FaFileAlt />,
    },
    {
      id: 6,
      title: "Student Handbook 2083",
      type: "Handbook",
      icon: <FaBookOpen />,
    },
    {
      id: 7,
      title: "Annual Report 2082",
      type: "Report",
      icon: <FaAward />,
    },
    {
      id: 8,
      title: "Academic Rules and Regulations",
      type: "Rules",
      icon: <FaBalanceScale />,
    },
    {
      id: 9,
      title: "Vision 2035 Strategic Plan",
      type: "Strategic Plan",
      icon: <FaUniversity />,
    },
    {
      id: 10,
      title: "Examination Regulation 2083",
      type: "Regulation",
      icon: <FaShieldAlt />,
    },
  ];

  // ================= FILTER =================

  const filteredDocuments = documents.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.type === category;

    return matchesSearch && matchesCategory;
  });

  // ================= CATEGORIES =================

  const categories = [
    "All",
    "Act",
    "Rules",
    "Regulation",
    "Report",
    "Guideline",
    "Calendar",
    "Handbook",
  ];

  // ================= DOWNLOAD =================

  const handleDownload = (title) => {
    alert(`Download option for "${title}" will be available soon.`);
  };

  // ================= JSX =================

  return (
    <div className="bg-gray-100 min-h-screen pt-24">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          mx-4
          md:mx-6
          h-[500px]
          md:h-[520px]
          rounded-[35px]
          md:rounded-[40px]
          overflow-hidden
          flex
          items-center
          justify-center
          shadow-2xl
        "
        style={{
          backgroundImage: "url('/act-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-950/95
            via-blue-900/80
            to-yellow-500/70
          "
        ></div>

        {/* Floating Shape */}

        <div
          className="
            absolute
            w-72
            h-72
            bg-yellow-400/20
            rounded-full
            blur-3xl
            top-10
            left-10
          "
        ></div>

        <div
          className="
            absolute
            w-96
            h-96
            bg-blue-400/20
            rounded-full
            blur-3xl
            bottom-0
            right-0
          "
        ></div>

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            text-center
            text-white
            px-5
            md:px-6
            max-w-5xl
          "
        >

          {/* Icon */}

          <div
            className="
              mx-auto
              w-24
              h-24
              md:w-32
              md:h-32
              rounded-full
              bg-white
              text-blue-900
              flex
              items-center
              justify-center
              text-5xl
              md:text-7xl
              shadow-2xl
              animate-bounce
            "
          >
            <FaBalanceScale />
          </div>

          {/* Small Heading */}

          <p
            className="
              mt-7
              md:mt-8
              text-yellow-300
              font-bold
              tracking-[4px]
              md:tracking-[6px]
              uppercase
              text-sm
              md:text-base
            "
          >
            Official Documents
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
            ACT & REGULATIONS
          </h1>

          {/* Description */}

          <p
            className="
              text-lg
              md:text-2xl
              mt-5
              font-semibold
            "
          >
            Rules • Acts • Guidelines • Policies
          </p>

          <p
            className="
              mt-4
              text-gray-200
              text-base
              md:text-lg
            "
          >
            Rolpa Polytechnic Institute | CTEVT Nepal
          </p>

          {/* Hero Button */}

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("documents")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="
              mt-8
              px-7
              md:px-10
              py-3
              md:py-4
              bg-yellow-400
              text-blue-950
              rounded-full
              font-bold
              text-base
              md:text-lg
              hover:bg-white
              transition
              shadow-xl
              flex
              items-center
              gap-3
              mx-auto
            "
          >
            Explore Documents

            <FaArrowRight />
          </button>

        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section
        className="
          max-w-6xl
          mx-auto
          px-5
          md:px-6
          py-12
          md:py-14
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
          md:gap-6
        "
      >

        {[
          ["10+", "Documents"],
          ["5+", "Categories"],
          ["100%", "Official"],
          ["CTEVT", "Approved"],
        ].map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-6
              md:p-8
              text-center
              hover:-translate-y-3
              hover:shadow-2xl
              transition
              duration-300
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
              {item[0]}
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                font-semibold
                text-sm
                md:text-base
              "
            >
              {item[1]}
            </p>

          </div>
        ))}

      </section>

      {/* =====================================================
          MAIN DOCUMENT SECTION
      ====================================================== */}

      <section
        id="documents"
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-6
          pb-20
        "
      >

        <div
          className="
            bg-white
            rounded-[30px]
            md:rounded-[35px]
            shadow-2xl
            p-6
            md:p-12
          "
        >

          {/* Header */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-5
              mb-10
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  text-blue-950
                "
              >
                Official Documents
              </h2>

              <p
                className="
                  text-gray-500
                  mt-3
                "
              >
                Download important acts, rules and regulations.
              </p>

            </div>

            <div
              className="
                bg-yellow-400
                text-blue-950
                px-6
                py-3
                rounded-full
                font-bold
              "
            >
              {filteredDocuments.length} Documents
            </div>

          </div>

          {/* =====================================================
              SEARCH + FILTER
          ====================================================== */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
              md:gap-6
              mb-10
            "
          >

            {/* Search */}

            <div
              className="
                flex
                items-center
                bg-gray-100
                rounded-2xl
                px-5
                border
                border-transparent
                focus-within:border-blue-900
                transition
              "
            >

              <FaSearch
                className="
                  text-blue-900
                  text-xl
                  flex-shrink-0
                "
              />

              <input
                type="text"
                placeholder="Search document..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  bg-transparent
                  outline-none
                  p-5
                  text-gray-700
                "
              />

            </div>

            {/* Select */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                rounded-2xl
                border
                px-6
                p-5
                outline-none
                font-semibold
                text-gray-700
                bg-white
                focus:border-blue-900
                transition
              "
            >

              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}

            </select>

          </div>

          {/* =====================================================
              CATEGORY BUTTONS
          ====================================================== */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-10
            "
          >

            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`
                  px-5
                  md:px-6
                  py-2.5
                  md:py-3
                  rounded-full
                  font-bold
                  transition
                  duration-300

                  ${
                    category === cat
                      ? "bg-blue-950 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-blue-950"
                  }
                `}
              >
                {cat}
              </button>
            ))}

          </div>

          {/* =====================================================
              DOCUMENT GRID
          ====================================================== */}

          {filteredDocuments.length === 0 ? (

            <div
              className="
                text-center
                py-20
                text-gray-500
                text-xl
              "
            >

              <FaFileAlt
                className="
                  text-5xl
                  mx-auto
                  mb-5
                  text-gray-300
                "
              />

              No Document Found

            </div>

          ) : (

            <div
              className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-7
                md:gap-8
              "
            >

              {filteredDocuments.map((item) => (

                <div
                  key={item.id}
                  className="
                    group
                    bg-gradient-to-br
                    from-white
                    to-gray-50
                    rounded-[30px]
                    p-6
                    md:p-7
                    shadow-lg
                    border
                    border-gray-100
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition
                    duration-500
                    relative
                    overflow-hidden
                  "
                >

                  {/* Background Effect */}

                  <div
                    className="
                      absolute
                      w-32
                      h-32
                      bg-yellow-400/20
                      rounded-full
                      blur-2xl
                      -top-10
                      -right-10
                      group-hover:scale-150
                      transition
                      duration-500
                    "
                  ></div>

                  <div
                    className="
                      relative
                      z-10
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        w-20
                        h-20
                        rounded-2xl
                        bg-blue-950
                        text-yellow-400
                        flex
                        items-center
                        justify-center
                        text-4xl
                        shadow-lg
                        mb-6
                        group-hover:rotate-6
                        transition
                        duration-300
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Category */}

                    <span
                      className="
                        inline-block
                        bg-yellow-400
                        text-blue-950
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-bold
                      "
                    >
                      {item.type}
                    </span>

                    {/* Title */}

                    <h3
                      className="
                        text-xl
                        font-bold
                        mt-5
                        text-gray-800
                        group-hover:text-blue-900
                        transition
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        text-gray-500
                        mt-3
                        leading-6
                      "
                    >
                      Official document issued by Rolpa Polytechnic
                      Institute.
                    </p>

                    {/* Download Button */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDownload(item.title)
                      }
                      className="
                        mt-6
                        w-full
                        bg-blue-950
                        text-white
                        py-4
                        rounded-xl
                        font-bold
                        flex
                        justify-center
                        items-center
                        gap-3
                        hover:bg-yellow-400
                        hover:text-blue-950
                        transition
                        duration-300
                      "
                    >
                      <FaDownload />

                      Download Document
                    </button>

                  </div>
                </div>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}

      <section
        className="
          bg-blue-950
          text-white
          py-16
          md:py-20
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            grid
            md:grid-cols-3
            gap-12
          "
        >

          {/* CTEVT */}

          <div className="text-center">

            <FaUniversity
              className="
                text-yellow-400
                text-5xl
                mx-auto
              "
            />

            <h3
              className="
                text-2xl
                font-bold
                mt-5
              "
            >
              CTEVT Affiliated
            </h3>

            <p
              className="
                text-gray-300
                mt-3
              "
            >
              Approved technical education institution.
            </p>

          </div>

          {/* Official */}

          <div className="text-center">

            <FaShieldAlt
              className="
                text-yellow-400
                text-5xl
                mx-auto
              "
            />

            <h3
              className="
                text-2xl
                font-bold
                mt-5
              "
            >
              Official Documents
            </h3>

            <p
              className="
                text-gray-300
                mt-3
              "
            >
              Verified acts and regulations.
            </p>

          </div>

          {/* Quality */}

          <div className="text-center">

            <FaAward
              className="
                text-yellow-400
                text-5xl
                mx-auto
              "
            />

            <h3
              className="
                text-2xl
                font-bold
                mt-5
              "
            >
              Quality Education
            </h3>

            <p
              className="
                text-gray-300
                mt-3
              "
            >
              Building skilled manpower for Nepal.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Act;