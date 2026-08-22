import React from "react";

import {
  FaUtensils,
  FaCoffee,
  FaAppleAlt,
  FaUsers,
  FaWater,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaGraduationCap,
  FaStore,
  FaLeaf,
  FaHeart,
  FaSmile,
} from "react-icons/fa";

const Canteen = () => {
  const facilities = [
    {
      icon: <FaUtensils />,
      title: "Quality Food Service",
      desc: "Fresh and quality food items are available for students, teachers and staff members.",
    },
    {
      icon: <FaAppleAlt />,
      title: "Healthy Meals",
      desc: "Nutritious meals and snacks support students' health and daily learning activities.",
    },
    {
      icon: <FaWater />,
      title: "Clean Drinking Water",
      desc: "Clean and safe drinking water facility is available for campus members.",
    },
    {
      icon: <FaUsers />,
      title: "Student Friendly",
      desc: "A comfortable environment where students can relax and interact during break time.",
    },
  ];

  const foodItems = [
    "Daily lunch and meal service",
    "Tea, coffee and light snacks",
    "Healthy food options",
    "Affordable prices for students",
    "Seasonal food items",
    "Clean and hygienic preparation",
  ];

  const benefits = [
    {
      icon: <FaClock />,
      title: "Saves Time",
      desc: "Students can enjoy food without leaving the college campus.",
    },
    {
      icon: <FaHeart />,
      title: "Healthy Eating",
      desc: "The canteen encourages healthy and balanced eating habits.",
    },
    {
      icon: <FaUsers />,
      title: "Social Space",
      desc: "A friendly place for students to meet, relax and interact.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Student Support",
      desc: "Convenient food services support students throughout college hours.",
    },
    {
      icon: <FaSmile />,
      title: "Comfortable Environment",
      desc: "Students can take a refreshing break in a welcoming environment.",
    },
    {
      icon: <FaStore />,
      title: "Campus Facility",
      desc: "Food and refreshment services are conveniently available inside campus.",
    },
  ];

  const rules = [
    "Maintain cleanliness in the canteen area.",
    "Dispose of waste in designated places.",
    "Food should be prepared and served hygienically.",
    "Maintain discipline while using canteen facilities.",
    "Respect canteen staff and other users.",
    "Avoid unnecessary wastage of food and water.",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      <section className="relative min-h-[560px] flex items-center overflow-hidden">

        <img
          src="/images/canteen.jpg"
          alt="Rolpa Polytechnic Institute Canteen"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/95 via-orange-900/80 to-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-orange-100 mb-7">

              <FaUtensils className="text-yellow-300" />

              <span className="font-semibold tracking-wide">
                CAMPUS FOOD & REFRESHMENT FACILITY
              </span>

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">

              Rolpa Polytechnic

              <span className="block text-yellow-300">
                Institute Canteen
              </span>

            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mt-7 leading-relaxed max-w-2xl">

              A welcoming campus food facility providing quality,
              hygienic and affordable food services for students,
              teachers and staff of Rolpa Polytechnic Institute.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#facilities"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-orange-950 font-bold px-7 py-4 rounded-full transition duration-300 shadow-xl"
              >
                <FaUtensils />
                Explore Facilities
              </a>

              <a
                href="#food"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-7 py-4 rounded-full transition duration-300"
              >
                <FaCoffee />
                Food Services
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center md:border-r border-gray-200">

              <FaUtensils className="text-4xl text-orange-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-gray-900">
                Quality
              </h3>

              <p className="text-gray-500 mt-1">
                Food Service
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaAppleAlt className="text-4xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-gray-900">
                Healthy
              </h3>

              <p className="text-gray-500 mt-1">
                Food Options
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-gray-900">
                Hygienic
              </h3>

              <p className="text-gray-500 mt-1">
                Environment
              </p>

            </div>

            <div className="text-center">

              <FaUsers className="text-4xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-gray-900">
                Student
              </h3>

              <p className="text-gray-500 mt-1">
                Friendly
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">

            <div className="absolute -top-5 -left-5 w-24 h-24 bg-yellow-300 rounded-2xl -z-10"></div>

            <img
              src="/images/canteen-food.jpg"
              alt="RPI Canteen"
              className="w-full h-[430px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-7 -right-5 bg-orange-700 text-white rounded-2xl p-6 shadow-xl max-w-[230px]">

              <FaCoffee className="text-yellow-300 text-4xl mb-3" />

              <h3 className="font-bold text-xl">
                Campus Comfort
              </h3>

              <p className="text-orange-100 text-sm mt-1">
                A convenient place to eat, relax and connect.
              </p>

            </div>

          </div>

          <div>

            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
              About Our Canteen
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 leading-tight">

              More Than Just

              <span className="text-orange-600">
                {" "}Food
              </span>

            </h2>

            <p className="text-gray-600 leading-relaxed mt-6 text-lg">

              The <strong>Rolpa Polytechnic Institute Canteen</strong>
              is an important campus facility designed to provide
              convenient food and refreshment services to students,
              teachers and staff members.

            </p>

            <p className="text-gray-600 leading-relaxed mt-5">

              It provides a comfortable environment where students
              can enjoy meals, snacks and beverages during college
              breaks while spending quality time with their friends.

            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl">

                <div className="w-11 h-11 bg-orange-600 text-white rounded-full flex items-center justify-center">

                  <FaCheckCircle />

                </div>

                <span className="font-semibold">
                  Affordable Service
                </span>

              </div>

              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">

                <div className="w-11 h-11 bg-green-600 text-white rounded-full flex items-center justify-center">

                  <FaLeaf />

                </div>

                <span className="font-semibold">
                  Healthy Choices
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section
        id="facilities"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
              What We Provide
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
              Canteen Facilities
            </h2>

            <p className="text-gray-600 mt-4">
              Designed to provide students and campus members
              with convenient and comfortable food services.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="group bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:bg-orange-600 hover:text-white hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 group-hover:bg-white/20 group-hover:text-yellow-300 flex items-center justify-center text-3xl transition">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 group-hover:text-orange-100 mt-3 leading-relaxed text-sm">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="food"
        className="py-24 bg-gradient-to-br from-orange-950 via-orange-900 to-yellow-700 text-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="text-yellow-300 font-bold uppercase tracking-widest text-sm">
                Food & Refreshments
              </span>

              <h2 className="text-4xl lg:text-5xl font-extrabold mt-3">
                Food Services Available
              </h2>

              <p className="text-orange-100 mt-5 leading-relaxed text-lg">

                The canteen offers a variety of convenient food
                and refreshment options suitable for students
                and campus members.

              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-9">

                {foodItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 transition"
                  >

                    <FaCheckCircle className="text-yellow-300 mt-1 flex-shrink-0" />

                    <span className="text-orange-50 text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="relative">

              <img
                src="/images/canteen-food2.jpg"
                alt="Food Service at RPI Canteen"
                className="w-full h-[480px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-orange-950/70 to-transparent"></div>

              <div className="absolute bottom-7 left-7 right-7">

                <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-5">

                  <div className="flex items-center gap-3">

                    <FaAppleAlt className="text-yellow-300 text-3xl" />

                    <div>

                      <h3 className="font-bold text-xl">
                        Fresh & Nutritious
                      </h3>

                      <p className="text-orange-100 text-sm">
                        Supporting healthy campus life
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20 bg-orange-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="grid md:grid-cols-2">

              <div className="bg-orange-700 p-10 md:p-14 text-white">

                <FaShieldAlt className="text-6xl text-yellow-300 mb-6" />

                <h2 className="text-4xl font-extrabold">
                  Hygiene Comes First
                </h2>

                <p className="text-orange-100 mt-5 leading-relaxed">

                  Cleanliness and food safety are important for
                  maintaining a healthy and comfortable campus
                  environment.

                </p>

              </div>

              <div className="p-10 md:p-14">

                <div className="space-y-6">

                  <div className="flex gap-4">

                    <FaCheckCircle className="text-green-500 text-xl mt-1" />

                    <div>

                      <h3 className="font-bold">
                        Clean Food Preparation
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Food should be prepared in a clean environment.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <FaCheckCircle className="text-green-500 text-xl mt-1" />

                    <div>

                      <h3 className="font-bold">
                        Safe Drinking Water
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Clean drinking water is available for campus members.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <FaCheckCircle className="text-green-500 text-xl mt-1" />

                    <div>

                      <h3 className="font-bold">
                        Clean Surroundings
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Everyone should help keep the canteen area clean.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
              Student Experience
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
              Benefits for Students
            </h2>

            <p className="text-gray-600 mt-4">
              The campus canteen contributes to a comfortable
              and productive student experience.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24 bg-blue-950">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-blue-300 font-bold uppercase tracking-widest text-sm">
              Responsible Use
            </span>

            <h2 className="text-4xl font-extrabold text-white mt-3">
              Canteen Rules
            </h2>

            <p className="text-blue-200 mt-4">
              A clean and respectful environment depends on everyone's cooperation.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-7 md:p-10 shadow-2xl">

            <div className="space-y-4">

              {rules.map((rule, index) => (

                <div
                  key={index}
                  className="flex items-center gap-5 bg-gray-50 hover:bg-orange-50 rounded-xl p-5 transition"
                >

                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">

                    {index + 1}

                  </div>

                  <p className="text-gray-700 font-medium">
                    {rule}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-orange-700"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">

          <FaCoffee className="text-5xl text-yellow-300 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Enjoy Your Campus Break
          </h2>

          <p className="text-orange-100 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">

            The RPI Canteen is more than a place to eat.
            It is a convenient campus space where students
            can refresh, connect and continue their academic journey.

          </p>

          <div className="mt-8 inline-flex items-center gap-3 bg-white text-orange-700 font-bold px-8 py-4 rounded-full shadow-xl">

            <FaUtensils />

            Quality • Hygiene • Comfort

          </div>

        </div>

      </section>

    </div>
  );
};

export default Canteen;