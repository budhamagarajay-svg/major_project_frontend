import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaDownload
} from "react-icons/fa";


const ClassRoutine = () => {


const routineData = [
  {
    day:"Sunday",
    classes:[
      {
        time:"6:00 AM - 7:00 AM",
        subject:"Agriculture Science",
        teacher:"Department of Agriculture"
      },
      {
        time:"7:00 AM - 8:00 AM",
        subject:"Computer Fundamentals",
        teacher:"IT Department"
      },
      {
        time:"8:30 AM - 9:30 AM",
        subject:"Practical / Laboratory",
        teacher:"Subject Instructor"
      }
    ]
  },


  {
    day:"Monday",
    classes:[
      {
        time:"6:00 AM - 7:00 AM",
        subject:"Plant Science",
        teacher:"Agriculture Department"
      },
      {
        time:"7:00 AM - 8:00 AM",
        subject:"Programming Concept",
        teacher:"IT Department"
      },
      {
        time:"8:30 AM - 9:30 AM",
        subject:"Field Work",
        teacher:"Practical Instructor"
      }
    ]
  },


  {
    day:"Tuesday",
    classes:[
      {
        time:"6:00 AM - 7:00 AM",
        subject:"Animal Science",
        teacher:"Veterinary Department"
      },
      {
        time:"7:00 AM - 8:00 AM",
        subject:"Database Management",
        teacher:"IT Department"
      },
      {
        time:"8:30 AM - 9:30 AM",
        subject:"Laboratory Work",
        teacher:"Lab Instructor"
      }
    ]
  },


  {
    day:"Wednesday",
    classes:[
      {
        time:"6:00 AM - 7:00 AM",
        subject:"Agriculture Extension",
        teacher:"Agriculture Department"
      },
      {
        time:"7:00 AM - 8:00 AM",
        subject:"Web Technology",
        teacher:"IT Department"
      },
      {
        time:"8:30 AM - 9:30 AM",
        subject:"Project Work",
        teacher:"Course Coordinator"
      }
    ]
  },


  {
    day:"Thursday",
    classes:[
      {
        time:"6:00 AM - 7:00 AM",
        subject:"Crop Production",
        teacher:"Agriculture Department"
      },
      {
        time:"7:00 AM - 8:00 AM",
        subject:"Computer Network",
        teacher:"IT Department"
      },
      {
        time:"8:30 AM - 9:30 AM",
        subject:"Practical Class",
        teacher:"Lab Instructor"
      }
    ]
  }

];



return (

<div className="pt-48 bg-gray-100 min-h-screen font-sans">


{/* HERO */}

<section className="
mx-6
rounded-3xl
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

<FaCalendarAlt/>

</div>



<h1 className="
text-5xl
font-extrabold
mt-6
">

Class Routine

</h1>


<p className="
text-xl
mt-4
font-semibold
">

Rolpa Polytechnic Institute

</p>


<p className="mt-3">

CTEVT Diploma Level Class Schedule

</p>


</section>





{/* INTRO */}

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
flex
items-center
gap-3
">

<FaBookOpen/>

Class Routine Information

</h2>


<p className="
mt-5
text-gray-700
text-lg
leading-8
">

Rolpa Polytechnic Institute follows the academic
schedule according to the guidelines of Council for
Technical Education and Vocational Training (CTEVT).

The class routine includes theory classes, practical
sessions, laboratory activities, field work and project
based learning for Diploma in Agriculture, Diploma in
Information Technology and other technical programs.

</p>


</div>


</section>








{/* ROUTINE TABLE */}


<section className="
max-w-7xl
mx-auto
px-6
pb-14
">


<h2 className="
text-4xl
font-bold
text-center
text-blue-900
mb-10
">

Weekly Class Schedule

</h2>



<div className="
grid
md:grid-cols-2
gap-8
">


{

routineData.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
"
>


<div className="
bg-blue-900
text-white
p-5
flex
items-center
gap-3
">


<FaClock className="text-yellow-400 text-2xl"/>


<h3 className="
text-2xl
font-bold
">

{item.day}

</h3>


</div>



{

item.classes.map((cls,i)=>(


<div
key={i}
className="
p-6
border-b
hover:bg-gray-50
"
>


<h4 className="
text-xl
font-bold
text-blue-800
">

{cls.subject}

</h4>


<div className="
mt-2
flex
items-center
gap-2
text-gray-600
">

<FaClock/>

{cls.time}

</div>



<div className="
mt-2
flex
items-center
gap-2
text-gray-600
">

<FaChalkboardTeacher/>

{cls.teacher}

</div>


</div>


))


}



</div>


))


}


</div>


</section>









{/* PROGRAMS */}


<section className="
bg-blue-900
text-white
py-14
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-3
gap-8
">


<div className="
bg-white/10
rounded-2xl
p-8
text-center
">


<FaUserGraduate
className="
text-yellow-400
text-5xl
mx-auto
mb-4
"
/>


<h3 className="
text-2xl
font-bold
">

Diploma Programs

</h3>


<p className="mt-3">

Diploma in Agriculture, Veterinary and Information Technology.

</p>


</div>





<div className="
bg-white/10
rounded-2xl
p-8
text-center
">


<FaBookOpen
className="
text-yellow-400
text-5xl
mx-auto
mb-4
"
/>


<h3 className="
text-2xl
font-bold
">

Practical Learning

</h3>


<p className="mt-3">

Laboratory, field visit and project based education.

</p>


</div>





<div className="
bg-white/10
rounded-2xl
p-8
text-center
">


<FaDownload
className="
text-yellow-400
text-5xl
mx-auto
mb-4
"
/>


<h3 className="
text-2xl
font-bold
">

Download Routine

</h3>


<p className="mt-3">

Official updated class routine will be available here.

</p>


</div>


</div>


</section>








{/* FOOTER */}


<footer className="
bg-gray-900
text-white
text-center
py-10
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


<p className="mt-3">

Phone: 086-594026 | Mobile: 9857824891

</p>


<p className="
mt-3
text-gray-400
">

Email: rolpapolytechnicinstitute@gmail.com

</p>


<p className="
mt-5
text-gray-500
">

© 2026 Rolpa Polytechnic Institute | All Rights Reserved

</p>


</footer>


</div>

);


};


export default ClassRoutine;