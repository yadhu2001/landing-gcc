import React from 'react';
import { FormType } from '../types';

interface CourseHighlightsProps {
  onOpenModal: (type: FormType) => void;
}

const CourseHighlights: React.FC<CourseHighlightsProps> = ({ onOpenModal }) => {
  const highlights = [
    {
      img: '/images/GCC11.webp',
      title: 'Global Recognition',
      description: 'IMA USA certified program recognized worldwide by top MNCs and Big 4 firms',
      stats: '150+ Countries',
    },
    {
      img: '/images/GCC12.webp',
      title: 'Career Transformation',
      description: 'Average salary jump from ₹5 LPA to ₹15-25 LPA within 2 years of completion',
      stats: '300% Salary Hike',
    },
    {
      img: '/images/GCC13.webp',
      title: 'Industry Expert Faculty',
      description: 'Learn from CMA USA holders working in Fortune 500 companies',
      stats: '15+ Years Experience',
    },
    {
      img: '/images/GCC14.webp',
      title: 'Placement Support',
      description: '100% placement assistance with dedicated career counseling and interview prep',
      stats: '2000+ Placements',
    },
    {
      img: '/images/GCC15.webp',
      title: 'Fast Track Learning',
      description: 'Complete CMA USA in just 18 months with our proven methodology',
      stats: '50% Faster',
    },
    {
      img: '/images/GCC16.webp',
      title: 'Lifetime Support',
      description: 'Free re-coaching guarantee until you pass + lifetime doubt clearing',
      stats: 'Unlimited Access',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our CMA USA Program?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with our industry-leading CMA USA course
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <img
                src={h.img}
                alt={h.title}
                className="w-10 h-10 mb-4 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{h.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{h.description}</p>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                {h.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="brand-gradient rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Our Success Speaks for Itself</h3>
          <div className="grid sm:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-brand-secondary">1,00,000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-secondary">India&apos;s #1</div>
              <div className="text-blue-100">CMA USA Institute</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-secondary">₹25 LPA</div>
              <div className="text-blue-100">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-secondary">100%</div>
              <div className="text-blue-100">Placement Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section (button backgrounds updated to exact blue tones) */}
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don&apos;t miss this opportunity to join the elite group of CMA USA professionals.
            Limited seats available for the next batch starting soon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Left button: deep navy blue gradient */}
            <button
              onClick={() => onOpenModal('counselling')}
              className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:brightness-110 transition-all"
              style={{ backgroundImage: 'linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)' }}
            >
              Book Free Career Counselling
            </button>

            {/* Right button: lighter sky-blue gradient */}
            <button
              onClick={() => onOpenModal('brochure')}
              className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:brightness-110 transition-all"
              style={{ backgroundImage: 'linear-gradient(90deg, #49A5E3 0%, #2F8FD4 100%)' }}
            >
              Get Detailed Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
