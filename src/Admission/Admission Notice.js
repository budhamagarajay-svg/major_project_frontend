import React from "react";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaClipboardCheck,
  FaFileAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload
} from "react-icons/fa";

const AdmissionNotice = () => {

const programs = [

{
title:"Diploma in Agriculture (Plant Science)",
duration:"3 Years (6 Semesters)",
quota:"40 Seats",
eligibility:"SEE Passed with GPA 1.6 or CTEVT Equivalent"
},

{
title:"Diploma in Agriculture (Animal Science)",
duration:"3 Years (6 Semesters)",
quota:"40 Seats",
eligibility:"SEE Passed with GPA 1.6 or CTEVT Equivalent"
},

{
title:"Diploma in Information Technology",
duration:"3 Years (6 Semesters)",
quota:"48 Seats",
eligibility:"SEE Passed with GPA 1.6 or CTEVT Equivalent"
},

{
title:"Pre Diploma Program",
duration:"18 Months",
quota:"40 Seats",
eligibility:"SEE Appeared / Passed"
}

];

const documents=[

"SEE Marksheet & Character Certificate",
"Citizenship / Birth Certificate",
"Recent Passport Size Photos (4 Copies)",
"Migration Certificate (If Required)",
"CTEVT Entrance Admit Card",
"Entrance Examination Score",
"Original Documents During Admission"

];

const dates=[

{
title:"Admission Notice Published",
date:"Ashadh"
},

{
title:"Online / Physical Form Distribution",
date:"Ashadh - Shrawan"
},

{
title:"Entrance Examination",
date:"As Per CTEVT Schedule"
},

{
title:"Result Publication",
date:"Within 7 Days"
},

{
title:"Admission & Enrollment",
date:"After Merit List Publication"
}

];

return(

<div className="bg-gray-100 min-h-screen pt-48 font-sans">

{/* HERO */}

<section className="mx-6 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-500 text-white shadow-2xl py-20 text-center">

<div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto text-blue-900 text-6xl shadow-xl">

<FaUserGraduate/>

</div>

<h1 className="text-5xl font-extrabold mt-6">

Admission Notice 2083

</h1>

<p className="text-xl mt-4 font-semibold">

Rolpa Polytechnic Institute

</p>

<p className="mt-4 text-lg">

Applications are invited for admission in Diploma &
Pre-Diploma Programs affiliated with CTEVT.

</p>

<button className="mt-8 bg-white text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition">

<FaDownload className="inline mr-2"/>

Download Admission Notice

</button>

</section>

{/* INTRODUCTION */}

<section className="max-w-7xl mx-auto px-6 py-14">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h2 className="text-4xl font-bold text-blue-900 mb-6">

Admission Open

</h2>

<p className="text-gray-700 text-lg leading-9">

Rolpa Polytechnic Institute invites eligible students to apply for
Diploma and Pre-Diploma programs under the Council for Technical
Education and Vocational Training (CTEVT).

Admission is conducted according to the annual CTEVT admission
guidelines. Selection is based on the CTEVT entrance examination,
merit list, reservation policy, and institute rules.

Students interested in technical education are encouraged to submit
their application within the specified deadline.

</p>

</div>

</section>

{/* PROGRAMS */}

<section className="max-w-7xl mx-auto px-6 pb-16">

<h2 className="text-4xl font-bold text-center text-blue-900 mb-10">

Programs Available

</h2>

<div className="grid md:grid-cols-2 gap-8">

{programs.map((item,index)=>(

<div
key={index}
className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition border-l-8 border-blue-700">

<h3 className="text-2xl font-bold text-blue-900">

{item.title}

</h3>

<p className="mt-4">

<b>Duration:</b> {item.duration}

</p>

<p>

<b>Quota:</b> {item.quota}

</p>

<p className="mt-2 text-gray-700">

{item.eligibility}

</p>

</div>

))}

</div>

</section>
{/* REQUIRED DOCUMENTS */}

<section className="bg-blue-900 text-white py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">

Required Documents

</h2>

<div className="grid md:grid-cols-2 gap-8">

{documents.map((doc,index)=>(

<div
key={index}
className="bg-white/10 rounded-2xl p-6 flex items-center gap-4">

<div className="text-yellow-400 text-3xl">

<FaFileAlt/>

</div>

<p className="text-lg">

{doc}

</p>

</div>

))}

</div>

</div>

</section>

{/* IMPORTANT DATES */}

<section className="max-w-7xl mx-auto px-6 py-16">

<h2 className="text-4xl font-bold text-center text-blue-900 mb-12">

Important Dates

</h2>

<div className="space-y-8">

{dates.map((item,index)=>(

<div
key={index}
className="bg-white shadow-xl rounded-2xl p-8 flex justify-between items-center border-l-8 border-yellow-500">

<div>

<h3 className="text-2xl font-bold text-blue-900">

{item.title}

</h3>

</div>

<div className="text-yellow-600 font-bold text-xl">

<FaCalendarAlt className="inline mr-2"/>

{item.date}

</div>

</div>

))}

</div>

</section>

{/* ADMISSION PROCESS */}

<section className="bg-gray-100 py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-blue-900 mb-12">

Admission Process

</h2>

<div className="grid md:grid-cols-5 gap-6">

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">

<div className="text-blue-700 text-5xl mb-4">

1

</div>

<h3 className="font-bold text-xl">

Fill Application Form

</h3>

<p className="mt-3 text-gray-600">

Complete online or offline admission form.

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">

<div className="text-blue-700 text-5xl mb-4">

2

</div>

<h3 className="font-bold text-xl">

Entrance Exam

</h3>

<p className="mt-3 text-gray-600">

Appear in CTEVT entrance examination.

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">

<div className="text-blue-700 text-5xl mb-4">

3

</div>

<h3 className="font-bold text-xl">

Merit List

</h3>

<p className="mt-3 text-gray-600">

Selected candidates published according to merit.

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">

<div className="text-blue-700 text-5xl mb-4">

4

</div>

<h3 className="font-bold text-xl">

Document Verification

</h3>

<p className="mt-3 text-gray-600">

Original certificates are verified.

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">

<div className="text-blue-700 text-5xl mb-4">

5

</div>

<h3 className="font-bold text-xl">

Final Admission

</h3>

<p className="mt-3 text-gray-600">

Admission confirmation and class enrollment.

</p>

</div>

</div>

</div>

</section>

{/* ELIGIBILITY */}

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h2 className="text-4xl font-bold text-blue-900 mb-8">

Eligibility Criteria

</h2>

<ul className="space-y-4 text-lg text-gray-700">

<li>✔ SEE or equivalent examination passed.</li>

<li>✔ Minimum GPA according to current CTEVT admission guidelines.</li>

<li>✔ Must pass CTEVT Entrance Examination.</li>

<li>✔ Original academic documents required during admission.</li>

<li>✔ Reserved quota follows Government of Nepal and CTEVT rules.</li>

</ul>

</div>

</section> 
{/* FEE STRUCTURE */}

<section className="bg-blue-900 text-white py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">

Fee Structure

</h2>

<div className="overflow-x-auto">

<table className="w-full bg-white text-black rounded-xl overflow-hidden">

<thead className="bg-yellow-500 text-black">

<tr>

<th className="p-4">Program</th>
<th className="p-4">Duration</th>
<th className="p-4">Fee</th>

</tr>

</thead>

<tbody>

<tr className="border-b">
<td className="p-4">Diploma in Agriculture (Plant Science)</td>
<td className="p-4">3 Years</td>
<td className="p-4">As per CTEVT & Institute Rules</td>
</tr>

<tr className="border-b">
<td className="p-4">Diploma in Agriculture (Animal Science)</td>
<td className="p-4">3 Years</td>
<td className="p-4">As per CTEVT & Institute Rules</td>
</tr>

<tr className="border-b">
<td className="p-4">Diploma in Information Technology</td>
<td className="p-4">3 Years</td>
<td className="p-4">As per CTEVT & Institute Rules</td>
</tr>

<tr>
<td className="p-4">Pre Diploma Program</td>
<td className="p-4">18 Months</td>
<td className="p-4">As per CTEVT & Institute Rules</td>
</tr>

</tbody>

</table>

</div>

</div>

</section>

{/* SCHOLARSHIP */}

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h2 className="text-4xl font-bold text-blue-900 mb-8">

Scholarship Opportunity

</h2>

<p className="text-lg text-gray-700 leading-9">

Scholarships are provided according to the policies of
the Council for Technical Education and Vocational Training (CTEVT)
and the Government of Nepal.

Eligible students from marginalized communities,
economically disadvantaged groups,
women, Dalit, Janajati and other reserved categories
may receive scholarships as per the current admission guideline.

</p>

</div>

</section>

{/* CONTACT */}

<section className="bg-gray-100 py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-blue-900 mb-10">

Need Help?

</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-xl p-8 text-center">

<FaPhoneAlt className="text-5xl text-blue-700 mx-auto mb-5"/>

<h3 className="text-2xl font-bold">

Call Us

</h3>

<p className="mt-4">

086-594026

</p>

<p>

9857824891

</p>

</div>

<div className="bg-white rounded-2xl shadow-xl p-8 text-center">

<FaEnvelope className="text-5xl text-red-600 mx-auto mb-5"/>

<h3 className="text-2xl font-bold">

Email

</h3>

<p className="mt-4">

rolpapolytechnicinstitute@gmail.com

</p>

</div>

<div className="bg-white rounded-2xl shadow-xl p-8 text-center">

<FaMapMarkerAlt className="text-5xl text-green-600 mx-auto mb-5"/>

<h3 className="text-2xl font-bold">

Visit Us

</h3>

<p className="mt-4">

Rolpa Municipality-1

</p>

<p>

Mewang, Rolpa, Nepal

</p>

</div>

</div>

</div>

</section>

{/* APPLY NOW */}

<section className="bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-500 text-white py-20">

<div className="max-w-6xl mx-auto text-center px-6">

<h2 className="text-5xl font-extrabold">

Join Rolpa Polytechnic Institute

</h2>

<p className="mt-6 text-xl">

Build your future through quality technical education under CTEVT.

</p>

<button className="mt-10 bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition">

Apply Now

<FaArrowRight className="inline ml-3"/>

</button>

</div>

</section>

{/* FOOTER */}

<footer className="bg-gray-900 text-white py-12">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

<div>

<h2 className="text-2xl font-bold">

Rolpa Polytechnic Institute

</h2>

<p className="mt-4 text-gray-300">

Established in 2074 BS under CTEVT,
providing quality technical and vocational education.

</p>

</div>

<div>

<h3 className="text-xl font-bold mb-4">

Quick Links

</h3>

<ul className="space-y-2 text-gray-300">

<li>CTEVT</li>
<li>Ministry of Education</li>
<li>TITI</li>
<li>NSTB</li>

</ul>

</div>

<div>

<h3 className="text-xl font-bold mb-4">

Programs

</h3>

<ul className="space-y-2 text-gray-300">

<li>Diploma in IT</li>
<li>Diploma in Agriculture</li>
<li>Diploma in Animal Science</li>
<li>Pre Diploma</li>

</ul>

</div>

<div>

<h3 className="text-xl font-bold mb-4">

Contact

</h3>

<p className="text-gray-300">

Rolpa Municipality-1, Mewang

</p>

<p className="text-gray-300 mt-2">

Phone: 086-594026

</p>

<p className="text-gray-300">

Mobile: 9857824891

</p>

<p className="text-gray-300">

rolpapolytechnicinstitute@gmail.com

</p>

</div>

</div>

<div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

© 2026 Rolpa Polytechnic Institute | All Rights Reserved

</div>

</footer>

</div>

);

};

export default AdmissionNotice;