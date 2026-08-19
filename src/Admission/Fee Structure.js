import React from "react";
import {
  FaMoneyBillWave,
  FaGraduationCap,
  FaBook,
  FaFlask,
  FaClipboardList,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";


const FeeStructure = () => {


  const diplomaFee = [
    {
      title:"Admission Fee",
      amount:"NPR 15,000",
      icon:<FaGraduationCap/>
    },
    {
      title:"CTEVT Registration Fee",
      amount:"As per CTEVT Rule",
      icon:<FaClipboardList/>
    },
    {
      title:"Tuition Fee",
      amount:"NPR 36,000 / Year",
      icon:<FaBook/>
    },
    {
      title:"Practical / Lab Fee",
      amount:"NPR 10,000",
      icon:<FaFlask/>
    },
    {
      title:"Examination Fee",
      amount:"As per CTEVT Rule",
      icon:<FaMoneyBillWave/>
    },
    {
      title:"Library & Student Service Fee",
      amount:"NPR 2,000",
      icon:<FaBook/>
    },
  ];



  const programFee = [
    {
      program:"Diploma in Information Technology",
      duration:"3 Years",
      payment:"Semester Wise"
    },
    {
      program:"Diploma in Agriculture / Veterinary",
      duration:"3 Years",
      payment:"Semester Wise"
    },
    {
      program:"Pre-Diploma Programs",
      duration:"18 Months",
      payment:"As per Institute Rule"
    }
  ];



  const facilities=[
    "Well equipped laboratory facilities",
    "Library and learning resources",
    "Practical based technical education",
    "Student support services",
    "Industry visit and training opportunities"
  ];



return (

<div className="bg-gray-50 min-h-screen">


{/* Header */}

<section className="bg-blue-900 text-white py-14">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-5xl font-bold">
Fee Structure
</h1>

<p className="mt-4 text-lg">
Affordable technical education fee details at
Rolpa Polytechnic Institute
</p>

</div>

</section>





{/* Introduction */}

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-blue-700">


<h2 className="text-3xl font-bold text-blue-900 mb-4">

RPI Fee Information

</h2>


<p className="text-gray-700 leading-8">

Rolpa Polytechnic Institute follows CTEVT guidelines
for collecting academic and institutional fees.
The fee structure may vary according to program,
academic year and CTEVT regulations.

</p>


</div>


</section>





{/* Fee Cards */}


<section className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Diploma Program Fee Details

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
diplomaFee.map((fee,index)=>(

<div
key={index}
className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 duration-300"
>


<div className="text-4xl text-blue-700 mb-4">

{fee.icon}

</div>


<h3 className="font-bold text-xl">

{fee.title}

</h3>


<p className="mt-3 text-gray-600">

{fee.amount}

</p>


</div>

))

}



</div>


</section>






{/* Program Table */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white rounded-xl shadow-lg overflow-hidden">


<h2 className="text-3xl font-bold text-blue-900 p-6">

Program Wise Payment

</h2>


<table className="w-full">

<thead className="bg-blue-900 text-white">

<tr>

<th className="p-4 text-left">
Program
</th>

<th className="p-4">
Duration
</th>

<th className="p-4">
Payment System
</th>


</tr>

</thead>



<tbody>


{
programFee.map((item,index)=>(

<tr
key={index}
className="border-b"
>


<td className="p-4">
{item.program}
</td>


<td className="p-4 text-center">
{item.duration}
</td>


<td className="p-4 text-center">
{item.payment}
</td>


</tr>


))

}



</tbody>


</table>


</div>


</section>






{/* Facilities */}


<section className="max-w-7xl mx-auto px-6 pb-12">


<div className="bg-blue-900 text-white rounded-xl p-8">


<h2 className="text-3xl font-bold mb-6">

Facilities Included

</h2>



<div className="grid md:grid-cols-2 gap-4">


{
facilities.map((item,index)=>(

<div
key={index}
className="flex gap-3"
>

<FaCheckCircle className="text-green-400 mt-1"/>

<p>
{item}
</p>

</div>


))

}


</div>


</div>


</section>






{/* Notice */}


<section className="max-w-7xl mx-auto px-6 pb-16">


<div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg flex gap-4">


<FaInfoCircle className="text-3xl text-yellow-600"/>


<p className="text-gray-700">

Note: Fee structure can be changed according to
CTEVT rules and institute decisions.
Students should check the latest official admission notice.

</p>


</div>


</section>



</div>


);

};


export default FeeStructure;