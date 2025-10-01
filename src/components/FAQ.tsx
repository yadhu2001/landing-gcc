import React from "react";
import type { FormType } from "../types"; // use the shared FormType

type FAQItem = { q: string; a: string };

const items: FAQItem[] = [
  {
    q: "What is CMA USA?",
    a: "CMA USA (Certified Management Accountant) is a globally recognized professional certification offered by the Institute of Management Accountants (IMA), USA. It is designed for finance and accounting professionals who work in management accounting or financial management.",
  },
  {
    q: "How many parts are there in CMA USA exam?",
    a: "The CMA USA exam has two parts: Part 1 (Financial Planning, Performance, and Analytics) and Part 2 (Strategic Financial Management).",
  },
  {
    q: "What is the exam pattern for CMA USA?",
    a: "Each part consists of 100 multiple-choice questions and 2 essay scenarios. Total testing time is 4 hours per part (3 hours MCQs + 1 hour essays).",
  },
  {
    q: "What is the validity of CMA USA certification?",
    a: "Once certified and as long as you maintain IMA membership and meet CPE (Continuing Professional Education) requirements, the certification remains valid.",
  },
  {
    q: "What are the career opportunities after CMA USA?",
    a: "Typical roles include Financial Analyst, Cost Accountant, Management Accountant, FP&A Analyst, Finance Manager, and Controller across industries and Big 4 firms.",
  },
  {
    q: "What is the average salary after CMA USA in India?",
    a: "Compensation varies by experience and city; many CMA professionals see significant uplift. Figures often cited are competitive with mid-to-senior finance roles.",
  },
  {
    q: "How is CMA USA different from other finance certifications?",
    a: "CMA emphasizes management accounting, analytics, and strategic decision-making inside organizations, complementing public-accounting or investment-focused credentials.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Card({
  item,
  defaultOpen = false,
}: {
  item: FAQItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

type FAQProps = {
  onOpenModal: (type: FormType) => void;
};

const FAQ: React.FC<FAQProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about CMA USA and our program
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4 mb-12">
          <Card item={items[0]} defaultOpen />
          {items.slice(1).map((it, i) => (
            <Card key={i} item={it} />
          ))}
        </div>

        {/* CTA panel */}
        <div
          className="rounded-2xl p-8 text-center text-white shadow-md"
          style={{
            backgroundImage: "linear-gradient(180deg, #56B3E8 0%, #2F8FD4 100%)",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our career counselors are here to help you make the right decision for your future. Get
            personalized guidance based on your background and career goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: "#FFFFFF", color: "#0B4F82" }}
              onClick={() => onOpenModal("counselling")}
              type="button"
            >
              Schedule Free Consultation
            </button>

            <button
              className="px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform border-2 border-white/20"
              style={{
                backgroundImage: "linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)",
                color: "#FFFFFF",
              }}
              onClick={() => onOpenModal("brochure")}
              type="button"
            >
              Download Detailed Brochure
            </button>
          </div>

          {/* Two centered rows with icons – neat spacing like reference */}
          <div className="mt-6 space-y-2">
            <div className="inline-flex items-center justify-center gap-2 text-white/90 text-sm leading-6">
              <img
                src="/images/GCC10.webp"
                alt=""
                className="w-[18px] h-[18px] object-contain"
                loading="lazy"
              />
              <span>Get instant answers to your questions</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 text-white/90 text-sm leading-6">
              <img
                src="/images/GCC9.webp"
                alt=""
                className="w-[18px] h-[18px] object-contain"
                loading="lazy"
              />
              <span>Speak with our career experts</span>
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="inline-flex items-center gap-2 text-gray-700">
              <img
                src="/images/GCC8.webp"
                alt=""
                className="w-[18px] h-[18px] object-contain"
                loading="lazy"
              />
              <span>info@lakshyacommerce.com</span>
            </div>
            <div className="inline-flex items-center gap-2 text-gray-700">
              <img
                src="/images/GCC17.webp"
                alt=""
                className="w-[18px] h-[18px] object-contain"
                loading="lazy"
              />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
