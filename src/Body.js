import React from "react";
import HeroCarousel from "./UI/HeroCarousel";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaArrowRight,
  FaLaptopCode,
  FaSeedling,
  FaPaw,
  FaBook,
  FaUniversity,
  FaCheckCircle,
  FaBullhorn,
} from "react-icons/fa";

const Body = () => {
  const notices = [
    "मौजुदा सूची दर्ता गर्ने सम्बन्धी सूचना",
    "स्वतः-प्रकाशन (Proactive Disclosure) २०८३ बैशाख-असार",
    "Annual Academic Plan (AAP)-2083/084",
    "भर्ना फारम खुलाइएको सम्बन्धमा",
    "विज्ञहरुको सूची (Roster) माग गरिएको सम्बन्धी सूचना - २०८३/०३/१८",
  ];

  const programs = [
    {
      title: "Diploma in Agriculture (Plant Science)",
      icon: <FaSeedling />,
      image: "/agriculture-bg.jpg.jpeg",
      description:
        "Three years diploma program after SEE/SLC focusing on modern agricultural technology and plant production.",
    },
    {
      title: "Diploma in Agriculture (Animal Science)",
      icon: <FaPaw />,
      image: "/animal-bg.jpg.jpeg",
      description:
        "Three years program providing knowledge about livestock management and veterinary practices.",
    },
    {
      title: "Diploma in Information Technology",
      icon: <FaLaptopCode />,
      image: "/it-bg.jpg.jpeg",
      description:
        "Three years IT program covering software development, networking, database and modern technologies.",
    },
    {
      title: "Vocational Training",
      icon: <FaGraduationCap />,
      image: "/vocational-bg.jpg",
      description:
        "Market-oriented customized vocational training programs for skill development.",
    },
  ];

  const highlights = [
    "Competent, Skilled, Confident and Motivated Technical Workforce",
    "Practical Based Technical Education",
    "Quality Technical and Vocational Education",
    "Skill Development and Employment Oriented Education",
    "Experienced and Qualified Faculty Members",
    "Modern Learning Environment",
    "Innovation and Entrepreneurship",
    "National and International Employment Opportunities",
  ];

  const testimonials = [
    {
      name: "Krishna Bahadur Mahara",
      position: "Former Speaker and Former Deputy Prime Minister of Nepal",
      image: "/krishna.jpg",
      message:
        "I extend my heartfelt thanks and congratulations to everyone involved in the growth and success of Rolpa Polytechnic Institute.",
    },
    {
      name: "Pramod Kumar Regmi",
      position: "Director, CTEVT Lumbini Province Office",
      image: "/regmi.jpg",
      message:
        "Rolpa Polytechnic Institute is one of the prominent constituent schools in Lumbini Province with quality academic and management teams.",
    },
    {
      name: "Dr. Ram Hari Lamichhane",
      position: "TVET Expert",
      image: "/ramhari.jpg",
      message:
        "The TVET courses offered by Rolpa Polytechnic Institute provide students opportunities to fulfill their dreams.",
    },
    {
      name: "Tek Bahadur Mahara",
      position: "TVET Expert",
      image: "/bahadur.jpg",
      message:
        "I am privileged that I had the opportunity to serve Rolpa Polytechnic Institute, a pioneer institution committed to produce competent human resource for the Nepalese labor market.",
    },
  ];

  const gallery = [
    {
      title: "College Campus",
      image: "/campus.jpg.jpeg",
    },
    {
      title: "Computer Laboratory",
      image: "/computer-lab.jpg.jpeg",
    },
    {
      title: "Agriculture Farm",
      image: "/agriculture-farm.jpg.jpeg",
    },
    {
      title: "Student Activities",
      image: "/student-activities.jpg.jpeg",
    },
    {
      title: "Training Program",
      image: "/training-program.jpg.jpeg",
    },
    {
      title: "Graduation Ceremony",
      image: "/graduation.jpg.jpeg",
    },
  ];

  const facilities = [
    {
      title: "Modern Classroom",
      icon: "🏫",
    },
    {
      title: "Computer Laboratory",
      icon: "💻",
    },
    {
      title: "Agriculture Farm",
      icon: "🌱",
    },
    {
      title: "Library Facility",
      icon: "📚",
    },
    {
      title: "Veterinary Lab",
      icon: "🐄",
    },
    {
      title: "Workshop",
      icon: "⚙️",
    },
    {
      title: "Internet Facility",
      icon: "🌐",
    },
    {
      title: "Student Support",
      icon: "👨‍🎓",
    },
  ];

  const whyChoose = [
    "CTEVT Constituent Campus",
    "Experienced Qualified Instructors",
    "Modern Computer Laboratory",
    "Practical Based Learning",
    "Industry Focused Training",
    "Career Oriented Education",
  ];

  return (
    <div className="w-full overflow-hidden">
      <HeroCarousel />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div
              className="rounded-xl bg-white bg-cover bg-center p-6 shadow-xl"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)), url('/notice-bg.jpg')",
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <FaBullhorn className="text-3xl text-blue-700" />

                <h2 className="text-2xl font-bold text-blue-800">
                  Latest Notice
                </h2>
              </div>

              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <div
                    key={index}
                    className="cursor-pointer border-b pb-3 transition hover:text-blue-700"
                  >
                    <span className="mr-2">📢</span>
                    {notice}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
              >
                View All
                <FaArrowRight />
              </button>
            </div>

            <div
              className="rounded-xl bg-white bg-cover bg-center p-6 shadow-xl"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)), url('/principal-bg.jpg')",
              }}
            >
              <h2 className="mb-5 text-2xl font-bold text-blue-800">
                Principal Message
              </h2>

              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    src="/principal.jpg.jpeg"
                    alt="Principal Tej Pratap Dubey"
                    className="h-36 w-36 rounded-full border-4 border-yellow-400 object-cover shadow-2xl transition duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  Tej Pratap Dubey
                </h3>

                <p>Principal</p>

                <p className="mt-2 flex items-center justify-center gap-2">
                  <FaPhoneAlt />
                  9857824891
                </p>
              </div>

              <p className="mt-6 leading-7 text-gray-600">
                Welcome to Rolpa Polytechnic Institute. Our goal is to provide
                quality technical education and produce skilled human resources
                for national and international markets.
              </p>

              <button
                type="button"
                className="mt-5 font-bold text-blue-700 hover:text-blue-900"
              >
                Read More →
              </button>
            </div>

            <div
              className="rounded-2xl bg-white bg-cover bg-center p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)), url('/officer-bg.jpg')",
              }}
            >
              <h2 className="mb-5 text-2xl font-bold text-blue-800">
                Information Officer
              </h2>

              <div className="mb-5 flex justify-center">
                <img
                  src="/information-officer.jpg.jpeg"
                  alt="Pawan Kumar Khadka"
                  className="h-36 w-36 rounded-full border-4 border-yellow-400 object-cover shadow-xl"
                />
              </div>

              <h3 className="text-center text-xl font-bold">
                Pawan Kumar Khadka
              </h3>

              <p className="mt-2 text-center text-gray-600">
                Information Officer & Grievance Hearing Officer
              </p>

              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-700" />
                  9857877574
                </p>

                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-700" />
                  rolpapolytechnicinstitute@gmail.com
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-blue-50 p-4">
                <h3 className="font-bold text-blue-800">
                  Quick Services
                </h3>

                <ul className="mt-3 space-y-2">
                  <li>✓ ITMS</li>
                  <li>✓ Tracer Study</li>
                  <li>✓ e-Learning Portal</li>
                  <li>✓ NSTB Database</li>
                  <li>✓ Check Results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              About Rolpa Polytechnic Institute
            </h1>

            <p className="mt-4 text-gray-600">
              A leading constituent school of CTEVT
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-700">
                Nepal is a multi-lingual, multi-cultural and geographically
                diverse country with huge natural resources. Technical
                education plays a vital role in utilizing these resources and
                developing human capacity.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Rolpa Polytechnic Institute was established by Council for
                Technical Education and Vocational Training (CTEVT) to produce
                competent, skilled and motivated technical workforce.
              </p>

              <div className="mt-8 space-y-4">
                <p className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  CTEVT Constituent School
                </p>

                <p className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  Located at Rolpa Municipality-1, Mewang
                </p>

                <p className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  Practical Based Technical Education
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-900 p-10 text-white">
              <FaUniversity size={70} />

              <h2 className="mt-5 text-3xl font-bold">
                Building Future Nepal
              </h2>

              <p className="mt-5 leading-8">
                We focus on innovation, skill development, entrepreneurship and
                employment-oriented education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              Our TVET Courses & Programs
            </h1>

            <p className="mt-3 text-gray-600">
              Skill based education for a better future
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white bg-cover bg-center p-7 shadow-xl transition duration-300 hover:-translate-y-3"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)), url('${program.image}')`,
                }}
              >
                <div className="mb-5 text-5xl text-blue-700 transition group-hover:scale-110">
                  {program.icon}
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  {program.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>

                <button
                  type="button"
                  className="mt-6 rounded-full bg-blue-700 px-5 py-2 text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              Why Choose Rolpa Polytechnic Institute?
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg transition hover:shadow-2xl"
              >
                <FaCheckCircle className="text-3xl text-green-600" />

                <h3 className="text-lg font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="mb-12 text-center text-4xl font-bold">
            Institutional Highlights
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-white p-6 text-gray-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FaCheckCircle className="text-3xl text-green-600" />

                <h3 className="text-lg font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-gray-200 bg-white">
        <div className="flex items-stretch">
          <div className="z-10 flex items-center gap-2 whitespace-nowrap bg-blue-900 px-6 py-4 font-bold text-white shadow-lg">
            <FaBullhorn />
            RPI HIGHLIGHTS
          </div>

          <div className="relative flex flex-1 items-center overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {highlights.map((item, index) => (
                <React.Fragment key={`first-${index}`}>
                  <span className="mx-8 font-medium text-gray-700">
                    {item}
                  </span>

                  <span className="font-bold text-blue-700">◆</span>
                </React.Fragment>
              ))}

              {highlights.map((item, index) => (
                <React.Fragment key={`second-${index}`}>
                  <span className="mx-8 font-medium text-gray-700">
                    {item}
                  </span>

                  <span className="font-bold text-blue-700">◆</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="mb-12 text-center text-4xl font-bold">
            Campus Facilities
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center text-gray-800 transition hover:scale-105"
              >
                <div className="mb-4 text-5xl">
                  {facility.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {facility.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h1 className="text-5xl font-bold text-blue-700">20+</h1>

              <p className="mt-3 font-semibold">
                Qualified Instructors
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h1 className="text-5xl font-bold text-blue-700">500+</h1>

              <p className="mt-3 font-semibold">
                Successful Graduates
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h1 className="text-5xl font-bold text-blue-700">3+</h1>

              <p className="mt-3 font-semibold">
                Diploma Programs
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h1 className="text-5xl font-bold text-blue-700">100%</h1>

              <p className="mt-3 font-semibold">
                Practical Education
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              Student Services
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">
              <FaBook size={45} />

              <h2 className="mt-5 text-2xl font-bold">
                e-Learning Portal
              </h2>

              <p className="mt-3">
                Access digital learning resources anytime.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-green-600 to-green-400 p-8 text-white">
              <FaGraduationCap size={45} />

              <h2 className="mt-5 text-2xl font-bold">
                Career Support
              </h2>

              <p className="mt-3">
                Guidance for employment and entrepreneurship.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-white">
              <FaUniversity size={45} />

              <h2 className="mt-5 text-2xl font-bold">
                Technical Training
              </h2>

              <p className="mt-3">
                Hands-on practical technical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              What Our Well Wishers Say
            </h1>

            <p className="mt-3 text-gray-600">
              Messages from respected personalities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((person, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-80 w-full object-cover object-top"
                />

                <div className="p-6">
                  <div className="text-4xl text-yellow-500">
                    ❝
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    {person.message}
                  </p>

                  <h3 className="mt-6 text-xl font-bold text-blue-900">
                    {person.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {person.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">
              Campus Gallery
            </h1>

            <p className="mt-3 text-gray-600">
              Explore life at Rolpa Polytechnic Institute
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-center text-xl font-bold text-blue-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

export default Body;