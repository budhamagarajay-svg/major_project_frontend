import React, { useState } from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaFileUpload,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";


const ApplyOnline = () => {


  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    program:"",
    qualification:"",
    message:""
  });



  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };



  const handleSubmit=(e)=>{
    e.preventDefault();

    alert("Application Submitted Successfully!");

    console.log(formData);
  };




  const programs=[
    "Diploma in Information Technology",
    "Diploma in Agriculture (Plant Science)",
    "Diploma in Agriculture (Animal Science)",
    "Pre-Diploma Program"
  ];



  const steps=[
    "Fill Online Application Form",
    "Upload Required Documents",
    "Submit Application",
    "Application Verification",
    "Admission Confirmation"
  ];




return (

<div className="bg-gray-50 min-h-screen">


{/* Header */}

<section className="bg-blue-900 text-white py-14">

<div className="max-w-7xl mx-auto px-6 text-center">


<h1 className="text-5xl font-bold">
Apply Online
</h1>


<p className="mt-4 text-lg">
Start your technical education journey at Rolpa Polytechnic Institute.
</p>


</div>

</section>





{/* Introduction */}


<section className="max-w-7xl mx-auto px-6 py-12">


<div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-700">


<h2 className="text-3xl font-bold text-blue-900 mb-4">

Online Admission Application

</h2>


<p className="text-gray-700 leading-8">

Students interested in Diploma and Pre-Diploma programs can submit
their admission application through this online form.
Applicants must provide correct personal details and required documents
according to CTEVT and institute admission guidelines.

</p>


</div>


</section>







{/* Application Form */}



<section className="max-w-5xl mx-auto px-6 pb-12">


<div className="bg-white shadow-xl rounded-xl p-8">


<h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">

Student Application Form

</h2>




<form onSubmit={handleSubmit}
className="grid md:grid-cols-2 gap-6">





<div>

<label className="font-semibold">
Full Name
</label>

<div className="flex items-center border rounded-lg px-3 mt-2">

<FaUserGraduate className="text-blue-700"/>

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Enter your name"
className="w-full p-3 outline-none"
/>

</div>

</div>





<div>

<label className="font-semibold">
Email Address
</label>

<div className="flex items-center border rounded-lg px-3 mt-2">


<FaEnvelope className="text-blue-700"/>


<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Enter email"
className="w-full p-3 outline-none"
/>


</div>


</div>






<div>

<label className="font-semibold">
Phone Number
</label>


<div className="flex items-center border rounded-lg px-3 mt-2">

<FaPhone className="text-blue-700"/>


<input
type="number"
name="phone"
value={formData.phone}
onChange={handleChange}
placeholder="Mobile number"
className="w-full p-3 outline-none"
/>


</div>


</div>








<div>

<label className="font-semibold">
Select Program
</label>


<div className="flex items-center border rounded-lg px-3 mt-2">


<FaBookOpen className="text-blue-700"/>


<select
name="program"
value={formData.program}
onChange={handleChange}
className="w-full p-3 outline-none"
>


<option>
Choose Program
</option>


{
programs.map((item,index)=>(

<option key={index}>
{item}
</option>

))

}


</select>


</div>


</div>







<div>

<label className="font-semibold">
Academic Qualification
</label>


<input

type="text"

name="qualification"

value={formData.qualification}

onChange={handleChange}

placeholder="SEE/SLC or Equivalent"

className="w-full border rounded-lg p-3 mt-2"

/>


</div>







<div>

<label className="font-semibold">
Upload Documents
</label>


<div className="flex items-center border rounded-lg p-3 mt-2">

<FaFileUpload className="text-blue-700"/>


<input
type="file"
className="ml-3"
/>


</div>


</div>






<div className="md:col-span-2">


<label className="font-semibold">
Message
</label>


<textarea

name="message"

value={formData.message}

onChange={handleChange}

placeholder="Write your message"

className="w-full border rounded-lg p-3 mt-2 h-32"

/>


</div>






<button

type="submit"

className="md:col-span-2 bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-700 flex justify-center items-center gap-3"

>


<FaPaperPlane/>

Submit Application


</button>




</form>


</div>


</section>







{/* Process */}


<section className="max-w-7xl mx-auto px-6 pb-16">


<h2 className="text-3xl font-bold text-center text-blue-900 mb-10">

Application Process

</h2>



<div className="grid md:grid-cols-5 gap-5">


{
steps.map((step,index)=>(


<div

key={index}

className="bg-blue-900 text-white rounded-xl p-6 text-center"

>


<div className="text-3xl font-bold">

{index+1}

</div>


<p className="mt-3">

{step}

</p>


</div>


))

}



</div>



</section>






</div>


);

};


export default ApplyOnline;