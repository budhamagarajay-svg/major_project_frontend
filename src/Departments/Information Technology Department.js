import React from "react";
import {
  FaLaptopCode,
  FaUserTie,
  FaGraduationCap,
  FaNetworkWired,
  FaCode,
  FaDatabase,
  FaCheckCircle,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";


const InformationTechnologyDepartment = () => {


  const programs = [
    "Diploma in Information Technology (DIT)",
    "Computer Networking and System Administration",
    "Web Development and Software Application Training"
  ];


  const objectives = [
    "Produce skilled IT professionals with practical technical knowledge.",
    "Provide quality education in programming, networking and database systems.",
    "Develop software development and problem-solving skills.",
    "Encourage innovation, entrepreneurship and digital transformation.",
    "Prepare students for careers in the rapidly growing IT sector."
  ];



  const facilities = [
    "Modern Computer Laboratory",
    "High Speed Internet Facility",
    "Networking Laboratory",
    "Software Development Environment",
    "Database Management Practice Lab",
    "Multimedia and Project Development Lab"
  ];



  const technologies = [
    "Programming Languages (C, C++, Java, Python)",
    "Web Technologies (HTML, CSS, JavaScript, React)",
    "Database Systems (MySQL, MongoDB)",
    "Computer Networking and Cyber Security",
    "Mobile Application Development",
    "Software Engineering Practices"
  ];



  const activities = [
    "Software and Web Application Development",
    "Database Design and Management",
    "Computer Network Configuration",
    "Cyber Security Awareness Programs",
    "Project Based Learning",
    "Industrial Visit and Internship Programs"
  ];



  const careers = [
    "Software Developer",
    "Web Developer",
    "Database Administrator",
    "Network Administrator",
    "System Support Engineer",
    "Cyber Security Assistant",
    "IT Entrepreneur",
    "Government IT Service Provider"
  ];



return (

<div className="bg-gray-50 min-h-screen">



{/* Hero Section */}

<section className="bg-blue-900 text-white py-16">


<div className="max-w-7xl mx-auto px-6 text-center">


<div className="flex justify-center mb-5">

<FaLaptopCode className="text-6xl"/>

</div>


<h1 className="text-5xl font-bold">

Information Technology Department

</h1>


<p className="mt-4 text-xl">

Creating skilled IT professionals for the digital future.

</p>


</div>


</section>








{/* About Department */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-700">


<h2 className="text-3xl font-bold text-blue-900 mb-5">

About Information Technology Department

</h2>



<p className="text-gray-700 leading-8">


The Information Technology Department of Rolpa Polytechnic
Institute provides technical education in computer science,
software development, networking and information systems.
The department follows the CTEVT curriculum and focuses on
practical skills, innovation and industry-oriented learning
to prepare students for the modern IT sector.


</p>


</div>


</section>










{/* Programs */}


<section className="max-w-7xl mx-auto px-6 py-8">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Academic Programs

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
programs.map((program,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
>


<FaGraduationCap className="text-4xl text-blue-700 mb-4"/>


<h3 className="font-bold text-lg">

{program}

</h3>


<p className="text-gray-600 mt-3">

Developing professional skills through theoretical
knowledge and practical implementation.

</p>


</div>


))

}


</div>


</section>









{/* Objectives and Activities */}



<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">



<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">

<FaCode/>

Department Objectives

</h2>



{
objectives.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaCheckCircle className="text-green-600 mt-1"/>


<p>

{item}

</p>


</div>


))

}


</div>








<div className="bg-blue-900 text-white rounded-xl p-8">


<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">


<FaLaptopCode/>

Practical Activities

</h2>



{
activities.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaCheckCircle className="text-yellow-300 mt-1"/>


<p>
{item}
</p>


</div>


))

}


</div>



</section>









{/* IT Facilities */}



<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

IT Laboratory & Facilities

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
facilities.map((item,index)=>(


<div
key={index}
className="bg-white shadow-md rounded-xl p-6"
>


<FaServer className="text-4xl text-blue-700 mb-4"/>


<h3 className="font-semibold text-lg">

{item}

</h3>


</div>


))

}


</div>


</section>









{/* Technologies */}



<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">


<FaDatabase/>

Technology Areas

</h2>




<div className="grid md:grid-cols-2 gap-5">


{
technologies.map((item,index)=>(


<div
key={index}
className="flex gap-3"
>


<FaCheckCircle className="text-blue-700 mt-1"/>


<p>

{item}

</p>


</div>


))

}


</div>



</div>


</section>









{/* Innovation Section */}



<section className="max-w-7xl mx-auto px-6 py-8">


<div className="bg-blue-800 text-white rounded-xl p-8">


<h2 className="text-3xl font-bold mb-5">

Innovation & Project Development

</h2>


<p className="leading-8">


Students are encouraged to develop real-world projects
such as websites, mobile applications, database systems,
IoT projects and software solutions. The department
promotes creativity, teamwork and problem-solving skills
through project-based learning.


</p>


</div>


</section>








{/* Faculty */}



<section className="max-w-7xl mx-auto px-6 py-10">


<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-3xl font-bold text-blue-900 mb-5 flex gap-3 items-center">


<FaUserTie/>

Faculty Members

</h2>


<p className="text-gray-700 leading-8">


The Information Technology Department consists of qualified
and experienced instructors who provide guidance in
programming, networking, database, cybersecurity and
software development fields.


</p>


</div>


</section>









{/* Career Opportunities */}



<section className="max-w-7xl mx-auto px-6 pb-16">


<div className="bg-blue-950 text-white rounded-xl p-8">


<h2 className="text-3xl font-bold mb-6">

Career Opportunities

</h2>



<div className="grid md:grid-cols-2 gap-4">


{
careers.map((item,index)=>(


<div
key={index}
className="flex gap-3"
>


<FaMobileAlt className="text-yellow-300 mt-1"/>


<p>
{item}
</p>


</div>


))

}


</div>


</div>


</section>





</div>

);

};


export default InformationTechnologyDepartment;