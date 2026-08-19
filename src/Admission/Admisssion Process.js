import React from "react";
import {
  FaUserGraduate,
  FaFileAlt,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowRight,
  FaRegCalendarAlt,
} from "react-icons/fa";

const AdmissionProcess = () => {
  const processSteps = [
    {
      icon: <FaRegCalendarAlt />,
      title: "Admission Notice Publication",
      description:
        "RPI publishes admission notices according to CTEVT guidelines with program details, eligibility criteria, application dates and important instructions.",
    },
    {
      icon: <FaFileAlt />,
      title: "Application Submission",
      description:
        "Interested students need to submit the admission form with required documents within the given deadline.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Entrance Examination / Selection",
      description:
        "Eligible candidates participate in the selection process according to CTEVT and institute admission rules.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Enrollment",
      description:
        "Selected candidates complete admission procedures and become officially enrolled students of Rolpa Polytechnic Institute.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Fee Payment & Confirmation",
      description:
        "Students complete required fee payment and confirm their seat for the selected program.",
    },
  ];

  const documents = [
    "SEE / SLC Marksheet and Certificate",
    "Character Certificate",
    "Transfer Certificate (if required)",
    "Citizenship Certificate / Birth Certificate",
    "Recent Passport Size Photographs",
    "Migration Certificate (if applicable)",
    "Entrance Examination Result / Admission Letter",
  ];

  const eligibility = [
    "Passed SEE or equivalent examination.",
    "Must fulfill CTEVT program-specific eligibility criteria.",
    "Candidates must pass the required entrance/selection process.",
    "Admission is provided according to available seats and institute rules.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Admission Process
          </h1>
          <p className="mt-4 text-lg">
            Join Rolpa Polytechnic Institute and begin your technical education journey.
          </p>
        </div>
      </section>


      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-700">

          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Admission Procedure at RPI
          </h2>

          <p className="text-gray-700 leading-8">
            Rolpa Polytechnic Institute follows CTEVT-based admission procedures
            for Diploma and Pre-Diploma level programs. Students are selected
            through application submission, eligibility verification and the
            required selection process.
          </p>

        </div>

      </section>



      {/* Admission Steps */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Admission Steps
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {processSteps.map((step,index)=>(
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-4xl text-blue-700 mb-4">
                {step.icon}
              </div>


              <h3 className="font-bold text-lg mb-3">
                {step.title}
              </h3>


              <p className="text-gray-600 text-sm leading-6">
                {step.description}
              </p>


            </div>
          ))}


        </div>

      </section>



      {/* Eligibility + Documents */}

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">


        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Eligibility Criteria
          </h2>


          {
            eligibility.map((item,index)=>(
              <div
                key={index}
                className="flex gap-3 mb-4"
              >

                <FaCheckCircle className="text-green-600 mt-1"/>

                <p className="text-gray-700">
                  {item}
                </p>

              </div>
            ))
          }


        </div>



        <div className="bg-white shadow-lg rounded-xl p-8">


          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Required Documents
          </h2>


          {
            documents.map((doc,index)=>(
              <div
                key={index}
                className="flex gap-3 mb-4"
              >

                <FaArrowRight className="text-blue-700 mt-1"/>

                <p className="text-gray-700">
                  {doc}
                </p>

              </div>
            ))
          }


        </div>


      </section>



      {/* Important Notice */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-blue-900 text-white rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Important Information
          </h2>


          <ul className="space-y-3">

            <li>
              • Admission dates are announced through official notices.
            </li>

            <li>
              • Students must submit correct information during application.
            </li>

            <li>
              • Admission follows CTEVT rules and institute policies.
            </li>

            <li>
              • Contact RPI administration for latest admission updates.
            </li>

          </ul>


        </div>

      </section>



    </div>
  );
};

export default AdmissionProcess;