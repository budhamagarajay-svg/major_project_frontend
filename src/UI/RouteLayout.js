import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// ==================== NAVBAR & FOOTER ====================

import CollegeNavbar from "./Navbar";
import Footer from "../Footer";

// ==================== MAIN ====================

import Home from "../Main/Home";

// ==================== TOP ITEMS ====================

import News from "../Topitem/News";
import Notice from "../Topitem/Notice";
import Events from "../Topitem/Events";
import Scholarships from "../Topitem/Scholarships";

// ==================== RESOURCES ====================

import Downloads from "../Resources/Downloads";
import Gallery from "../Resources/Gallery";

// ==================== RULES ====================

import Act from "../Rules/Act";
import Rules from "../Rules/Rules";
import Laws from "../Rules/Laws";

// ==================== ABOUT US ====================

import Overview from "../About us/Overview";
import PrincipalMessage from "../About us/PrincipalMessage";
import VisionMission from "../About us/VisionMission";
import History from "../About us/History";
import FacultyStaff from "../About us/FacultyStaff";

// ==================== PROGRAMS ====================

import DiplomaAgriculture from "../Programs/DiplomaInAgriculture";
import DiplomaIT from "../Programs/Diploma in Information technology";
import DiplomaVeterinary from "../Programs/Diploma in Veterinary";
import PreDiploma from "../Programs/PreDiplomaProgram";

// ==================== ACADEMICS ====================

import AgricultureVeterinary from "../Academics/Agriculture Veterinary";
import InformationTechnology from "../Academics/Information Technology";
import AcademicCalendar from "../Academics/Academic calender";
import ClassRoutine from "../Academics/Class Routine";
import Examination from "../Academics/Examination";
import Results from "../Academics/Results";

// ==================== ADMISSION ====================

import AdmissionNotice from "../Admission/Admission Notice";
import AdmissionProcess from "../Admission/Admisssion Process";
import EligibilityCriteria from "../Admission/Eligibility Criteria";
import FeeStructure from "../Admission/Fee Structure";
import Scholarship from "../Admission/Scholarship";
import ApplyOnline from "../Admission/Apply Online";

// ==================== DEPARTMENTS ====================

import AgricultureDepartment from "../Departments/Agriculture Department";
import VeterinaryDepartment from "../Departments/Veterinary Department";
import ITDepartment from "../Departments/Information Technology Department";

// ==================== FACILITIES ====================

import Library from "../Facilities/Library";
import ComputerLab from "../Facilities/Computer Lab";
import AgricultureFarm from "../Facilities/Agriculture Farm";
import VeterinaryLab from "../Facilities/Veterinary Lab";
import Hostel from "../Facilities/Hostel";
import Sports from "../Facilities/Sports";
import Canteen from "../Facilities/Canteen";

// ==================== STUDENTS ====================

import StudentsPortal from "../Students/Students Portal";
import StudentNotices from "../Students/Notices";

// ==================== LOGIN / SIGNUP ====================

import Login from "../Login/Login";
import Signup from "../Signup";

// ============================================================
// PRE-DIPLOMA FALLBACK PAGE
// ============================================================

function PreDiplomaPage() {
  return (
    <div className="min-h-[70vh] bg-gray-100 px-5 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-blue-900">
          Pre-Diploma Program
        </h1>

        <p className="text-lg leading-8 text-gray-600">
          Welcome to the Pre-Diploma Program section of Rolpa Polytechnic
          Institute.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// 404 PAGE
// ============================================================

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-5">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// ROUTE LAYOUT
// ============================================================

function RouteLayout() {
  return (
    <>
      {/* ==================== NAVBAR ==================== */}

      <CollegeNavbar />

      {/* ==================== ALL ROUTES ==================== */}

      <Routes>

        {/* ==================== HOME ==================== */}

        <Route path="/" element={<Home />} />

        {/* ==================== TOP ITEMS ==================== */}

        <Route path="/news" element={<News />} />

        <Route path="/notice" element={<Notice />} />

        <Route path="/notices" element={<Notice />} />

        <Route path="/events" element={<Events />} />

        <Route path="/scholarships" element={<Scholarships />} />

        {/* ==================== RESOURCES ==================== */}

        <Route path="/downloads" element={<Downloads />} />

        <Route path="/gallery" element={<Gallery />} />

        {/* ==================== RULES ==================== */}

        <Route path="/act" element={<Act />} />

        <Route path="/rules" element={<Rules />} />

        <Route path="/laws" element={<Laws />} />

        {/* ==================== ABOUT US ==================== */}

        <Route path="/overview" element={<Overview />} />

        <Route
          path="/principal-message"
          element={<PrincipalMessage />}
        />

        <Route
          path="/vision-mission"
          element={<VisionMission />}
        />

        <Route
          path="/vision-&-mission"
          element={<VisionMission />}
        />

        <Route path="/history" element={<History />} />

        <Route
          path="/faculty-staff"
          element={<FacultyStaff />}
        />

        <Route
          path="/faculty-&-staff"
          element={<FacultyStaff />}
        />

        {/* ==================== PROGRAMS ==================== */}

        <Route
          path="/diploma-in-agriculture"
          element={<DiplomaAgriculture />}
        />

        <Route
          path="/diploma-in-information-technology"
          element={<DiplomaIT />}
        />

        <Route
          path="/diploma-in-veterinary"
          element={<DiplomaVeterinary />}
        />

        <Route
          path="/pre-diploma-program"
          element={<PreDiploma />}
        />

        <Route
          path="/pre-diploma"
          element={<PreDiploma />}
        />

        <Route
          path="/pre-diploma-program-page"
          element={<PreDiplomaPage />}
        />

        {/* ==================== ACADEMICS ==================== */}

        <Route
          path="/agriculture-veterinary"
          element={<AgricultureVeterinary />}
        />

        <Route
          path="/information-technology"
          element={<InformationTechnology />}
        />

        <Route
          path="/academic-calendar"
          element={<AcademicCalendar />}
        />

        <Route
          path="/class-routine"
          element={<ClassRoutine />}
        />

        <Route
          path="/examination"
          element={<Examination />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        {/* ==================== ADMISSION ==================== */}

        <Route
          path="/admission-notice"
          element={<AdmissionNotice />}
        />

        <Route
          path="/admission-process"
          element={<AdmissionProcess />}
        />

        <Route
          path="/eligibility-criteria"
          element={<EligibilityCriteria />}
        />

        <Route
          path="/fee-structure"
          element={<FeeStructure />}
        />

        <Route
          path="/scholarship"
          element={<Scholarship />}
        />

        <Route
          path="/apply-online"
          element={<ApplyOnline />}
        />

        {/* ==================== DEPARTMENTS ==================== */}

        <Route
          path="/agriculture-department"
          element={<AgricultureDepartment />}
        />

        <Route
          path="/veterinary-department"
          element={<VeterinaryDepartment />}
        />

        <Route
          path="/information-technology-department"
          element={<ITDepartment />}
        />

        {/* ==================== FACILITIES ==================== */}

        <Route
          path="/library"
          element={<Library />}
        />

        <Route
          path="/computer-lab"
          element={<ComputerLab />}
        />

        <Route
          path="/agriculture-farm"
          element={<AgricultureFarm />}
        />

        <Route
          path="/veterinary-lab"
          element={<VeterinaryLab />}
        />

        <Route
          path="/hostel"
          element={<Hostel />}
        />

        <Route
          path="/sports"
          element={<Sports />}
        />

        <Route
          path="/canteen"
          element={<Canteen />}
        />

        {/* ==================== STUDENTS ==================== */}

        <Route
          path="/students-portal"
          element={<StudentsPortal />}
        />

        <Route
          path="/student-notices"
          element={<StudentNotices />}
        />

        <Route
          path="/notices-student"
          element={<StudentNotices />}
        />

        {/* ==================== LOGIN / SIGNUP ==================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* ==================== 404 ==================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* ==================== FOOTER ==================== */}

      <Footer />
    </>
  );
}

export default RouteLayout;