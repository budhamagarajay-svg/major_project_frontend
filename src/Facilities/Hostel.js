import React from "react";
import {
  FaBed,
  FaFemale,
  FaShieldAlt,
  FaWifi,
  FaBookReader,
  FaWater,
  FaBolt,
  FaCheckCircle,
  FaHome,
  FaGraduationCap,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

const Hostel = () => {
  const facilities = [
    {
      icon: <FaBed />,
      title: "Comfortable Rooms",
      desc: "Comfortable accommodation with a peaceful environment that supports students' academic and personal activities.",
    },
    {
      icon: <FaUtensils />,
      title: "Dining Facility",
      desc: "A convenient dining environment supporting students with regular meals and a comfortable place to eat.",
    },
    {
      icon: <FaBookReader />,
      title: "Study Environment",
      desc: "A suitable residential environment where students can concentrate on their studies and academic activities.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Environment",
      desc: "A secure and disciplined environment designed to provide comfortable residential support for female students.",
    },
  ];

  const hostelFeatures = [
    "Separate hostel facility for female students",
    "Safe and secure residential environment",
    "Rooms with basic accommodation facilities",
    "Clean drinking water facility",
    "Electricity and lighting facility",
    "Internet connectivity support",
    "Common study environment",
    "Proper hostel management system",
  ];

  const rules = [
    "Students must follow hostel discipline and regulations.",
    "Students should maintain cleanliness inside rooms and hostel premises.",
    "Visitors must follow hostel visiting rules and instructions.",
    "Students must respect hostel timings and management instructions.",
    "Any damage to hostel property must be reported immediately.",
    "Students should maintain a peaceful environment for everyone.",
  ];

  const benefits = [
    "Safe accommodation for female students",
    "Reduces travel difficulties",
    "Better focus on academic activities",
    "Creates a friendly learning environment",
    "Supports students from different locations",
    "Encourages independent and responsible living",
  ];

  const additionalFacilities = [
    {
      icon: <FaWifi />,
      title: "Internet Support",
      desc: "Connectivity support for academic and communication needs.",
    },
    {
      icon: <FaWater />,
      title: "Clean Water",
      desc: "Access to clean water for daily residential activities.",
    },
    {
      icon: <FaBolt />,
      title: "Electricity",
      desc: "Electricity and lighting support for comfortable living.",
    },
    {
      icon: <FaBookReader />,
      title: "Study Area",
      desc: "A suitable environment for reading and academic preparation.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <img
          src="/images/girls-hostel.jpg"
          alt="Rolpa Polytechnic Institute Girls Hostel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-900/80 to-pink-900/50"></div>

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-400/10"></div>

        <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-purple-400/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 mb-7">
              <FaFemale className="text-yellow-300 text-xl" />

              <span className="text-white font-semibold">
                Student Residential Facility
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              RPI Girls
              <span className="block text-yellow-300">Hostel</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mt-7 leading-8 max-w-2xl">
              A safe, comfortable and supportive residential environment
              for female students of Rolpa Polytechnic Institute.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
                <FaShieldAlt className="text-yellow-300" />
                <span>Safe Environment</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
                <FaBookReader className="text-yellow-300" />
                <span>Study Support</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
                <FaHome className="text-yellow-300" />
                <span>Comfortable Living</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:border-r border-gray-200">
              <FaFemale className="text-5xl text-pink-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-purple-950">
                Girls Hostel
              </h3>

              <p className="text-gray-500 mt-1">Residential Facility</p>
            </div>

            <div className="text-center md:border-r border-gray-200">
              <FaBed className="text-5xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-purple-950">
                Comfortable
              </h3>

              <p className="text-gray-500 mt-1">Accommodation</p>
            </div>

            <div className="text-center">
              <FaGraduationCap className="text-5xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-purple-950">
                Student
              </h3>

              <p className="text-gray-500 mt-1">Academic Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-1 bg-pink-500"></div>

              <span className="text-purple-700 font-bold uppercase tracking-wider">
                About The Hostel
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 leading-tight">
              A Comfortable Place
              <span className="text-pink-600"> Away From Home</span>
            </h2>

            <p className="text-gray-600 leading-8 mt-7">
              The{" "}
              <strong>Girls Hostel of Rolpa Polytechnic Institute</strong>{" "}
              provides residential support for female students studying
              at the institute.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              The hostel provides students with a safe and supportive
              environment where they can live, study and participate
              in academic activities without unnecessary travel
              difficulties.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              A peaceful residential environment can help students
              maintain better study routines, develop independence
              and build positive relationships with fellow students.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <FaCheckCircle className="text-pink-600" />
                </div>

                <span className="font-semibold text-gray-700">
                  Safe residential environment
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaCheckCircle className="text-purple-600" />
                </div>

                <span className="font-semibold text-gray-700">
                  Supportive academic environment
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FaCheckCircle className="text-green-600" />
                </div>

                <span className="font-semibold text-gray-700">
                  Convenient student accommodation
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hostel-room.jpg"
                alt="Girls hostel accommodation"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="absolute -bottom-8 -left-6 md:-left-10 bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FaHome className="text-3xl text-purple-600" />
                </div>

                <div>
                  <h3 className="font-extrabold text-purple-950">
                    Student Accommodation
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Comfortable & Supportive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-50 to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-purple-700 font-bold uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 mt-3">
              Hostel Facilities
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-5 leading-7">
              Essential facilities designed to provide students with
              a comfortable and supportive residential experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition duration-300 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-extrabold text-purple-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

                <div className="flex items-center mt-6 text-purple-700 font-bold text-sm">
                  <span>Learn More</span>

                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-pink-600 font-bold uppercase tracking-wider">
            Hostel Life
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 mt-3">
            Living, Learning & Growing
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5">
            A residential environment where students can balance
            academic preparation, personal development and daily life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/girls-hostel.jpg"
              alt="Girls hostel building"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 pt-20">
              <h3 className="text-2xl font-extrabold text-white">
                Comfortable Residential Environment
              </h3>

              <p className="text-gray-200 mt-2">
                A supportive place for students to live and study.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/hostel-room.jpg"
              alt="Hostel room"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
              <h3 className="text-xl font-bold text-white">
                Comfortable Rooms
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/hostel-dining.jpg"
              alt="Hostel dining facility"
              className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
              <h3 className="text-xl font-bold text-white">
                Dining Facility
              </h3>
            </div>
          </div>

          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/hostel-study1.jpg"
              alt="Hostel study environment"
              className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
              <h3 className="text-xl font-bold text-white">
                Study Environment
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-purple-700 font-bold uppercase tracking-wider">
                Residential Support
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 mt-3">
                Hostel Features
              </h2>

              <p className="text-gray-600 mt-5 leading-8">
                The hostel is intended to provide essential residential
                support and a suitable environment for female students.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {hostelFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 hover:bg-purple-100 transition"
                  >
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />

                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hostel-study1.jpg"
                alt="Students studying in hostel"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <FaGraduationCap className="text-3xl text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-purple-950">
                      Focus on Education
                    </h3>

                    <p className="text-sm text-gray-500">
                      Supporting students in their academic journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-800 to-pink-700 py-24">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5"></div>

        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-pink-400/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <FaShieldAlt className="text-6xl text-yellow-300 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Safe Living & Learning Environment
          </h2>

          <p className="max-w-3xl mx-auto text-purple-100 text-lg leading-8 mt-6">
            RPI Girls Hostel supports female students by providing a
            residential environment where they can live comfortably,
            maintain their studies and participate in academic activities.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-9">
            <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <FaShieldAlt className="inline mr-2 text-yellow-300" />
              Safety
            </div>

            <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <FaHome className="inline mr-2 text-yellow-300" />
              Accommodation
            </div>

            <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <FaGraduationCap className="inline mr-2 text-yellow-300" />
              Education
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-purple-700 font-bold uppercase tracking-wider">
            Everyday Convenience
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 mt-3">
            Additional Facilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {additionalFacilities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-7 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-purple-700 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-extrabold text-purple-950">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-pink-600 font-bold uppercase tracking-wider">
              Student Benefits
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 mt-3">
              Benefits for Students
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-pink-100 mb-5">
                  <FaGraduationCap className="text-3xl text-pink-600" />
                </div>

                <h3 className="text-lg font-extrabold text-purple-950">
                  {item}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  Supporting a comfortable and productive student
                  residential experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <FaShieldAlt className="text-5xl text-yellow-300 mx-auto mb-5" />

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Hostel Rules
            </h2>

            <p className="text-purple-200 mt-4">
              Discipline, cleanliness and mutual respect help create
              a peaceful residential environment.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-7 md:p-10">
            <div className="grid md:grid-cols-2 gap-5">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-purple-50 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-extrabold text-purple-700">
                      {index + 1}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-7">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FaHome className="text-6xl text-purple-700 mx-auto mb-6" />

          <h2 className="text-3xl md:text-5xl font-extrabold text-purple-950">
            A Place to Live, Learn & Grow
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            The RPI Girls Hostel provides a supportive residential
            environment that helps female students focus on their
            education while developing independence, responsibility
            and positive relationships.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-8">
            <span className="px-6 py-3 bg-purple-700 text-white rounded-full font-semibold">
              Safe Environment
            </span>

            <span className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold">
              Comfortable Living
            </span>

            <span className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold">
              Academic Support
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hostel;