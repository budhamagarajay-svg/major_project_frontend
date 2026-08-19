import React from "react";

import {
  FaCalendarAlt,
  FaBookOpen,
  FaClipboardCheck,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFileAlt
} from "react-icons/fa";


const AcademicCalendar = () => {


const events = [

{
month:"Baishakh",
title:"New Academic Session Begins",
description:
"Student admission, orientation program and regular classes start according to CTEVT academic schedule."
},


{
month:"Jestha - Ashadh",
title:"Regular Teaching & Internal Activities",
description:
"Theory classes, practical sessions, assignments and laboratory activities are conducted."
},


{
month:"Shrawan - Bhadra",
title:"Internal Examination",
description:
"Mid-term examinations, practical evaluation and student performance assessment."
},


{
month:"Asoj - Kartik",
title:"Semester Teaching Activities",
description:
"Completion of course units, field visits, project preparation and practical learning."
},


{
month:"Mangsir - Poush",
title:"Semester Examination",
description:
"CTEVT semester examinations including theory and practical examinations."
},


{
month:"Magh - Chaitra",
title:"Result & Next Semester Preparation",
description:
"Result publication, new semester registration and academic planning."
}

];



const features=[

{
icon:<FaBookOpen/>,
title:"Semester System",
text:"Diploma programs follow CTEVT semester-based academic structure."
},


{
icon:<FaClipboardCheck/>,
title:"Evaluation System",
text:"Internal and external evaluation system is applied for student assessment."
},


{
icon:<FaGraduationCap/>,
title:"Practical Learning",
text:"Laboratory work, field visits, project work and internship are included."
},


{
icon:<FaChalkboardTeacher/>,
title:"Quality Teaching",
text:"Experienced instructors provide technical and vocational education."
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

Academic Calendar

</h1>



<p className="
text-xl
mt-4
font-semibold
">

Rolpa Polytechnic Institute

</p>



<p className="mt-3">

CTEVT Diploma Level Academic Schedule

</p>


</section>








{/* INTRODUCTION */}



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
mb-5
flex
items-center
gap-3
">

<FaFileAlt/>

Academic Year Overview

</h2>



<p className="
text-gray-700
text-lg
leading-9
">


Rolpa Polytechnic Institute follows the academic guidelines
of the Council for Technical Education and Vocational Training
(CTEVT).

The academic year includes student admission, orientation,
regular classroom teaching, practical laboratory work,
internal evaluation, semester examinations, results and
academic improvement activities.


Diploma programs such as Agriculture Plant Science,
Agriculture Animal Science and Information Technology are
conducted under the semester system.


</p>


</div>


</section>









{/* CALENDAR TIMELINE */}


<section className="
max-w-7xl
mx-auto
px-6
pb-14
">


<h2 className="
text-4xl
font-bold
text-blue-900
text-center
mb-10
">

Annual Academic Schedule

</h2>



<div className="
grid
md:grid-cols-2
gap-8
">


{

events.map((event,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
shadow-lg
p-8
border-l-8
border-blue-700
hover:shadow-2xl
transition
"
>


<h3 className="
text-yellow-600
font-bold
text-xl
">

{event.month}

</h3>



<h4 className="
text-2xl
font-bold
text-blue-900
mt-3
">

{event.title}

</h4>



<p className="
text-gray-600
mt-4
leading-7
">

{event.description}

</p>


</div>


))


}



</div>


</section>









{/* FEATURES */}



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
text-center
mb-10
">

Academic System

</h2>



<div className="
grid
md:grid-cols-4
gap-7
">


{

features.map((item,index)=>(


<div
key={index}
className="
bg-white/10
rounded-2xl
p-7
text-center
"
>


<div className="
text-yellow-400
text-5xl
flex
justify-center
mb-5
">

{item.icon}

</div>



<h3 className="
text-xl
font-bold
">

{item.title}

</h3>



<p className="mt-3 text-gray-200">

{item.text}

</p>


</div>


))


}


</div>


</div>


</section>









{/* DOWNLOAD */}


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
text-center
">


<h2 className="
text-3xl
font-bold
text-blue-900
">

Download Academic Calendar

</h2>


<p className="
text-gray-600
mt-4
">

Official CTEVT academic calendar and examination notices
are updated regularly.

</p>



<button className="
mt-7
bg-blue-700
text-white
px-8
py-3
rounded-lg
hover:bg-blue-900
">

View Calendar PDF

</button>


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
mt-5
text-gray-400
">

© 2026 Rolpa Polytechnic Institute | All Rights Reserved

</p>


</footer>




</div>

);

};


export default AcademicCalendar;