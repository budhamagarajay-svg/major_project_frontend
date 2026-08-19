import React from "react";
import {
  FaSeedling,
  FaTractor,
  FaLeaf,
  FaFlask,
  FaTree,
  FaAppleAlt,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
  FaPaw,
  FaWater,
} from "react-icons/fa";


const AgricultureFarm = () => {


const facilities = [

{
icon:<FaSeedling/>,
title:"Crop Production Area",
desc:"Practical farming area where students learn crop production, vegetable farming, seed technology and modern agricultural practices."
},

{
icon:<FaLeaf/>,
title:"Plant Science Practice",
desc:"Students gain practical knowledge about plant identification, cultivation, soil management and plant protection techniques."
},

{
icon:<FaPaw/>,
title:"Animal Science Support",
desc:"The agriculture farm supports animal science students through livestock management and practical agricultural activities."
},

{
icon:<FaFlask/>,
title:"Agriculture Research",
desc:"Students perform field experiments, project works and practical research activities related to agriculture."
}

];



const activities=[

"Crop cultivation and management practice",

"Vegetable and horticulture production",

"Soil testing and soil management",

"Seed production and preservation",

"Organic farming techniques",

"Plant disease identification",

"Agriculture project work",

"Field visit and practical training"

];



const benefits=[

"Develop practical farming skills",

"Understand modern agricultural technology",

"Learn sustainable agriculture practices",

"Improve entrepreneurship skills",

"Prepare skilled agricultural technicians"

];




return (

<div className="bg-gray-50">



{/* Hero Section */}

<section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-16">


<div className="max-w-7xl mx-auto text-center px-6">


<FaTractor className="text-6xl mx-auto text-yellow-300 mb-5"/>


<h1 className="text-5xl font-bold">

Rolpa Polytechnic Institute Agriculture Farm

</h1>


<p className="mt-5 text-lg max-w-3xl mx-auto text-gray-200">

A practical learning environment where Agriculture students gain
hands-on experience in crop production, farming technology and
sustainable agriculture practices.

</p>


</div>

</section>








{/* About Farm */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10">


<div>


<h2 className="text-3xl font-bold text-green-900 mb-5">

About Agriculture Farm

</h2>


<p className="text-gray-600 leading-relaxed">

The Agriculture Farm of <b>Rolpa Polytechnic Institute (RPI)</b>
is an important practical facility designed to support students
of Diploma in Agriculture (Plant Science) and Agriculture
(Animal Science).

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The farm provides students with opportunities to apply classroom
knowledge into real agricultural practices including crop
production, farming management, research activities and field work.

</p>


</div>






<div className="bg-white shadow-xl rounded-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">



<div>

<FaSeedling className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Plant
</h3>

<p>
Production
</p>

</div>




<div>

<FaPaw className="text-4xl text-orange-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Animal
</h3>

<p>
Practice
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









{/* Farm Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-green-900 mb-10">

Agriculture Farm Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{

facilities.map((item,index)=>(


<div
key={index}
className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition"
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









{/* Practical Activities */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-center text-green-900 mb-8">

Practical Activities

</h2>



<div className="grid md:grid-cols-2 gap-5">


{

activities.map((item,index)=>(


<div
key={index}
className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg"
>


<FaCheckCircle className="text-green-600"/>


<p>
{item}
</p>


</div>


))


}


</div>


</div>


</section>









{/* Agriculture Learning */}

<section className="bg-green-900 text-white py-12">


<div className="max-w-6xl mx-auto px-6 text-center">


<FaTree className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Learning Through Practical Agriculture

</h2>


<p className="mt-4">

RPI Agriculture Farm helps students become skilled agricultural
technicians by combining theoretical knowledge with practical
field experience.

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


<FaAppleAlt className="text-4xl text-green-600 mb-4"/>


<p className="font-semibold">

{item}

</p>


</div>


))


}


</div>


</section>






</div>

);

};


export default AgricultureFarm;