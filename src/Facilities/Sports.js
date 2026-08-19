import React from "react";
import {
  FaRunning,
  FaFutbol,
  FaTrophy,
  FaUsers,
  FaMedal,
  FaBasketballBall,
  FaVolleyballBall,
  FaDumbbell,
  FaFlagCheckered,
  FaCheckCircle,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";


const Sports = () => {


const sportsFacilities = [

{
icon:<FaFutbol/>,
title:"Outdoor Sports",
desc:"RPI provides outdoor sports activities that encourage students to improve physical fitness, teamwork and leadership skills."
},

{
icon:<FaBasketballBall/>,
title:"Indoor Games",
desc:"Students participate in indoor games for recreation, concentration and mental development."
},

{
icon:<FaTrophy/>,
title:"Annual Sports Week",
desc:"Rolpa Polytechnic Institute organizes Sports Week where students participate in different sports competitions and activities."
},

{
icon:<FaUsers/>,
title:"Student Participation",
desc:"Sports activities provide opportunities for students from different programs to participate and demonstrate their talents."
}

];



const events=[

"Football competition",

"Volleyball competition",

"Basketball and indoor games",

"Table tennis competition",

"Badminton competition",

"Athletics and running events",

"Team games and recreational activities",

"Prize distribution ceremony"

];



const benefits=[

"Improves physical fitness and health",

"Develops teamwork and leadership skills",

"Creates friendship among students",

"Reduces academic stress",

"Encourages discipline and confidence"

];



const features=[

"Annual Sports Week celebration",

"Participation from different departments",

"Sports competition management",

"Certificates and prizes for winners",

"Encouragement of student talent",

"Healthy competitive environment"

];



const rules=[

"Students must follow sports discipline and fair play rules.",

"Respect opponents, referees and team members.",

"Use sports equipment carefully.",

"Maintain safety during games.",

"Follow instructions from sports coordinators."

];



return (

<div className="bg-gray-50">



{/* Hero */}

<section className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-16">


<div className="max-w-7xl mx-auto text-center px-6">


<FaRunning className="text-6xl mx-auto text-yellow-300 mb-5"/>


<h1 className="text-5xl font-bold">

Rolpa Polytechnic Institute Sports

</h1>


<p className="mt-5 text-lg max-w-3xl mx-auto text-gray-200">

Promoting physical fitness, teamwork and student talent through
sports activities and annual Sports Week programs at RPI.

</p>


</div>


</section>







{/* About */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10 items-center">


<div>


<h2 className="text-3xl font-bold text-blue-900 mb-5">

About Sports Facility

</h2>


<p className="text-gray-600 leading-relaxed">

Sports activities at <b>Rolpa Polytechnic Institute (RPI)</b>
play an important role in developing students' physical ability,
confidence and teamwork.

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The institute organizes different sports competitions including
an annual <b>Sports Week</b> where students from various programs
actively participate and showcase their skills.

</p>


</div>







<div className="bg-white shadow-xl rounded-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">


<div>

<FaTrophy className="text-4xl text-yellow-500 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Sports
</h3>

<p>
Week
</p>

</div>



<div>

<FaUsers className="text-4xl text-blue-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Students
</h3>

<p>
Participation
</p>

</div>




<div>

<FaMedal className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Awards
</h3>

<p>
Achievement
</p>

</div>




<div>

<FaGraduationCap className="text-4xl text-purple-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
RPI
</h3>

<p>
Campus
</p>

</div>


</div>


</div>


</div>


</section>









{/* Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Sports Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{

sportsFacilities.map((item,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
>


<div className="text-4xl text-blue-600 mb-4">

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









{/* Sports Week */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-blue-900 text-center mb-8">

RPI Annual Sports Week

</h2>


<p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">

Rolpa Polytechnic Institute organizes Sports Week to encourage
student participation, physical development and healthy competition.
Students from different academic programs participate in various
sports events and activities.

</p>



<div className="grid md:grid-cols-2 gap-5">


{

events.map((item,index)=>(


<div
key={index}
className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg"
>


<FaCheckCircle className="text-green-600"/>


<p>{item}</p>


</div>


))

}


</div>


</div>


</section>









{/* Events */}

<section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-12">


<div className="max-w-6xl mx-auto px-6 text-center">


<FaCalendarAlt className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Sports Events and Celebration

</h2>


<p className="mt-4">

Sports Week creates an enjoyable campus environment where students
develop teamwork, leadership and sportsmanship.

</p>


</div>


</section>









{/* Features */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-blue-900 text-center mb-8">

Sports Program Features

</h2>



<div className="grid md:grid-cols-3 gap-6">


{

features.map((item,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6"
>


<FaFlagCheckered className="text-4xl text-blue-600 mb-4"/>


<p className="font-semibold">

{item}

</p>


</div>


))

}


</div>


</section>









{/* Benefits */}

<section className="bg-gray-100 py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-blue-900 text-center mb-8">

Benefits of Sports Activities

</h2>


<div className="grid md:grid-cols-3 gap-6">


{

benefits.map((item,index)=>(


<div
key={index}
className="bg-white rounded-xl shadow-lg p-6"
>


<FaDumbbell className="text-4xl text-green-600 mb-4"/>


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

<section className="bg-blue-900 py-12">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-3xl text-white font-bold text-center mb-8">

Sports Rules

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


export default Sports;