import React from "react";
import {
  FaDesktop,
  FaLaptop,
  FaNetworkWired,
  FaCode,
  FaWifi,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaGraduationCap,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";


const ComputerLab = () => {


  const facilities = [

    {
      icon:<FaDesktop/>,
      title:"Modern Computer Systems",
      desc:"Rolpa Polytechnic Institute Computer Lab is equipped with modern desktop computers to support practical learning and technical activities."
    },

    {
      icon:<FaCode/>,
      title:"Programming Environment",
      desc:"Students practice programming languages, web development, database systems, and software development projects."
    },

    {
      icon:<FaNetworkWired/>,
      title:"Computer Networking Lab",
      desc:"The lab provides networking practice facilities including LAN configuration, network security and communication technologies."
    },

    {
      icon:<FaWifi/>,
      title:"High Speed Internet",
      desc:"Internet connectivity supports online learning, research, digital resources and technical exploration."
    },

  ];



  const hardware = [

    "High performance desktop computers",
    "Latest operating system and software tools",
    "Printer and scanning facilities",
    "Networking devices and equipment",
    "Projector and presentation facilities",
    "Computer maintenance tools",
    "Internet connectivity",
    "Cyber security practice environment"

  ];



  const software = [

    "Programming IDEs and development tools",
    "Database management systems",
    "Web development technologies",
    "Office productivity applications",
    "Graphics and multimedia software",
    "Operating systems and networking tools"

  ];



  const rules = [

    "Students must use computers carefully.",
    "Do not install unauthorized software.",
    "Maintain discipline inside the laboratory.",
    "Report technical problems to lab assistants.",
    "Internet should be used only for educational purposes."

  ];



return (

<div className="bg-gray-50">



{/* Hero */}

<section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white py-16">

<div className="max-w-7xl mx-auto text-center px-6">


<FaLaptop className="text-6xl mx-auto text-yellow-300 mb-5"/>


<h1 className="text-5xl font-bold">
Rolpa Polytechnic Institute Computer Lab
</h1>


<p className="mt-5 text-lg text-gray-200 max-w-3xl mx-auto">

A modern computer learning environment designed to provide practical
knowledge, programming skills and technical experience for students.

</p>


</div>

</section>






{/* About */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-10 items-center">


<div>


<h2 className="text-3xl font-bold text-blue-900 mb-5">

About Computer Lab

</h2>


<p className="text-gray-600 leading-relaxed">

The Computer Lab of <b>Rolpa Polytechnic Institute (RPI)</b>
provides practical learning facilities for students of the
Information Technology program.

</p>


<p className="text-gray-600 mt-4 leading-relaxed">

The laboratory helps students develop programming skills,
software development knowledge, networking skills, database
management skills and digital technology expertise.

</p>


</div>





<div className="bg-white rounded-xl shadow-xl p-8">


<div className="grid grid-cols-2 gap-6 text-center">


<div>

<FaDesktop className="text-4xl text-blue-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
50+
</h3>

<p>
Computers
</p>

</div>



<div>

<FaUsers className="text-4xl text-green-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Students
</h3>

<p>
Practical Learning
</p>

</div>



<div>

<FaGraduationCap className="text-4xl text-purple-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
DIT
</h3>

<p>
CTEVT Program
</p>

</div>




<div>

<FaClock className="text-4xl text-red-600 mx-auto"/>

<h3 className="text-2xl font-bold mt-2">
Daily
</h3>

<p>
Lab Practice
</p>

</div>



</div>


</div>


</div>


</section>







{/* Facilities */}

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Computer Lab Facilities

</h2>



<div className="grid md:grid-cols-4 gap-6">


{
facilities.map((item,index)=>(

<div
key={index}
className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition"
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









{/* Hardware */}

<section className="bg-white py-12">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-blue-900 text-center mb-8">

Hardware Facilities

</h2>


<div className="grid md:grid-cols-2 gap-5">


{

hardware.map((item,index)=>(


<div 
key={index}
className="flex gap-3 items-center bg-gray-100 p-4 rounded-lg"
>


<FaArrowRight className="text-blue-600"/>

<p>
{item}
</p>


</div>


))

}


</div>


</div>


</section>








{/* Software */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-8">

Software Resources

</h2>



<div className="grid md:grid-cols-3 gap-5">


{

software.map((item,index)=>(


<div
key={index}
className="bg-blue-900 text-white p-5 rounded-xl"
>


<FaTools className="text-yellow-300 text-3xl mb-3"/>


<p>
{item}
</p>


</div>


))


}


</div>


</section>








{/* Security */}

<section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12">


<div className="max-w-6xl mx-auto px-6 text-center">


<FaShieldAlt className="text-5xl mx-auto text-yellow-300 mb-4"/>


<h2 className="text-3xl font-bold">

Safe & Professional Learning Environment

</h2>


<p className="mt-4">

The Computer Lab maintains a disciplined environment where students
can learn modern technologies and develop professional IT skills.

</p>


</div>


</section>








{/* Rules */}

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-3xl font-bold text-blue-900 text-center mb-8">

Computer Lab Rules

</h2>



<div className="bg-white shadow-xl rounded-xl p-8">


{

rules.map((rule,index)=>(


<p 
key={index}
className="mb-4 text-gray-700"
>

{index+1}. {rule}

</p>


))


}


</div>


</section>





</div>

);

};


export default ComputerLab;