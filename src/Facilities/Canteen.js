import React from "react";

import {
  FaUtensils,
  FaCoffee,
  FaAppleAlt,
  FaUsers,
  FaWater,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaGraduationCap,
  FaStore,
} from "react-icons/fa";
 


const Canteen = () => {


const facilities = [

{
icon:<FaUtensils/>,
title:"Quality Food Service",
desc:"Rolpa Polytechnic Institute Canteen provides fresh and quality food items for students, teachers and staff members."
},

{
icon:<FaAppleAlt/>,
title:"Healthy Meals",
desc:"The canteen focuses on providing nutritious meals and snacks to support students' health and daily learning activities."
},

{
icon:<FaWater/>,
title:"Clean Drinking Water",
desc:"Safe and clean drinking water facility is available for students and campus members."
},

{
icon:<FaUsers/>,
title:"Student Friendly Environment",
desc:"The canteen provides a comfortable place where students can relax and interact during break time."
}

];



const foodItems=[

"Daily lunch and meal service",

"Tea, coffee and light snacks",

"Healthy food options",

"Affordable price for students",

"Seasonal food items",

"Clean and hygienic preparation"

];



const benefits=[

"Provides convenient food facility inside campus",

"Saves students' time during college hours",

"Supports healthy eating habits",

"Creates a social interaction place for students",

"Provides affordable food services"

];



const rules=[

"Maintain cleanliness in the canteen area.",

"Dispose waste in proper places.",

"Food should be prepared and served hygienically.",

"Students should maintain discipline while using canteen facilities.",

"Respect canteen staff and other users."

];




return (

<div className="bg-gray-50">



{/* Hero Section */}

<section className="bg-gradient-to-r from-orange-900 to-yellow-600 text-white py-16">


<div className="max-w-7xl mx-auto px-6 text-center">


<FaUtensils className="text-6xl mx-auto text-yellow-200 mb-5"/>


<h1 className="text-5xl font-bold">

Rolpa Polytechnic Institute Canteen

</h1>


<p className="mt-5 text-lg max-w-3xl mx-auto text-gray-100">

A comfortable food and refreshment facility providing hygienic,
affordable and quality food services for students, teachers and
staff of Rolpa Polytechnic Institute.

</p>


</div>


</section>









{/* About Canteen */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10 items-center">


<div>


<h2 className="text-3xl font-bold text-orange-900 mb-5">

About RPI Canteen

</h2>


<p className="text-gray-600 leading-relaxed">

The <b>Rolpa Polytechnic Institute (RPI) Canteen</b> is an important
campus facility that provides food and refreshment services for
students, teachers and staff members.

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The canteen creates a friendly environment where students can enjoy
healthy meals, snacks and beverages during college breaks.

</p>


</div>







<div className="bg-white rounded-xl shadow-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">


<div>

<FaStore className="text-4xl text-orange-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Campus
</h3>

<p>
Facility
</p>

</div>



<div>

<FaCoffee className="text-4xl text-yellow-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Food
</h3>

<p>
Service
</p>

</div>




<div>

<FaUsers className="text-4xl text-blue-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Students
</h3>

<p>
Support
</p>

</div>




<div>

<FaClock className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Daily
</h3>

<p>
Service
</p>

</div>


</div>


</div>


</div>


</section>









{/* Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-orange-900 mb-10">

Canteen Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{

facilities.map((item,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
>


<div className="text-4xl text-orange-600 mb-4">

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









{/* Food Services */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-orange-900 text-center mb-8">

Food Services Available

</h2>



<div className="grid md:grid-cols-2 gap-5">


{

foodItems.map((item,index)=>(


<div
key={index}
className="flex gap-3 items-center bg-gray-100 p-4 rounded-lg"
>


<FaCheckCircle className="text-orange-600"/>


<p>{item}</p>


</div>


))

}


</div>


</div>


</section>









{/* Hygiene */}

<section className="bg-orange-900 text-white py-12">


<div className="max-w-6xl mx-auto text-center px-6">


<FaShieldAlt className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Hygienic Food Environment

</h2>


<p className="mt-4">

RPI Canteen maintains cleanliness, food safety and proper hygiene
standards to provide a healthy environment for everyone.

</p>


</div>


</section>









{/* Student Benefits */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-orange-900 text-center mb-8">

Benefits for Students

</h2>



<div className="grid md:grid-cols-3 gap-6">


{

benefits.map((item,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6"
>


<FaGraduationCap className="text-4xl text-orange-600 mb-4"/>


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

Canteen Rules

</h2>



<div className="bg-white rounded-xl p-8">


{

rules.map((rule,index)=>(


<p key={index} className="mb-4 text-gray-700">

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


export default Canteen;