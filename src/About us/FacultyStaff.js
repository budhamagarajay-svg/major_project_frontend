import React, { useState } from "react";

import {
  FaUsers,
  FaUserTie,
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaLaptopCode,
  FaLeaf,
  FaPaw,
  FaChalkboardTeacher,
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
  FaUniversity,
} from "react-icons/fa";

const FacultyStaff = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // =====================================================
  // TEACHING FACULTY
  // Official RPI team information
  // =====================================================

  const faculty = [
    {
      name: "Tej Pratap Dubey",
      position: "Principal",
      department: "Administration",
      phone: "9857824891",
      email: "rpi.tej@gmail.com",
      image: "/faculty/tej-pratap-dubey.jpg.jpeg",
      icon: <FaUserTie />,
    },

    {
      name: "Mahendra Singh Dhami",
      position: "Instructor",
      department: "Plant Science",
      phone: "9845611254",
      email: "msdhami54@gmail.com",
      image: "/faculty/mahendra-singh-dhami.jpg.jpeg",
      icon: <FaLeaf />,
    },

    {
      name: "Sanjib Acharya",
      position: "HOD",
      department: "Animal Science",
      phone: "9857853020",
      email: "sanjeevacz@gmail.com",
      image: "/faculty/sanjib.jpg.jpeg",
      icon: <FaPaw />,
    },

    {
      name: "Naresh Acharya",
      position: "HOD",
      department: "General Science",
      phone: "9849555166",
      email: "naresh.naan114@gmail.com",
      image: "/faculty/naresh.jpg.jpeg",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Pawan Kumar Khadka",
      position: "HOD",
      department: "Plant Science",
      phone: "9849677574",
      email: "pawankumarkhadka049@gmail.com",
      image: "/faculty/pawan-kumar-khadka.jpg.jpeg",
      icon: <FaLeaf />,
    },

    {
      name: "Sushil K.C",
      position: "HOD",
      department: "Information Technology",
      phone: "9844974188",
      email: "suceel26@gmail.com",
      image: "/faculty/sushil-kc.jpg.jpeg",
      icon: <FaLaptopCode />,
    },

    {
      name: "Puja Adhikari",
      position: "Instructor",
      department: "Information Technology",
      phone: "9863119057",
      email: "adh.pooja2056@gmail.com",
      image: "/faculty/puj.jpg.jpeg",
      icon: <FaLaptopCode />,
    },

    {
      name: "Ujjwal Adhikari",
      position: "Instructor",
      department: "Information Technology",
      phone: "9844993938",
      email: "adhikariujjwal948@gmail.com",
      image: "/faculty/ujjwal-adhikari.jpg.jpeg",
      icon: <FaLaptopCode />,
    },

    {
      name: "Sita Kumari Roka",
      position: "Instructor",
      department: "Mathematics",
      phone: "9843015546",
      email: "sitakumarirokamagar@gmail.com",
      image: "/faculty/sita-kumari-roka.jpg.jpeg",
      icon: <FaGraduationCap />,
    },

    {
      name: "Bigyan BC",
      position: "Instructor",
      department: "Plant Science",
      phone: "9866501433",
      email: "bcbijnan@gmail.com",
      image: "/faculty/bigyan.jpg.jpeg",
      icon: <FaLeaf />,
    },

    {
      name: "Dr. Amrita Khadka",
      position: "Instructor",
      department: "Animal Science",
      phone: "9742935556",
      email: "khadka.amrita53@gmail.com",
      image: "/faculty/amrita.jpg.jpeg",
      icon: <FaPaw />,
    },

    {
      name: "Ramesh KC",
      position: "Assistant Instructor",
      department: "Animal Science",
      phone: "9869046745",
      email: "kcramesh495@gmail.com",
      image: "/faculty/ramesh-kc.jpg.jpeg",
      icon: <FaPaw />,
    },

    {
      name: "Hema Bhat Chhetri",
      position: "Assistant Instructor",
      department: "Teaching Faculty",
      phone: "9847122477",
      email: "hemabhat624@gmail.com",
      image: "/faculty/hema-bhat-chhetri.jpg.jpeg",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Tapendra Upadhaya",
      position: "Assistant Instructor",
      department: "Teaching Faculty",
      phone: "9868044296",
      email: "artapendraupadhayay@gmail.com",
      image: "/faculty/tapendra-upadhaya.jpg.jpeg",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Umesh Roka Magar",
      position: "Assistant Instructor",
      department: "Teaching Faculty",
      phone: "9841144826",
      email: "umeshmagar764@gmail.com",
      image: "/faculty/umesh.jpg.jpeg",
      icon: <FaChalkboardTeacher />,
    },
  ];

  // =====================================================
  // ADMINISTRATIVE / SUPPORT STAFF
  // =====================================================

  const staff = [
    {
      name: "Ganj Bahadur Kawar",
      position: "Accountant",
      department: "Administration",
      phone: "9847850652",
      email: "kawar.ganja@gmail.com",
      image: "/faculty/gan.jpg.jpeg",
      icon: <FaBuilding />,
    },

    {
      name: "Nirajan KC",
      position: "Teaching Aid",
      department: "Academic Support",
      phone: "9846466411",
      email: "nirajankc98@gmail.com",
      image: "/faculty/nirajan.jpg.jpeg",
      icon: <FaChalkboardTeacher />,
    },

    {
      name: "Khim Bahadur Kawar",
      position: "Admin. Assistant",
      department: "Administration",
      phone: "9861840595",
      email: "khimkawor@gmail.com",
      image: "/faculty/khim.jpg.jpeg",
      icon: <FaBuilding />,
    },

    {
      name: "Dharmendra Kawar",
      position: "Admin Assistant",
      department: "Administration",
      phone: "9847997144",
      email: "dharmendra.kawar074@gmail.com",
      image: "/faculty/dharmendra.jpg.jpeg",
      icon: <FaBuilding />,
    },

    {
      name: "Dharmajit Oli",
      position: "Admin. Assistant",
      department: "Administration",
      phone: "9845853184",
      email: "dorukum43@gmail.com",
      image: "/faculty/dharm.jpg.jpeg",
      icon: <FaBuilding />,
    },

    {
      name: "Bhuwan Singh Bista",
      position: "Driver",
      department: "Support Staff",
      phone: "9845853184",
      email: "",
      image: "/faculty/bhuwan.jpg.jpeg",
      icon: <FaUsers />,
    },

   

    {
      name: "Gaurav Mahara",
      position: "Office Helper",
      department: "Support Staff",
      phone: "9845853624",
      email: "gaurabmahara.rolpa@gmail.com",
      image: "/faculty/gau.jpg.jpeg",
      icon: <FaUsers />,
    },

    

  

    
  ];

  // =====================================================
  // FILTER FACULTY
  // =====================================================

  const filteredFaculty = faculty.filter((person) => {
    const text =
      `${person.name} ${person.position} ${person.department}`.toLowerCase();

    const matchesSearch = text.includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      person.department.toLowerCase().includes(category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // =====================================================
  // FILTER STAFF
  // =====================================================

  const filteredStaff = staff.filter((person) => {
    const text =
      `${person.name} ${person.position} ${person.department}`.toLowerCase();

    const matchesSearch = text.includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      person.department.toLowerCase().includes(category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // =====================================================
  // CLEAR FILTER
  // =====================================================

  const clearSearch = () => {
    setSearch("");
    setCategory("All");
  };

  // =====================================================
  // PERSON CARD
  // =====================================================

  const PersonCard = ({ person }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        {/* IMAGE */}

        <div className="relative h-72 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 overflow-hidden">

          {!imageError ? (
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white">

              <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-yellow-400 flex items-center justify-center text-6xl text-yellow-400">
                {person.icon || <FaUsers />}
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Photo not available
              </p>

            </div>
          )}

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent pointer-events-none"></div>

          {/* ICON */}

          <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-yellow-400 text-blue-950 flex items-center justify-center text-xl shadow-xl border-4 border-white">

            {person.icon || <FaUsers />}

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-6">

          <h3 className="text-2xl font-bold text-blue-950">
            {person.name}
          </h3>

          <p className="mt-2 inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-semibold text-sm">
            {person.position}
          </p>

          <div className="mt-5 space-y-4 text-gray-600">

            {/* DEPARTMENT */}

            <div className="flex gap-3 items-start">

              <FaGraduationCap className="text-blue-700 mt-1 flex-shrink-0" />

              <span>
                {person.department}
              </span>

            </div>

            {/* PHONE */}

            {person.phone && (
              <div className="flex gap-3 items-center">

                <FaPhoneAlt className="text-green-600 flex-shrink-0" />

                <a
                  href={`tel:${person.phone}`}
                  className="hover:text-blue-700 transition"
                >
                  {person.phone}
                </a>

              </div>
            )}

            {/* EMAIL */}

            {person.email && (
              <div className="flex gap-3 items-start">

                <FaEnvelope className="text-red-500 mt-1 flex-shrink-0" />

                <a
                  href={`mailto:${person.email}`}
                  className="hover:text-blue-700 break-all transition"
                >
                  {person.email}
                </a>

              </div>
            )}

          </div>

        </div>

      </div>
    );
  };

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <div className="pt-48 bg-gray-100 min-h-screen font-sans">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="mx-6 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-500 text-white text-center py-20">

        <div className="w-32 h-32 mx-auto rounded-full bg-white text-blue-900 flex items-center justify-center text-6xl shadow-xl">

          <FaUsers />

        </div>

        <h1 className="text-5xl font-extrabold mt-6">
          Faculty & Staff
        </h1>

        <p className="text-xl mt-4 font-semibold">
          Rolpa Polytechnic Institute
        </p>

        <p className="mt-3 text-lg text-gray-100">
          Our Dedicated Team for Quality Technical Education
        </p>

      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-24 h-24 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-5xl flex-shrink-0">

              <FaChalkboardTeacher />

            </div>

            <div>

              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Meet Our Team
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Rolpa Polytechnic Institute is supported by qualified
                instructors, academic professionals and dedicated
                administrative staff who contribute to teaching,
                practical training, student support and institutional
                management.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          SEARCH & FILTER
      ================================================= */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="md:col-span-2 relative">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search faculty or staff..."
                className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-700"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                >
                  <FaTimes />
                </button>
              )}

            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-700"
            >

              <option value="All">
                All Departments
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

              <option value="Plant Science">
                Plant Science
              </option>

              <option value="Animal Science">
                Animal Science
              </option>

              <option value="General Science">
                General Science
              </option>

              <option value="Mathematics">
                Mathematics
              </option>

              <option value="Administration">
                Administration
              </option>

              <option value="Support Staff">
                Support Staff
              </option>

              <option value="Security">
                Security
              </option>

            </select>

          </div>

          {(search || category !== "All") && (
            <button
              onClick={clearSearch}
              className="mt-4 text-blue-700 font-semibold hover:text-red-600"
            >
              Clear Search & Filter
            </button>
          )}

        </div>

      </section>

      {/* =================================================
          TEACHING FACULTY
      ================================================= */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex items-center gap-4 mb-10">

          <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-2xl">

            <FaGraduationCap />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-blue-950">
              Teaching Faculty
            </h2>

            <p className="text-gray-500 mt-1">
              Academic and technical teaching professionals
            </p>

          </div>

        </div>

        {filteredFaculty.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredFaculty.map((person, index) => (
              <PersonCard
                key={`${person.name}-${index}`}
                person={person}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">

            <FaSearch className="text-5xl text-gray-300 mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-gray-700">
              No Faculty Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try another search or department.
            </p>

          </div>

        )}

      </section>

      {/* =================================================
          ACADEMIC DEPARTMENTS
      ================================================= */}

      <section className="bg-blue-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Academic Departments
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* PLANT */}

            <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">

              <FaLeaf className="text-yellow-400 text-5xl mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Plant Science
              </h3>

              <p className="mt-3 text-gray-200">
                Technical education and practical learning in
                agriculture and plant science.
              </p>

            </div>

            {/* ANIMAL */}

            <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">

              <FaPaw className="text-yellow-400 text-5xl mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Animal Science
              </h3>

              <p className="mt-3 text-gray-200">
                Academic and practical education related to
                animal science.
              </p>

            </div>

            {/* IT */}

            <div className="bg-white/10 rounded-3xl p-8 text-center hover:bg-white/20 transition">

              <FaLaptopCode className="text-yellow-400 text-5xl mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Information Technology
              </h3>

              <p className="mt-3 text-gray-200">
                Technology-focused education with practical
                IT skills.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          ADMINISTRATIVE STAFF
      ================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-10">

          <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-blue-950 flex items-center justify-center text-2xl">

            <FaBuilding />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-blue-950">
              Administrative & Support Staff
            </h2>

            <p className="text-gray-500 mt-1">
              Team members supporting daily institutional operations
            </p>

          </div>

        </div>

        {filteredStaff.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredStaff.map((person, index) => (
              <PersonCard
                key={`${person.name}-${index}`}
                person={person}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">

            <FaSearch className="text-5xl text-gray-300 mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-gray-700">
              No Staff Found
            </h3>

          </div>

        )}

      </section>

      {/* =================================================
          CONTACT CTA
      ================================================= */}

      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaUniversity className="text-yellow-400 text-5xl mx-auto" />

          <h2 className="text-3xl md:text-4xl font-bold mt-5">
            Connect With Rolpa Polytechnic Institute
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            For academic, administrative and institutional enquiries,
            please contact RPI.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

            <a
              href="tel:086594026"
              className="bg-yellow-400 text-blue-950 px-7 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              <FaPhoneAlt className="inline mr-2" />
              086-594026
            </a>

            <a
              href="mailto:rolpapolytechnicinstitute@gmail.com"
              className="border border-white px-7 py-3 rounded-full font-bold hover:bg-white hover:text-blue-950 transition"
            >
              <FaEnvelope className="inline mr-2" />
              Email RPI
            </a>

          </div>

          <div className="mt-7 flex justify-center items-center gap-2 text-gray-300">

            <FaMapMarkerAlt className="text-yellow-400" />

            Rolpa Municipality-1, Mewang, Rolpa, Nepal

          </div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="bg-gray-950 text-white py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-bold">
            Rolpa Polytechnic Institute
          </h2>

          <p className="mt-3 text-gray-400">
            Rolpa Municipality-1, Mewang, Rolpa, Nepal
          </p>

          <p className="mt-2 text-gray-400">
            Phone: 086-594026 | Mobile: 9857824891
          </p>

          <p className="mt-2 text-gray-400">
            Email: rolpapolytechnicinstitute@gmail.com
          </p>

          <div className="border-t border-gray-800 mt-7 pt-5">

            <p className="text-gray-500">
              © 2026 Rolpa Polytechnic Institute | All Rights Reserved
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default FacultyStaff;