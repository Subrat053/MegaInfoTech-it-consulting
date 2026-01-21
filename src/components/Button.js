import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled = false, ...props }) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'cosmic-button disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-mega-navy/80 text-white hover:bg-accent-cyan/20 border border-accent-cyan/30 hover:border-accent-cyan shadow-glow hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'text-accent-cyan hover:bg-accent-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
