// Name validation - blocks trivial names
export const validateName = (name: string): boolean => {
  const trimmedName = name.trim();
  
  // Check minimum length
  if (trimmedName.length < 2) return false;
  
  // Check for trivial names
  const trivialNames = ['test', 'testing', 'abc', 'xyz', 'demo', 'sample', 'user', 'name'];
  if (trivialNames.includes(trimmedName.toLowerCase())) return false;
  
  // Check for random characters (more than 2 consecutive same characters)
  if (/(.)\1{2,}/.test(trimmedName)) return false;
  
  // Check for only numbers
  if (/^\d+$/.test(trimmedName)) return false;
  
  // Check for valid name pattern (letters, spaces, hyphens, apostrophes)
  if (!/^[a-zA-Z\s\-']+$/.test(trimmedName)) return false;
  
  return true;
};

// Email validation with real-time check simulation
export const validateEmail = async (email: string): Promise<boolean> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) return false;
  
  // Simulate real-time email existence check
  // In production, this would call an email validation API
  const domain = email.split('@')[1];
  
  // Block obviously fake domains
  const fakeDomains = ['test.com', 'example.com', 'fake.com', 'temp.com'];
  if (fakeDomains.includes(domain)) return false;
  
  return true;
};

// Phone validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};