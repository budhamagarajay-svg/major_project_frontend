import React from "react";
import {
  FaPaw,
  FaGraduationCap,
  FaBookOpen,
  FaUserGraduate,
  FaMoneyBillWave,
  FaClock,
  FaClipboardCheck,
  FaPhoneAlt
} from "react-icons/fa";


const AgricultureVeterinary = () => {

  const objectives = [
    "Diagnose symptoms of different animal diseases and health conditions of livestock species.",
    "Provide preventive and basic curative services for domestic animals.",
    "Deliver animal management, first aid and referral services.",
    "Provide livestock extension services to farmers and communities.",
    "Conduct farmer training related to animal health, feed management and care systems.",
    "Promote livestock products such as milk, eggs, meat, wool and other animal products.",
    "Develop skills for agro-enterprise and livestock-based businesses."
  ];


  const courseDetails = [
    {
      icon:<FaClock/>,
      title:"Duration",
      value:"3 Academic Years (6 Semesters)"
    },
    {
      icon:<FaMoneyBillWave/>,
      title:"Course Fee",
      value:"Rs. 60,000 (Approx.)"
    },
    {
      icon:<FaUserGraduate/>,
      title:"Quota",
      value:"40 Students"
    },
    {
      icon:<FaClipboardCheck/>,
      title:"Eligibility",
      value:"SEE/SLC Passed or equivalent as per CTEVT criteria"
    }
  ];


  return (

    <div className="pt-48 bg-gray-100 min-h-screen font-sans">


      {/* HERO */}

      <section className="
      mx-6
      rounded-3xl
      bg-gradient-to-r
      from-green-900
      via-green-700
      to-yellow-500
      text-white
      text-center
      py-20
      shadow-2xl
      ">


        <div className="
        w-32
        h-32
        bg-white
        rounded-full
        mx-auto
        flex
        items-center
        justify-center
        text-green-800
        text-6xl
        shadow-xl
        ">

          <FaPaw/>

        </div>



        <h1 className="
        text-5xl
        font-extrabold
        mt-6
        ">
          Agriculture Veterinary
        </h1>


        <p className="
        text-xl
        mt-4
        font-semibold
        ">
          Diploma in Agriculture (Animal Science)
        </p>


        <p className="mt-3 text-lg">
          Rolpa Polytechnic Institute | CTEVT
        </p>


      </section>





      {/* COURSE DETAILS */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      py-14
      ">


        <h2 className="
        text-4xl
        font-bold
        text-green-900
        text-center
        mb-10
        ">
          Course Information
        </h2>



        <div className="
        grid
        md:grid-cols-4
        gap-6
        ">


        {
          courseDetails.map((item,index)=>(

            <div
            key={index}
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            text-center
            hover:shadow-2xl
            transition
            "
            >

              <div className="
              text-green-700
              text-4xl
              flex
              justify-center
              mb-4
              ">
                {item.icon}
              </div>


              <h3 className="
              font-bold
              text-xl
              text-gray-800
              ">
                {item.title}
              </h3>


              <p className="
              mt-3
              text-gray-600
              ">
                {item.value}
              </p>


            </div>

          ))
        }


        </div>


      </section>






      {/* OVERVIEW */}


      <section className="
      bg-white
      py-14
      ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


      <h2 className="
      text-3xl
      font-bold
      text-green-900
      mb-6
      flex
      items-center
      gap-3
      ">

        <FaBookOpen/>
        Course Overview

      </h2>


      <p className="
      text-gray-700
      text-lg
      leading-9
      ">


      Diploma in Agriculture (Animal Science) is designed to produce
      skilled Junior Technicians (JT) who can work in livestock,
      agriculture and community development sectors.

      The program focuses on animal health, livestock management,
      animal production, poultry, animal waste management and practical
      field-based skills.

      Students study foundation agricultural subjects in the first year,
      disciplinary animal science subjects in the second year and
      advanced practical applications including project work and
      internship in the final year.


      </p>


      </div>


      </section>






      {/* OBJECTIVES */}


      <section className="
      bg-green-900
      text-white
      py-14
      ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


      <h2 className="
      text-3xl
      font-bold
      mb-8
      flex
      items-center
      gap-3
      ">

      <FaGraduationCap/>
      Course Objectives

      </h2>



      <div className="
      grid
      md:grid-cols-2
      gap-5
      ">


      {
        objectives.map((item,index)=>(

          <div
          key={index}
          className="
          bg-white/10
          p-5
          rounded-xl
          "
          >

          <p>
          ✓ {item}
          </p>

          </div>

        ))
      }


      </div>


      </div>


      </section>






      {/* SYLLABUS */}


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
      text-green-900
      mb-5
      ">
        Syllabus
      </h2>


      <p className="
      text-gray-700
      text-lg
      ">
        The curriculum follows the CTEVT semester system and includes
        agriculture science, animal health, livestock production,
        veterinary practices, poultry management, entrepreneurship
        and internship-based practical learning.
      </p>


      <button className="
      mt-6
      bg-green-700
      text-white
      px-8
      py-3
      rounded-lg
      hover:bg-green-900
      ">
        View Syllabus
      </button>


      </div>


      </section>







      {/* CONTACT */}


      <footer className="
      bg-gray-900
      text-white
      py-10
      text-center
      ">


      <h2 className="
      text-3xl
      font-bold
      ">
      Rolpa Polytechnic Institute
      </h2>


      <p className="mt-3">
      Rolpa Municipality-1, Mewang, Rolpa
      </p>


      <p className="mt-2 flex justify-center gap-2 items-center">
      <FaPhoneAlt/>
      086-594026 | 9857824891
      </p>


      <p className="mt-5 text-gray-400">
      © 2026 Rolpa Polytechnic Institute | All Rights Reserved
      </p>


      </footer>



    </div>

  );
};


export default AgricultureVeterinary;