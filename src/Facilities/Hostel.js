import React from "react";
import {
  FaBuilding,
  FaBed,
  FaUsers,
  FaFemale,
  FaShieldAlt,
  FaWifi,
  FaUtensils,
  FaBookReader,
  FaWater,
  FaBolt,
  FaCheckCircle,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";


const Hostel = () => {


const facilities = [

{
icon:<FaBed/>,
title:"Comfortable Rooms",
desc:"RPI Girls Hostel provides comfortable accommodation facilities with proper space and a peaceful environment for students."
},

{
icon:<FaUtensils/>,
title:"Dining Facility",
desc:"Nutritious food and dining arrangements are provided to support students' health and learning."
},

{
icon:<FaBookReader/>,
title:"Study Environment",
desc:"The hostel provides a suitable environment where students can focus on their studies and academic activities."
},

{
icon:<FaShieldAlt/>,
title:"Safe Environment",
desc:"The girls hostel ensures a secure and disciplined environment with proper management and supervision."
}

];



const hostelFeatures=[

"Separate hostel facility for female students",

"Safe and secure residential environment",

"Rooms with basic accommodation facilities",

"Clean drinking water facility",

"Electricity and lighting facility",

"Internet connectivity support",

"Common study environment",

"Proper hostel management system"

];



const rules=[

"Students must follow hostel discipline and regulations.",

"Maintain cleanliness inside rooms and hostel premises.",

"Visitors must follow hostel visiting rules.",

"Students must respect hostel timing and management instructions.",

"Damage to hostel property must be reported immediately."

];



const benefits=[

"Safe accommodation for female students",

"Reduces travel difficulties",

"Better focus on academic activities",

"Creates friendly learning environment",

"Supports students from different locations"

];




return (

<div className="bg-gray-50">



{/* Hero Section */}

<section className="bg-gradient-to-r from-pink-900 to-purple-600 text-white py-16">


<div className="max-w-7xl mx-auto px-6 text-center">


<FaFemale className="text-6xl mx-auto text-yellow-300 mb-5"/>


<h1 className="text-5xl font-bold">

Rolpa Polytechnic Institute Girls Hostel

</h1>


<p className="mt-5 max-w-3xl mx-auto text-lg text-gray-200">

A safe, comfortable and supportive residential facility for female
students of Rolpa Polytechnic Institute.

</p>


</div>


</section>







{/* About Hostel */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10 items-center">


<div>


<h2 className="text-3xl font-bold text-purple-900 mb-5">

About RPI Girls Hostel

</h2>


<p className="text-gray-600 leading-relaxed">

The <b>Girls Hostel of Rolpa Polytechnic Institute (RPI)</b> provides
safe accommodation facilities for female students studying at the
institute.

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The hostel helps students from different geographical locations
continue their education by providing a comfortable living environment,
academic support and proper supervision.

</p>


</div>








<div className="bg-white shadow-xl rounded-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">


<div>

<FaHome className="text-4xl text-purple-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Girls
</h3>

<p>
Hostel
</p>

</div>




<div>

<FaBed className="text-4xl text-pink-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Rooms
</h3>

<p>
Accommodation
</p>

</div>





<div>

<FaUsers className="text-4xl text-blue-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Students
</h3>

<p>
Residential Support
</p>

</div>





<div>

<FaGraduationCap className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
RPI
</h3>

<p>
Campus Facility
</p>

</div>


</div>


</div>


</div>


</section>









{/* Hostel Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-purple-900 mb-10">

Hostel Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{

facilities.map((item,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
>


<div className="text-4xl text-purple-600 mb-4">

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









{/* Available Facilities */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-purple-900 text-center mb-8">

Hostel Features

</h2>



<div className="grid md:grid-cols-2 gap-5">


{

hostelFeatures.map((item,index)=>(


<div
key={index}
className="flex gap-3 items-center bg-gray-100 p-4 rounded-lg"
>


<FaCheckCircle className="text-purple-600"/>


<p>{item}</p>


</div>


))

}


</div>


</div>


</section>









{/* Student Support */}

<section className="bg-purple-900 text-white py-12">


<div className="max-w-6xl mx-auto px-6 text-center">


<FaShieldAlt className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Safe Living and Learning Environment

</h2>


<p className="mt-4">

RPI Girls Hostel supports female students by providing a secure place
to live, study and participate in academic activities.

</p>


</div>


</section>









{/* Extra Facilities */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-purple-900 text-center mb-8">

Additional Facilities

</h2>


<div className="grid md:grid-cols-4 gap-6">


<div className="bg-white shadow-lg rounded-xl p-6 text-center">

<FaWifi className="text-4xl text-purple-600 mx-auto mb-3"/>

<h3 className="font-bold">
Internet Support
</h3>

</div>



<div className="bg-white shadow-lg rounded-xl p-6 text-center">

<FaWater className="text-4xl text-blue-600 mx-auto mb-3"/>

<h3 className="font-bold">
Clean Water
</h3>

</div>



<div className="bg-white shadow-lg rounded-xl p-6 text-center">

<FaBolt className="text-4xl text-yellow-500 mx-auto mb-3"/>

<h3 className="font-bold">
Electricity
</h3>

</div>




<div className="bg-white shadow-lg rounded-xl p-6 text-center">

<FaBookReader className="text-4xl text-green-600 mx-auto mb-3"/>

<h3 className="font-bold">
Study Area
</h3>

</div>


</div>


</section>









{/* Benefits */}

<section className="bg-gray-100 py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-purple-900 text-center mb-8">

Benefits for Students

</h2>



<div className="grid md:grid-cols-3 gap-6">


{

benefits.map((item,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6"
>


<FaGraduationCap className="text-4xl text-purple-600 mb-4"/>


<p className="font-semibold">
{item}
</p>


</div>


))


}


</div>


</div>


</section>









{/* Rules */}

<section className="bg-purple-900 py-12">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-3xl text-white font-bold text-center mb-8">

Hostel Rules

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


export default Hostel;