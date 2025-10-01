import React from "react";
import { FormType } from "../types";

interface SyllabusOverviewProps {
  onOpenModal: (type: FormType) => void;
}

type Feature = {
  iconSrc: string; // image path from /public/images
  title: string;
  description: string;
};

const SyllabusOverview: React.FC<SyllabusOverviewProps> = ({ onOpenModal }) => {
  const parts = [
    {
      title: "Part 1: Financial Planning & Analysis",
      duration: "6 Months",
      topics: [
        "External Financial Reporting Decisions",
        "Planning, Budgeting and Forecasting",
        "Performance Management",
        "Cost Management",
        "Internal Controls",
      ],
      difficulty: "Foundation Level",
      headerFrom: "#48A3E2",
      headerTo: "#2F8FD4",
    },
    {
      title: "Part 2: Strategic Financial Management",
      duration: "6 Months",
      topics: [
        "Financial Statement Analysis",
        "Corporate Finance",
        "Decision Analysis",
        "Risk Management",
        "Investment Decisions",
      ],
      difficulty: "Advanced Level",
      headerFrom: "#0B4F82",
      headerTo: "#0A3E67",
    },
  ];

  // Images live in /public/images
  const keyFeatures: Feature[] = [
    { iconSrc: "/images/GCC2.webp", title: "Comprehensive Study Material", description: "Latest IMA curriculum with practice questions" },
    { iconSrc: "/images/GCC3.webp", title: "Live Interactive Classes", description: "200+ hours of live sessions with recordings" },
    { iconSrc: "/images/GCC4.webp", title: "Mock Exams & Practice Tests", description: "50+ practice tests with detailed solutions" },
    { iconSrc: "/images/GCC5.webp", title: "Expert Mentorship", description: "Personal guidance from CMA USA professionals" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">CMA USA Syllabus Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Master both parts of CMA USA with our structured 18-month program designed for working professionals
          </p>

          <button
            onClick={() => onOpenModal("syllabus")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg hover:brightness-110 transition-all text-white"
            style={{ backgroundImage: "linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)" }}
          >
            <img src="/images/GCC6.webp" alt="" className="w-5 h-5 object-contain" loading="lazy" />
            Download Complete Syllabus
          </button>
        </div>

        {/* Parts Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {parts.map((part, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="text-white p-6"
                style={{ backgroundImage: `linear-gradient(90deg, ${part.headerFrom} 0%, ${part.headerTo} 100%)` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight">{part.title}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">{part.duration}</span>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {part.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Topics Covered:</h4>
                <ul className="space-y-2">
                  {part.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Course Features (images only) */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What&apos;s Included in Your CMA USA Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((f, i) => (
              <div key={i} className="text-center">
                <img src={f.iconSrc} alt={f.title} className="w-10 h-10 mx-auto mb-3 object-contain" loading="lazy" />
                <h4 className="font-semibold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path — reduced size */}
        <div
          className="rounded-2xl p-6 md:p-8 lg:p-9 mb-10 shadow-sm"
          style={{ backgroundImage: "linear-gradient(180deg, #F1F8FE 0%, #E9F4FD 100%)" }}
        >
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-7">
            Your 18-Month Learning Journey
          </h3>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Step 1 */}
            <div className="text-center px-2">
              <div
                className="w-16 h-16 md:w-18 md:h-18 rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm"
                style={{ backgroundColor: "#2F8FD4" }}
              >
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5">
                Foundation (Months 1–6)
              </h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Master Part 1 with comprehensive study material and live classes
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-2">
              <div
                className="w-16 h-16 md:w-18 md:h-18 rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm"
                style={{ backgroundColor: "#2F8FD4" }}
              >
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5">
                Advanced (Months 7–12)
              </h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Tackle Part 2 with strategic financial management concepts
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-2">
              <div
                className="w-16 h-16 md:w-18 md:h-18 rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm"
                style={{ backgroundColor: "#2F8FD4" }}
              >
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5">
                Mastery (Months 13–18)
              </h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Intensive practice, mock exams, and career placement support
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section (both blue) */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to See the Complete Curriculum?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get detailed syllabus, study plan, exam pattern, and career roadmap. Download our comprehensive guide now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenModal("syllabus")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg hover:brightness-110 transition-all text-white"
              style={{ backgroundImage: "linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)" }}
            >
              <img src="/images/GCC6.webp" alt="" className="w-5 h-5 object-contain" loading="lazy" />
              Download Complete Syllabus
            </button>

            <button
              onClick={() => onOpenModal("counselling")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold shadow-lg hover:brightness-110 transition text-white"
              style={{ backgroundImage: "linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)" }}
            >
              <img src="/images/GCC7.webp" alt="" className="w-5 h-5 object-contain" loading="lazy" />
              Talk to Course Advisor
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <span className="text-[#0B4F82] mr-1">🔒</span>
              No spam, just valuable career guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusOverview;
