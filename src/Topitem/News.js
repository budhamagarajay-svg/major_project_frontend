import React, { useEffect, useMemo, useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
  FaTimes,
  FaNewspaper,
  FaClock,
  FaChevronRight,
  FaBell,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

const API_URL = "http://localhost:5000/api";

const fallbackNews = [
 {
  id:1,
  date:"१ साउन २०८३",
  title:"दिर्घ सेवा पदक तथा प्रमाणपत्र वितरण कार्यक्रम सहभागि सम्बन्धी सूचना",
  category: "NOTICE",
  description:"दीर्घ सेवा पदक तथा प्रमाणपत्र वितरण कार्यक्रम सम्बन्धी सम्पूर्ण जानकारीका लागि यो सूचना प्रकाशित गरिएको हो ।",
content:"रोल्पा पोलिटेक्निक इन्स्टिच्युटमा दीर्घ  सेवा पदक तथा  प्रमाणपत्र वितरण कार्यक्रम आयोजना गरिएको सहभागीगरुलाई नि्र्धारित समयमा कार्यक्रममा उपस्थित हुन अनुरोध गरिन्छ  । कार्यक्रम सम्बन्धी प्राप्त गर्न सकिनेछ ।",
 },
 {
  id: 12,
  date:"३ साउन २०८३",
  title:"विधालयमा रहेको अनुसाशित विधार्थि पुरुस्क्रित सम्बन्धि सुचना",
category:"Discipline",
description:"विधालयमा अध्यन गर्नु हुने सबैका लागि तोकियको मितिमा आउनु पर्ने बारे सबैमा जानकारि ",
content:"रोल्पा पिलिटिक्निक इन्स्टिच्युटमा  सर्ब उत्क्रिस्त विधार्थि पुरस्क्रित सम्बन्धि सुचना",
 },

 
  {
    id: 2,
    date: "२२ अषाढ २०८३",
    title: "रोल्पा पोलिटेक्निक इन्स्टिच्युटमा नयाँ भर्ना सम्बन्धी सूचना",
    category: "ADMISSION",
    description:
      "नयाँ शैक्षिक सत्रका लागि सञ्चालन हुने भर्ना प्रक्रियासम्बन्धी महत्वपूर्ण जानकारी ।",
    content:
      "रोल्पा पोलिटेक्निक इन्स्टिच्युटमा नयाँ शैक्षिक सत्रका लागि विभिन्न कार्यक्रमहरूमा विद्यार्थी भर्ना सम्बन्धी प्रक्रिया सुरु भएको छ। इच्छुक विद्यार्थीहरूले तोकिएको समयभित्र आवश्यक कागजातसहित आवेदन दिन सक्नेछन्। भर्ना सम्बन्धी विस्तृत जानकारीका लागि संस्थानको प्रशासन शाखामा सम्पर्क गर्नुहोस्।",
  },
  {
    id: 3,
    date: "४ अषाढ २०८३",
    title:
      "डिप्लोमा इन इन्फर्मेसन टेक्नोलोजी कार्यक्रम सञ्चालन सम्बन्धी जानकारी",
    category: "ACADEMIC",
    description:
      "डिप्लोमा इन इन्फर्मेसन टेक्नोलोजी कार्यक्रम सञ्चालन तथा अध्ययन सम्बन्धी आवश्यक जानकारी।",
    content:
      "डिप्लोमा इन इन्फर्मेसन टेक्नोलोजी कार्यक्रम अन्तर्गत विद्यार्थीहरूलाई आधुनिक सूचना प्रविधि, programming, database, networking तथा software development सम्बन्धी व्यावहारिक तथा सैद्धान्तिक ज्ञान प्रदान गरिन्छ।",
  },
  {
    id: 4,
    date: "२२ जेठ २०८३",
    title: "प्राविधिक शिक्षाको गुणस्तर सुधार सम्बन्धी सूचना",
    category: "NOTICE",
    description:
      "प्राविधिक शिक्षाको गुणस्तर सुधार तथा विद्यार्थीको शैक्षिक उपलब्धि वृद्धि गर्न सम्बन्धित सूचना।",
    content:
      "संस्थानमा प्रदान गरिने प्राविधिक शिक्षाको गुणस्तर थप सुधार गर्न विभिन्न शैक्षिक तथा प्रशासनिक गतिविधिहरू सञ्चालन गरिनेछन्। विद्यार्थी तथा शिक्षकहरूको सक्रिय सहभागिताबाट शैक्षिक वातावरणलाई अझ प्रभावकारी बनाउने लक्ष्य राखिएको छ।",
  },
  {
    id: 5,
    date: "२३ जेठ २०८३",
    title: "विद्यार्थीहरूका लागि सीप विकास तालिम सम्पन्न",
    category: "TRAINING",
    description:
      "विद्यार्थीहरूको व्यावहारिक तथा प्राविधिक सीप विकास गर्ने उद्देश्यले सञ्चालन गरिएको तालिम सम्पन्न भएको छ।",
    content:
      "विद्यार्थीहरूको व्यावहारिक क्षमता तथा रोजगारमूलक सीप विकास गर्ने उद्देश्यले सञ्चालन गरिएको सीप विकास तालिम सफलतापूर्वक सम्पन्न भएको छ। तालिममा विद्यार्थीहरूले विभिन्न व्यावहारिक विषयमा ज्ञान तथा अनुभव हासिल गरेका छन्।",
  },
  {
    id: 6,
    date: "६ जेठ २०८३",
    title: "रोल्पा पोलिटेक्निक इन्स्टिच्युटमा शैक्षिक कार्यक्रम सम्बन्धी सूचना",
    category: "ACADEMIC",
    description:
      "संस्थानमा सञ्चालन भइरहेका विभिन्न शैक्षिक कार्यक्रम तथा गतिविधिहरूसम्बन्धी जानकारी।",
    content:
      "रोल्पा पोलिटेक्निक इन्स्टिच्युटमा विभिन्न प्राविधिक तथा व्यावसायिक शैक्षिक कार्यक्रमहरू सञ्चालन भइरहेका छन्। विद्यार्थीहरूको ज्ञान, सीप तथा क्षमता विकासमा केन्द्रित रहेर शैक्षिक गतिविधिहरू सञ्चालन गरिँदै आएको छ।",
  },
];

const fallbackEvents = [
  {
    id: 1,
    date: "२१ मङ्सिर २०८२",
    title: "New Student Orientation Program",
    description:
      "नयाँ विद्यार्थीहरूलाई संस्थान तथा शैक्षिक वातावरणसँग परिचित गराउने विशेष कार्यक्रम।",
  },
  {
    id: 2,
    date: "१० मङ्सिर २०८२",
    title: "Academic Meeting of Departments",
    description:
      "विभिन्न विभागका शिक्षक तथा सम्बन्धित प्रतिनिधिहरूबीच शैक्षिक विषयमा छलफल तथा बैठक।",
  },
  {
    id: 3,
    date: "५ मङ्सिर २०८२",
    title: "Industry Visit Program",
    description:
      "विद्यार्थीहरूलाई उद्योग तथा वास्तविक कार्य वातावरणको व्यावहारिक अनुभव प्रदान गर्ने कार्यक्रम।",
  },
  {
    id: 4,
    date: "११ भाद्र २०८२",
    title: "Research and Project Presentation",
    description:
      "विद्यार्थीहरूले आफ्नो research तथा project प्रस्तुत गर्ने विशेष कार्यक्रम।",
  },
];

const News = () => {
  const [search, setSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [events, setEvents] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [newsError, setNewsError] = useState(false);
  const [eventsError, setEventsError] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch(`${API_URL}/news`);

        if (!response.ok) {
          throw new Error("News request failed");
        }

        const result = await response.json();

        const list = Array.isArray(result)
          ? result
          : Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.news)
          ? result.news
          : [];

        setNewsData(list.length ? list : fallbackNews);
      } catch (error) {
        setNewsData(fallbackNews);
        setNewsError(true);
      } finally {
        setNewsLoading(false);
      }
    };

    const loadEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/events`);

        if (!response.ok) {
          throw new Error("Events request failed");
        }

        const result = await response.json();

        const list = Array.isArray(result)
          ? result
          : Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.events)
          ? result.events
          : [];

        setEvents(list.length ? list : fallbackEvents);
      } catch (error) {
        setEvents(fallbackEvents);
        setEventsError(true);
      } finally {
        setEventsLoading(false);
      }
    };

    loadNews();
    loadEvents();
  }, []);

  const filteredNews = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return newsData;
    }

    return newsData.filter((item) => {
      const title = String(item.title || "").toLowerCase();
      const category = String(item.category || "").toLowerCase();
      const date = String(item.date || "").toLowerCase();
      const description = String(item.description || "").toLowerCase();
      const content = String(item.content || "").toLowerCase();

      return (
        title.includes(keyword) ||
        category.includes(keyword) ||
        date.includes(keyword) ||
        description.includes(keyword) ||
        content.includes(keyword)
      );
    });
  }, [newsData, search]);

  const exploreNews = () => {
    document.getElementById("latest-news")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openNews = (news) => {
    setSelectedNews(news);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeNews = () => {
    setSelectedNews(null);
  };

  const getId = (item, index) => item._id || item.id || index;

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-gray-800">

      {selectedNews ? (
        <section className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-5xl">

            <button
              type="button"
              onClick={closeNews}
              className="group mb-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-blue-950 shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-950 hover:text-white"
            >
              <FaTimes className="transition group-hover:rotate-90" />
              Close News
            </button>

            <article className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">

              <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-6 py-12 text-white sm:px-12 sm:py-16">

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
                <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-yellow-400/10" />

                <div className="relative z-10">

                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-black text-blue-950 shadow-lg">
                    <FaBullhorn />
                    {selectedNews.category || "NEWS"}
                  </span>

                  <h1 className="mt-7 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                    {selectedNews.title}
                  </h1>

                  <div className="mt-7 flex items-center gap-3 text-blue-100">
                    <FaCalendarAlt />
                    <span className="font-semibold">
                      {selectedNews.date || "Date not available"}
                    </span>
                  </div>

                </div>
              </div>

              <div className="p-6 sm:p-12">

                <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2 font-bold text-yellow-700">
                    <FaBell />
                    Important Information
                  </div>

                  <p className="leading-8 text-gray-700">
                    {selectedNews.description ||
                      "यस समाचारको थप जानकारी उपलब्ध छ।"}
                  </p>
                </div>

                <div className="mt-10">

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-white">
                      <FaNewspaper />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
                        Institute Information
                      </p>

                      <h2 className="text-2xl font-black text-blue-950">
                        सूचना विवरण
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-9 text-gray-600">
                    {selectedNews.content ||
                      selectedNews.description ||
                      "यस समाचारको विवरण उपलब्ध छैन।"}
                  </p>

                </div>

                <div className="mt-12 flex flex-col gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <FaClock />
                    Rolpa Polytechnic Institute
                  </div>

                  <button
                    type="button"
                    onClick={closeNews}
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-950 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-yellow-400 hover:text-blue-950"
                  >
                    Back to News
                    <FaArrowRight />
                  </button>

                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <>
          <section className="relative px-3 pt-5 sm:px-6 lg:px-10">

            <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 shadow-2xl sm:min-h-[600px]">

              <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-sm" />
              <div className="absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-yellow-400/10" />
              <div className="absolute right-[15%] top-[15%] h-32 w-32 rounded-full bg-white/5" />
              <div className="absolute bottom-[15%] left-[12%] h-20 w-20 rounded-full bg-yellow-400/10" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

              <div className="relative z-10 max-w-5xl px-5 text-center text-white">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-blue-950 shadow-2xl sm:h-28 sm:w-28">
                  <FaNewspaper className="text-5xl sm:text-6xl" />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                  Rolpa Polytechnic Institute
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                  NEWS
                </h1>

                <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-yellow-400" />

                <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-8 text-blue-50 sm:text-2xl">
                  Latest Updates, Announcements & Important Information
                </p>

                <button
                  type="button"
                  onClick={exploreNews}
                  className="group mt-9 inline-flex items-center gap-4 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white"
                >
                  Explore Latest News
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </button>

              </div>
            </div>
          </section>

          <section className="relative z-20 mx-auto -mt-10 max-w-5xl px-4 sm:px-6">

            <div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-2xl">

              <div className="flex items-center gap-3">

                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-950 text-white shadow-lg">
                  <FaSearch />
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search news, notice, admission..."
                  className="min-w-0 flex-1 bg-transparent p-3 text-base outline-none placeholder:text-gray-400"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                )}

              </div>
            </div>
          </section>

          <section
            id="latest-news"
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
          >

            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-white shadow-lg">
                  <FaNewspaper />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-yellow-600">
                    Institute Updates
                  </p>

                  <h2 className="mt-1 text-3xl font-black text-blue-950 sm:text-4xl">
                    Latest News
                  </h2>
                </div>

              </div>

              <div className="rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
                {newsLoading
                  ? "Loading..."
                  : `${filteredNews.length} News Available`}
              </div>

            </div>

            {newsLoading ? (
              <div className="rounded-3xl bg-white p-16 text-center shadow-xl">

                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-950" />

                <p className="mt-5 font-semibold text-gray-500">
                  Loading latest news...
                </p>

              </div>
            ) : filteredNews.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">

                {filteredNews.map((news, index) => (
                  <article
                    key={getId(news, index)}
                    className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <div className="h-2 bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-400" />

                    <div className="p-6 sm:p-8">

                      <div className="flex items-center justify-between gap-4">

                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white">
                          <FaBullhorn />
                          {news.category || "NEWS"}
                        </span>

                        <span className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                          <FaCalendarAlt className="text-blue-700" />
                          {news.date || "Date"}
                        </span>

                      </div>

                      <h3 className="mt-7 text-xl font-black leading-8 text-gray-800 transition group-hover:text-blue-900 sm:text-2xl">
                        {news.title}
                      </h3>

                      <p className="mt-4 line-clamp-3 leading-7 text-gray-500">
                        {news.description ||
                          news.content ||
                          "No description available."}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-6">

                        <span className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                          <FaClock />
                          Latest Update
                        </span>

                        <button
                          type="button"
                          onClick={() => openNews(news)}
                          className="group/btn inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-black text-blue-950 transition-all hover:bg-blue-950 hover:text-white"
                        >
                          Read More
                          <FaArrowRight className="transition group-hover/btn:translate-x-1" />
                        </button>

                      </div>

                    </div>
                  </article>
                ))}

              </div>
            ) : (
              <div className="rounded-3xl bg-white p-16 text-center shadow-xl">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-400">
                  <FaSearch />
                </div>

                <h3 className="mt-6 text-2xl font-black text-gray-700">
                  No News Found
                </h3>

                <p className="mt-2 text-gray-500">
                  Try searching with another keyword.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-6 rounded-xl bg-blue-950 px-6 py-3 font-bold text-white transition hover:bg-yellow-400 hover:text-blue-950"
                >
                  Clear Search
                </button>

              </div>
            )}

            {newsError && (
              <p className="mt-5 text-center text-xs text-gray-400">
                Showing available news while the server connection is being
                checked.
              </p>
            )}

          </section>

          <section className="border-y border-gray-100 bg-white">

            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">

              <div className="mb-12">

                <p className="text-sm font-black uppercase tracking-widest text-yellow-600">
                  What's Happening
                </p>

                <h2 className="mt-2 text-4xl font-black text-blue-950">
                  Upcoming Events
                </h2>

                <p className="mt-3 max-w-2xl text-gray-500">
                  Stay updated with upcoming programs, activities and
                  important institutional events.
                </p>

              </div>

              {eventsLoading ? (
                <div className="rounded-3xl bg-slate-50 p-16 text-center">

                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-950" />

                  <p className="mt-5 font-semibold text-gray-500">
                    Loading events...
                  </p>

                </div>
              ) : (
                <div className="grid gap-7 md:grid-cols-2">

                  {events.map((event, index) => (
                    <article
                      key={getId(event, index)}
                      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                    >

                      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-100 transition group-hover:scale-150" />

                      <div className="relative z-10">

                        <div className="flex items-center gap-4">

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white shadow-lg">
                            <FaCalendarAlt />
                          </div>

                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Event Date
                            </p>

                            <p className="mt-1 font-black text-blue-900">
                              {event.date || "Date not available"}
                            </p>
                          </div>

                        </div>

                        <h3 className="mt-7 text-2xl font-black text-gray-800 transition group-hover:text-blue-900">
                          {event.title}
                        </h3>

                        <p className="mt-4 leading-7 text-gray-500">
                          {event.description ||
                            event.content ||
                            "Event information available soon."}
                        </p>

                        <button
                          type="button"
                          className="mt-6 inline-flex items-center gap-3 font-black text-blue-900 transition hover:text-yellow-600"
                        >
                          View Event
                          <FaChevronRight className="text-xs transition group-hover:translate-x-1" />
                        </button>

                      </div>
                    </article>
                  ))}

                </div>
              )}

              {eventsError && (
                <p className="mt-5 text-center text-xs text-gray-400">
                  Showing available events while the server connection is
                  being checked.
                </p>
              )}

            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-14 text-center text-white shadow-2xl sm:px-12">

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-yellow-400/10" />

              <div className="relative z-10">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-blue-950 shadow-xl">
                  <FaBullhorn />
                </div>

                <p className="mt-6 text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
                  Stay Connected
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Never Miss an Important Update
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
                  Get the latest news, notices, events and important
                  announcements from Rolpa Polytechnic Institute.
                </p>

                <button
                  type="button"
                  onClick={exploreNews}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:-translate-y-1 hover:bg-white"
                >
                  View Latest News
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </button>

              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16">

            <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4">

              <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                <FaNewspaper className="mx-auto text-4xl text-blue-900" />
                <h3 className="mt-4 text-xl font-black text-blue-950">
                  Latest News
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Important institute updates
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                <FaBell className="mx-auto text-4xl text-yellow-500" />
                <h3 className="mt-4 text-xl font-black text-blue-950">
                  Notices
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Official announcements
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                <FaCalendarAlt className="mx-auto text-4xl text-green-600" />
                <h3 className="mt-4 text-xl font-black text-blue-950">
                  Events
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Programs and activities
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                <FaGraduationCap className="mx-auto text-4xl text-blue-700" />
                <h3 className="mt-4 text-xl font-black text-blue-950">
                  Academic
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                 Educational Information
                </p>
              </div>

            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default News;