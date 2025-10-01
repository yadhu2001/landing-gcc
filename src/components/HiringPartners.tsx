import React from "react";

const HiringPartners: React.FC = () => {
  // Put the file base-names here exactly as they exist in /public/images (no extension).
  // We URL-encode the name so files with spaces like "IDBI BANK.webp" work.
  const partnerFiles = [
    "DELOITTE",
    "EY",
    "KPMG",
    "PWC",
    "IBM",
    "TATA",
    "INFOSYS",
    "WIPRO",
    "AMAZON",
    "HERO",
    "IDBI BANK",
    "FEDERAL BANK",
    // add more here anytime (e.g. "ACCENTURE", "COGNIZANT", "HCL", "CAPGEMINI") if you add those files
  ];

  const partners = partnerFiles.map((name) => ({
    name,
    logo: `/images/${encodeURIComponent(name)}.webp`,
  }));

  const statBlue = "#48A3E2";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Hiring Partners
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Our students are placed in top companies across the globe
          </p>
        </div>

        {/* Partners Grid (uses local WEBP images) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 md:max-h-12 max-w-[80%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-extrabold mb-1" style={{ color: statBlue }}>
                500+
              </div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-1" style={{ color: statBlue }}>
                95%
              </div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-1" style={{ color: statBlue }}>
                ₹25 LPA
              </div>
              <div className="text-gray-600">Highest Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
