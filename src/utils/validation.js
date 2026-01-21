// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.trim().length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return value && value.trim().length <= maxLength;
};

// Form error messages
export const errorMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must not exceed ${max} characters`,
};
