import React from "react";
import {
  FaLeaf,
  FaGraduationCap,
  FaBookOpen,
  FaClock,
  FaMoneyBill,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";


const DiplomaAgriculture = () => {


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
text-center
py-20
">


<div className="
w-32
h-32
mx-auto
bg-white
rounded-full
flex
items-center
justify-center
text-blue-900
text-6xl
shadow-xl
">

<FaLeaf/>

</div>



<h1 className="
text-5xl
font-extrabold
mt-6
">

Diploma in Agriculture

</h1>


<p className="
text-2xl
mt-4
font-semibold
">

Plant Science

</p>


<p className="mt-3 text-lg">

Rolpa Polytechnic Institute

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
md:grid-cols-4
gap-5
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

].map((item,index)=>(


<div
key={index}
className="
bg-white
shadow-lg
rounded-xl
p-5
text-center
font-bold
text-blue-900
hover:bg-yellow-400
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
text-4xl
font-bold
text-blue-900
mb-6
flex
items-center
gap-3
">

<FaBookOpen/>

Course Overview

</h2>



<p className="
text-gray-700
text-lg
leading-9
">


Diploma in Agriculture (Plant Science) is designed to produce
qualified Junior Technicians (JT) who can work in public and
private agriculture sectors and community development areas
of Nepal.



<br/><br/>


This curriculum focuses on Agriculture Plant Science related
knowledge and practical skills required for professional work.
The program consists of six semesters completed within three
years.



<br/><br/>


The first year focuses on foundation and core agricultural
science subjects. The second year provides basic disciplinary
knowledge of Agriculture Plant Science. The third year focuses
on Agriculture Extension, Crop Production, Seed Technology,
project work and internship programs.



<br/><br/>


The curriculum follows the "Must Know and Must Do" principle
to develop competent and highly employable middle-level
technical manpower in agriculture.


</p>


</div>


</section>









{/* INFORMATION CARDS */}



<section className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-3
gap-8
pb-16
">



<div className="
bg-white
rounded-2xl
shadow-xl
p-8
">


<FaGraduationCap className="
text-blue-900
text-5xl
"/>


<h3 className="
text-2xl
font-bold
mt-5
text-blue-900
">

Course Objectives

</h3>


<p className="
mt-4
text-gray-700
leading-7
">

To develop skilled agriculture technicians with practical
knowledge in crop production, seed technology and agriculture
extension services.

</p>


</div>








<div className="
bg-white
rounded-2xl
shadow-xl
p-8
">


<FaClock className="
text-blue-900
text-5xl
"/>


<h3 className="
text-2xl
font-bold
mt-5
text-blue-900
">

Duration

</h3>


<p className="
mt-4
text-gray-700
text-lg
">

3 Years

<br/>

6 Semesters

</p>


</div>








<div className="
bg-white
rounded-2xl
shadow-xl
p-8
">


<FaUsers className="
text-blue-900
text-5xl
"/>


<h3 className="
text-2xl
font-bold
mt-5
text-blue-900
">

Admission Criteria

</h3>


<p className="
mt-4
text-gray-700
leading-7
">

Students who have completed SEE/SLC or equivalent
qualification are eligible according to CTEVT rules.

</p>


</div>


</section>









{/* DETAILS */}



<section className="
bg-blue-900
text-white
py-16
">


<div className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-3
gap-8
">



<div className="
bg-white/10
rounded-xl
p-8
">


<FaMoneyBill className="
text-yellow-400
text-4xl
"/>


<h3 className="
text-2xl
font-bold
mt-4
">

Course Fee

</h3>


<p className="mt-3">

As per CTEVT and institutional fee structure.

</p>


</div>






<div className="
bg-white/10
rounded-xl
p-8
">


<FaUsers className="
text-yellow-400
text-4xl
"/>


<h3 className="
text-2xl
font-bold
mt-4
">

Quota

</h3>


<p className="mt-3">

According to CTEVT approved admission quota.

</p>


</div>






<div className="
bg-white/10
rounded-xl
p-8
">


<FaBookOpen className="
text-yellow-400
text-4xl
"/>


<h3 className="
text-2xl
font-bold
mt-4
">

Syllabus

</h3>


<p className="mt-3">

Based on CTEVT Diploma in Agriculture Plant Science curriculum.

</p>


</div>


</div>


</section>









{/* FOOTER */}



<footer className="
bg-gray-900
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


<h3 className="
text-yellow-400
text-2xl
font-bold
">

ABOUT US

</h3>


<p className="
mt-4
text-gray-300
leading-7
">

Established in 2074 BS by Council for Technical Education
and Vocational Training (CTEVT). Provide skill based
technical education in Nepal.

</p>


</div>






<div>


<h3 className="
text-yellow-400
text-2xl
font-bold
">

PROGRAMS

</h3>


<p className="mt-4 text-gray-300">

Diploma in Information Technology

<br/>

Diploma in Agriculture (Plant Science)

<br/>

Diploma in Agriculture (Animal Science)

<br/>

Vocational Training Courses

</p>


</div>






<div>


<h3 className="
text-yellow-400
text-2xl
font-bold
">

QUICK LINK

</h3>


<p className="
mt-4
text-gray-300
leading-8
">

CTEVT Nepal

<br/>

CTEVT Lumbini Province

<br/>

TITI

<br/>

NSTB

</p>


</div>






<div>


<h3 className="
text-yellow-400
text-2xl
font-bold
">

CONTACT

</h3>


<p className="
mt-4
text-gray-300
leading-8
">

📍 Rolpa Municipality-1, Mewang, Rolpa

<br/>

<FaPhoneAlt className="inline"/> 086-594026

<br/>

9857824891

<br/>

<FaEnvelope className="inline"/> rolpapolytechnicinstitute@gmail.com

</p>


</div>


</div>





<div className="
border-t
border-gray-700
text-center
mt-10
pt-5
text-gray-400
">

Copyright 2014-2025 RPI | All Rights Reserved

</div>


</footer>



</div>

);

};


export default DiplomaAgriculture;