import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUniversity,
  FaArrowRight,
  FaSearch,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaLeaf,
  FaTrophy,
} from "react-icons/fa";

const Events = () => {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      date: "२० श्रावण २०८३",
      title: "New Student Orientation Program",
      category: "Academic Event",
      icon: <FaGraduationCap />,
      description:
        "Orientation program for newly admitted Diploma IT, Agriculture and Pre-Diploma students.",
    },
    {
      id: 2,
      date: "१५ श्रावण २०८३",
      title: "Tree Plantation Program",
      category: "Social Activity",
      icon: <FaLeaf />,
      description:
        "Environmental awareness and green campus development program organized by RPI.",
    },
    {
      id: 3,
      date: "१० श्रावण २०८३",
      title: "Career Counseling Seminar",
      category: "Seminar",
      icon: <FaUsers />,
      description:
        "Career guidance and professional development seminar for final year students.",
    },
    {
      id: 4,
      date: "५ श्रावण २०८३",
      title: "Inter Department Sports Competition",
      category: "Sports",
      icon: <FaTrophy />,
      description:
        "Annual sports competition among different departments of institute.",
    },
    {
      id: 5,
      date: "२८ अषाढ २०८३",
      title: "Information Technology Workshop",
      category: "Technology",
      icon: <FaLaptopCode />,
      description:
        "Practical workshop on Web Development, Artificial Intelligence and Cyber Security.",
    },
    {
      id: 6,
      date: "२० अषाढ २०८३",
      title: "Agriculture Field Visit",
      category: "Agriculture",
      icon: <FaLeaf />,
      description:
        "Educational field visit program for Agriculture students.",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const exploreEvents = () => {
    document.getElementById("event-list")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">

      <section className="relative h-[550px] overflow-hidden">

        <img
          src="/event-banner.jpg"
          alt="RPI Events"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-yellow-500/70"></div>

        <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -top-24 -left-24"></div>

        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -bottom-24 -right-24"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
            <FaUniversity className="text-blue-950 text-6xl" />
          </div>

          <p className="mt-8 text-yellow-300 font-bold tracking-[6px] uppercase">
            RPI EVENTS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-4">
            EVENTS & ACTIVITIES
          </h1>

          <p className="text-xl md:text-2xl mt-5 font-semibold">
            Learning Beyond Classroom
          </p>

          <p className="mt-4 max-w-3xl text-gray-200">
            Rolpa Polytechnic Institute | Council for Technical Education and
            Vocational Training
          </p>

          <button
            type="button"
            onClick={exploreEvents}
            className="mt-8 bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white transition flex items-center gap-3"
          >
            Explore Events
            <FaArrowRight />
          </button>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-xl flex items-center px-6 border">

          <FaSearch className="text-blue-900 text-xl" />

          <input
            type="text"
            placeholder="Search Events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 outline-none text-lg"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
          )}

        </div>

      </section>

      <section
        id="event-list"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

          <h2 className="text-4xl font-black text-blue-950">
            Latest Events
          </h2>

          <p className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-full font-bold">
            {filteredEvents.length} Events Available
          </p>

        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                <div className="h-3 bg-gradient-to-r from-blue-950 to-yellow-400"></div>

                <div className="p-8">

                  <div className="flex justify-between items-center gap-3">

                    <div className="w-16 h-16 rounded-2xl bg-blue-950 text-yellow-400 flex items-center justify-center text-3xl group-hover:rotate-12 transition">
                      {event.icon}
                    </div>

                    <span className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-sm font-bold">
                      {event.category}
                    </span>

                  </div>

                  <div className="mt-6 flex items-center gap-3 text-blue-800 font-bold">
                    <FaCalendarAlt />
                    {event.date}
                  </div>

                  <h3 className="text-2xl font-extrabold mt-5 text-gray-800 group-hover:text-blue-900 transition">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {event.description}
                  </p>

                  <button
                    type="button"
                    className="mt-7 bg-blue-950 text-white px-7 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-yellow-400 hover:text-blue-950 transition"
                  >
                    Read More
                    <FaArrowRight />
                  </button>

                </div>

              </article>
            ))}

          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <FaSearch className="mx-auto text-5xl text-gray-300" />

            <h3 className="text-2xl font-bold text-gray-700 mt-5">
              No Events Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching with another keyword.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 bg-blue-950 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-blue-950 transition"
            >
              Clear Search
            </button>

          </div>
        )}

      </section>

      <section className="bg-blue-950 text-white py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">
            <h2 className="text-5xl font-black text-yellow-400">
              50+
            </h2>
            <p className="mt-3 text-lg">
              Annual Events
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">
            <h2 className="text-5xl font-black text-yellow-400">
              500+
            </h2>
            <p className="mt-3 text-lg">
              Student Participation
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">
            <h2 className="text-5xl font-black text-yellow-400">
              10+
            </h2>
            <p className="mt-3 text-lg">
              Workshops
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">
            <h2 className="text-5xl font-black text-yellow-400">
              100%
            </h2>
            <p className="mt-3 text-lg">
              Student Engagement
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px]">

          <img
            src="/student-activities.jpg.jpeg"
            alt="Student Activities"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-blue-950/75"></div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

            <h2 className="text-4xl md:text-5xl font-black">
              Building Future Through Activities
            </h2>

            <p className="mt-5 text-lg md:text-xl max-w-3xl text-gray-200">
              At Rolpa Polytechnic Institute, students learn beyond classrooms
              through workshops, competitions, field visits and social activities.
            </p>

            <button
              type="button"
              className="mt-8 bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-bold hover:bg-white transition"
            >
              Join Our Activities
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Events;