import { useState } from 'react';
import Hero from './components/Hero';
import CourseHighlights from './components/CourseHighlights';
import SyllabusOverview from './components/SyllabusOverview';
import HiringPartners from './components/HiringPartners';
import Certificate from './components/Certificate';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StickyMobileCTA from './components/StickyMobileCTA';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import { FormType } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('counselling');

  const openModal = (type: FormType) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Ticker (blue) */}
      <div className="text-white py-2 overflow-hidden bg-gradient-to-r from-[#48A3E2] to-[#2F8FD4]">
        <div className="ticker whitespace-nowrap">
          <span className="text-sm font-semibold">
            🚨 Application deadline on 30th September. Apply soon to receive scholarships 🎓
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/Lg.png"
                alt="Lakshya Commerce"
                className="h-12 sm:h-14 w-auto"   // enlarged logo
              />
            </div>
            <button
              onClick={() => openModal('counselling')}
              className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors text-sm"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero onOpenModal={openModal} />
        <CourseHighlights onOpenModal={openModal} />
        <SyllabusOverview onOpenModal={openModal} />
        <HiringPartners />
        <Certificate />
        <Testimonials />
        <FAQ onOpenModal={openModal} />
      </main>

      {/* Sticky Mobile CTAs */}
      <StickyMobileCTA onOpenModal={openModal} />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm formType={formType} onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
