import React from "react";
import {
  FaRunning,
  FaFutbol,
  FaTrophy,
  FaUsers,
  FaMedal,
  FaVolleyballBall,
  FaDumbbell,
  FaFlagCheckered,
  FaCheckCircle,
  FaGraduationCap,
  FaCalendarAlt,
  FaTableTennis,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const Sports = () => {
  const sportsFacilities = [
    {
      icon: <FaFutbol />,
      title: "Football",
      desc: "Football activities provide students with opportunities to improve physical fitness, teamwork, coordination and sportsmanship.",
      image: "/images/football1.jpg.jpeg",
    },
    {
      icon: <FaVolleyballBall />,
      title: "Volleyball",
      desc: "Volleyball encourages teamwork, communication, physical activity and friendly competition among students.",
      image: "/images/volleyball.jpg.jpeg",
    },
    {
      icon: <FaTableTennis />,
      title: "Table Tennis",
      desc: "Table tennis provides students with an enjoyable indoor sporting activity that develops concentration, coordination and quick response.",
      image: "/images/table-tennis.jpg",
    },
    {
      icon: <FaRunning />,
      title: "Badminton",
      desc: "Badminton gives students an opportunity to stay active while developing coordination, agility and concentration.",
      image: "/images/badminton.jpg",
    },
  ];

  const sportsEvents = [
    "Football competition",
    "Volleyball competition",
    "Table tennis competition",
    "Badminton competition",
    "Indoor games",
    "Team games and recreational activities",
    "Friendly sports competitions",
    "Prize distribution ceremony",
  ];

  const benefits = [
    "Improves physical fitness and healthy lifestyle",
    "Develops teamwork and leadership skills",
    "Creates friendship and cooperation among students",
    "Helps reduce academic stress",
    "Builds discipline, confidence and sportsmanship",
    "Provides opportunities to discover student talent",
  ];

  const features = [
    "Annual Sports Week celebration",
    "Participation from different academic programs",
    "Football and volleyball competitions",
    "Indoor games and recreational activities",
    "Certificates and prizes for winners",
    "Encouragement of student participation and talent",
  ];

  const rules = [
    "Students must follow sports discipline and fair-play rules.",
    "Students should respect opponents, referees and team members.",
    "Sports equipment must be used carefully and responsibly.",
    "Students should maintain safety during all sports activities.",
    "Students must follow instructions from sports coordinators.",
    "Students should maintain cleanliness of sports areas.",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">

      <section className="relative min-h-[650px] flex items-center overflow-hidden">

        <img
          src="/images/sports-main.jpg.jpeg"
          alt="Sports activities at Rolpa Polytechnic Institute"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-green-800/50"></div>

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-400/10"></div>

        <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-blue-400/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 mb-7">

              <FaTrophy className="text-yellow-300 text-xl" />

              <span className="text-white font-semibold">
                Student Sports & Recreation
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">

              RPI Sports

              <span className="block text-yellow-300">
                & Activities
              </span>

            </h1>

            <p className="text-lg md:text-xl text-blue-100 mt-7 leading-8 max-w-3xl">

              Promoting physical fitness, teamwork, discipline,
              friendship and student talent through sports activities
              at Rolpa Polytechnic Institute.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaFutbol className="text-yellow-300" />

                <span>Football</span>

              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaVolleyballBall className="text-yellow-300" />

                <span>Volleyball</span>

              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaTableTennis className="text-yellow-300" />

                <span>Indoor Games</span>

              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">

                <FaUsers className="text-yellow-300" />

                <span>Student Participation</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center md:border-r border-gray-200">

              <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-blue-950">
                Sports
              </h3>

              <p className="text-gray-500 mt-1">
                Activities
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaUsers className="text-5xl text-blue-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-blue-950">
                Students
              </h3>

              <p className="text-gray-500 mt-1">
                Participation
              </p>

            </div>

            <div className="text-center md:border-r border-gray-200">

              <FaMedal className="text-5xl text-green-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-blue-950">
                Awards
              </h3>

              <p className="text-gray-500 mt-1">
                Achievement
              </p>

            </div>

            <div className="text-center">

              <FaGraduationCap className="text-5xl text-purple-600 mx-auto mb-3" />

              <h3 className="text-2xl font-extrabold text-blue-950">
                RPI
              </h3>

              <p className="text-gray-500 mt-1">
                Campus Activities
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-1 bg-yellow-400"></div>

              <span className="text-blue-700 font-bold uppercase tracking-wider">
                About Sports
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">

              Developing Students Beyond

              <span className="text-green-600">
                {" "}the Classroom
              </span>

            </h2>

            <p className="text-gray-600 leading-8 mt-7">

              Sports activities at{" "}
              <strong>Rolpa Polytechnic Institute</strong>{" "}
              play an important role in developing students'
              physical fitness, confidence, teamwork and discipline.

            </p>

            <p className="text-gray-600 leading-8 mt-5">

              The institute encourages students to participate in
              football, volleyball, badminton, table tennis and
              different indoor and recreational activities.

            </p>

            <p className="text-gray-600 leading-8 mt-5">

              Sports activities also create opportunities for students
              from different academic programs to interact, build
              friendships and demonstrate their talents.

            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-blue-50 rounded-2xl p-5">

                <FaUsers className="text-3xl text-blue-600 mb-3" />

                <h3 className="font-bold text-blue-950">
                  Teamwork
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Developing cooperation and communication.
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-5">

                <FaDumbbell className="text-3xl text-green-600 mb-3" />

                <h3 className="font-bold text-blue-950">
                  Fitness
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Encouraging an active lifestyle.
                </p>

              </div>

            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/sports-main1.jpg.jpeg"
                alt="Students participating in sports"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md rounded-2xl p-6 text-white">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">

                  <FaTrophy className="text-3xl text-yellow-300" />

                </div>

                <div>

                  <h3 className="text-xl font-extrabold">
                    Sports & Student Development
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    Fitness, teamwork and confidence through sports.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-b from-blue-50 to-green-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-blue-700 font-bold uppercase tracking-wider">
              Sports Activities
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-3">
              Sports Facilities
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-5 leading-7">

              Students can participate in different sports and
              recreational activities that support physical and
              social development.

            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {sportsFacilities.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute bottom-4 left-4">

                    <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center text-2xl text-blue-700">

                      {item.icon}

                    </div>

                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-extrabold text-blue-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    {item.desc}
                  </p>

                  <div className="flex items-center mt-6 text-blue-700 font-bold text-sm">

                    <span>Sports Activity</span>

                    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <span className="text-green-600 font-bold uppercase tracking-wider">
            Sports Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-3">
            Sports Life at RPI
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5">
            Sports activities create an energetic, healthy and
            enjoyable campus environment.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="relative group overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/football1.jpg.jpeg"
              alt="Football activity"
              className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">

              <h3 className="text-2xl font-bold text-white">
                Football
              </h3>

              <p className="text-gray-200 mt-1">
                Teamwork and sportsmanship
              </p>

            </div>

          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/volleyball.jpg.jpeg"
              alt="Volleyball activity"
              className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">

              <h3 className="text-2xl font-bold text-white">
                Volleyball
              </h3>

              <p className="text-gray-200 mt-1">
                Team participation and competition
              </p>

            </div>

          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/badminton.jpg"
              alt="Badminton activity"
              className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">

              <h3 className="text-2xl font-bold text-white">
                Badminton
              </h3>

              <p className="text-gray-200 mt-1">
                Fitness and concentration
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-blue-950 py-24">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-400/10"></div>

        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-400/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

          <FaCalendarAlt className="text-6xl text-yellow-300 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-extrabold">
            RPI Annual Sports Week
          </h2>

          <p className="max-w-3xl mx-auto text-blue-100 text-lg leading-8 mt-6">

            Sports Week provides students with opportunities to
            participate in different competitions, demonstrate their
            talents and enjoy healthy competition with friends.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-9">

            <span className="px-6 py-3 rounded-full bg-white/10 border border-white/20">

              <FaFutbol className="inline mr-2 text-yellow-300" />

              Football

            </span>

            <span className="px-6 py-3 rounded-full bg-white/10 border border-white/20">

              <FaVolleyballBall className="inline mr-2 text-yellow-300" />

              Volleyball

            </span>

            <span className="px-6 py-3 rounded-full bg-white/10 border border-white/20">

              <FaTableTennis className="inline mr-2 text-yellow-300" />

              Indoor Games

            </span>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <span className="text-blue-700 font-bold uppercase tracking-wider">
            Sports Week
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-3">
            Sports Events
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {sportsEvents.map((item, index) => (

            <div
              key={index}
              className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition"
            >

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">

                <FaCheckCircle className="text-green-600 text-xl" />

              </div>

              <div className="flex-1">

                <span className="text-xs font-bold text-green-600 uppercase">
                  Event {index + 1}
                </span>

                <p className="font-semibold text-gray-800 mt-1">
                  {item}
                </p>

              </div>

              <FaArrowRight className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-1 transition" />

            </div>

          ))}

        </div>

      </section>

      <section className="bg-slate-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-green-600 font-bold uppercase tracking-wider">
              Program Highlights
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-3">
              Sports Program Features
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">

                  <FaFlagCheckered className="text-3xl text-blue-600" />

                </div>

                <h3 className="text-lg font-extrabold text-blue-950">
                  {item}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  Encouraging participation, teamwork and healthy
                  competition among students.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">

            <img
              src="/images/sports-week.jpg"
              alt="RPI Sports Week"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center">

                  <FaTrophy className="text-3xl text-yellow-600" />

                </div>

                <div>

                  <h3 className="font-extrabold text-blue-950">
                    Healthy Competition
                  </h3>

                  <p className="text-sm text-gray-500">
                    Building confidence through participation.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <span className="text-green-600 font-bold uppercase tracking-wider">
              Why Sports Matter
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-3">
              Benefits of Sports Activities
            </h2>

            <p className="text-gray-600 leading-8 mt-6">

              Sports provide students with valuable opportunities
              to develop physical fitness, confidence, discipline,
              teamwork and positive relationships.

            </p>

            <div className="space-y-4 mt-8">

              {benefits.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-green-50 rounded-xl p-4"
                >

                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">

                    <FaCheckCircle className="text-green-600" />

                  </div>

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-950 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center text-white mb-12">

            <FaShieldAlt className="text-5xl text-yellow-300 mx-auto mb-5" />

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Sports Rules
            </h2>

            <p className="text-blue-200 mt-4">
              Discipline, safety and sportsmanship are important
              during all sports activities.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-7 md:p-10">

            <div className="grid md:grid-cols-2 gap-5">

              {rules.map((rule, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">

                    <span className="font-extrabold text-blue-700">
                      {index + 1}
                    </span>

                  </div>

                  <p className="text-gray-700 leading-7">
                    {rule}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaTrophy className="text-6xl text-yellow-500 mx-auto mb-6" />

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">
            Play Together, Grow Together
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">

            Sports at Rolpa Polytechnic Institute provide students
            with opportunities to stay active, build friendships,
            develop teamwork and enjoy a healthy campus life.

          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-8">

            <span className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold">
              Teamwork
            </span>

            <span className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold">
              Fitness
            </span>

            <span className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold">
              Sportsmanship
            </span>

            <span className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold">
              Student Talent
            </span>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Sports;