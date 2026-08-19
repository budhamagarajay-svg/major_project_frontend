import React, { useState } from "react";

import {
  FaImages,
  FaSearch,
  FaArrowRight,
  FaUniversity,
  FaCamera,
  FaUsers,
  FaGraduationCap
} from "react-icons/fa";


const Gallery = () => {


  const [search, setSearch] = useState("");


  const galleryImages = [

    {
      image: "college.png.jpeg",
      title: "Beautiful College Campus",
      category: "Campus Life"
    },

    {
      image: "computer.png.jpeg",
      title: "Modern Computer Laboratory",
      category: "Technology"
    },

    {
      image: "agriculture.png.jpeg",
      title: "Agriculture Practical Farm",
      category: "Agriculture"
    },

    {
      image: "student.png.jpeg",
      title: "Student Learning Activities",
      category: "Students"
    },

    {
      image: "sports.png.jpeg",
      title: "Annual Sports Program",
      category: "Sports"
    },

    {
      image: "graduation.png.jpeg",
      title: "Graduation Ceremony",
      category: "Events"
    }

  ];


  const filteredGallery = galleryImages.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="bg-gray-100 min-h-screen pt-[120px]">


      {/* ================= HERO SECTION ================= */}

      <section
        className="
        mx-6
        h-[520px]
        rounded-[40px]
        overflow-hidden
        relative
        shadow-2xl
        "
      >

        <img
          src="/galle.png.jpeg"
          alt="RPI Gallery"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />


        {/* DARK OVERLAY */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-950/95
          via-blue-800/80
          to-yellow-500/70
          "
        >
        </div>


        {/* HERO CONTENT */}

        <div
          className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-center
          items-center
          text-center
          text-white
          px-5
          "
        >


          {/* ICON */}

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
            text-7xl
            shadow-2xl
            animate-pulse
            "
          >

            <FaImages />

          </div>


          <p
            className="
            mt-8
            uppercase
            tracking-[8px]
            text-yellow-300
            font-bold
            "
          >

            RPI Memories

          </p>


          <h1
            className="
            text-6xl
            md:text-7xl
            font-black
            mt-4
            drop-shadow-xl
            "
          >

            GALLERY

          </h1>


          <p
            className="
            text-2xl
            mt-5
            font-semibold
            "
          >

            Capturing Excellence, Innovation & Success

          </p>


          <p
            className="
            mt-3
            text-gray-200
            text-lg
            "
          >

            Rolpa Polytechnic Institute | CTEVT Nepal

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
            flex
            items-center
            gap-3
            hover:bg-white
            transition
            duration-300
            shadow-xl
            "
          >

            Explore Gallery

            <FaArrowRight />

          </button>


        </div>

      </section>


      {/* ================= STATISTICS ================= */}

      <section
        className="
        max-w-6xl
        mx-auto
        px-6
        py-14
        grid
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
          transition
          duration-300
          "
        >

          <FaCamera
            className="
            text-5xl
            text-yellow-500
            mx-auto
            "
          />


          <h2
            className="
            text-4xl
            font-bold
            text-blue-900
            mt-4
            "
          >

            500+

          </h2>


          <p className="text-gray-600">

            Memories Captured

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
          transition
          duration-300
          "
        >

          <FaUsers
            className="
            text-5xl
            text-yellow-500
            mx-auto
            "
          />


          <h2
            className="
            text-4xl
            font-bold
            text-blue-900
            mt-4
            "
          >

            1000+

          </h2>


          <p className="text-gray-600">

            Student Activities

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
          transition
          duration-300
          "
        >

          <FaGraduationCap
            className="
            text-5xl
            text-yellow-500
            mx-auto
            "
          />


          <h2
            className="
            text-4xl
            font-bold
            text-blue-900
            mt-4
            "
          >

            10+

          </h2>


          <p className="text-gray-600">

            Years Excellence

          </p>

        </div>


      </section>


      {/* ================= SEARCH SECTION ================= */}

      <section
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          bg-white
          rounded-2xl
          shadow-xl
          flex
          items-center
          px-6
          "
        >

          <FaSearch
            className="
            text-blue-900
            text-xl
            "
          />


          <input
            type="text"
            placeholder="Search Gallery Images..."
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

      </section>


      {/* ================= GALLERY SECTION ================= */}

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >


        {/* SECTION HEADING */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-10
          flex-wrap
          gap-5
          "
        >

          <div>

            <h2
              className="
              text-5xl
              font-black
              text-blue-900
              "
            >

              Our Gallery

            </h2>


            <p
              className="
              text-gray-500
              text-lg
              mt-3
              "
            >

              Life at Rolpa Polytechnic Institute

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

            {filteredGallery.length} Images

          </div>

        </div>


        {/* GALLERY GRID */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >


          {filteredGallery.map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[35px]
              overflow-hidden
              shadow-xl
              group
              hover:-translate-y-4
              hover:shadow-2xl
              transition
              duration-500
              "
            >


              {/* IMAGE */}

              <div
                className="
                relative
                overflow-hidden
                h-72
                "
              >

                <img
                  src={"/" + item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-125
                  transition
                  duration-700
                  "
                />


                {/* IMAGE OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-blue-950/90
                  via-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  flex
                  items-end
                  justify-center
                  pb-8
                  "
                >

                  <button
                    className="
                    bg-yellow-400
                    text-blue-950
                    px-8
                    py-3
                    rounded-full
                    font-bold
                    flex
                    items-center
                    gap-3
                    shadow-xl
                    "
                  >

                    View Image

                    <FaArrowRight />

                  </button>

                </div>

              </div>


              {/* CARD CONTENT */}

              <div className="p-7">


                <span
                  className="
                  inline-block
                  bg-blue-900
                  text-white
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                  "
                >

                  {item.category}

                </span>


                <h3
                  className="
                  text-2xl
                  font-bold
                  text-gray-800
                  mt-5
                  group-hover:text-blue-900
                  transition
                  "
                >

                  {item.title}

                </h3>


                <p
                  className="
                  text-gray-500
                  mt-3
                  leading-7
                  "
                >

                  Beautiful moments and activities of
                  Rolpa Polytechnic Institute.

                </p>


                <button
                  className="
                  mt-5
                  text-blue-900
                  font-bold
                  flex
                  items-center
                  gap-2
                  hover:text-yellow-500
                  transition
                  "
                >

                  View Details

                  <FaArrowRight />

                </button>


              </div>

            </div>

          ))}


        </div>


        {/* NO RESULT MESSAGE */}

        {filteredGallery.length === 0 && (

          <div
            className="
            bg-white
            rounded-3xl
            shadow-xl
            p-12
            text-center
            mt-8
            "
          >

            <FaImages
              className="
              text-6xl
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

              No Images Found

            </h3>


            <p className="text-gray-500 mt-2">

              Try searching with another keyword.

            </p>

          </div>

        )}

      </section>


      {/* ================= FEATURE SECTION ================= */}

      <section
        className="
        bg-gradient-to-r
        from-blue-950
        to-blue-700
        text-white
        py-16
        "
      >

        <div
          className="
          max-w-6xl
          mx-auto
          px-6
          text-center
          "
        >

          <FaUniversity
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

            Creating Skilled Future Together

          </h2>


          <p
            className="
            text-gray-200
            mt-5
            text-lg
            max-w-3xl
            mx-auto
            leading-8
            "
          >

            Every picture represents our commitment towards
            quality technical education, innovation and
            student success.

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
            transition
            duration-300
            "
          >

            Visit Our Campus

          </button>


        </div>

      </section>


      {/* FOOTER REMOVED */}

    </div>

  );

};


export default Gallery;