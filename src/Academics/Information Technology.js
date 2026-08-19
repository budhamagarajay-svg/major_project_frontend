import React from "react";

import {
  FaLaptopCode,
  FaGraduationCap,
  FaBookOpen,
  FaClock,
  FaMoneyBillWave,
  FaUsers,
  FaClipboardCheck,
  FaPhoneAlt,
  FaDatabase,
  FaCode,
  FaNetworkWired
} from "react-icons/fa";


const InformationTechnology = () => {


const objectives = [

"Produce competent middle-level IT technicians for public and private organizations.",

"Develop skills required in programming, database management and computer applications.",

"Prepare technicians who can work in communication, banking and business sectors.",

"Create employment and self-employment opportunities in the IT sector.",

"Develop professional attitude and problem-solving skills.",

"Reduce dependency on foreign technical manpower."

];



const details = [

{
icon:<FaClock/>,
title:"Duration",
value:"3 Years (6 Semesters)"
},

{
icon:<FaMoneyBillWave/>,
title:"Course Fee",
value:"Rs. 60,000 Only"
},

{
icon:<FaUsers/>,
title:"Quota",
value:"40 Students"
},

{
icon:<FaClipboardCheck/>,
title:"Eligibility",
value:"SEE/SLC Passed or Equivalent"
}

];



return (

<div className="pt-48 bg-gray-100 min-h-screen font-sans">



{/* HERO */}

<section className="
mx-6
rounded-3xl
overflow-hidden
shadow-2xl
bg-gradient-to-r
from-blue-950
via-blue-700
to-cyan-500
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


<p className="mt-3 text-lg">

Constituent School of CTEVT

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
text-blue-900
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

details.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-2xl
shadow-lg
p-7
text-center
hover:shadow-2xl
transition
"
>


<div className="
text-blue-700
text-4xl
flex
justify-center
mb-4
">

{item.icon}

</div>



<h3 className="
text-xl
font-bold
">

{item.title}

</h3>


<p className="
text-gray-600
mt-3
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
text-blue-900
flex
items-center
gap-3
mb-6
">

<FaBookOpen/>

Course Overview

</h2>



<p className="
text-gray-700
text-lg
leading-9
">


Diploma in Information Technology (IT) is an emerging technical
program designed to produce skilled IT professionals who can work
in different sectors including software development, communication,
banking, business and government organizations.


The curriculum focuses on computer fundamentals, programming,
database management, networking, software development and
practical Information Communication Technology (ICT) skills.


This three-year program consists of six semesters where students
learn theoretical knowledge as well as practical skills through
laboratory work and project-based learning.



</p>



</div>


</section>







{/* SKILLS SECTION */}


<section className="
bg-blue-900
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
">

Major Areas of Study

</h2>



<div className="
grid
md:grid-cols-3
gap-8
">



<div className="
bg-white/10
rounded-2xl
p-8
">

<FaCode className="text-5xl text-cyan-300 mb-5"/>


<h3 className="
text-2xl
font-bold
">

Programming

</h3>


<p className="mt-3">

Learn programming concepts and software development skills.

</p>


</div>





<div className="
bg-white/10
rounded-2xl
p-8
">

<FaDatabase className="
text-5xl
text-cyan-300
mb-5
"/>


<h3 className="
text-2xl
font-bold
">

Database Management

</h3>


<p className="mt-3">

Develop skills in storing, managing and processing information.

</p>


</div>






<div className="
bg-white/10
rounded-2xl
p-8
">


<FaNetworkWired className="
text-5xl
text-cyan-300
mb-5
"/>


<h3 className="
text-2xl
font-bold
">

Networking & ICT

</h3>


<p className="mt-3">

Understand computer networks and communication technology.

</p>


</div>



</div>


</div>


</section>







{/* OBJECTIVES */}


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
text-blue-900
mb-8
flex
gap-3
items-center
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

objectives.map((obj,index)=>(

<div
key={index}
className="
bg-blue-50
rounded-xl
p-5
"
>

✓ {obj}

</div>


))

}


</div>


</div>


</section>







{/* ADMISSION */}


<section className="
bg-gray-900
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
mb-5
">

Admission Criteria

</h2>


<p className="text-lg leading-8">


Students must have passed SEE/SLC or equivalent according to
CTEVT admission guidelines. Students need required grades in
Mathematics, Science and English and must pass the entrance
examination conducted by CTEVT.


</p>


</div>


</section>








{/* FOOTER */}


<footer className="
bg-black
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


<p className="
mt-3
flex
justify-center
items-center
gap-2
">

<FaPhoneAlt/>

086-594026 | 9857824891

</p>


<p className="
mt-5
text-gray-400
">

© 2026 Rolpa Polytechnic Institute | All Rights Reserved

</p>


</footer>



</div>

);

};


export default InformationTechnology;