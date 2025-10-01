import React from "react";
import type { FormType } from "../types";

type Props = {
  onOpenModal: (type: FormType) => void;
};

const Hero: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="relative brand-gradient text-white overflow-hidden __web-inspector-hide-shortcut__">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6 bg-[#4CB7D9] text-white shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              IMA Approved • Big 4 Placements
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Launch Your{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Global Finance
              </span>
              Career with CMA
              <span className="ml-1">USA</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join 1,00,000+ professionals earning ₹15–25 LPA in top MNCs.
            </p>

            <p className="text-lg text-blue-100/90 font-semibold mb-8">
              India&apos;s #1 CMA USA Institute · 100% Placement Support
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-300">₹25 LPA</div>
                <div className="text-sm text-blue-100">Average Salary</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-300">India&apos;s #1</div>
                <div className="text-sm text-blue-100">CMA USA Institute</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-300">1L+</div>
                <div className="text-sm text-blue-100">Students</div>
              </div>
            </div>

            {/* CTAs (match reference colors) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105
                           bg-[#FFD43B] text-[#0B4F82] hover:brightness-105"
                onClick={() => onOpenModal("counselling")}
              >
                Schedule Free Counselling
              </button>
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105
                           bg-white text-[#0B4F82] border border-white/60 hover:bg-white/95"
                onClick={() => onOpenModal("brochure")}
              >
                Download Brochure
              </button>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-blue-200">
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">★★★★★</span>
                4.8/5 Rating
              </div>
              <div>• 10,000+ Reviews</div>
              <div>• Trusted by Big 4</div>
            </div>
          </div>

          {/* Right: Video & Stats */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gray-900 rounded-xl mb-6 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/lkAdabKpQXg"
                  title="CMA USA Course Preview"
                  className="w-full h-full rounded-xl"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">18 Months</div>
                  <div className="text-blue-200 text-sm">Course Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Live Classes</div>
                  <div className="text-blue-200 text-sm">Interactive Learning</div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
