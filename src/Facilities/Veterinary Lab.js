import React from "react";
import {
  FaMicroscope,
  FaPaw,
  FaSyringe,
  FaFlask,
  FaHeartbeat,
  FaDna,
  FaGraduationCap,
  FaUsers,
  FaShieldAlt,
  FaVial,
  FaCheckCircle,
  FaBookMedical,
} from "react-icons/fa";


const VeterinaryLab = () => {


const facilities = [

{
icon:<FaMicroscope/>,
title:"Microscope Laboratory",
desc:"Well-equipped microscope facilities help students study microorganisms, tissues and biological samples during practical classes."
},

{
icon:<FaFlask/>,
title:"Veterinary Diagnostic Lab",
desc:"Students learn laboratory techniques for identifying animal diseases through sample testing and diagnosis."
},

{
icon:<FaSyringe/>,
title:"Animal Health Practice",
desc:"Provides practical knowledge about vaccination, disease prevention and animal health management."
},

{
icon:<FaDna/>,
title:"Biology & Pathology Study",
desc:"Students study animal anatomy, physiology, pathology and disease-related laboratory activities."
}

];



const equipment = [

"Microscope and laboratory instruments",

"Blood and sample testing equipment",

"Biological sample collection tools",

"Animal health diagnostic materials",

"Laboratory glassware and chemicals",

"Safety equipment and protective materials",

"Veterinary practical models",

"Research and project support resources"

];



const activities = [

"Animal disease identification",

"Blood and urine sample analysis",

"Microbiology practical",

"Parasitology study",

"Animal anatomy and physiology practical",

"Vaccination procedure demonstration",

"Laboratory testing methods",

"Veterinary research activities"

];



const benefits = [

"Develop professional veterinary laboratory skills",

"Understand animal diseases and diagnosis",

"Improve practical knowledge",

"Prepare skilled veterinary technicians",

"Support research and innovation"

];



const rules=[

"Students must wear proper laboratory safety equipment.",

"Handle chemicals and instruments carefully.",

"Maintain cleanliness inside the laboratory.",

"Follow instructions from laboratory instructors.",

"Do not use laboratory equipment without permission."

];




return (

<div className="bg-gray-50">


{/* Hero Section */}

<section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-16">


<div className="max-w-7xl mx-auto text-center px-6">


<FaMicroscope className="text-6xl mx-auto text-yellow-300 mb-5"/>


<h1 className="text-5xl font-bold">

Rolpa Polytechnic Institute Veterinary Lab

</h1>


<p className="mt-5 text-lg max-w-3xl mx-auto text-gray-200">

A modern veterinary laboratory facility providing practical learning
opportunities in animal health, diagnosis, microbiology and laboratory
techniques for Veterinary students.

</p>


</div>


</section>







{/* About */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10">


<div>


<h2 className="text-3xl font-bold text-green-900 mb-5">

About Veterinary Laboratory

</h2>


<p className="text-gray-600 leading-relaxed">

The <b>Veterinary Laboratory of Rolpa Polytechnic Institute (RPI)</b>
supports practical education for students studying Veterinary and
Animal Science programs.

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The laboratory provides hands-on experience in animal disease
diagnosis, laboratory testing, microbiology, pathology and animal
health management.

</p>


</div>







<div className="bg-white shadow-xl rounded-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">


<div>

<FaMicroscope className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Lab
</h3>

<p>
Practical
</p>

</div>



<div>

<FaPaw className="text-4xl text-orange-500 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Animal
</h3>

<p>
Health
</p>

</div>




<div>

<FaUsers className="text-4xl text-blue-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Students
</h3>

<p>
Training
</p>

</div>




<div>

<FaGraduationCap className="text-4xl text-purple-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
CTEVT
</h3>

<p>
Program
</p>

</div>


</div>


</div>


</div>


</section>









{/* Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-green-900 mb-10">

Veterinary Laboratory Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{

facilities.map((item,index)=>(

<div
key={index}
className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
>


<div className="text-4xl text-green-600 mb-4">

{item.icon}

</div>


<h3 className="font-bold text-xl mb-3">

{item.title}

</h3>


<p className="text-gray-600 text-sm">

{item.desc}

</p>


</div>

))

}


</div>


</section>









{/* Equipment */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-green-900 text-center mb-8">

Laboratory Equipment & Resources

</h2>


<div className="grid md:grid-cols-2 gap-5">


{

equipment.map((item,index)=>(


<div 
key={index}
className="flex gap-3 items-center bg-gray-100 p-4 rounded-lg"
>


<FaCheckCircle className="text-green-600"/>


<p>{item}</p>


</div>


))

}


</div>


</div>


</section>









{/* Practical Activities */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-center text-green-900 mb-8">

Veterinary Laboratory Practical Activities

</h2>



<div className="grid md:grid-cols-2 gap-6">


{

activities.map((item,index)=>(


<div
key={index}
className="bg-green-900 text-white p-5 rounded-xl"
>


<FaVial className="text-yellow-300 text-3xl mb-3"/>


{item}


</div>


))


}


</div>


</section>









{/* Learning */}

<section className="bg-green-900 text-white py-12">


<div className="max-w-6xl mx-auto text-center px-6">


<FaBookMedical className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Practical Veterinary Education

</h2>


<p className="mt-4">

The Veterinary Lab at RPI bridges theoretical knowledge with practical
skills and prepares students for professional veterinary services.

</p>


</div>


</section>









{/* Benefits */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-green-900 text-center mb-8">

Benefits for Students

</h2>


<div className="grid md:grid-cols-3 gap-6">


{

benefits.map((item,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6"
>


<FaHeartbeat className="text-4xl text-green-600 mb-4"/>


<p className="font-semibold">
{item}
</p>


</div>


))

}


</div>


</section>









{/* Rules */}

<section className="bg-blue-900 py-12">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-3xl text-white font-bold text-center mb-8">

Veterinary Lab Rules

</h2>


<div className="bg-white rounded-xl p-8">


{

rules.map((rule,index)=>(

<p key={index} className="mb-4">

{index+1}. {rule}

</p>

))

}


</div>


</div>


</section>



</div>

);

};


export default VeterinaryLab;