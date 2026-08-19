import React from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGraduationCap,
  FaLeaf,
  FaPaw,
  FaTools,
  FaChevronRight,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#0b1f4d] text-gray-200">

      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* ================= ABOUT ================= */}
        <div>
          <h2 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
            ABOUT US
          </h2>

          <p className="text-justify leading-8 text-gray-300">
            Established in <strong>2074 B.S.</strong> by the{" "}
            <strong>
              Council for Technical Education and Vocational Training (CTEVT)
            </strong>
            , Rolpa Polytechnic Institute is committed to providing quality
            technical and vocational education, producing skilled manpower for
            national development through practical, industry-oriented learning.
          </p>

          {/* ================= SOCIAL MEDIA ================= */}
          <div className="mt-6 flex gap-3">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 transition hover:bg-sky-600"
            >
              <FaTwitter />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition hover:bg-red-700"
            >
              <FaYoutube />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 transition hover:bg-blue-800"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h2 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
            QUICK LINKS
          </h2>

          <ul className="space-y-4">

            <li className="transition hover:text-yellow-400">
              <a
                href="https://moest.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <FaChevronRight className="mt-1 text-yellow-400" />
                Ministry of Education, Science and Technology
              </a>
            </li>

            <li className="transition hover:text-yellow-400">
              <a
                href="https://ctevt.org.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <FaChevronRight className="mt-1 text-yellow-400" />
                Council for Technical Education and Vocational Training (CTEVT)
              </a>
            </li>

            <li className="transition hover:text-yellow-400">
              <a
                href="https://lumbini.ctevt.org.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <FaChevronRight className="mt-1 text-yellow-400" />
                CTEVT Lumbini Province, Butwal
              </a>
            </li>

            <li className="transition hover:text-yellow-400">
              <a
                href="https://titi.org.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <FaChevronRight className="mt-1 text-yellow-400" />
                Training Institute for Technical Instruction (TITI)
              </a>
            </li>

            <li className="transition hover:text-yellow-400">
              <a
                href="https://nstb.org.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <FaChevronRight className="mt-1 text-yellow-400" />
                National Skill Testing Board (NSTB)
              </a>
            </li>

          </ul>
        </div>

        {/* ================= PROGRAMS ================= */}
        <div>
          <h2 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
            PROGRAM WE OFFER
          </h2>

          <ul className="space-y-4">

            <li className="flex gap-3 transition hover:text-yellow-400">
              <FaGraduationCap className="mt-1 text-yellow-400" />
              Diploma in Information Technology
            </li>

            <li className="flex gap-3 transition hover:text-yellow-400">
              <FaLeaf className="mt-1 text-green-400" />
              Diploma in Agriculture (Plant Science)
            </li>

            <li className="flex gap-3 transition hover:text-yellow-400">
              <FaPaw className="mt-1 text-orange-400" />
              Diploma in Agriculture (Animal Science)
            </li>

            <li className="flex gap-3 transition hover:text-yellow-400">
              <FaTools className="mt-1 text-cyan-400" />
              Vocational Training Courses
            </li>

          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h2 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
            QUICK CONTACT
          </h2>

          <div className="space-y-5">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="mt-1 text-lg text-yellow-400" />
              <span>Rolpa Municipality-1, Mewang, Rolpa</span>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="mt-1 text-green-400" />
              <span>086-594026</span>
            </div>

            <div className="flex gap-4">
              <FaMobileAlt className="mt-1 text-cyan-400" />
              <span>9857824891</span>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="mt-1 text-red-400" />
              <span>
                rolpapolytechnicinstitute@gmail.com
              </span>
            </div>

            <div className="flex gap-4">
              <FaGlobe className="mt-1 text-blue-400" />

              <a
                href="https://rpi.edu.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all hover:text-yellow-400"
              >
                https://rpi.edu.np/
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-blue-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-5 text-sm text-gray-300 md:flex-row">

          <p>
            © 2014–2025{" "}
            <span className="font-semibold text-white">
              RPI
            </span>{" "}
            | All Rights Reserved.
          </p>

          <div className="mt-3 flex gap-5 md:mt-0">

            {/* Privacy Policy */}
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <span>
              Site Design by{" "}
              <span className="font-semibold text-yellow-400">
                Mr Ajay Budha Magar
              </span>
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;