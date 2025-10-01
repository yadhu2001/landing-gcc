import React, { useState, useEffect } from 'react';
import { FormType, FormData } from '../types';
import { validateName, validateEmail, validatePhone } from '../utils/validation';
import { countries, getCountryFromIP } from '../utils/countries';

interface ContactFormProps {
  formType: FormType;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formType, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    workExperience: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValidating, setEmailValidating] = useState(false);

  useEffect(() => {
    const defaultCountry = getCountryFromIP();
    setFormData(prev => ({ ...prev, countryCode: defaultCountry.dialCode }));
  }, []);

  // Track form submission event
  const trackFormSubmit = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formType,
      });
    }
  };

  const getFormTitle = () => {
    if (step === 1) {
      return 'Enter Your Phone Number';
    }
    switch (formType) {
      case 'counselling':
        return 'Schedule Free Counselling';
      case 'brochure':
        return 'Download Brochure';
      case 'syllabus':
        return 'Download Complete Syllabus';
      default:
        return 'Get Started';
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleEmailChange = async (email: string) => {
    handleInputChange('email', email);
    
    if (email.length > 5) {
      setEmailValidating(true);
      const isValid = await validateEmail(email);
      setEmailValidating(false);
      
      if (!isValid) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      }
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = async (): Promise<boolean> => {
    const newErrors: Partial<FormData> = {};

    // Name validation
    if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name';
    }

    // Email validation
    if (!await validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Work experience validation
    if (!formData.workExperience) {
      newErrors.workExperience = 'Please select your work experience';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!await validateForm()) return;

    setIsSubmitting(true);
    trackFormSubmit();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Thank you! Your ${formType} request has been submitted successfully.`);
      onClose();
    }, 2000);
  };

  const workExperienceOptions = [
    'Class 11 Student',
    'Class 12 Student',
    'Graduate and Above - No Experience',
    '0-1 Yr',
    '2-5 Yr',
    '5+ Yrs'
  ];

  if (step === 1) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{getFormTitle()}</h2>
          <p className="text-gray-600">We'll send you course details and career guidance</p>
        </div>

        <form onSubmit={handleStep1Submit} className="space-y-4">
          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <div className="flex">
              <select
                value={formData.countryCode}
                onChange={(e) => handleInputChange('countryCode', e.target.value)}
                className="px-3 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-primary border-gray-300 bg-gray-50"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.dialCode}>
                    {country.flag} {country.dialCode}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`flex-1 px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter phone number"
                autoFocus
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <button
          onClick={() => setStep(1)}
          className="text-brand-primary hover:text-brand-primary-light mb-2 text-sm flex items-center"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{getFormTitle()}</h2>
        <p className="text-gray-600">Fill in your details and we'll get back to you shortly</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
            autoFocus
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {emailValidating && (
              <div className="absolute right-3 top-2.5">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-primary"></div>
              </div>
            )}
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone Field (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <div className="flex">
            <select
              value={formData.countryCode}
              onChange={(e) => handleInputChange('countryCode', e.target.value)}
              className="px-3 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-primary border-gray-300 bg-gray-50"
              disabled
            >
              {countries.map((country) => (
                <option key={country.code} value={country.dialCode}>
                  {country.flag} {country.dialCode}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={formData.phone}
              className="flex-1 px-3 py-2 border rounded-r-lg border-gray-300 bg-gray-50"
              placeholder="Enter phone number"
              readOnly
            />
          </div>
        </div>

        {/* Work Experience Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Experience *
          </label>
          <select
            value={formData.workExperience}
            onChange={(e) => handleInputChange('workExperience', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.workExperience ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select your experience level</option>
            {workExperienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.workExperience && <p className="text-red-500 text-xs mt-1">{errors.workExperience}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Submitting...
            </div>
          ) : (
            getFormTitle()
          )}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default ContactForm;