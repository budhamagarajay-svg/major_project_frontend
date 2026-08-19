import React from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaBullseye,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


const DiplomaInformationTechnology = () => {

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


        <div className="
        w-32
        h-32
        bg-white
        rounded-full
        mx-auto
        flex
        items-center
        justify-center
        text-blue-900
        text-6xl
        shadow-xl
        ">

          <FaLaptopCode/>

        </div>



        <h1 className="
        text-5xl
        font-extrabold
        mt-6
        ">

          Diploma in Information Technology

        </h1>



        <p className="
        text-xl
        mt-4
        font-semibold
        ">

          Rolpa Polytechnic Institute

        </p>



        <p className="mt-2">

          Constituent School of CTEVT

        </p>



      </section>





      {/* COURSE MENU */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      py-12
      ">


        <div className="
        grid
        md:grid-cols-7
        gap-4
        ">


          {
            [
              "Course Overview",
              "Course Objectives",
              "Admission Criteria",
              "Course Fee",
              "Quota",
              "Duration",
              "Syllabus"
            ].map((item)=>(

              <div
              key={item}
              className="
              bg-blue-900
              text-white
              rounded-xl
              p-4
              text-center
              font-bold
              hover:bg-yellow-500
              hover:text-black
              transition
              cursor-pointer
              "
              >

                {item}

              </div>

            ))
          }


        </div>


      </section>







      {/* COURSE OVERVIEW */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      pb-14
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

            Diploma in Information Technology (IT)

          </h2>



          <p className="
          text-gray-700
          text-lg
          leading-9
          ">


Information Technology (IT) is an emerging field in the engineering and technology sector. Many people in developed, developing, and under-developed countries have emphasized the broader application of Information and Communication Technology (ICT).


<br/><br/>


This field has been helping the world for socio-economic development and creating job opportunities in public and private sectors as well as self-employment opportunities.


<br/><br/>


IT jobs are among the highest earning jobs in the global market. Knowledge-based industries are becoming the new destination of economic growth.


<br/><br/>


This curriculum is designed to produce middle-level technical workforce equipped with knowledge and skills related to Information Technology to fulfill the demand of IT professionals in Nepal.


<br/><br/>


The skills and knowledge included in this curriculum help students develop professional abilities and meet individual and industry requirements in the field of Information Technology.


          </p>



        </div>



      </section>







      {/* DETAILS CARDS */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      pb-14
      grid
      md:grid-cols-3
      gap-8
      ">


        <InfoCard
        icon={<FaBullseye/>}
        title="Course Objectives"
        text="To produce skilled IT technicians with practical knowledge and professional skills."
        />


        <InfoCard
        icon={<FaGraduationCap/>}
        title="Admission Criteria"
        text="Students who have completed SEE/SLC can apply according to CTEVT rules."
        />


        <InfoCard
        icon={<FaMoneyBillWave/>}
        title="Course Fee"
        text="Fee structure follows CTEVT and institutional guidelines."
        />


        <InfoCard
        icon={<FaUsers/>}
        title="Quota"
        text="Admission quota is managed according to CTEVT policy."
        />


        <InfoCard
        icon={<FaClock/>}
        title="Duration"
        text="Three years course consisting of six semesters."
        />


        <InfoCard
        icon={<FaBookOpen/>}
        title="Syllabus"
        text="The curriculum includes programming, networking, database, hardware and software subjects."
        />


      </section>









      {/* FOOTER */}


      <footer className="
      bg-blue-950
      text-white
      py-12
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-4
        gap-10
        ">


          <div>

            <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mb-5
            ">
              ABOUT US
            </h2>


            <p className="text-gray-300 leading-7">

              Established in 2074 BS by Council for Technical Education and Vocational Training (CTEVT). Provide skill based higher education in Nepal.

            </p>


          </div>





          <div>

            <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mb-5
            ">
              QUICK LINK
            </h2>


            <ul className="text-gray-300 space-y-3">

              <li>Ministry of Education, Science and Technology</li>
              <li>CTEVT Nepal</li>
              <li>CTEVT Lumbini Province, Butwal</li>
              <li>TITI</li>
              <li>NSTB</li>

            </ul>


          </div>






          <div>

            <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mb-5
            ">
              PROGRAM WE OFFER
            </h2>


            <ul className="text-gray-300 space-y-3">

              <li>Diploma in Information Technology</li>
              <li>Diploma in Agriculture (Plant Science)</li>
              <li>Diploma in Agriculture (Animal Science)</li>
              <li>Vocational Training Courses</li>

            </ul>


          </div>







          <div>

            <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mb-5
            ">
              QUICK CONTACT
            </h2>


            <p className="text-gray-300 space-y-2">

              <FaMapMarkerAlt className="inline mr-2"/>
              Rolpa Municipality-1, Mewang, Rolpa

              <br/>

              <FaPhoneAlt className="inline mr-2"/>
              Phone: 086-594026

              <br/>

              <FaPhoneAlt className="inline mr-2"/>
              Mobile: 9857824891

              <br/>

              <FaEnvelope className="inline mr-2"/>
              rolpapolytechnicinstitute@gmail.com

            </p>


          </div>


        </div>





        <div className="
        border-t
        border-blue-700
        mt-10
        pt-5
        text-center
        text-gray-400
        ">


          Copyright 2014-2025 RPI | All Rights Reserved


        </div>


      </footer>



    </div>

  );
};






const InfoCard = ({icon,title,text}) => {

  return (

    <div className="
    bg-white
    rounded-2xl
    shadow-lg
    p-7
    hover:-translate-y-2
    transition
    ">


      <div className="
      text-4xl
      text-yellow-500
      mb-4
      ">

        {icon}

      </div>


      <h3 className="
      text-xl
      font-bold
      text-blue-900
      mb-3
      ">

        {title}

      </h3>


      <p className="text-gray-600">

        {text}

      </p>


    </div>

  );

};




export default DiplomaInformationTechnology;