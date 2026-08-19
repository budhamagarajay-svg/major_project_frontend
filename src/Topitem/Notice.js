import React, { useState } from "react";
import {
  FaSearch,
  FaBullhorn,
  FaCalendarAlt,
  FaArrowRight,
  FaFilePdf,
  FaDownload,
  FaLink,
  FaUniversity,
  FaBell,
  FaChartBar,
} from "react-icons/fa";

const Notice = () => {
  const [search, setSearch] = useState("");

  const notices = [
    {
      day: "17",
      month: "July 2026",
      category: "General Notice",
      title: "मौजुदा सूची दर्ता गर्ने सम्बन्धी सूचना",
      description:
        "रोल्पा पोलिटेक्निक इन्स्टिच्युटमा मौजुदा सूची दर्ता गर्ने सम्बन्धी महत्वपूर्ण सूचना।",
      date: "2026-07-17",
    },
    {
      day: "15",
      month: "July 2026",
      category: "Academic",
      title: "स्वतः प्रकाशन (Proactive Disclosure) २०८३ बैशाख - असार",
      description:
        "संस्थाको सार्वजनिक सूचना तथा पारदर्शिता सम्बन्धी स्वतः प्रकाशन विवरण।",
      date: "2026-07-15",
    },
    {
      day: "15",
      month: "July 2026",
      category: "Academic",
      title: "Annual Academic Plan (AAP)-2083/084",
      description:
        "शैक्षिक वर्ष २०८३/०८४ को वार्षिक शैक्षिक योजना।",
      date: "2026-07-15",
    },
    {
      day: "09",
      month: "July 2026",
      category: "Admission",
      title: "भर्ना फारम खुलाइएको सम्बन्धमा",
      description:
        "डिप्लोमा तहका विभिन्न कार्यक्रमहरुमा नयाँ भर्ना सम्बन्धी सूचना।",
      date: "2026-07-09",
    },
    {
      day: "02",
      month: "July 2026",
      category: "General",
      title: "विज्ञहरुको सूची (Roster) माग गरिएको सम्बन्धी सूचना",
      description:
        "विभिन्न विषयका विज्ञहरुको सूची माग गरिएको सूचना।",
      date: "2026-07-02",
    },
    {
      day: "30",
      month: "June 2026",
      category: "Exam",
      title: "परीक्षा आवेदन फाराम स्थगन गरिएको सूचना",
      description:
        "परीक्षा आवेदन सम्बन्धी संशोधित सूचना।",
      date: "2026-06-30",
    },
  ];

  const filteredNotice = notices.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-28">

      <section className="relative h-[520px] overflow-hidden flex items-center justify-center">
        <img
          src="/notice-banner.jpg"
          alt="Notice"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-yellow-600/70"></div>

        <div className="absolute w-[350px] h-[350px] bg-yellow-400/20 rounded-full blur-3xl top-10 left-10"></div>

        <div className="absolute w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl bottom-0 right-0"></div>

        <div className="relative z-10 text-center text-white px-4">

          <div className="mx-auto w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center shadow-2xl">
            <FaBullhorn className="text-6xl text-blue-950" />
          </div>

          <p className="mt-8 uppercase tracking-[8px] font-bold text-yellow-300">
            Official Announcement
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">
            NOTICE BOARD
          </h1>

          <p className="text-xl md:text-2xl mt-5 font-semibold">
            Rolpa Polytechnic Institute
          </p>

          <p className="mt-4 text-gray-200 text-lg">
            Latest Notices • Announcements • Downloads
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("notice-list")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-8 bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white transition duration-300 flex gap-3 items-center mx-auto"
          >
            View Notices
            <FaArrowRight />
          </button>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="flex items-center gap-4 border rounded-2xl px-6 py-4 shadow-inner">

            <FaSearch className="text-blue-900 text-2xl" />

            <input
              type="text"
              placeholder="Search latest notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-lg"
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

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-gradient-to-r from-blue-950 to-blue-700 text-white rounded-2xl p-6 shadow-xl">
              <FaBell className="text-4xl text-yellow-400" />

              <h2 className="text-4xl font-bold mt-4">
                {notices.length}
              </h2>

              <p>Total Notices</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-950 rounded-2xl p-6 shadow-xl">
              <FaUniversity className="text-4xl" />

              <h2 className="text-4xl font-bold mt-4">
                2+
              </h2>

              <p>Academic Notices</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-6 shadow-xl">
              <FaChartBar className="text-4xl" />

              <h2 className="text-4xl font-bold mt-4">
                1+
              </h2>

              <p>Admission Notices</p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-2xl p-6 shadow-xl">
              <FaDownload className="text-4xl" />

              <h2 className="text-4xl font-bold mt-4">
                PDF
              </h2>

              <p>Download Center</p>
            </div>

          </div>

        </div>

      </section>

      <section
        id="notice-list"
        className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-3 gap-10"
      >

        <div className="lg:col-span-2">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black text-blue-950">
              Latest Notices
            </h2>

            <span className="text-gray-500">
              {filteredNotice.length} notices
            </span>
          </div>

          <div className="space-y-8">

            {filteredNotice.length > 0 ? (
              filteredNotice.map((notice) => (
                <div
                  key={notice.date + notice.title}
                  className="group bg-white rounded-3xl shadow-xl p-6 md:p-8 border-l-[10px] border-yellow-400 hover:-translate-y-2 hover:shadow-2xl transition duration-500 relative overflow-hidden"
                >

                  <div className="absolute right-0 top-0 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>

                  <div className="flex flex-col md:flex-row gap-6 relative z-10">

                    <div className="bg-blue-950 text-white w-full md:w-32 h-32 rounded-2xl flex flex-col items-center justify-center shadow-lg shrink-0">

                      <h1 className="text-5xl font-black">
                        {notice.day}
                      </h1>

                      <p className="text-sm">
                        {notice.month}
                      </p>

                    </div>

                    <div className="flex-1">

                      <span className="inline-block bg-yellow-400 text-blue-950 px-5 py-2 rounded-full font-bold text-sm">
                        {notice.category}
                      </span>

                      <h2 className="text-xl md:text-2xl font-bold mt-5 text-gray-800 group-hover:text-blue-900 transition">
                        {notice.title}
                      </h2>

                      <p className="text-gray-600 leading-7 mt-4">
                        {notice.description}
                      </p>

                      <div className="flex items-center gap-2 text-gray-500 mt-5">
                        <FaCalendarAlt />
                        {notice.date}
                      </div>

                      <div className="flex gap-4 mt-6 flex-wrap">

                        <button
                          type="button"
                          className="bg-blue-950 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-yellow-400 hover:text-blue-950 transition"
                        >
                          Read More
                          <FaArrowRight />
                        </button>

                        <button
                          type="button"
                          className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-red-700 transition"
                        >
                          PDF
                          <FaFilePdf />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>
              ))
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

                <FaSearch className="mx-auto text-5xl text-gray-300" />

                <h3 className="text-2xl font-bold text-gray-700 mt-5">
                  No Notice Found
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

          </div>

        </div>

        <div className="space-y-8">

          <div className="bg-white rounded-3xl shadow-xl p-7 border-t-8 border-yellow-400">

            <h2 className="text-3xl font-black text-blue-950 mb-6">
              Recent Notices
            </h2>

            {notices.slice(0, 5).map((item) => (
              <div
                key={item.date + item.title}
                className="group border-b py-5 cursor-pointer hover:translate-x-2 transition duration-300"
              >

                <div className="flex items-start gap-3">

                  <FaBell className="text-yellow-500 mt-1 shrink-0" />

                  <p className="font-semibold text-gray-800 group-hover:text-blue-900">
                    {item.title}
                  </p>

                </div>

                <p className="text-sm text-gray-500 mt-2 ml-7">
                  {item.date}
                </p>

              </div>
            ))}

          </div>

          <div className="bg-gradient-to-br from-blue-950 to-blue-700 rounded-3xl shadow-xl p-7 text-white">

            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <FaLink />
              Important Links
            </h2>

            <ul className="space-y-5">

              <li className="bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer flex items-center gap-3">
                <FaDownload />
                CTEVT Notices
              </li>

              <li className="bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer flex items-center gap-3">
                <FaDownload />
                Exam Section
              </li>

              <li className="bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer flex items-center gap-3">
                <FaDownload />
                Admission Form
              </li>

              <li className="bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-950 transition cursor-pointer flex items-center gap-3">
                <FaDownload />
                Download Center
              </li>

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-7">

            <h2 className="text-3xl font-black text-blue-950 mb-6">
              Notice Categories
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:bg-blue-950 hover:text-white transition cursor-pointer">
                <span>Admission Notice</span>
                <span className="bg-yellow-400 text-blue-950 px-3 rounded-full font-bold">
                  01
                </span>
              </div>

              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:bg-blue-950 hover:text-white transition cursor-pointer">
                <span>Academic Notice</span>
                <span className="bg-yellow-400 text-blue-950 px-3 rounded-full font-bold">
                  02
                </span>
              </div>

              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:bg-blue-950 hover:text-white transition cursor-pointer">
                <span>Exam Notice</span>
                <span className="bg-yellow-400 text-blue-950 px-3 rounded-full font-bold">
                  03
                </span>
              </div>

              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:bg-blue-950 hover:text-white transition cursor-pointer">
                <span>General Notice</span>
                <span className="bg-yellow-400 text-blue-950 px-3 rounded-full font-bold">
                  04
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Notice;