import React, { useState } from "react";

import {
  FaDownload,
  FaSearch,
  FaFilePdf,
  FaFileAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaFolderOpen,
  FaUniversity
} from "react-icons/fa";

const Downloads = () => {
  const [search, setSearch] = useState("");

  const downloadData = [
    {
      id: 1,
      title: "Short term training institutions updated upto Ashar 2082",
      date: "2026-05-31",
      category: "Training",
      type: "PDF"
    },
    {
      id: 2,
      title: "परिषद् सम्बन्धी विनियमावलीहरु",
      date: "2026-05-11",
      category: "CTEVT Document",
      type: "PDF"
    },
    {
      id: 3,
      title: "Minimum Requirement for Technical Schools",
      date: "2025-11-07",
      category: "Guideline",
      type: "PDF"
    },
    {
      id: 4,
      title: "Program Implementation Manual (PIM)",
      date: "2024-11-12",
      category: "Manual",
      type: "PDF"
    },
    {
      id: 5,
      title: "CTEVT Council Rules and Directives",
      date: "2024-08-19",
      category: "Rules",
      type: "PDF"
    },
    {
      id: 6,
      title: "Personal Seat Roll and Property Form",
      date: "2024-06-18",
      category: "Form",
      type: "PDF"
    },
    {
      id: 7,
      title: "Right to Information Act Details",
      date: "2024-05-17",
      category: "Information",
      type: "PDF"
    },
    {
      id: 8,
      title: "List of Curricula Updated Kartik 2079",
      date: "2022-11-23",
      category: "Curriculum",
      type: "PDF"
    },
    {
      id: 9,
      title: "Vocational Training Providers Profile",
      date: "2022-06-20",
      category: "Training",
      type: "PDF"
    }
  ];

  const filteredDownloads = downloadData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">

      <section className="relative mx-6 h-[450px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center">

        <img
          src="/download-banner.jpg"
          alt="Downloads"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-800/80 to-yellow-500/70"></div>

        <div className="relative z-10 text-white">

          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
            <FaDownload className="text-6xl text-blue-900" />
          </div>

          <h1 className="text-6xl font-black mt-8 tracking-widest">
            DOWNLOADS
          </h1>

          <p className="text-2xl mt-5 font-semibold">
            Official Documents & Resources
          </p>

          <p className="mt-3 text-lg text-gray-200">
            Rolpa Polytechnic Institute | CTEVT Nepal
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

          <FaFolderOpen className="text-5xl text-yellow-500 mx-auto" />

          <h2 className="text-4xl font-bold text-blue-900 mt-4">
            {downloadData.length}+
          </h2>

          <p className="text-gray-600">
            Available Documents
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

          <FaUniversity className="text-5xl text-blue-900 mx-auto" />

          <h2 className="text-4xl font-bold text-blue-900 mt-4">
            CTEVT
          </h2>

          <p className="text-gray-600">
            Official Resources
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

          <FaCalendarAlt className="text-5xl text-yellow-500 mx-auto" />

          <h2 className="text-4xl font-bold text-blue-900 mt-4">
            2026
          </h2>

          <p className="text-gray-600">
            Latest Update
          </p>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-full shadow-2xl flex items-center px-8">

          <FaSearch className="text-blue-900 text-xl" />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-6 outline-none text-lg"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-gray-400 hover:text-blue-900 font-bold"
            >
              Clear
            </button>
          )}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

          <h2 className="text-4xl font-black text-blue-900">
            Available Documents
          </h2>

          <p className="text-gray-600 font-semibold">
            Showing {filteredDownloads.length} Documents
          </p>

        </div>

        {filteredDownloads.length > 0 ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredDownloads.map((item) => (

              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition duration-500"
              >

                <div className="h-3 bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-400"></div>

                <div className="p-8">

                  <div className="flex justify-between items-center">

                    <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center group-hover:scale-110 transition">

                      <FaFilePdf className="text-red-600 text-4xl" />

                    </div>

                    <span className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-sm font-bold">
                      {item.category}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-7 leading-8 group-hover:text-blue-900 transition">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-5 text-gray-500">
                    <FaCalendarAlt />
                    {item.date}
                  </div>

                  <div className="mt-7 flex gap-3">

                    <button
                      type="button"
                      className="flex-1 bg-blue-950 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-yellow-400 hover:text-blue-950 transition"
                    >
                      Download
                      <FaDownload />
                    </button>

                    <button
                      type="button"
                      className="w-14 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                    >
                      <FaArrowRight />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <FaSearch className="text-5xl text-gray-300 mx-auto" />

            <h3 className="text-2xl font-bold text-gray-700 mt-5">
              No Documents Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching with another keyword.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-6 bg-blue-950 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-blue-950 transition"
            >
              Clear Search
            </button>

          </div>

        )}

      </section>

      <section className="bg-blue-950 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-white text-center mb-10">
            Quick Resources
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer">

              <FaFileAlt className="text-4xl mb-5" />

              <h3 className="text-xl font-bold">
                CTEVT Forms
              </h3>

              <p className="mt-3 text-sm">
                Official forms and applications
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer">

              <FaFilePdf className="text-4xl mb-5" />

              <h3 className="text-xl font-bold">
                Curriculum
              </h3>

              <p className="mt-3 text-sm">
                Diploma course syllabus
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer">

              <FaDownload className="text-4xl mb-5" />

              <h3 className="text-xl font-bold">
                Notice PDF
              </h3>

              <p className="mt-3 text-sm">
                Latest institute notices
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer">

              <FaUniversity className="text-4xl mb-5" />

              <h3 className="text-xl font-bold">
                CTEVT Portal
              </h3>

              <p className="mt-3 text-sm">
                Official information
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Downloads;