import React from "react";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCheckCircle,
  FaCertificate,
  FaGraduationCap,
  FaExclamationCircle,
} from "react-icons/fa";

const EligibilityCriteria = () => {

  const diplomaEligibility = [
    "Applicant must have passed SEE/SLC or equivalent examination.",
    "Applicant must fulfill the minimum academic requirements prescribed by CTEVT.",
    "Candidates must pass the CTEVT entrance examination or selection process.",
    "Admission is provided according to available seats and merit basis.",
    "Students must submit all required original documents during admission.",
  ];


  const preDiplomaEligibility = [
    "Applicant must have passed Grade 8 or equivalent level education.",
    "Candidate must meet the specific requirements of the selected program.",
    "Selection is done according to CTEVT admission guidelines.",
    "Students must complete admission formalities within the announced deadline.",
  ];


  const requiredDocuments = [
    "SEE/SLC Marksheet and Certificate",
    "Character Certificate",
    "Citizenship Certificate or Birth Certificate",
    "Recent Passport Size Photographs",
    "Migration Certificate (if required)",
    "Entrance Examination Result / Admission Letter",
  ];


  return (

    <div className="bg-gray-50 min-h-screen">


      {/* Hero Section */}

      <section className="bg-blue-900 text-white py-14">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Eligibility Criteria
          </h1>

          <p className="mt-4 text-lg">
            Check the required qualifications for admission at
            Rolpa Polytechnic Institute.
          </p>

        </div>

      </section>



      {/* Introduction */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-700">

          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Admission Eligibility at RPI
          </h2>

          <p className="text-gray-700 leading-8">

            Rolpa Polytechnic Institute follows the admission rules and
            guidelines of the Council for Technical Education and Vocational
            Training (CTEVT). Students must fulfill the academic requirements
            and selection procedures before enrollment.

          </p>

        </div>

      </section>




      {/* Diploma Eligibility */}

      <section className="max-w-7xl mx-auto px-6 py-6">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaGraduationCap className="text-4xl text-blue-700"/>

            <h2 className="text-2xl font-bold text-blue-900">
              Diploma Level Programs
            </h2>

          </div>


          {
            diplomaEligibility.map((item,index)=>(

              <div
                key={index}
                className="flex gap-3 mb-4"
              >

                <FaCheckCircle 
                  className="text-green-600 mt-1"
                />

                <p className="text-gray-700">
                  {item}
                </p>


              </div>

            ))
          }


        </div>

      </section>





      {/* Pre Diploma Eligibility */}


      <section className="max-w-7xl mx-auto px-6 py-6">


        <div className="bg-white rounded-xl shadow-lg p-8">


          <div className="flex items-center gap-3 mb-6">

            <FaBookOpen className="text-4xl text-blue-700"/>


            <h2 className="text-2xl font-bold text-blue-900">
              Pre-Diploma Level Programs
            </h2>


          </div>



          {
            preDiplomaEligibility.map((item,index)=>(

              <div
                key={index}
                className="flex gap-3 mb-4"
              >

                <FaCheckCircle 
                  className="text-green-600 mt-1"
                />

                <p className="text-gray-700">
                  {item}
                </p>

              </div>

            ))
          }


        </div>


      </section>






      {/* Documents Section */}


      <section className="max-w-7xl mx-auto px-6 py-6">


        <div className="grid md:grid-cols-2 gap-8">


          <div className="bg-white shadow-lg rounded-xl p-8">


            <div className="flex items-center gap-3 mb-5">

              <FaCertificate className="text-3xl text-blue-700"/>

              <h2 className="text-2xl font-bold text-blue-900">
                Required Documents
              </h2>

            </div>



            {
              requiredDocuments.map((doc,index)=>(

                <div
                  key={index}
                  className="flex gap-3 mb-4"
                >

                  <FaCheckCircle 
                    className="text-green-600 mt-1"
                  />

                  <p>
                    {doc}
                  </p>

                </div>

              ))
            }


          </div>





          {/* Notice */}

          <div className="bg-blue-900 text-white rounded-xl p-8">


            <div className="flex items-center gap-3 mb-5">

              <FaExclamationCircle className="text-3xl"/>


              <h2 className="text-2xl font-bold">
                Important Notice
              </h2>

            </div>


            <ul className="space-y-4 text-gray-100">


              <li>
                • Eligibility may vary according to the selected program.
              </li>


              <li>
                • Admission follows CTEVT rules and regulations.
              </li>


              <li>
                • Students should check the latest admission notice before applying.
              </li>


              <li>
                • False information may lead to cancellation of admission.
              </li>


            </ul>


          </div>



        </div>


      </section>





      {/* Footer Space */}

      <div className="h-10"></div>


    </div>

  );
};


export default EligibilityCriteria;