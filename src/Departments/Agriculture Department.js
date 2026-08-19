import React from "react";
import {
  FaSeedling,
  FaUserTie,
  FaBookOpen,
  FaFlask,
  FaTractor,
  FaCheckCircle,
  FaGraduationCap,
  FaLeaf,
} from "react-icons/fa";


const AgricultureDepartment = () => {


  const programs = [
    "Diploma in Agriculture (Plant Science)",
    "Diploma in Agriculture (Animal Science)",
    "Pre-Diploma Agriculture Program"
  ];


  const facilities = [
    "Modern Agriculture Laboratory",
    "Agriculture Farm for Practical Learning",
    "Seed and Crop Production Unit",
    "Soil Testing and Research Facilities",
    "Greenhouse and Nursery Management",
    "Field Visit and Industry Exposure"
  ];


  const activities = [
    "Crop production and management practices",
    "Vegetable and fruit cultivation",
    "Soil and fertilizer management",
    "Integrated pest management",
    "Livestock and poultry management",
    "Agricultural research and innovation"
  ];


  const objectives = [
    "Produce skilled agriculture technicians for national development.",
    "Provide practical and quality-based agricultural education.",
    "Promote modern farming technology and entrepreneurship.",
    "Support farmers through technical knowledge and innovation.",
    "Develop self-employment opportunities in agriculture sector."
  ];



return (

<div className="bg-gray-50 min-h-screen">


{/* Hero Section */}

<section className="bg-green-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">


<div className="flex justify-center mb-5">

<FaSeedling className="text-6xl"/>

</div>


<h1 className="text-5xl font-bold">
Agriculture Department
</h1>


<p className="mt-4 text-xl">
Building skilled agricultural professionals for sustainable development.
</p>


</div>

</section>






{/* Introduction */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-700">


<h2 className="text-3xl font-bold text-green-800 mb-5">

About Agriculture Department

</h2>


<p className="text-gray-700 leading-8">


The Agriculture Department of Rolpa Polytechnic Institute
provides quality technical education in agriculture through
the CTEVT curriculum. The department focuses on practical
knowledge, modern farming technologies, research activities,
and skill development to produce competent agriculture
technicians.


</p>


</div>


</section>







{/* Programs */}

<section className="max-w-7xl mx-auto px-6 py-8">


<h2 className="text-3xl font-bold text-center text-green-800 mb-10">

Academic Programs

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
programs.map((item,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
>


<FaGraduationCap className="text-4xl text-green-700 mb-4"/>


<h3 className="font-bold text-lg">

{item}

</h3>


<p className="text-gray-600 mt-3">

CTEVT affiliated technical education program focusing on
practical agriculture skills.

</p>


</div>


))

}


</div>


</section>







{/* Department Features */}


<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">



<div className="bg-white shadow-lg rounded-xl p-8">


<div className="flex items-center gap-3 mb-6">

<FaLeaf className="text-4xl text-green-700"/>

<h2 className="text-2xl font-bold text-green-800">

Department Objectives

</h2>

</div>



{
objectives.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaCheckCircle 
className="text-green-600 mt-1"
/>


<p>
{item}
</p>


</div>


))

}



</div>






<div className="bg-green-800 text-white rounded-xl p-8">


<div className="flex items-center gap-3 mb-6">


<FaTractor className="text-4xl"/>


<h2 className="text-2xl font-bold">

Practical Activities

</h2>


</div>



{
activities.map((item,index)=>(


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


<section className="max-w-7xl mx-auto px-6 py-8">


<h2 className="text-3xl font-bold text-center text-green-800 mb-10">

Agriculture Facilities

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
facilities.map((item,index)=>(


<div

key={index}

className="bg-white rounded-xl shadow-md p-6"

>


<FaFlask className="text-4xl text-green-700 mb-4"/>


<h3 className="font-semibold text-lg">

{item}

</h3>


</div>


))

}


</div>


</section>








{/* Faculty Section */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8">


<div className="flex items-center gap-3 mb-5">


<FaUserTie className="text-4xl text-green-700"/>


<h2 className="text-3xl font-bold text-green-800">

Faculty Members

</h2>


</div>



<p className="text-gray-700 leading-8">

The Agriculture Department consists of qualified and experienced
instructors who guide students through classroom teaching,
laboratory practice, field work and agricultural research activities.

</p>


</div>


</section>








{/* Career Opportunities */}


<section className="max-w-7xl mx-auto px-6 pb-16">


<div className="bg-green-900 text-white rounded-xl p-8">


<h2 className="text-3xl font-bold mb-5">

Career Opportunities

</h2>


<p className="leading-8">


Graduates can work as Agriculture Technicians in government
organizations, NGOs, private agricultural companies,
farms, research centers and can also start their own
agriculture-based enterprises.


</p>


</div>


</section>




</div>

);

};


export default AgricultureDepartment;