import React from "react";

import {
  FaBalanceScale,
  FaUniversity,
  FaGavel,
  FaBook,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";

const Laws = () => {
  // ================= CATEGORY DATA =================

  const categories = [
    {
      title: "Acts",
      icon: <FaBalanceScale />,
      desc: "Official acts and legal documents approved by government.",
    },
    {
      title: "Rules",
      icon: <FaBook />,
      desc: "Institutional rules and academic regulations.",
    },
    {
      title: "Policies",
      icon: <FaGavel />,
      desc: "Policies and guidelines of the institute.",
    },
    {
      title: "Guidelines",
      icon: <FaFileAlt />,
      desc: "Official notices and implementation guidelines.",
    },
  ];

  // ================= DOCUMENT DATA =================

  const documents = [
    "CTEVT Act",
    "Academic Rules",
    "Examination Regulation",
    "Student Code of Conduct",
    "Scholarship Policy",
    "Administrative Guidelines",
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
          text-white
          text-center
          min-h-[520px]
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage: "url('/laws-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-blue-950/95
            via-blue-900/85
            to-black/70
          "
        ></div>

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            py-20
            px-6
            max-w-5xl
            mx-auto
          "
        >

          {/* Icon */}

          <div
            className="
              w-32
              h-32
              rounded-full
              bg-white
              text-blue-900
              flex
              items-center
              justify-center
              mx-auto
              text-6xl
              shadow-2xl
              border-4
              border-yellow-400
              animate-pulse
            "
          >
            <FaBalanceScale />
          </div>

          {/* Small Heading */}

          <p
            className="
              mt-8
              text-yellow-300
              uppercase
              tracking-[6px]
              font-bold
            "
          >
            Official Legal Information
          </p>

          {/* Main Heading */}

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              mt-4
              tracking-tight
            "
          >
            LAWS & REGULATIONS
          </h1>

          {/* Divider */}

          <div
            className="
              w-32
              h-1
              bg-yellow-400
              mx-auto
              mt-6
            "
          ></div>

          {/* Subtitle */}

          <p
            className="
              text-xl
              md:text-2xl
              mt-6
              font-semibold
            "
          >
            Acts • Rules • Policies • Legal Documents
          </p>

          {/* Description */}

          <p
            className="
              max-w-3xl
              mx-auto
              mt-5
              text-base
              md:text-lg
              text-gray-200
              leading-8
            "
          >
            Official legal information and important documents
            related to Rolpa Polytechnic Institute.
          </p>

          {/* Button */}

          <button
            className="
              mt-10
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
              shadow-xl
            "
          >
            Explore Documents
          </button>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION SECTION
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-20
        "
      >

        <div
          className="
            bg-white
            rounded-[35px]
            shadow-xl
            p-8
            md:p-10
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            <div
              className="
                w-24
                h-24
                bg-blue-900
                rounded-full
                text-white
                flex
                items-center
                justify-center
                text-5xl
                shadow-lg
              "
            >
              <FaUniversity />
            </div>

            <p
              className="
                text-yellow-500
                font-bold
                uppercase
                tracking-widest
                mt-8
              "
            >
              RPI Legal Information
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                text-blue-900
                mt-3
              "
            >
              Legal Information
            </h2>

            <p
              className="
                mt-5
                text-gray-600
                leading-8
                text-lg
              "
            >
              This section provides Acts, Rules, Regulations,
              Policies and other important legal documents
              related to Rolpa Polytechnic Institute.
            </p>

            <button
              className="
                mt-7
                bg-blue-900
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-yellow-400
                hover:text-blue-950
                transition
                duration-300
              "
            >
              Learn More
            </button>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <img
              src="/laws-image.jpg"
              alt="Legal information"
              className="
                w-full
                rounded-[30px]
                shadow-xl
                object-cover
                max-h-[420px]
              "
            />

            {/* Image Badge */}

            <div
              className="
                absolute
                bottom-5
                left-5
                bg-blue-950
                text-white
                px-6
                py-3
                rounded-full
                font-bold
                shadow-xl
              "
            >
              Official Documents
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DOCUMENT CATEGORIES
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >

        {/* Heading */}

        <div className="text-center mb-12">

          <p
            className="
              text-yellow-500
              font-bold
              uppercase
              tracking-widest
            "
          >
            Explore
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-blue-900
              mt-3
            "
          >
            Document Categories
          </h2>

          <p
            className="
              text-gray-600
              mt-4
              text-lg
            "
          >
            Browse different categories of official legal documents.
          </p>

        </div>

        {/* Category Cards */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {categories.map((item, index) => (

            <div
              key={index}
              className="
                group
                bg-white
                rounded-[30px]
                shadow-xl
                p-8
                hover:-translate-y-3
                hover:shadow-2xl
                transition
                duration-500
              "
            >

              {/* Icon */}

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-blue-900
                  text-yellow-400
                  flex
                  items-center
                  justify-center
                  text-4xl
                  shadow-lg
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition
                  duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3
                className="
                  text-2xl
                  font-bold
                  text-blue-900
                  mt-6
                "
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-7
                "
              >
                {item.desc}
              </p>

              {/* Button */}

              <button
                className="
                  mt-6
                  text-blue-900
                  font-bold
                  hover:text-yellow-500
                  transition
                "
              >
                View More →
              </button>

            </div>

          ))}

        </div>
      </section>

      {/* =====================================================
          FEATURED DOCUMENTS
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >

        {/* Heading */}

        <div className="text-center mb-12">

          <p
            className="
              text-yellow-500
              font-bold
              uppercase
              tracking-widest
            "
          >
            Official Resources
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-blue-900
              mt-3
            "
          >
            Featured Documents
          </h2>

          <p
            className="
              text-gray-600
              mt-4
              text-lg
            "
          >
            Important legal and institutional documents.
          </p>

        </div>

        {/* Documents Grid */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {documents.map((doc, index) => (

            <div
              key={index}
              className="
                group
                bg-white
                rounded-[30px]
                shadow-xl
                p-6
                hover:shadow-2xl
                hover:-translate-y-3
                transition
                duration-500
              "
            >

              {/* Image */}

              <div className="relative overflow-hidden rounded-2xl">

                <img
                  src="/card.png"
                  alt="Legal Document"
                  className="
                    w-full
                    h-48
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    w-10
                    h-10
                    rounded-full
                    bg-yellow-400
                    text-blue-950
                    flex
                    items-center
                    justify-center
                    font-black
                  "
                >
                  {index + 1}
                </div>

              </div>

              {/* Title */}

              <h3
                className="
                  text-xl
                  font-bold
                  text-blue-900
                  mt-5
                "
              >
                {doc}
              </h3>

              {/* Description */}

              <p
                className="
                  text-gray-600
                  mt-3
                  leading-7
                "
              >
                Official legal document of Rolpa Polytechnic
                Institute.
              </p>

              {/* Download Button */}

              <button
                className="
                  mt-6
                  w-full
                  bg-yellow-400
                  text-blue-950
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-blue-900
                  hover:text-white
                  transition
                  duration-300
                "
              >
                <FaDownload />
                Download Document
              </button>

            </div>

          ))}

        </div>
      </section>

      {/* =====================================================
          COMING SOON SECTION
      ====================================================== */}

      <section
        className="
          max-w-6xl
          mx-auto
          px-6
          pb-20
        "
      >

        <div
          className="
            bg-white
            rounded-[35px]
            shadow-2xl
            p-10
            md:p-14
            text-center
          "
        >

          {/* Icon */}

          <div
            className="
              w-28
              h-28
              bg-blue-900
              text-yellow-400
              rounded-full
              flex
              items-center
              justify-center
              mx-auto
              text-5xl
              shadow-xl
            "
          >
            <FaUniversity />
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-blue-900
              mt-8
            "
          >
            More Documents Coming Soon
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              text-gray-600
              text-lg
              leading-8
              max-w-3xl
              mx-auto
            "
          >
            More Acts, Rules, Regulations and Legal Documents
            will be uploaded soon.
          </p>

          {/* Button */}

          <button
            className="
              mt-8
              bg-blue-900
              text-white
              px-10
              py-4
              rounded-full
              font-bold
              hover:bg-yellow-400
              hover:text-blue-950
              transition
              duration-300
            "
          >
            Stay Updated
          </button>

        </div>
      </section>

      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}

      <section
        className="
          mx-6
          mb-16
          rounded-[35px]
          bg-gradient-to-r
          from-blue-950
          to-blue-700
          text-white
          text-center
          py-16
          px-6
          shadow-xl
        "
      >

        <FaBalanceScale
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
          Need Legal Information?
        </h2>

        <p
          className="
            mt-5
            text-lg
            text-gray-200
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Contact Rolpa Polytechnic Institute for official
          laws, acts, regulations and institutional information.
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
          "
        >
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default Laws;