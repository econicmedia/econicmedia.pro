
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-neon rounded-lg animate-pulse-glow"></div>
      <div className="absolute inset-[2px] bg-background rounded-lg flex items-center justify-center text-xl font-bold">
        <span className="text-gradient">E</span>
      </div>
    </div>
  );
};

export default Logo;
