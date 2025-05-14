import React from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "h-8 w-auto", 
  alt = "Econic Media Logo"
}) => {
  return (
    <div className="flex items-center gap-2">
      {/* Square E Logo with gradient background */}
      <div 
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #2dd4bf 100%)",
          borderRadius: "10px",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          fontFamily: "Arial, sans-serif",
        }}
        aria-hidden="true"
      >
        E
      </div>
      
      {/* Text part of the logo */}
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Econic Media
      </span>
    </div>
  );
};

export default Logo;
