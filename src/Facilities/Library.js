import React from "react";
import {
  FaBook,
  FaLaptop,
  FaSearch,
  FaUsers,
  FaClock,
  FaGraduationCap,
  FaWifi,
  FaBookReader,
  FaArrowRight,
} from "react-icons/fa";

const Library = () => {

  const services = [
    {
      icon: <FaBook />,
      title: "Academic Book Collection",
      desc: "Rolpa Polytechnic Institute Library provides textbooks, reference books, manuals, and learning materials for Agriculture, Veterinary, and Information Technology programs."
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning Facility",
      desc: "Students can access digital resources, online study materials, e-books, and technical information for their academic improvement."
    },
    {
      icon: <FaSearch />,
      title: "Research & Project Support",
      desc: "The library supports students in project work, assignments, practical learning, and technical research activities."
    },
    {
      icon: <FaWifi />,
      title: "Internet Facility",
      desc: "Internet access is available for students to explore educational websites and online learning resources."
    }
  ];


  const facilities = [
    "Large collection of CTEVT curriculum-based books",
    "Separate reading area for students",
    "Reference books for Agriculture, Veterinary and IT students",
    "Computer and internet access facility",
    "Newspapers and educational magazines",
    "Project report and research materials",
    "Peaceful environment for self-study",
    "Supportive library management service"
  ];


  const rules = [
    "Students must bring their valid college identity card.",
    "Maintain silence inside the library.",
    "Books must be returned within the given time period.",
    "Students should protect library materials.",
    "Food and drinks are not allowed inside the library."
  ];


  return (
    <div className="bg-gray-50">


      {/* Header */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">

        <div className="max-w-6xl mx-auto text-center px-6">

          <FaBookReader className="text-6xl mx-auto text-yellow-300 mb-4"/>

          <h1 className="text-5xl font-bold">
            Rolpa Polytechnic Institute Library
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            A center of knowledge, learning and innovation supporting students
            of Agriculture, Veterinary and Information Technology programs.
          </p>

        </div>

      </section>



      {/* About Library */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">


          <div>

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              About RPI Library
            </h2>

            <p className="text-gray-600 leading-relaxed">

              The Library of <b>Rolpa Polytechnic Institute (RPI)</b> is an
              important academic facility established to support teaching,
              learning and research activities.

            </p>

            <p className="text-gray-600 leading-relaxed mt-4">

              The library provides updated books, reference materials and
              digital resources according to CTEVT curriculum requirements.
              It helps students gain practical knowledge and develop
              professional skills.

            </p>

          </div>



          <div className="bg-white rounded-xl shadow-xl p-8">

            <div className="grid grid-cols-2 gap-6 text-center">


              <div>
                <FaBook className="text-4xl text-blue-600 mx-auto"/>
                <h3 className="text-2xl font-bold mt-2">
                  5000+
                </h3>
                <p>
                  Books
                </p>
              </div>


              <div>
                <FaUsers className="text-4xl text-green-600 mx-auto"/>
                <h3 className="text-2xl font-bold mt-2">
                  Students
                </h3>
                <p>
                  Learning Support
                </p>
              </div>


              <div>
                <FaGraduationCap className="text-4xl text-purple-600 mx-auto"/>
                <h3 className="text-2xl font-bold mt-2">
                  CTEVT
                </h3>
                <p>
                  Curriculum Based
                </p>
              </div>


              <div>
                <FaClock className="text-4xl text-red-600 mx-auto"/>
                <h3 className="text-2xl font-bold mt-2">
                  6 Days
                </h3>
                <p>
                  Open Weekly
                </p>
              </div>


            </div>

          </div>

        </div>

      </section>




      {/* Services */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Library Services
        </h2>


        <div className="grid md:grid-cols-4 gap-6">

        {
          services.map((service,index)=>(

            <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition"
            >

              <div className="text-4xl text-blue-600 mb-4">
                {service.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

            </div>

          ))
        }

        </div>

      </section>





      {/* Facilities */}

      <section className="bg-white py-12">

        <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Library Facilities
        </h2>


        <div className="grid md:grid-cols-2 gap-5">

        {
          facilities.map((item,index)=>(

            <div
            key={index}
            className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg"
            >

              <FaArrowRight className="text-blue-600"/>

              <span>{item}</span>

            </div>

          ))
        }

        </div>


        </div>

      </section>




      {/* Rules */}

      <section className="max-w-7xl mx-auto px-6 py-12">


        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Library Rules
        </h2>


        <div className="bg-blue-900 text-white rounded-xl p-8">

        {
          rules.map((rule,index)=>(

            <p key={index} className="mb-4">
              {index+1}. {rule}
            </p>

          ))
        }

        </div>


      </section>



    </div>
  );
};

export default Library;