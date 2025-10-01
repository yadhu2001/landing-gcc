import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Financial Analyst at Deloitte",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "CMA USA completely transformed my career. I went from ₹8 LPA to ₹22 LPA within 18 months of completing the course. The faculty support was exceptional!",
      salary: "₹8 LPA → ₹22 LPA",
      rating: 5,
    },
    {
      name: "Rahul Gupta",
      role: "Finance Manager at EY",
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "The structured approach and practical case studies helped me crack interviews at Big 4. Now I’m working with global clients and earning 3x my previous salary.",
      salary: "₹6 LPA → ₹18 LPA",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Cost Accountant at KPMG",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "Best investment I made for my career. The placement support team helped me land my dream job. The course content is updated and industry-relevant.",
      salary: "₹5 LPA → ₹16 LPA",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Financial Controller at PwC",
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "From a small-town CA to working with Fortune 500 companies — CMA USA opened doors I never imagined. The global recognition is incredible.",
      salary: "₹7 LPA → ₹25 LPA",
      rating: 5,
    },
  ];

  // Brand tones tuned to your reference
  const statBlue = "#48A3E2";
  const chipBg = "#EAF7EF";
  const chipBorder = "#BDE7CE";
  const chipText = "#1F9254";
  const starYellow = "#F8D24A";

  // video ids from your links (to embed)
  const videos = [
    { id: "d7kITb3vIZo", title: "Success Story #1" },
    { id: "wy12xE732eY", title: "Success Story #2" },
    { id: "lzVWJPGx4-s", title: "Success Story #3" },
    { id: "wy12xE732eY", title: "Success Story #4" },
  ];

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(180deg, #EEF5FF 0%, #EAF2FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Success Stories from Our Alumni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with
            CMA USA
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: starYellow }} className="text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">“{t.content}”</p>

              {/* Salary Growth chip */}
              <div
                className="rounded-lg p-3 mb-5 border"
                style={{ backgroundColor: chipBg, borderColor: chipBorder }}
              >
                <div className="text-sm font-semibold mb-0.5" style={{ color: chipText }}>
                  Salary Growth
                </div>
                <div className="text-lg font-extrabold" style={{ color: chipText }}>
                  {t.salary}
                </div>
              </div>

              {/* Person */}
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Our Track Record Speaks for Itself
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                1,00,000+
              </div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                ₹18 LPA
              </div>
              <div className="text-gray-600">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                India’s #1
              </div>
              <div className="text-gray-600">CMA USA Institute</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                500+
              </div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>

        {/* Watch Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Watch Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-md"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
