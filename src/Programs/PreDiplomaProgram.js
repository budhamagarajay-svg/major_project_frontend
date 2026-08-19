import React from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave
} from "react-icons/fa";


const PreDiplomaProgram = () => {

  return (
    <div className="pt-48 bg-gray-100 min-h-screen font-sans">


      {/* HERO SECTION */}

      <section className="
        mx-6
        rounded-3xl
        overflow-hidden
        shadow-2xl
        bg-gradient-to-r
        from-blue-950
        via-blue-700
        to-yellow-500
        text-white
        py-20
        text-center
      ">

        <FaGraduationCap 
          className="
          mx-auto
          text-7xl
          text-yellow-300
          "
        />

        <h1 className="
          text-5xl
          font-extrabold
          mt-6
        ">
          Pre-Diploma Program
        </h1>


        <p className="
          text-xl
          mt-4
          font-semibold
        ">
          Rolpa Polytechnic Institute
        </p>


        <p className="mt-3 text-lg">
          Skill Based Technical Education Program
        </p>


      </section>




      {/* COURSE INFORMATION */}


      <section className="
        max-w-7xl
        mx-auto
        px-6
        py-14
      ">


        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
        ">


          <h2 className="
            text-3xl
            font-bold
            text-blue-900
            mb-6
          ">
            Pre-Diploma Program Overview
          </h2>


          <p className="
            text-gray-700
            text-lg
            leading-9
          ">

            The Pre-Diploma Program is designed to provide basic
            technical knowledge and practical skills to students
            who want to develop their career in technical education.

            <br/><br/>

            This program focuses on developing skilled manpower
            through practical learning, laboratory work and
            industry-oriented training.

            <br/><br/>

            The program prepares students for further technical
            education and employment opportunities in different
            sectors.

          </p>


        </div>


      </section>





      {/* COURSE DETAILS */}


      <section className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-3
        gap-8
      ">


        {[
          {
            icon:<FaBookOpen/>,
            title:"Course Objectives",
            text:"To provide basic technical knowledge, practical skills and prepare students for higher technical education."
          },


          {
            icon:<FaUserGraduate/>,
            title:"Admission Criteria",
            text:"Students who have completed required academic qualification according to CTEVT rules are eligible."
          },


          {
            icon:<FaClock/>,
            title:"Duration",
            text:"The duration of the Pre-Diploma Program is based on CTEVT curriculum and program structure."
          },


          {
            icon:<FaMoneyBillWave/>,
            title:"Course Fee",
            text:"Fee structure is determined according to CTEVT and institute regulations."
          },


          {
            icon:<FaCheckCircle/>,
            title:"Quota",
            text:"Admission quota is allocated according to institute policy and CTEVT guidelines."
          },


          {
            icon:<FaBookOpen/>,
            title:"Syllabus",
            text:"The syllabus includes theory classes, practical training and skill-based learning."
          }

        ].map((item,index)=>(

          <div
          key={index}
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          hover:shadow-2xl
          transition
          "
          >


            <div className="
            text-5xl
            text-blue-800
            mb-5
            ">
              {item.icon}
            </div>


            <h3 className="
            text-2xl
            font-bold
            text-blue-900
            mb-3
            ">
              {item.title}
            </h3>


            <p className="
            text-gray-600
            leading-7
            ">
              {item.text}
            </p>


          </div>


        ))}


      </section>






      {/* WHY CHOOSE */}


      <section className="
      bg-blue-900
      text-white
      mt-14
      py-14
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">


          <h2 className="
          text-4xl
          font-bold
          text-center
          mb-10
          ">
            Why Choose Pre-Diploma Program?
          </h2>


          <div className="
          grid
          md:grid-cols-3
          gap-8
          ">


            <div className="
            bg-white/10
            p-8
            rounded-2xl
            ">
              <h3 className="text-2xl font-bold">
                Practical Learning
              </h3>

              <p className="mt-3">
                Students gain practical knowledge through
                laboratory and field activities.
              </p>

            </div>



            <div className="
            bg-white/10
            p-8
            rounded-2xl
            ">

              <h3 className="text-2xl font-bold">
                Career Development
              </h3>

              <p className="mt-3">
                Helps students build technical skills
                for future opportunities.
              </p>

            </div>



            <div className="
            bg-white/10
            p-8
            rounded-2xl
            ">

              <h3 className="text-2xl font-bold">
                Quality Education
              </h3>

              <p className="mt-3">
                Experienced instructors provide
                quality technical education.
              </p>

            </div>


          </div>


        </div>


      </section>







      {/* CONTACT FOOTER */}


      <footer className="
      bg-gray-900
      text-white
      py-12
      mt-10
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">


          <h2 className="
          text-3xl
          font-bold
          mb-5
          ">
            Quick Contact
          </h2>


          <p>
            📍 Rolpa Municipality-1, Mewang, Rolpa
          </p>


          <p className="mt-2">
            <FaPhoneAlt className="inline mr-2"/>
            Phone: 086-594026
          </p>


          <p className="mt-2">
            Mobile: 9857824891
          </p>


          <p className="mt-2">
            <FaEnvelope className="inline mr-2"/>
            Email: rolpapolytechnicinstitute@gmail.com
          </p>



          <hr className="
          border-gray-700
          my-8
          "/>



          <p className="
          text-center
          text-gray-400
          ">
          © 2014-2025 Rolpa Polytechnic Institute | All Rights Reserved
          </p>


        </div>


      </footer>



    </div>
  );
};


export default PreDiplomaProgram;