import React from "react";
import {
  FaPaw,
  FaGraduationCap,
  FaBullseye,
  FaMoneyBillWave,
  FaUsers,
  FaClock,
  FaBookOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


const DiplomaVeterinary = () => {


  return (

    <div className="pt-48 bg-gray-100 min-h-screen font-sans">



      {/* HERO SECTION */}

      <section className="
      mx-6
      rounded-3xl
      overflow-hidden
      shadow-2xl
      bg-gradient-to-r
      from-green-900
      via-blue-800
      to-yellow-500
      text-white
      text-center
      py-20
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

          Diploma in Agriculture (Animal Science)

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








      {/* COURSE NAVIGATION */}


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
              cursor-pointer
              transition
              ">

                {item}

              </div>


            ))
          }


        </div>


      </section>








      {/* COURSE DESCRIPTION */}



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

            Diploma in Agriculture (Animal Science)

          </h2>





          <p className="
          text-gray-700
          text-lg
          leading-9
          ">


            This course is based on the job required to perform by Junior
            Technicians (JT) at different levels of public and private sectors
            of Agriculture and community development related works in Nepal.


            <br/><br/>


            The curriculum is designed to provide knowledge and skills focusing
            on Agriculture Animal Science related occupations. The program
            prepares students with practical and technical skills required in
            livestock and animal science fields.


            <br/><br/>


            There are six semesters completed within three years. The first
            year focuses on foundational and core academic subjects of
            Agriculture Science.


            <br/><br/>


            The second year focuses on basic disciplinary subjects of
            Agriculture Animal Science.


            <br/><br/>


            The third year includes advanced subjects related to Agriculture
            Extension, Animal Products, Animal Waste Management, Poultry,
            Livestock Production and related fields.


            <br/><br/>


            The final year emphasizes practical application through project
            work and internship programs. This curriculum helps produce
            competent and highly employable middle-level technical workforce
            in the field of Agriculture.


            <br/><br/>


            All subjects are designed based on the "must know and must do"
            principle, ensuring students gain both theoretical knowledge and
            practical skills.


          </p>



        </div>


      </section>









      {/* INFORMATION CARDS */}



      <section className="
      max-w-7xl
      mx-auto
      px-6
      pb-14
      grid
      md:grid-cols-3
      gap-8
      ">



        <Card
        icon={<FaBullseye/>}
        title="Course Objectives"
        text="To produce skilled Junior Technicians capable of working in livestock, poultry and animal science sectors."
        />



        <Card
        icon={<FaGraduationCap/>}
        title="Admission Criteria"
        text="Students who have completed SEE/SLC are eligible according to CTEVT admission rules."
        />



        <Card
        icon={<FaMoneyBillWave/>}
        title="Course Fee"
        text="Fee structure follows CTEVT approved guidelines and institutional policies."
        />



        <Card
        icon={<FaUsers/>}
        title="Quota"
        text="Admission quota is managed according to CTEVT regulations."
        />



        <Card
        icon={<FaClock/>}
        title="Duration"
        text="Three years program consisting of six semesters."
        />



        <Card
        icon={<FaBookOpen/>}
        title="Syllabus"
        text="Includes animal health, livestock production, poultry science, animal nutrition and farm management."
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


            <p className="
            text-gray-300
            leading-7
            ">

              Established in 2074 BS by Council for Technical Education and
              Vocational Training (CTEVT). Provide skill based higher education
              in Nepal.

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


            <ul className="
            text-gray-300
            space-y-3
            ">

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


            <ul className="
            text-gray-300
            space-y-3
            ">


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



            <p className="text-gray-300 leading-8">


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







const Card = ({icon,title,text}) => {


  return (

    <div className="
    bg-white
    rounded-2xl
    shadow-xl
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




export default DiplomaVeterinary;