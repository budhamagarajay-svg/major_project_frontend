import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaCalendarAlt,
  FaHome,
  FaStar,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const topItems = [
    { name: "NEWS", path: "/news" },
    { name: "NOTICE", path: "/notice" },
    { name: "EVENTS", path: "/events" },
  ];

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "About Us",
      submenu: [
        { name: "OVERVIEW", path: "/overview" },
        { name: "PRINCIPAL MESSAGE", path: "/principal-message" },
        { name: "VISION & MISSION", path: "/vision-mission" },
        { name: "HISTORY", path: "/history" },
        { name: "FACULTY & STAFF", path: "/faculty-staff" },
      ],
    },
    {
      name: "Programs",
      submenu: [
        { name: "DIPLOMA IN AGRICULTURE", path: "/diploma-in-agriculture" },
        {
          name: "DIPLOMA IN INFORMATION TECHNOLOGY",
          path: "/diploma-in-information-technology",
        },
        { name: "DIPLOMA IN VETERINARY", path: "/diploma-in-veterinary" },
        { name: "PRE-DIPLOMA PROGRAM", path: "/pre-diploma-program" },
      ],
    },
    {
      name: "Academics",
      submenu: [
        { name: "AGRICULTURE VETERINARY", path: "/agriculture-veterinary" },
        { name: "INFORMATION TECHNOLOGY", path: "/information-technology" },
        { name: "ACADEMIC CALENDAR", path: "/academic-calendar" },
        { name: "CLASS ROUTINE", path: "/class-routine" },
        { name: "EXAMINATION", path: "/examination" },
        { name: "RESULTS", path: "/results" },
      ],
    },
    {
      name: "Admission",
      submenu: [
        { name: "ADMISSION NOTICE", path: "/admission-notice" },
        { name: "ADMISSION PROCESS", path: "/admission-process" },
        { name: "ELIGIBILITY CRITERIA", path: "/eligibility-criteria" },
        { name: "FEE STRUCTURE", path: "/fee-structure" },
        { name: "SCHOLARSHIP", path: "/scholarship" },
        { name: "APPLY ONLINE", path: "/apply-online" },
      ],
    },
    {
      name: "Departments",
      submenu: [
        {
          name: "AGRICULTURE DEPARTMENT",
          path: "/agriculture-department",
        },
        {
          name: "VETERINARY DEPARTMENT",
          path: "/veterinary-department",
        },
        {
          name: "INFORMATION TECHNOLOGY DEPARTMENT",
          path: "/information-technology-department",
        },
      ],
    },
    {
      name: "Facilities",
      submenu: [
        { name: "LIBRARY", path: "/library" },
        { name: "COMPUTER LAB", path: "/computer-lab" },
        { name: "AGRICULTURE FARM", path: "/agriculture-farm" },
        { name: "VETERINARY LAB", path: "/veterinary-lab" },
        { name: "HOSTEL", path: "/hostel" },
        { name: "SPORTS", path: "/sports" },
        { name: "CANTEEN", path: "/canteen" },
      ],
    },
    {
      name: "Students",
      submenu: [
        { name: "STUDENTS PORTAL", path: "/students-portal" },
        { name: "NOTICES", path: "/student-notices" },
        { name: "DOWNLOADS", path: "/downloads" },
        { name: "LIBRARY", path: "/library" },
      ],
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Signup",
      path: "/signup",
    },
  ];

  const toggleMenu = (menuName) => {
    setOpenMenu((previous) =>
      previous === menuName ? null : menuName
    );
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[9999]">
        <div className="bg-black text-white">
          <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-5 text-sm font-semibold">
              <img
                src="/ctevt-logo.png"
                alt="CTEVT Logo"
                className="h-7 w-7 rounded-full bg-white p-1 object-contain"
              />

              {topItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("resources")}
                  className="flex h-11 items-center gap-1 bg-transparent px-0 text-sm font-semibold text-white transition-colors hover:text-yellow-400"
                >
                  RESOURCES
                  <FaChevronDown className="text-xs" />
                </button>

                {openMenu === "resources" && (
                  <div className="absolute left-0 top-10 z-[99999] min-w-[170px] rounded-lg bg-white p-2 shadow-2xl">
                    <Link
                      to="/downloads"
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-black"
                    >
                      DOWNLOADS
                    </Link>

                    <Link
                      to="/gallery"
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-black"
                    >
                      GALLERY
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/scholarships"
                className="transition-colors duration-200 hover:text-yellow-400"
              >
                SCHOLARSHIPS
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("rules")}
                  className="flex h-11 items-center gap-1 bg-transparent px-0 text-sm font-semibold text-white transition-colors hover:text-yellow-400"
                >
                  RULES
                  <FaChevronDown className="text-xs" />
                </button>

                {openMenu === "rules" && (
                  <div className="absolute left-0 top-10 z-[99999] min-w-[150px] rounded-lg bg-white p-2 shadow-2xl">
                    <Link
                      to="/act"
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-black"
                    >
                      ACT
                    </Link>

                    <Link
                      to="/rules"
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-black"
                    >
                      RULES
                    </Link>

                    <Link
                      to="/laws"
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-black"
                    >
                      LAWS
                    </Link>
                  </div>
                )}
              </div>

              <FaCalendarAlt className="text-yellow-400" />
            </div>

            <div className="flex h-8 w-44 items-center overflow-hidden rounded-md bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="h-full w-full border-none px-3 text-sm text-black outline-none"
              />
              <FaSearch className="mx-3 cursor-pointer text-yellow-500" />
            </div>
          </div>
        </div>

        <header className="bg-white shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <div className="flex items-center">
              <img
                src="/ctevtad.png"
                alt="Rolpa Polytechnic Institute Logo"
                className="h-20 w-20 rounded-full border-4 border-blue-900 object-cover shadow-lg"
              />

              <div className="ml-5">
                <h1 className="text-3xl font-bold text-blue-900">
                  Rolpa Polytechnic Institute
                </h1>

                <p className="text-base text-gray-700">
                  Mebang-1, Rolpa, Nepal
                </p>

                <p className="text-sm font-semibold text-yellow-600">
                  Council for Technical Education &amp; Vocational Training
                  (CTEVT)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-700" />
                <span className="font-semibold text-gray-800">
                  +977 86-594026
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-600" />
                <span className="font-semibold text-gray-800">
                  info@rpi.edu.np
                </span>
              </div>
            </div>
          </div>
        </header>

        <nav className="w-full bg-blue-800 shadow-md">
          <ul className="mx-auto flex max-w-7xl items-center justify-center">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
              >
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className="flex h-12 items-center gap-2 rounded-none bg-transparent px-4 text-base font-bold text-white transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
                    >
                      {item.icon}
                      {item.name}
                      <FaChevronDown className="text-xs" />
                    </button>

                    {openMenu === item.name && (
                      <div className="absolute left-0 top-12 z-[99999] min-w-[280px] rounded-xl border border-blue-100 bg-white p-2 shadow-2xl">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={closeMenu}
                            className="mb-1 block rounded-lg px-4 py-3 text-sm font-semibold tracking-wide text-blue-900 transition-all duration-200 hover:bg-blue-800 hover:pl-5 hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className="flex h-12 items-center gap-2 rounded-none px-4 text-base font-bold text-white transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="overflow-hidden bg-black">
          <div className="mx-auto flex h-10 max-w-7xl items-center">
            <div className="ml-6 flex h-full shrink-0 items-center gap-2 whitespace-nowrap bg-yellow-500 px-5 text-sm font-bold text-black">
              <FaStar className="text-red-600" />
              HIGHLIGHTS
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div className="highlight-track">
                <div className="highlight-content">
                  <span>
                    सिलबन्दी दरभाउ पत्र स्वीकृतिको आशय पत्र जारी गरिएको बारे।
                  </span>
                  <strong>|</strong>

                  <span>
                    शैक्षिक सत्र २०८३/०८४ का लागि रजिस्ट्रेसन फाराम भर्ने बारेको अत्यन्त जरुरी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    डिप्लोमा तथा प्रमाणपत्र तहको वार्षिक/सेमेस्टर परीक्षा प्रणालीको स्थगन भएका परीक्षाको परीक्षा आवेदन फाराम भर्ने अत्यन्त जरुरी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    मौजुदा सूची दर्ता गर्ने सम्बन्धी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    स्वतः-प्रकाशन (Proactive Disclosure) २०८३ बैशाख-असार।
                  </span>
                  <strong>|</strong>
                </div>

                <div className="highlight-content">
                  <span>
                    सिलबन्दी दरभाउ पत्र स्वीकृतिको आशय पत्र जारी गरिएको बारे।
                  </span>
                  <strong>|</strong>

                  <span>
                    शैक्षिक सत्र २०८३/०८४ का लागि रजिस्ट्रेसन फाराम भर्ने बारेको अत्यन्त जरुरी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    डिप्लोमा तथा प्रमाणपत्र तहको वार्षिक/सेमेस्टर परीक्षा प्रणालीको स्थगन भएका परीक्षाको परीक्षा आवेदन फाराम भर्ने अत्यन्त जरुरी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    मौजुदा सूची दर्ता गर्ने सम्बन्धी सूचना।
                  </span>
                  <strong>|</strong>

                  <span>
                    स्वतः-प्रकाशन (Proactive Disclosure) २०८३ बैशाख-असार।
                  </span>
                  <strong>|</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[195px]" />

      <style>{`
        .highlight-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: highlightMove 32s linear infinite;
          will-change: transform;
        }

        .highlight-content {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
          color: white;
          font-size: 14px;
          font-weight: 600;
          min-height: 40px;
        }

        .highlight-content span {
          display: inline-block;
          padding: 0 18px;
        }

        .highlight-content strong {
          color: #facc15;
          font-size: 16px;
        }

        .highlight-track:hover {
          animation-play-state: paused;
        }

        @keyframes highlightMove {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;