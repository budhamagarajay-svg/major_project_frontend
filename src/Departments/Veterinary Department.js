import React from "react";
import {
  FaPaw,
  FaUserTie,
  FaGraduationCap,
  FaFlask,
  FaStethoscope,
  FaCheckCircle,
  FaHeartbeat,
  FaDog,
  FaHospital,
} from "react-icons/fa";


const VeterinaryDepartment = () => {


  const programs = [
    "Diploma in Veterinary Science",
    "Pre-Diploma Veterinary Program",
    "Animal Health and Livestock Management Training"
  ];


  const objectives = [
    "Produce skilled veterinary technicians for livestock development.",
    "Provide quality technical education in animal health and management.",
    "Promote modern livestock production technologies.",
    "Develop entrepreneurship skills in animal farming.",
    "Support farmers through veterinary services and technical knowledge."
  ];



  const facilities = [
    "Veterinary Laboratory",
    "Animal Health Clinic",
    "Livestock Practical Farm",
    "Animal Disease Diagnosis Facility",
    "Poultry and Dairy Management Unit",
    "Field Training and Community Service"
  ];



  const practicalActivities = [
    "Animal health examination and treatment",
    "Vaccination and disease prevention",
    "Livestock management practices",
    "Poultry production and management",
    "Animal nutrition and feeding practices",
    "Artificial insemination and breeding management"
  ];



  const career = [
    "Veterinary Technician",
    "Livestock Development Officer",
    "Animal Health Assistant",
    "Poultry and Dairy Farm Manager",
    "NGO and Agriculture Project Technician",
    "Self-employment in livestock business"
  ];



return (

<div className="bg-gray-50 min-h-screen">



{/* Hero Section */}

<section className="bg-red-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">


<div className="flex justify-center mb-5">

<FaPaw className="text-6xl"/>

</div>


<h1 className="text-5xl font-bold">
Veterinary Department
</h1>


<p className="mt-4 text-xl">

Developing skilled veterinary professionals for animal health
and livestock development.

</p>


</div>

</section>







{/* About Department */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-red-700">


<h2 className="text-3xl font-bold text-red-800 mb-5">

About Veterinary Department

</h2>


<p className="text-gray-700 leading-8">


The Veterinary Department of Rolpa Polytechnic Institute
provides technical education in animal health, livestock
management and veterinary practices. The department focuses
on practical learning, animal care, disease prevention and
modern livestock production techniques following CTEVT
curriculum.


</p>


</div>


</section>







{/* Programs */}


<section className="max-w-7xl mx-auto px-6 py-8">


<h2 className="text-3xl font-bold text-center text-red-800 mb-10">

Academic Programs

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
programs.map((program,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
>


<FaGraduationCap className="text-4xl text-red-700 mb-4"/>


<h3 className="font-bold text-lg">

{program}

</h3>


<p className="text-gray-600 mt-3">

Technical education focused on animal health,
livestock production and veterinary services.

</p>


</div>


))

}


</div>


</section>









{/* Objectives and Activities */}



<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">



<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">


<FaHeartbeat className="text-3xl"/>

Department Objectives

</h2>




{
objectives.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaCheckCircle className="text-green-600 mt-1"/>


<p>
{item}
</p>


</div>


))

}



</div>







<div className="bg-red-800 text-white rounded-xl p-8">


<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">


<FaStethoscope className="text-3xl"/>

Practical Training

</h2>



{
practicalActivities.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaCheckCircle className="text-yellow-300 mt-1"/>


<p>
{item}
</p>


</div>


))

}



</div>



</section>









{/* Facilities */}



<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-red-800 mb-10">

Veterinary Facilities

</h2>




<div className="grid md:grid-cols-3 gap-6">


{
facilities.map((item,index)=>(


<div
key={index}
className="bg-white shadow-md rounded-xl p-6"
>


<FaFlask className="text-4xl text-red-700 mb-4"/>


<h3 className="font-semibold text-lg">

{item}

</h3>


</div>


))

}


</div>


</section>









{/* Animal Care */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white rounded-xl shadow-lg p-8">


<h2 className="text-3xl font-bold text-red-800 mb-5 flex gap-3 items-center">


<FaDog/>

Animal Health & Community Service

</h2>


<p className="text-gray-700 leading-8">


Students get practical exposure through animal health
checkups, vaccination programs, livestock management,
community veterinary services and field visits.
The department encourages students to apply technical
knowledge to improve livestock farming in rural communities.


</p>


</div>


</section>









{/* Faculty */}



<section className="max-w-7xl mx-auto px-6 py-8">


<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-3xl font-bold text-red-800 mb-5 flex items-center gap-3">


<FaUserTie/>

Faculty Members

</h2>



<p className="text-gray-700 leading-8">


The Veterinary Department has experienced and qualified
instructors who provide theoretical knowledge, practical
training and guidance in animal health and livestock
management.


</p>


</div>


</section>








{/* Career Opportunities */}



<section className="max-w-7xl mx-auto px-6 pb-16">


<div className="bg-red-900 text-white rounded-xl p-8">


<h2 className="text-3xl font-bold mb-6">

Career Opportunities

</h2>



<div className="grid md:grid-cols-2 gap-4">


{
career.map((item,index)=>(


<div
key={index}
className="flex gap-3"
>


<FaHospital className="text-yellow-300 mt-1"/>


<p>
{item}
</p>


</div>


))

}


</div>


</div>


</section>





</div>

);

};


export default VeterinaryDepartment;