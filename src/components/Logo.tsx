import React from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", alt = "Econic Media Logo" }) => {
  return (
    <img
      src="/logo.png" // Path to the logo in the public folder
      alt={alt}
      className={className}
    />
  );
};

export default Logo;
