import React from 'react';
import { FormType } from '../types';

interface StickyMobileCTAProps {
  onOpenModal: (type: FormType) => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="flex">
          <button
            onClick={() => onOpenModal('counselling')}
            className="flex-1 bg-gradient-to-r from-brand-secondary to-brand-yellow text-brand-primary py-4 px-4 font-bold text-center hover:from-brand-yellow hover:to-brand-secondary-dark transition-all duration-200"
          >
            <div className="flex items-center justify-center">
              <span className="mr-2">📞</span>
              <span className="text-sm">Schedule Free Counselling</span>
            </div>
          </button>
          <button
            onClick={() => onOpenModal('brochure')}
            className="flex-1 bg-brand-primary text-white py-4 px-4 font-bold text-center hover:bg-brand-primary-light transition-all duration-200"
          >
            <div className="flex items-center justify-center">
              <span className="mr-2">📥</span>
              <span className="text-sm">Download Brochure</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;