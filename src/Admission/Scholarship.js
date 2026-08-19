import React from "react";
import {
  FaGraduationCap,
  FaAward,
  FaUserCheck,
  FaFileAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";


const Scholarship = () => {


  const scholarshipTypes = [
    {
      icon:<FaAward/>,
      title:"Classified Scholarship",
      description:
      "Scholarship provided according to CTEVT scholarship guidelines for eligible students from classified groups."
    },

    {
      icon:<FaGraduationCap/>,
      title:"Merit Based Scholarship",
      description:
      "Scholarship opportunities for students with excellent academic performance and achievement."
    },

    {
      icon:<FaUserCheck/>,
      title:"Need Based Support",
      description:
      "Financial support may be available for deserving students based on economic condition and institute policy."
    },

    {
      icon:<FaMoneyBillWave/>,
      title:"Special Scholarship Program",
      description:
      "Special scholarship opportunities are announced through official notices when available."
    }
  ];



  const eligibility = [
    "Applicant must fulfill CTEVT and institute admission requirements.",
    "Student must submit a valid scholarship application form.",
    "Selection is based on scholarship category, merit and available quota.",
    "Applicant must provide correct personal and academic information.",
    "Selected students must follow institute rules and regulations."
  ];



  const documents = [
    "Scholarship Application Form",
    "SEE/SLC Marksheet and Certificate",
    "Character Certificate",
    "Citizenship Certificate or Birth Certificate",
    "Recent Passport Size Photograph",
    "Required recommendation documents (if applicable)"
  ];



  const process = [
    "Publication of Scholarship Notice",
    "Submission of Scholarship Application",
    "Document Verification",
    "Selection According to CTEVT Criteria",
    "Final Scholarship Result Publication"
  ];



return (

<div className="bg-gray-50 min-h-screen">


{/* Header */}

<section className="bg-blue-900 text-white py-14">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-5xl font-bold">
Scholarship
</h1>

<p className="mt-4 text-lg">
Supporting deserving students to achieve technical education.
</p>

</div>

</section>




{/* Introduction */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-700">


<h2 className="text-3xl font-bold text-blue-900 mb-4">
Scholarship Program at RPI
</h2>


<p className="text-gray-700 leading-8">

Rolpa Polytechnic Institute provides scholarship opportunities
according to CTEVT rules and available scholarship programs.
Scholarships help talented and deserving students continue
technical education with financial support.

</p>


</div>

</section>






{/* Scholarship Types */}

<section className="max-w-7xl mx-auto px-6 py-6">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Types of Scholarship

</h2>



<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


{
scholarshipTypes.map((item,index)=>(


<div
key={index}
className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
>


<div className="text-4xl text-blue-700 mb-4">

{item.icon}

</div>


<h3 className="text-xl font-bold mb-3">

{item.title}

</h3>


<p className="text-gray-600 text-sm leading-6">

{item.description}

</p>


</div>


))

}


</div>


</section>







{/* Eligibility */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-3xl font-bold text-blue-900 mb-6">

Scholarship Eligibility Criteria

</h2>



{
eligibility.map((item,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>

<FaCheckCircle 
className="text-green-600 mt-1"
/>


<p className="text-gray-700">

{item}

</p>


</div>


))

}


</div>


</section>








{/* Application Process */}


<section className="max-w-7xl mx-auto px-6 py-6">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-8">

Scholarship Application Process

</h2>



<div className="grid md:grid-cols-5 gap-5">


{
process.map((item,index)=>(


<div
key={index}
className="bg-blue-900 text-white rounded-xl p-5 text-center"
>


<div className="text-3xl font-bold mb-3">

{index+1}

</div>


<p>

{item}

</p>


</div>


))

}


</div>


</section>








{/* Required Documents */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-2 gap-8">



<div className="bg-white shadow-lg rounded-xl p-8">


<h2 className="text-2xl font-bold text-blue-900 mb-5">

Required Documents

</h2>


{
documents.map((doc,index)=>(


<div
key={index}
className="flex gap-3 mb-4"
>


<FaFileAlt className="text-blue-700 mt-1"/>


<p>
{doc}
</p>


</div>


))

}


</div>






<div className="bg-blue-900 text-white rounded-xl p-8">


<div className="flex gap-3 items-center mb-5">


<FaInfoCircle className="text-3xl"/>


<h2 className="text-2xl font-bold">

Important Notice

</h2>


</div>



<ul className="space-y-4">


<li>
• Scholarship availability depends on CTEVT and institute notices.
</li>


<li>
• Students should apply within the announced deadline.
</li>


<li>
• False information may cancel scholarship eligibility.
</li>


<li>
• Final selection follows official scholarship rules.
</li>


</ul>


</div>



</div>


</section>





</div>

);

};


export default Scholarship;